import { useEffect, useState } from "react";

function useVideos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchVideos() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch video data");
        }

        const data = await response.json();

        const videoData = data.slice(0, 10).map((video) => ({
          id: video.id,
          title: video.title,
        }));

        setVideos(videoData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  return {
    videos,
    loading,
    error,
  };
}

export default useVideos;
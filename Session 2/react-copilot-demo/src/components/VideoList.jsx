// import useVideos from "./useVideos";
import useVideos from "../hooks/useVideos";

function VideoList() {
  const { videos, loading, error } = useVideos();

  if (loading) {
    return <p>Loading videos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>YouTube Videos</h2>
      {videos.map((video) => (
        <p key={video.id}>{video.title}</p>
      ))}
    </div>
  );
}

export default VideoList;


/*
Info: The code snippet provided is a React component that fetches and displays a list of YouTube videos. It uses a custom hook `useVideos` to manage the fetching logic. The component handles loading and error states, displaying appropriate messages when necessary. When the data is successfully fetched, it maps over the list of videos and renders their titles in a paragraph format.

Error: The AI made a mistake in the import statement for `useVideos`. The correct path should be `../hooks/useVideos` instead of `./useVideos`. This correction ensures that the component can properly import and use the custom hook to fetch video data.

*/
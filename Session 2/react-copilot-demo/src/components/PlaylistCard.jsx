function PlaylistCard({ playlistName, creator, songCount }) {
  return (
    <article className="playlist-card">
      <h2>{playlistName}</h2>
      <p>Created by: {creator}</p>
      <p>{songCount} songs</p>
    </article>
  );
}

export default PlaylistCard;

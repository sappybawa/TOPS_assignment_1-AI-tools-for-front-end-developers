import './PlaylistCard.css'

function PlaylistCard({ playlistName, creator, songCount }) {
  return (
    <article className="playlist-card">
      <div className="playlist-card__art" aria-hidden="true">
        <span>♫</span>
      </div>
      <div className="playlist-card__content">
        <h2 className="playlist-card__title">{playlistName}</h2>
        <p className="playlist-card__creator">Created by {creator}</p>
        <p className="playlist-card__count">
          {songCount} {songCount === 1 ? 'song' : 'songs'}
        </p>
      </div>
    </article>
  )
}

export default PlaylistCard
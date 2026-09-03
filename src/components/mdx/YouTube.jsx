// Server component on purpose: the MDX body is compiled on the server, and any
// component that called t() would follow the chrome language while the prose
// around it follows the post language. All visible text comes from props the
// author writes in the post's own language.
export default function YouTube({ id, title }) {
  return (
    <div className="video-wrapper">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

import { useParams, Link } from 'react-router-dom'
import posts from '../shared/posts.js'

export default function PostDetail(){
  const { id } = useParams()
  const post = posts.find(p => String(p.id) === id)

  if (!post) {
    return <div className="alert alert-warning">Post no encontrado <Link to="/posts">Volver</Link></div>
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link className="btn btn-outline-secondary" to="/posts">Volver</Link>
    </div>
  )
}

import { useParams, Link } from 'react-router-dom'
import posts from '../shared/posts.js'
import { useState } from 'react'
import './PostDetail.css'

export default function PostDetail() {
  const { id } = useParams()
  const post = posts.find(p => String(p.id) === id)

  // Estado para mostrar el mensaje emergente
  const [showMessage, setShowMessage] = useState(false)

  if (!post) {
    return (
      <div className="alert alert-warning">
        Post no encontrado. <Link to="/posts">Volver</Link>
      </div>
    )
  }

  // Función para manejar el click en el botón de añadir al carrito
  const handleAddToCart = () => {
    setShowMessage(true)
    setTimeout(() => {
      setShowMessage(false)
    }, 2000) // El mensaje desaparece después de 2 segundos
  }

  return (
    <div className="post-detail-container">
      <div className="post-header">
        <h2>{post.title}</h2>
        <p className="post-category">{post.category}</p>
      </div>
      
      <div className="post-image-container">
        <img src={post.image} alt={post.title} className="post-image"/>
      </div>

      <div className="post-description">
        <p>{post.description}</p>
      </div>

      <div className="post-price">
        <h3>Precio: ${post.price.toLocaleString()}</h3>
      </div>

      <div className="post-content">
        <h4>Detalles adicionales</h4>
        <p>{post.description}</p>
        <div className="ingredients">
          <h5>Ingredientes</h5>
          <ul>
            {post.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="preparation-time">
          <h5>Tiempo de preparación</h5>
          <p>20 minutos</p>
        </div>
      </div>

      {/* Mensaje emergente cerca del botón */}
      {showMessage && (
        <div className="alert alert-success added-message">
          ¡Añadido al carrito!
        </div>
      )}

      <div className="post-footer">
        <Link className="btn btn-primary" to="/posts">Volver a la lista</Link>
        <div className="btn-container">
          <button className="btn btn-add-to-cart" onClick={handleAddToCart}>
            Añadir al carrito
          </button>
          {/* Mensaje emergente ubicado cerca del botón */}
          {showMessage && (
            <div className="alert alert-success added-message">
              ¡Añadido al carrito!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

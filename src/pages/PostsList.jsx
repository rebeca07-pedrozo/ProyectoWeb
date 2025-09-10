
import { Link, useSearchParams } from "react-router-dom"
import { useMemo } from "react"
import posts from "../shared/posts.js"
import "./PostsList.css"

export default function PostsList() {
  const [sp, setSp] = useSearchParams()
  const q = sp.get("q") || ""

  // Filtramos por título o descripción
  const filtered = useMemo(() => {
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q.toLowerCase()) ||
        p.description.toLowerCase().includes(q.toLowerCase())
    )
  }, [q])

  // Agrupamos por categoría
  const grouped = useMemo(() => {
    return filtered.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = []
      acc[item.category].push(item)
      return acc
    }, {})
  }, [filtered])

  function onSearch(e) {
    const val = e.target.value
    const next = new URLSearchParams(sp)
    if (val) next.set("q", val)
    else next.delete("q")
    setSp(next, { replace: true })
  }

  return (
    <div className="manjares-container">
      <h1 className="manjares-title">🍖Manjares Prehistóricos</h1>
      <p className="manjares-subtitle">
        Atrapa estos platillos antes que se extingan 🦕🔥
      </p>

      {/* Buscador */}
      <input
        className="manjares-search"
        placeholder="Buscar manjar..."
        value={q}
        onChange={onSearch}
      />

      {/* Render por categoría */}
      {Object.keys(grouped).map((category) => (
        <div key={category} className="manjares-category">
          <h2 className="category-title"> {category}</h2>
          <div className="manjares-grid">
            {grouped[category].map((p) => (
              <div className="manjar-card" key={p.id}>
                <img src={p.image} alt={p.title} className="manjar-img" />
                <div className="manjar-info">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <span className="manjar-price">
                    ${p.price.toLocaleString()}
                  </span>
                  <Link to={`/posts/${p.id}`} className="manjar-btn">
                    Ver más
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <p className="manjares-empty">
          😢 No encontramos manjares con ese nombre
        </p>
      )}
    </div>
  )
}

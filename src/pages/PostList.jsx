import { Link, useSearchParams } from 'react-router-dom'
import { useMemo } from 'react'
import posts from '../shared/posts.js'

export default function PostsList(){
  const [sp, setSp] = useSearchParams()
  const q = sp.get('q') || ''

  const filtered = useMemo(() => {
    return posts.filter(p => p.title.toLowerCase().includes(q.toLowerCase()))
  }, [q])

  function onSearch(e){
    const val = e.target.value
    const next = new URLSearchParams(sp)
    if (val) next.set('q', val)
    else next.delete('q')
    setSp(next, { replace: true })
  }

  return (
    <>
      <input className="form-control mb-3" placeholder="Buscar posts..." value={q} onChange={onSearch}/>
      <ul className="list-group">
        {filtered.map(p => (
          <li className="list-group-item" key={p.id}>
            <Link to={`/posts/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
      {filtered.length === 0 && <p className="text-muted">No hay resultados</p>}
    </>
  )
}

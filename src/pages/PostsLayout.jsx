import { Outlet } from 'react-router-dom'
export default function PostsLayout(){
  return (
    <div>
      <h1 className="h3 mb-3">Carta</h1>
      <Outlet/>
    </div>
  )
}

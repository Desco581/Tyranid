import { Link } from 'react-router-dom'

function MiniaturaCard({ id, nombre, categoria, cantidad, puntos }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text mb-1">{categoria}</p>
        <p className="card-text mb-1">{cantidad} figura(s) · {puntos} pts</p>
        <Link to={`/miniatura/${id}`} className="btn btn-primary">Ver ficha</Link>
      </div>
    </div>
  )
}

export default MiniaturaCard
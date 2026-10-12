import { useParams, Link } from 'react-router-dom'

function Ficha({ lista }) {
  const { id } = useParams()
  const m = lista.find((x) => x.id === Number(id))

  if (!m) {
    return (
      <div className="container mt-4">
        <p>No se encontró la miniatura.</p>
        <Link to="/coleccion">Volver a la colección</Link>
      </div>
    )
  }

  return (
    <div className="container mt-4">
      <h1>{m.nombre}</h1>
      <p>Categoría: {m.categoria}</p>
      <p>Figuras: {m.cantidad}</p>
      <p>Puntos: {m.puntos}</p>
      {m.variante && <p>Variante: {m.variante}</p>}
      {m.esquemaColor && <p>Esquema de color: {m.esquemaColor}</p>}
      <Link to="/coleccion">Volver a la colección</Link>
    </div>
  )
}

export default Ficha
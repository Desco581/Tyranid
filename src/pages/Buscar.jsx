import { useState } from 'react'
import { Link } from 'react-router-dom'

function Buscar({ lista }) {
  const [texto, setTexto] = useState('')

  const resultados = lista.filter((m) =>
    `${m.nombre} ${m.categoria}`.toLowerCase().includes(texto.toLowerCase()))

  return (
    <div className="container mt-4">
      <Link to="/">← Menú</Link>
      <h1 className="mb-3">Buscar</h1>

      <label htmlFor="busqueda" className="form-label">Nombre o unidad</label>
      <input
        id="busqueda"
        type="text"
        className="form-control mb-3"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <p className="text-muted">{resultados.length} resultado(s)</p>

      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Figuras</th>
              <th>Puntos</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {resultados.map((m) => (
              <tr key={m.id}>
                <td>{m.nombre}</td>
                <td>{m.categoria}</td>
                <td>{m.cantidad}</td>
                <td>{m.puntos}</td>
                <td><Link to={`/miniatura/${m.id}`}>Ver ficha</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Buscar
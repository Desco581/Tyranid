import { Link } from 'react-router-dom'

function Ejercitos({ lista, ejercitos }) {
  const puntosDe = (e) =>
    lista
      .filter((m) => e.miniaturas.includes(m.id))
      .reduce((suma, m) => suma + m.puntos, 0)

  return (
    <div className="container mt-4">
      <Link to="/">← Menú</Link>
      <h1 className="mb-3">Mis ejércitos</h1>

      {ejercitos.length === 0 ? (
        <p>
          Aún no tienes ejércitos. <Link to="/ejercitos/nuevo">Crea el primero</Link>.
        </p>
      ) : (
        <ul className="list-group">
          {ejercitos.map((e) => (
            <li key={e.id} className="list-group-item d-flex justify-content-between">
              <Link to={`/ejercitos/${e.id}`}>{e.nombre}</Link>
              <span className="text-muted">
                {e.miniaturas.length} miniaturas · {puntosDe(e)} / {e.limite} pts
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Ejercitos
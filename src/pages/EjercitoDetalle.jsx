import { useParams, Link } from 'react-router-dom'

function EjercitoDetalle({ lista, ejercitos }) {
  const { id } = useParams()
  const ejercito = ejercitos.find((e) => e.id === Number(id))

  if (!ejercito) {
    return (
      <div className="container mt-4">
        <p>No se encontró el ejército.</p>
        <Link to="/ejercitos">Volver a mis ejércitos</Link>
      </div>
    )
  }

  const unidades = lista.filter((m) => ejercito.miniaturas.includes(m.id))
  const total = unidades.reduce((suma, m) => suma + m.puntos, 0)
  const figuras = unidades.reduce((suma, m) => suma + (m.cantidad || 1), 0)
  const porcentaje = Math.min(100, (total / ejercito.limite) * 100)
  const excedido = total > ejercito.limite

  return (
    <div className="container mt-4">
      <Link to="/ejercitos">← Mis ejércitos</Link>
      <h1 className="mb-1">{ejercito.nombre}</h1>
      <p className="text-muted">
        {unidades.length} unidades · {figuras} figuras
      </p>

      <p className="mb-1">
        <strong>{total}</strong> / {ejercito.limite} puntos
        {excedido && <span className="text-danger"> (excede el límite)</span>}
      </p>
      <div className="progress mb-4">
        <div
          className={`progress-bar ${excedido ? 'bg-danger' : 'bg-success'}`}
          style={{ width: `${porcentaje}%` }}
        />
      </div>

      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Unidad</th>
              <th>Categoría</th>
              <th>Figuras</th>
              <th>Puntos</th>
            </tr>
          </thead>
          <tbody>
            {unidades.map((m) => (
              <tr key={m.id}>
                <td><Link to={`/miniatura/${m.id}`}>{m.nombre}</Link></td>
                <td>{m.categoria}</td>
                <td>{m.cantidad}</td>
                <td>{m.puntos}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={3}>Total</th>
              <th>{total}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default EjercitoDetalle
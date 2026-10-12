import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LIMITES = [1000, 2000, 3000]

function CrearEjercito({ lista, onGuardar }) {
  const navigate = useNavigate()
  const [nombre, setNombre] = useState('')
  const [limite, setLimite] = useState(1000)
  const [seleccion, setSeleccion] = useState([])
  const [error, setError] = useState('')

  const elegidas = lista.filter((m) => seleccion.includes(m.id))
  const disponibles = lista.filter((m) => !seleccion.includes(m.id))
  const total = elegidas.reduce((suma, m) => suma + m.puntos, 0)
  const excedido = total > limite
  const porcentaje = Math.min(100, (total / limite) * 100)

  const agregar = (id) => setSeleccion([...seleccion, id])
  const quitar = (id) => setSeleccion(seleccion.filter((x) => x !== id))

  const guardar = (event) => {
    event.preventDefault()
    if (nombre.trim() === '') {
      setError('Ponle un nombre al ejército')
      return
    }
    if (elegidas.length === 0) {
      setError('Agrega al menos una miniatura')
      return
    }
    onGuardar({ nombre: nombre.trim(), limite, miniaturas: seleccion })
    navigate('/ejercitos')
  }

  return (
    <div className="container mt-4">
      <Link to="/">← Menú</Link>
      <h1 className="mb-3">Crear ejército</h1>

      <form onSubmit={guardar}>
        <div className="row g-3 mb-3">
          <div className="col-12 col-md-8">
            <label htmlFor="nombre-ejercito" className="form-label">Nombre del ejército</label>
            <input id="nombre-ejercito" type="text" className="form-control"
              value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div className="col-12 col-md-4">
            <label htmlFor="limite" className="form-label">Límite de puntos</label>
            <select id="limite" className="form-select" value={limite}
              onChange={(e) => setLimite(Number(e.target.value))}>
              {LIMITES.map((l) => (
                <option key={l} value={l}>{l} puntos</option>
              ))}
            </select>
          </div>
        </div>

        <p className="mb-1">
          <strong>{total}</strong> / {limite} puntos
          {excedido && <span className="text-danger"> (te pasaste del límite)</span>}
        </p>
        <div className="progress mb-4">
          <div
            className={`progress-bar ${excedido ? 'bg-danger' : 'bg-success'}`}
            style={{ width: `${porcentaje}%` }}
          />
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-6">
            <h2 className="h5">Disponibles</h2>
            <ul className="list-group">
              {disponibles.map((m) => (
                <li key={m.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>{m.nombre} <small className="text-muted">{m.puntos} pts</small></span>
                  <button type="button" className="btn btn-sm btn-outline-primary"
                    disabled={total + m.puntos > limite}
                    onClick={() => agregar(m.id)}>
                    Agregar
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-md-6">
            <h2 className="h5">En el ejército</h2>
            <ul className="list-group">
              {elegidas.map((m) => (
                <li key={m.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>{m.nombre} <small className="text-muted">{m.puntos} pts</small></span>
                  <button type="button" className="btn btn-sm btn-outline-danger"
                    onClick={() => quitar(m.id)}>
                    Quitar
                  </button>
                </li>
              ))}
              {elegidas.length === 0 && (
                <li className="list-group-item text-muted">Todavía no agregas miniaturas.</li>
              )}
            </ul>
          </div>
        </div>

        {error && <p className="text-danger mt-3 mb-0">{error}</p>}
        <button type="submit" className="btn btn-success mt-3" disabled={excedido}>
          Guardar ejército
        </button>
      </form>
    </div>
  )
}

export default CrearEjercito
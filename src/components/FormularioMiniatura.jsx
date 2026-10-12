import { useState } from 'react'

function FormularioMiniatura({ onAgregar }) {
  const [nombre, setNombre] = useState('')
  const [unidad, setUnidad] = useState('')
  const [puntos, setPuntos] = useState('')
  const [fecha, setFecha] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (nombre.trim() === '') {
      setError('El nombre es obligatorio')
      return
    }
    if (Number(puntos) < 0) {
      setError('Los puntos no pueden ser negativos')
      return
    }

    setError('')
    onAgregar({
      nombre: nombre.trim(),
      unidad: unidad.trim(),
      puntos: Number(puntos) || 0,
      fecha,
    })
    setNombre('')
    setUnidad('')
    setPuntos('')
    setFecha('')
  }

  return (
    <form onSubmit={handleSubmit} className="row g-3 mb-4">
      <div className="col-12 col-md-6">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input id="nombre" type="text" className="form-control"
          value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="unidad" className="form-label">Unidad</label>
        <input id="unidad" type="text" className="form-control"
          value={unidad} onChange={(e) => setUnidad(e.target.value)} />
      </div>
      <div className="col-6">
        <label htmlFor="puntos" className="form-label">Puntos</label>
        <input id="puntos" type="number" className="form-control"
          value={puntos} onChange={(e) => setPuntos(e.target.value)} />
      </div>
      <div className="col-6">
        <label htmlFor="fecha" className="form-label">Fecha de término</label>
        <input id="fecha" type="date" className="form-control"
          value={fecha} onChange={(e) => setFecha(e.target.value)} />
      </div>
      {error && <p className="text-danger mb-0">{error}</p>}
      <div className="col-12">
        <button type="submit" className="btn btn-success">Agregar miniatura</button>
      </div>
    </form>
  )
}

export default FormularioMiniatura
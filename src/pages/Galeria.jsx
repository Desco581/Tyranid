import MiniaturaCard from '../components/MiniaturaCard'
import FormularioMiniatura from '../components/FormularioMiniatura'

function Galeria({ lista = [], onAgregar }) {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Mis Tyranidos</h1>
      <FormularioMiniatura onAgregar={onAgregar} />
      <div className="row g-4">
        {lista && lista.length > 0 ? (
          lista.map((m) => (
            <div className="col-12 col-md-6 col-lg-4" key={m.id}>
              <MiniaturaCard {...m} />
            </div>
          ))
        ) : (
          <p className="text-center">No hay miniaturas cargadas aún.</p>
        )}
      </div>
    </div>
  )
}

export default Galeria
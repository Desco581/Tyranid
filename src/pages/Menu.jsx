import { Link } from 'react-router-dom'

const opciones = [
  { to: '/buscar', titulo: 'Buscar', texto: 'Consulta unidades y miniaturas por nombre, rol o estado.' },
  { to: '/ejercitos/nuevo', titulo: 'Crear ejército', texto: 'Arma una lista eligiendo unidades y controla los puntos.' },
  { to: '/ejercitos', titulo: 'Mis ejércitos', texto: 'Revisa y edita las listas que ya armaste.' },
  { to: '/coleccion', titulo: 'Mi colección', texto: 'Todas tus miniaturas con su estado de pintura.' },
]

function Menu() {
  return (
    <div className="menu-portada d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="display-3 text-uppercase">Tyranidos</h1>
      <p className="lead mb-5">Registro de la colmena</p>
      <div className="container">
        <div className="row g-3 justify-content-center">
          {opciones.map((o) => (
            <div className="col-12 col-md-6 col-lg-3" key={o.to}>
              <Link to={o.to} className="menu-opcion d-block h-100 p-4 text-decoration-none">
                <h2 className="h5 text-uppercase">{o.titulo}</h2>
                <p className="mb-0 small">{o.texto}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useLocalStorage } from './hooks/useLocalStorage'
import { miniaturas as iniciales } from './data/miniaturas'
import Menu from './pages/Menu'
import Galeria from './pages/Galeria'
import Ficha from './pages/Ficha'
import Buscar from './pages/Buscar'
import CrearEjercito from './pages/CrearEjercito'
import Ejercitos from './pages/Ejercitos'
import EjercitoDetalle from './pages/EjercitoDetalle'

export default function App() {
  const [lista, setLista] = useLocalStorage('tyranidos.miniaturas', iniciales)
  const [ejercitos, setEjercitos] = useLocalStorage('tyranidos.ejercitos', [])

  const agregarMiniatura = (nueva) => {
    setLista((actual) => [...actual, { ...nueva, id: Date.now() }])
  }

  const agregarEjercito = (nuevo) => {
    setEjercitos((actual) => [...actual, { ...nuevo, id: Date.now() }])
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route
          path="/coleccion"
          element={<Galeria lista={lista} onAgregar={agregarMiniatura} />}
        />
        <Route path="/miniatura/:id" element={<Ficha lista={lista} />} />
        <Route path="/buscar" element={<Buscar lista={lista} />} />
        <Route
          path="/ejercitos/nuevo"
          element={<CrearEjercito lista={lista} onGuardar={agregarEjercito} />}
        />
        <Route
          path="/ejercitos"
          element={<Ejercitos lista={lista} ejercitos={ejercitos} />}
        />
        <Route
          path="/ejercitos/:id"
          element={<EjercitoDetalle lista={lista} ejercitos={ejercitos} />}
        />
      </Routes>
    </BrowserRouter>
  )
}
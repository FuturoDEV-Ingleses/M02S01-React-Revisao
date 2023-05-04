import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Units, GeneratedEnergyRegistration } from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/unidades" element={<Units />} />
        <Route path="/cadastro" element={<GeneratedEnergyRegistration />} />

        <Route path="*" element={<h1>Rota não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

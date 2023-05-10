import { Routes, Route } from "react-router-dom";
import { Dashboard, Units, GeneratedEnergyRegistration } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/unidades" element={<Units />} />
      <Route path="/cadastro" element={<GeneratedEnergyRegistration />} />

      <Route path="*" element={<h1>Rota não encontrada</h1>} />
    </Routes>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <Routes >
      <Route path="/" element={<h1>HI</h1>} />
      <Route path="/new" element={<h1>new</h1>} />
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  )
}

export default App

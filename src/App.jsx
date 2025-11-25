import { Routes, Route } from "react-router"
import { HomePage } from "./pages/homePage"

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<div>Hello checkout</div>} />
    </Routes>
  )
}

export default App

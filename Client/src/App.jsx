import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Auth/login"
import Register from "./pages/Auth/register"
import Main from "./Layout/Main"
import Home from "./pages/Home/Home"



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App

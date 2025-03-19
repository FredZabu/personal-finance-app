import { Routes, Route } from "react-router-dom"
import { Login,SignUp } from "./pages/auth/index.js"
function App() {
  return (
    <div className="w-[100vw] h-[100vh] bg-main">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App

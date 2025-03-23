import { Routes, Route } from "react-router-dom"
import { Login, SignUp } from "./pages/auth/index.js"
import {Overview} from "./pages/dashboard/index.js"
function App() {
  return (
    <div className="w-[100vw] h-[100vh] bg-main">
      <Routes>
        {/* Authentication Routes */}
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />

        {/* Dashboard Routes */}
        <Route path="/" element={<Overview />} />
      </Routes>
    </div>
  )
}

export default App

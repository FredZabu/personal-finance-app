import { Routes, Route } from "react-router-dom"
import { Login, SignUp } from "./pages/auth/index.js"
import {Overview, Bills, Budget, Pots, Transaction} from "./pages/dashboard/index.js"
function App() {
  return (
    <div className="w-[100vw] h-[100vh] bg-main">
      <Routes>
        {/* Authentication Routes */}
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />

        {/* Dashboard Routes */}
        <Route path="/" element={<Overview />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/budgets" element={<Budget />} />
        <Route path="/pots" element={<Pots />} />
        <Route path="/recurring-bills" element={<Bills />} />
      </Routes>
    </div>
  )
}

export default App

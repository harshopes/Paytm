import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signin } from "./pages/Signin"
import './index.css';
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
import Confirmation from "./pages/Confirmation";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sendMoney" element={<SendMoney />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

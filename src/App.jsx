import Dashboard from "./views/dashboard";
import Signup from "./views/Singup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

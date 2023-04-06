import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/feature/home";
import AdminText from "./components/feature/admin";

function App() {
  return (
    <div className="flex h-screen">
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminText />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

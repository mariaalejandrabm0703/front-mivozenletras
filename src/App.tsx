import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminText from "./components/feature/AdminText";
import Home from "./components/feature/home";

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

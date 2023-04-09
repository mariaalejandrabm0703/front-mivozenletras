import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminText from "./components/feature/AdminText";
import Home from "./components/feature/Home";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="flex h-screen">
      <Toaster />
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

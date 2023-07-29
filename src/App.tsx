import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminText from "./components/feature/AdminText";
import { Toaster } from "sonner";
import Home from "./components/feature/Home";

function App() {
  return (
    <div className="flex h-screen">
      <Toaster />
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminText />} />
          <Route path="/front-mivozenletras" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminText from "./components/feature/AdminText";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="flex h-screen">
      <Toaster />
      <Router>
        <Routes>
          <Route path="/front-mivozenletras" element={<AdminText />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

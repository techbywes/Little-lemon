import "./App.css";
import Home from "./Home";
import Booking from "./Booking";
import ComfirmationPage from "./ComfirmationPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/ComfirmationPage" element={<ComfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;

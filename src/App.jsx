import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import Gallery from './pages/Gallery/Gallery';
import ImageTextOverlay from './pages/ImageTextOverlay/ImageTextOverlay';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/generate" element={<ImageTextOverlay />} />

        
      </Routes>
    </Router>
  );
}

export default App;

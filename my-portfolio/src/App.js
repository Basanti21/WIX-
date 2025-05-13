import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";
import Home from "./pages/Home";
import WebsiteBuilder from "./pages/WebsiteBuilder";
import Freelancer from './pages/Freelancer';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Pricing from './pages/Pricing';
import DesignPage from './pages/DesignPage';
import Photography from "./pages/Photography";
import Architecture from "./pages/Architecture";
import Business from "./pages/Business";
import Art from "./pages/Art";
import Fashion from "./pages/Fashion";
import Signup from "./pages/Signup";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/builder" element={<WebsiteBuilder />} />
        <Route path="/freelancer" element={<Freelancer />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/business" element={<Business />} />
        <Route path="/art" element={<Art />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

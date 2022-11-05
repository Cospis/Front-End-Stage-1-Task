import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contactus from "./ContactUs";
import Footer from "./Footer";
function App() {
  return (
    <div className="content">
      <Routes>
        <Route Exact path="/" element={<Home />} />
        <Route Exact path="/contact" element={<Contactus />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

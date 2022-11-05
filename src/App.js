import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contactus from "./ContactUs";
function App() {
  return (
    <div className="content">
      <Routes>
        <Route Exact path="/" element={<Home />} />
        <Route Exact path="/contact" element={<Contactus />} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;

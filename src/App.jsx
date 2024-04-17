import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Kodeks from "./components/Kodeks";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/honor" element={<Kodeks />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

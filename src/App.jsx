import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter className="">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/"></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;

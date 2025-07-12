import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <BrowserRouter className="">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/"></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

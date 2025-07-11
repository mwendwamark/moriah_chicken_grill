import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter className="">
      <Navbar />
      <Routes></Routes>
    </BrowserRouter>
  );
};

export default App;

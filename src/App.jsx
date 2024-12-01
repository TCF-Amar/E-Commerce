import React from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Collection from "./pages/Collection";

function App() {
  return (
    <div className="w-full flex justify- flex-col  items-center px-4 bg-gray-50   h-screen overflow-hidden overflow-y-auto  ">
      <Header />

      <div className="mt-16 w-full mx-4 sm:w-[80%] ">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collection />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;

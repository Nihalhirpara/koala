import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Sofas from "./component/Sofas";
import SofaDetails from "./component/SofaDetails";
const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/sofas" element={<Sofas />} /> 
           <Route path="/sofa/:id" element={<SofaDetails />} />
         {/* <Route path="/navbar" element={<Navbar />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

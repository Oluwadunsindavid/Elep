import { useState } from "react";
import Navbar from "../src/Navbar";
import { Route, Routes } from "react-router-dom";
// import Hero from "./components/HomeComp/Hero";
import Portfoliopage from "./pages/Portfoliopage";
import Aboutpage from "./pages/Aboutpage";
import Warrantypage from "./pages/Warrantypage";
import FAQSpage from "./pages/FAQSpage";
import ContactUspage from "./pages/ContactUspage";
import Homepage from "./pages/Homepage";
import Footer from "./Footer";

function App() {
  return (
    <div className=" bg-transparen">
      <Navbar />
      {/* <Hero /> */}
      {/* <Portfoliopage /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfoliopage" element={<Portfoliopage />} />
        <Route path="/aboutpage" element={<Aboutpage />} />
        <Route path="/warrantypage" element={<Warrantypage />} />
        <Route path="/faqspage" element={<FAQSpage />} />
        <Route path="/contactUspage" element={<ContactUspage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

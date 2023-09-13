import React, { useEffect, useState } from "react";
import SignIN from "./scenes/signIN-signUP/SignIN";
import SignUP from "./scenes/signIN-signUP/SignUP";
import ResetPassword from "./scenes/signIN-signUP/ResetPassword";
import VerifyOTP from "./scenes/signIN-signUP/VerifyOTP";
import Navbar from "./scenes/global/Navbar";
import Footer from "./scenes/global/Footer";
import Maps from "./components/Maps";
import Home from "./scenes/home/Home";

function App() {
  const [marginLeft, setMarginLeft] = useState("240px");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setMarginLeft("0px");
      } else {
        setMarginLeft("240px");
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ marginLeft }}>
        <Home />
        {/* <SignIN />
        <SignUP />
        <ResetPassword />
        <VerifyOTP /> */}
        {/* <Maps /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;

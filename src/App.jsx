import { useState } from "react";
import SignIN from "./scenes/signIN-signUP/SignIN";
import SignUP from "./scenes/signIN-signUP/SignUP";
import ResetPassword from "./scenes/signIN-signUP/ResetPassword";
import VerifyOTP from "./scenes/signIN-signUP/VerifyOTP";
import Navbar from "./scenes/global/Navbar";
import Footer from "./scenes/global/Footer";
import Maps from "./components/Maps";
function App() {
  return (
    <>
      <Navbar />
      {/* <SignIN />
      <SignUP />
      <ResetPassword />
      <VerifyOTP/> */}
      <Maps />
      <Footer />
    </>
  );
}

export default App;

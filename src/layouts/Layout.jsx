import React from "react";
import Header from "../components/Header";

import Latest from "../components/Latest";
import Main from "../components/Main";
// import Bannerad from "../components/Bannerad";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <br></br>
      <Latest />
      <Main />
      <Footer />
    </div>
  );
}

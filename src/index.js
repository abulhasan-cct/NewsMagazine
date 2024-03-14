import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Newscontent from "./pages/Newscontent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categorydeat from "./pages/Categorydeat";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/newscontent/:newsId" element={<Newscontent />}></Route>
      <Route path="/categorylist/:catid" element={<Categorydeat />}></Route>
      {/* <Route path="/sitemap" element={<Sitemap />}></Route> /:catid /:newsId
    <Route path="/sitemap1" element={<Sitemap1 />}></Route> */}
    </Routes>
  </BrowserRouter>
);

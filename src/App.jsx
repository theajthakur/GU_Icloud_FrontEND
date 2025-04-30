import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

import Navbar from "./components/Navbar";
import UserFinder from "./components/UserFinder";

export default function App() {
  return (
    <>
      <Navbar />
      <UserFinder />
    </>
  );
}

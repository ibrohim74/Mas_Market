import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./component/appRoute";
import NavbarX from "./component/navbarX";

function App() {
  return (
    <>
        <BrowserRouter>
            <NavbarX/>
            <AppRoute/>
        </BrowserRouter>
    </>
  );
}

export default App;

import React, { Component } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import MenuComponent from "./MenuComponent";
import HomeComponent from "./HomeComponent";
import EmpleadosComponent from "./EmpleadosComponent";

export default class Router extends Component {
  render() {
    function OficioElement() {
      let { idoficio } = useParams();
      return <EmpleadosComponent idoficio={idoficio} />;
    }
    return (
      <BrowserRouter>
        <MenuComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="empleados/:idoficio" element={<OficioElement />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class ServiceEmpleados extends Component {
  getOficios() {
    return new Promise(function (resolve) {
      let url = Global.urlApiEmpleados;
      let request = "api/Empleados/oficios";
      axios.get(url + request).then((response) => {
        resolve(response);
      });
    });
  }
}

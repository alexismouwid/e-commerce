import { Component, createRef } from "react";
import Producto from "../Lacteo";
import "./Lacteos.css";

const styles = {};

class Lacteos extends Component {
  render() {
    const { lacteos, agregarAlCarro } = this.props;
    return (
      <div ref={this.lacteosRef} className="lacteos">
        {lacteos.map((lacteo) => (
          <Producto
            agregarAlCarro={agregarAlCarro}
            key={lacteo.name}
            lacteo={lacteo}
          />
        ))}
       
      </div>
    );
  }
}

export default Lacteos;


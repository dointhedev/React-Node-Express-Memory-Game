import React from "react";
import "./MemoryGrid.css";

const MemoryGrid = props => (
  
    <a className="imglink" onClick={props.onclick}>
    <div className="img-container">
      <img className="memimg img-fluid img-thumbnail" alt={props.id} src={props.image} />
    </div>
    </a>
);

export default MemoryGrid;

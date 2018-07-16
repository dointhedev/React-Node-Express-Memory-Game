import React from "react";
import "./MemoryGrid.css";

const MemoryGrid = props => (

    <div className="img-container">
      <img className="img-fluid img-thumbnail" alt={props.name} src={props.image} />
    </div>
    
);

export default MemoryGrid;

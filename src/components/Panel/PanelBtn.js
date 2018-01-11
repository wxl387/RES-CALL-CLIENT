import React from "react";
import "./Panel.css";

export const PanelBtn = props =>
    <button className="btn btn-success" {...props} >
        {props.children}
    </button>;

import React from "react";
import "./style.css";

function PrintLinks(props) {
    return (
        <a href="url" className="bottomLinks">
            {props.object}
        </a>
    );
}

export default PrintLinks;

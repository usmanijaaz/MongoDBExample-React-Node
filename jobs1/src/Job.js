import React from "react";
import "./style.css";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import PrintLinks from "./Links";

function PrintJob(props) {
    let wow = props.data.links.map((obj) => {
        return <PrintLinks object={obj} />;
    });

    return (
        <div className="container">
            <div className="row offerContainer m-3 mb-1 mt-0">
                <div className="col-sm-12 col-lg-8">
                    <h3
                        style={{
                            fontWeight: "bold",
                            display: "inline",
                        }}
                    >
                        {props.data.title}
                    </h3>
                    <a style={{ marginLeft: "5px" }}>{props.data.duration}</a>
                    <p style={{ marginTop: "20px" }}>
                        {props.data.description}
                    </p>

                    <div>{wow}</div>
                </div>
                <div className="col-sm-12 col-lg-4">
                    <h3 style={{ display: "inline" }}>{props.data.money}</h3>
                    <p className="d-sm-none d-lg-block">{props.data.bids}</p>
                    <div className="buttonVisibility d-sm-none d-lg-block">
                        <button className="bid">Bid now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrintJob;

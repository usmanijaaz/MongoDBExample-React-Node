import React from "react";
import PrintJob from "./Job";

function AllJobs(props) {
    const toPrint = props.Data;
    var filteredPrint = toPrint;

    if (props.searchString) {
        const searchString = props.searchString.toLowerCase();
        filteredPrint = toPrint?.filter((obj) => {
            const title = obj.title.toLowerCase();
            return title.includes(searchString);
        });
    }

    let tempArray = filteredPrint?.map((obj) => {
        return <PrintJob data={obj} />;
    });
    return <div>{tempArray}</div>;
}

export default AllJobs;

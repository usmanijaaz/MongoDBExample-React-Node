import React, { useState,useEffect } from "react";
import AllJobs from "./Jobs";
import SearchJob from "./SearchJob";
//import data from "./JobData.json";
import axios from 'axios';

function BaseComponant() {
    let [objSearch, setSearchString] = useState({
        string: null,
    });
    let [dataa, setdataa] = useState([]);
    
useEffect(()=>{
    axios({
      url: "http://localhost:3001/",
      method: "GET",
    })
      .then((response) => {
       // console.log('data aagyaaa ');
        console.log(response.data);
        setdataa(response.data.Jobs);
       // console.log(datab);
      })
      .catch((err) => {
        console.log('hahahaa error aagya');
        console.log(err);
      });
  
  },[dataa]);
  

    //objSearch is a pointer to the JSON object held in useState and setSearch state
    //is the funciton used to replace that object.

    return (
        <div>
            <SearchJob callback={setSearchString} />
            <AllJobs Data={dataa} searchString={objSearch.string} />
        </div>
    );
}

export default BaseComponant;

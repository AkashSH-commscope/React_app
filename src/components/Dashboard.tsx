import React from "react";
import {useState,useEffect} from "react";
function Dashboard() {
    
    let [is12Hour,setis12Hour] = useState(true);
    let now=new Date(); // fetch current time from system
    let format=new Intl.DateTimeFormat("en-US",{ // logic to format it in
        hour:"2-digit",
        minute:"2-digit",
        hour12:is12Hour,
    });
    let formattedTime=format.format(now);// apply to current time
    const handleToggle=()=>{
        if(is12Hour){
            setis12Hour(false);
        }
        else{
            setis12Hour(true);
        }
    }
    return (
        <div>
            <h1>Current Time: {formattedTime}</h1>
            <h1>Is it in 12 Hour Format: {is12Hour.toString()}</h1>
            <h1>Dashboard</h1>
            <button onClick={handleToggle}>Toggle Time Format</button>
            
        </div>
    );
}

export default Dashboard; 
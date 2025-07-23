import React from "react";
import {useState,useEffect} from "react";
function Dashboard() {
    
    let [is12Hour,setis12Hour] = useState(true);
    let [currentTime,setCurrentTime] = useState(new Date());
     // fetch current time from system
    let format=new Intl.DateTimeFormat("en-US",{ // logic to format it in
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit",
        hour12:is12Hour,
    });
    useEffect(()=>{ // for update every second
        let interval=setInterval(()=>{
            setCurrentTime(new Date());
        },10000)
    },[]);
    let formattedTime=format.format(currentTime);// apply to current time
    const handleToggle=()=>{
        if(is12Hour){
            setis12Hour(false);
        }
        else{
            setis12Hour(true);
        }
    }
    return (
        <>
            <h1>Current Time: {formattedTime}</h1>
            <h1>Is it in 12 Hour Format: {is12Hour.toString()}</h1>
            <h1>Dashboard</h1>
            <button onClick={handleToggle}>Toggle Time Format</button>
            
        </>
    );
}

export default Dashboard; 

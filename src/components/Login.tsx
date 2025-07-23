import React from "react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const [username,setUsername]= useState("");
    const [password,setPassword]= useState("");
    const navigate = useNavigate();

    const handleLogin=(e:React.FormEvent)=>{
        e.preventDefault();
        if (username==="admin" && password==="password"){
            alert("Login Successful");
            navigate('/dashboard');
        } else {
            alert("Invalid username or password");
        }
    }
    
    return(
        <>
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="username" value={username}
                          onChange={(e) => setUsername(e.target.value)}></input>
            <input type="password" placeholder="password" value={password}
                          onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form>

        </>
    )
    

}

export default Login;
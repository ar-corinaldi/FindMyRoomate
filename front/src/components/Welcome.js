import React, { useState, useEffect } from "react";
import "./Welcome.css";
import {Link} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PresignedPost } from "aws-sdk/clients/s3";

function Welcome(props)
{
return(

    <div className="container">

    <section className="container">
        <h1>Room8</h1>
        <h2>Here you can look for your new roommate or be found!</h2>

        <div className="container">
            
            <Switch>
            {!props.user? 
           ( <Link to="/login">
            <button className="btn"> Find a roommate </button>
            </Link>) :

             ( <Link to="/feed">
            <button className="btn"> Find a roommate </button>
            </Link>)}

            </Switch>
        

            </div>
        
        
    </section>

    </div>
)
}
export default Welcome;
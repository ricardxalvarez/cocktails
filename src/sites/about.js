import React from "react";
import { Link } from "react-router-dom";
const About = ()=>{
    return <div className="about">
        <div className="about-center">
            <h1>Ricardo's Cocktails is a non existing business</h1>
            <h2>but I hope you like this page :)</h2>
            <Link to='/'>
            <button>Back Home</button>
            </Link>
        </div>
    </div>
}

export default About
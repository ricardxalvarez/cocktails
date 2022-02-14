import React from "react";
import { Link } from "react-router-dom";

const Error = ()=>{
    return <div className="error">
        <div className="error-center">
            <h1>Looks like this page does not exist :(</h1>
            <Link to='/'>
            <button>Go Home</button>
            </Link>
        </div>
    </div>
}

export default Error
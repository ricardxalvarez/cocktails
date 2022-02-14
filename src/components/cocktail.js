import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({id, name, glass, info, image})=>{
    return <article className="cocktail">
        <div className="img-container">
            <img src={image} alt="" />
        </div>
        <div className="cocktail-footer">
            <h1>{name}</h1>
            <h2>{glass}</h2>
            <p>{info}</p>
            <Link to={`/cocktail/${id}`}>
                <button>More info</button>
            </Link>
        </div>
    </article>
}

export default Cocktail
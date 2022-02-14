import React, {Suspense, lazy} from "react";
import { useGlobalContext } from "../context";
import Cocktail from "./cocktail";
import Category from './categories'
import Loading from "./loading";

const CocktailList = ()=>{
    const {menuItems, loading} = useGlobalContext()
    if (loading){
        return <Loading/>
    }
    return <section className="section">
        <div className="section-title">
            <h1>Cocktails</h1>
            <Category/>
        </div>
        <div className="cocktail-center">
            {
                menuItems.map((cocktail)=>{
                    return <Cocktail {...cocktail} key={cocktail.id}/>
                })
            }
        </div>
    </section>
}

export default CocktailList
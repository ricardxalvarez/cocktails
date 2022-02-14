import React from "react";
import SearchForm from "../components/searchForm";
import CocktailList from "../components/cocktailList";

const Home = ()=>{
    return (<>
        <SearchForm/>
        <CocktailList/>
    </>
    )
}

export default Home
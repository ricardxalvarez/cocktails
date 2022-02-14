import React, {useRef} from "react";
import { useGlobalContext } from "../context";

const SearchForm = ()=>{
    const {setSearchTerm} = useGlobalContext()
    const searchValue =  useRef('')
    const searchCocktail = ()=>{
        setSearchTerm(searchValue.current.value)
    }
    return <section className="search">
        <div className="search-center" placeholder="Ex. margarita">
            <input type="text" ref={searchValue} onChange={searchCocktail}/>
        </div>
    </section>
}

export default SearchForm
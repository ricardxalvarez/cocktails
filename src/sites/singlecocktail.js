import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from '../components/loading'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = ()=>{
    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    const [cocktail, setCocktail] = useState({})

    
    useEffect(()=>{
        setLoading(true)
        async function getCocktail(){
       try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()

        if (data.drinks){
             const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            } =  data.drinks[0]
            const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
        ]
        const newCocktail = {name, image, info, category, glass, instructions, ingredients}
        setCocktail(newCocktail)
    } else {
        setCocktail(null)
        console.log('cocktail is not defined');
    }
    setLoading(false)
} catch (error){
    console.log(error);
    setLoading(false)
}
}
getCocktail()
},[id])
if (cocktail !== null){
    const {name, image, info, category, glass, instructions, ingredients} = cocktail
    {  if(ingredients){
        
        console.log(ingredients);
    }
    
}
if (loading){
    return <Loading/>
}
return <section className="info-single">
        <div className="info-center">
            <div className="img">
                <img src={image} alt="" />
            </div>
            <div className="info-container">
                <h1>{name}</h1>
                <p><span>info:</span> {info}</p>
                <p><span>category:</span> {category}</p>
                <p><span>glass:</span> {glass}</p>
                <p><span>instrucions:</span> {instructions}</p>
                <p><span>ingredients:</span>
                {
                    ingredients &&
                 ingredients.map((ing)=>{
                  return ing? ` ${ing}.`: null
                })
                }</p>
                <Link to='/'>
                <button>Back Home</button>
                </Link>
            </div>
        </div>
    </section>
    }
}

export default SingleCocktail
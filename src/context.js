import React, {useContext, useEffect, useState} from "react"


const AppContext =  React.createContext()


const AppProvider = ({children})=>{
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  const [loading, setLoading] = useState(false)
  const [cocktails, setCocktails] = useState([])
  const [searchTerm, setSearchTerm] =  useState('a')
  const [menuItems, setMenuItems] = useState([])
  const fetchCocktail = async()=>{
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      const {drinks} = data
      if (drinks){
        const newDrinks = drinks.map((drink)=>{
          const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass, strCategory} = drink
          return {id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass, category: strCategory}
        })
        setCocktails(newDrinks)
        setMenuItems(newDrinks)
      } else {
        setCocktails([])
      }
      setLoading(false)
    } catch (error){
    setLoading(false)
    console.log(error);
  }
}
  useEffect(()=>{
    fetchCocktail()
  },[searchTerm])
  return (
    <AppContext.Provider value={{
      cocktails,
      loading,
      setSearchTerm,
      setMenuItems,
      menuItems
    }}>{children}</AppContext.Provider>
  )
}

const useGlobalContext = ()=>{
  return  useContext(AppContext)
}

export {AppProvider, useGlobalContext}
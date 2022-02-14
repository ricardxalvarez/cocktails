import React, { useState } from "react";
import { useGlobalContext } from "../context";

const Category = () =>{
    const {menuItems, setMenuItems, cocktails} = useGlobalContext()
    const allCategories = ['all', ...new Set(menuItems.map((item)=> item.category))]
    const [categories, setCategories] = useState(allCategories)
    const filterItems = (category)=>{
        if (category == 'all'){
            setMenuItems(cocktails)
        } 
         else if (menuItems.length === 0 ){
                setMenuItems(cocktails)

            } else {
            const newItems = menuItems.filter((item)=> item.category === category)
            setMenuItems(newItems)
        }
    }
    return (
        <div className="button-container">
            {
            categories.map((cat,index)=>{
               return <button key={index} onClick={()=> filterItems(`${cat}`)}>{cat}</button>
           })
        }
        </div>
    )
}

export default Category
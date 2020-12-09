import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

const axios = require('axios');

const Category = ({id}) => {
  const [recipes, setRecipes] = useState([])

  const getRecipesPerCategory = async () => {
    try {
      const getAllrecipes = await axios.get(id  ? `recipe/category/${id}` : 'recipe/all', {baseURL: 'http://localhost:6969/'});
      setRecipes(getAllrecipes.data)
    } catch (e) {
      console.log(e);
    }
  }

    useEffect(() => {
        getRecipesPerCategory()
    }, [])

  return (
    <div>
         {recipes.map(recipe => {
           return (
             <Recipe
               key={recipe.id}
               {...recipe}
             />
           )
         })}         
    </div>
  );
}

export default Category;

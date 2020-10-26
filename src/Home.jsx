import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
const axios = require('axios');

const Home = () => {
  const [recipes, setRecipes] = useState([])

  const getRecipes = async () => {
    try {
      const response = await axios.get(`recipe/all`, {baseURL: 'http://localhost:6969/'});
      setRecipes(response.data)
    } catch (e) {
      console.log(e);
    }
  }

    useEffect(() => {
        getRecipes()
    }, [])

  return (
    <div>
      {recipes.length > 0 && recipes.map(recipe => {
        return (
          <Recipe
          {...recipe}
          key={recipe.id}
          />
        )
      })}
    </div>
  );
}

export default Home;

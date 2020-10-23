import React, {useEffect} from 'react';
const axios = require('axios');

const Home = () => {

  const getRecipes = async () => {
    try {
      return await axios.get(`recipe/all`, {baseURL: 'http://localhost:6969/'});
    } catch (e) {
      console.log(e);
    }
  }
    useEffect(() => {
        const recipes = getRecipes()
        console.log(recipes);
    }, [])

  return (
    <div>
      Welcome home
    </div>
  );
}

export default Home;

import React from 'react';
import './Recipe.css'
import ReactHtmlParser from 'react-html-parser';

const Recipe = ({name, url, ingredients, instructions, notes}) => {
  const sanitizeIngredient = ingredient => {
    return (
      <div>
          {ingredient.split("\n").map((i,key) => {
              if (key !== 0 && ingredients.length > 1) {
                return (
                  <div key={key} className='indented-ingredient'>
                    {i}
                  </div>)
              } else {
                return (
                  <div key={key} >
                    {i}
                  </div>)
              }

          })}
      </div>
    )
  }

  return (
    <div className="card">
        <div className="header">
          <p>{name}</p>
        </div>
            <div className="container">
            <a href={url}>URL</a>
            <h3>Ingredients</h3>
            <div>
              {/* TODO - add key prop */}
              {ingredients.map(ingredient => {
                return (
                  <div>
                    {sanitizeIngredient(ingredient)}
                  </div>
                )
              })}
            </div>
            <h3>Instructions</h3>
            <div>{ReactHtmlParser(instructions)}</div>
            <p>{notes}</p>
        </div>
    </div>
  );
}

export default Recipe;

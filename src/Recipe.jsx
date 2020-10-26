import React from 'react';
import './Recipe.css'

const Recipe = ({name, url, ingredients, instructions, notes}) => {
  return (
    <div className="card">
        <div className="header">
          <p>{name}</p>
        </div>
            <div className="container">
            <p>{url}</p>
            <div>
              {/* TODO - add key prop */}
              {ingredients.map(ingredient => {
                return (
                  <div>
                    {ingredient}
                  </div>
                )
              })}
            </div>
            <p>{instructions}</p>
            <p>{notes}</p>
        </div>
    </div>
  );
}

export default Recipe;

import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecipeCards = ({ recipe }) => {
  console.log(recipe);

  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <Link to={`/recipe/${recipe.id}`}>
          <Card.Img src={recipe.Photo} />
        </Link>

        <Card.Body>
          <Link to={`/recipe/${recipe.id}`}>
            <Card.Title as="div">
              <strong>{recipe?.Name}</strong>
            </Card.Title>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecipeCards;

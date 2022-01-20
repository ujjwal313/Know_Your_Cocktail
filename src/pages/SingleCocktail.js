import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useCallback } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setloading] = useState(true);
  const [cocktail, setcocktail] = useState(null);

  const fetchData = useCallback(async () => {
    const response = await fetch(url + id);
    const data = await response.json();
    const { drinks } = data;
    if (data.drinks) {
      const {
        idDrink,
        strDrink,
        strDrinkThumb,
        strAlcoholic,
        strGlass,
        strCategory: category,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = drinks[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        id: idDrink,
        name: strDrink,
        image: strDrinkThumb,
        info: strAlcoholic,
        glass: strGlass,
        category,
        instructions,
        ingredients,
      };
      setcocktail(newCocktail);
      setloading(false);
    } else {
      setcocktail(null);
    }
  }, [id]);

  useEffect(() => {
    setloading(true);
    try {
      fetchData();
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }, [id, fetchData]);

  if (loading) return <Loading />;
  else if (!cocktail)
    return <h2 className="section-title">no cocktails to show</h2>;

  const { name, image, info, glass, category, instructions, ingredients } =
    cocktail;
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name : </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category : </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info : </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass : </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions : </span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients : </span>
            {ingredients.map((item, index) =>
              item ? (
                <span key={index} className="drink-data">
                  {item}
                </span>
              ) : null
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;

import React, { useState } from "react";
import { TextField, Button } from "../modules/material";
import CheckBoxCustom from "./CheckBoxCustom";
import IngredientDisplay from "./IngredientsDisplay";

export default function FormCustom() {
  const [new_sandwich, set_new_sandwich] = useState({
    "sandwich-name": null,
    "sandwich-price": null,
    "sandwich-ingredient": []
  });
  const [sandwich_ingredient, set_sandwich_ingredient] = useState(null);
  const handleIngredientChange = e => set_sandwich_ingredient(e.target.value);
  const handleIngredientSubmit = () => {
    set_new_sandwich({
      ...new_sandwich,
      sandwich_ingredient: new_sandwich["sandwich-ingredient"].push(
        sandwich_ingredient
      )
    });
    set_sandwich_ingredient(null);
  };
  const handleChange = e => {
    const name = e.target.id;
    const value = e.target.value;
  };
  return (
    <form>
      <TextField id="sandwich-name" label="naam" onChange={handleChange} />
      <TextField id="sandwich-price" label="prijs" onChange={handleChange} />
      <TextField
        value={handleIngredientChange}
        id="sandwich-ingredient"
        label="ingredient"
        onChange={handleChange}
      />
      <Button>voeg ingredient toe</Button>
      {new_sandwich["sandwich-ingredient"].length > 0 && (
        <IngredientDisplay
          ingredients={new_sandwich["sandwich-ingredient"]}
          new_sandwich={new_sandwich}
          set_new_sandwich={set_new_sandwich}
        ></IngredientDisplay>
      )}
      <CheckBoxCustom checkbox-id="sandwich-month"></CheckBoxCustom>
    </form>
  );
}

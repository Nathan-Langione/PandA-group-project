import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const RecipeForm = () => {
    const [recipeTitle, setRecipeTitle] = useState("");
    const [recipeImg, setRecipeImg] = useState("");
    const [recipeIngredients, setRecipeIngredients] = useState("");
    const [recipeInstructions, setRecipeInstructions] = useState("");
    const [errors,setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/recs/dining', {
            recipeTitle,
            recipeImg,
            recipeIngredients,
            recipeInstructions, 
        })
            .then((res) => {
                console.log(res)
                // navigate("/");
            })
            .catch(err => {
                setErrors(err.response.data.errors);
            })
    }
    return (
        <div style={{margin: "50px", padding:"10px", border:"1px solid black"}}>
            <form onSubmit={onSubmitHandler}>
                <header><b><u>Create a New Recipe</u></b></header>
                <p>
                    <label style={{margin: "5px"}}><b>Recipe Title:</b></label>
                    <input type="text" onChange={(e) => setRecipeTitle(e.target.value)} />
                    {errors.recipeTitle ?
                        <p style={{color: "red"}}><em>{errors.recipeTitle.message}</em></p>
                        : null
                    }
                </p>
                <p>
                    <label style={{margin: "5px"}}><b>Recipe Title:</b></label>
                    <input type="text" onChange={(e) => setRecipeImg(e.target.value)} />
                    {errors.recipeImg ?
                        <p style={{color: "red"}}><em>{errors.recipeImg.message}</em></p>
                        : null
                    }
                </p>
                <p>
                    <label style={{margin: "5px"}}><b>Ingredients:</b></label>
                    <textarea onChange={(e) => setRecipeIngredients(e.target.value)} />
                    {errors.recipeIngredients ?
                        <p style={{color: "red"}}><em>{errors.recipeIngredients.message}</em></p>
                        : null
                    }
                </p>
                <p>
                    <label style={{margin: "5px"}}><b>Instructions:</b></label>
                    <textarea onChange={(e) => setRecipeInstructions(e.target.value)} />
                    {errors.recipeInstructions ?
                        <p style={{color: "red"}}><em>{errors.recipeInstructions.message}</em></p>
                        : null
                    }
                </p>
                <input type="submit" style={{backgroundColor: "red", color: "white"}} />
            </form>
            <button style={{backgroundColor: "blue", color: "white"}} onClick={() => {navigate("/")}}>Return Home</button>
        </div>
    )
}

export default RecipeForm;
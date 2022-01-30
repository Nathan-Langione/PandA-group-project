import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import '../App.css';

const AllRecipes = () => {
    const [recipeList, setRecipeList] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8000/api/recipe')
            .then(res => {
                setRecipeList(res.data);
            })
            .catch(err => {
                console.log(err.res)
            })
    })

    return (
        <>
            {/* With server, should map new recipe from form to individual card */}
            <div className='Recipe-Table'>
                <table>
                    <tbody>
                        {
                            recipeList ?
                                recipeList.map((recipe, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className='Recipe-Card'>
                                                <header>{recipe.recipeTitle}</header>
                                                <img src={recipe.recipeImg} />
                                                <p>{recipe.recipeBriefDescrip}</p>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                                : null
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AllRecipes;
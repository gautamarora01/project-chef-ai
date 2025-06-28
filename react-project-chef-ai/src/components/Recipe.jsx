import React from "react";
import Markdown from 'react-markdown'

function Recipe(props){

    const [result,setResult]=React.useState("Loading result");

    const loadComponent=<div className="loading-animation">Loading Result <span>.</span><span>.</span><span>.</span></div>;

    React.useEffect(()=>{

        async function fetchRecipe(){
            try {
                const res=await fetch("https://project-chef-ai.onrender.com/api/recipe",
                {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        ingredients:props.ingredients,
                        model:props.model,
                    })
                });

                const data=await res.json();
                setResult(data.message);

            } catch (error) {
                console.log(error);
                setResult("Failed to load recipe...");
            }
        }
        fetchRecipe();
    },[props.recipeShown]);
    
    return (
        <div className="fade-in recipe-div" aria-live="polite">
            <h2 className="section-h2">Recipe</h2>
            <div className="markdown">{result === "Loading result" ? (loadComponent) : (<Markdown >{result}</Markdown>)}</div>
        </div>
    )
}

export default Recipe;
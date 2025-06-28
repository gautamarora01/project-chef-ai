import React from "react";
import Form from "./Form";
import Recipe from "./Recipe";
import Ingredients from "./Ingredients";

 function Main(){

    const [ingredients,setIngredients]=React.useState([]);

    const [model,setModel]=React.useState("default");

    const [recipeShown, setRecipeShown]=React.useState(false);

    function addIngredient(formData){
        //this method of using form by accessing through action={},
        //instead of onSubmit={}, takes parameter as formData and automatically
        //prevents default submission and automatically resets formElement
        const newIngredient=formData.get("ingredient");
        setIngredients((prevIngredients)=>{
            return [...prevIngredients,newIngredient];
        });
    }

    function removeIngredient(index){
        setIngredients((prevIngredients)=>{
            return prevIngredients.filter((_,ind) => ind !== index);
        });
    };

    function handleModelChange(event){
        const newModel=event.currentTarget.value;
        setModel(newModel);
    }

    function toggleRecipeShown(){
        setRecipeShown(prev=>!prev);
    }

    return (
        <main>
            <Form formAddIngredient={addIngredient}/>
            {   
                ingredients.length>0 && 
                <Ingredients ingredients={ingredients} model={model} handleModelChange={handleModelChange} 
                recipeShown={recipeShown} toggleRecipeShown={toggleRecipeShown} removeIngredient={removeIngredient}/>
            }
            {recipeShown && <Recipe ingredients={ingredients} model={model} recipeShown={recipeShown}/>}
        </main>
    )
}

export default Main;
import React from "react";
import Form from "./Form";
import Recipe from "./Recipe";
import Ingredients from "./Ingredients";

 function Main(){

    const [ingredients,setIngredients]=React.useState([]);

    const [model,setModel]=React.useState("default");

    const [limitIngredients,setLimitIngredients]=React.useState(false);

    const [recipeShown, setRecipeShown]=React.useState(false);

    function addIngredient(formData){
        //this method of using form by accessing through action={},
        //instead of onSubmit={}, takes parameter as formData and automatically
        //prevents default submission and automatically resets formElement
        const newIngredient=formData.get("ingredient");

        setIngredients((prevIngredients)=>{
            return [...prevIngredients,newIngredient];
        });

        if(ingredients.length==49){
            setLimitIngredients(true);
        }
    }

    function removeIngredient(index){
        setIngredients((prevIngredients)=>{
            const newIngredients=prevIngredients.filter((_,ind)=>ind!=index);
            if(newIngredients.length<50) setLimitIngredients(false);
            return newIngredients;
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
            <Form formAddIngredient={addIngredient} ingredients={ingredients} limitIngredients={limitIngredients}/>
            {   
                ingredients.length>0 && 
                <Ingredients ingredients={ingredients} model={model} handleModelChange={handleModelChange} 
                recipeShown={recipeShown} toggleRecipeShown={toggleRecipeShown} removeIngredient={removeIngredient}/>
            }
            {recipeShown && !limitIngredients && <Recipe ingredients={ingredients} model={model} recipeShown={recipeShown}/>}
        </main>
    )
}

export default Main;

function Ingredients(props) {

    const listIngredients=props.ingredients.map((element,index)=>{
        return <li key={index}>{element}<button className="x-btn" onClick={() => props.removeIngredient(index)}>×</button></li>
    });

    const buttonText=props.recipeShown?"Clear Results":"Get a recipe";

    return (
        <section className="section-1 fade-in">
            <h2 className="section-h2">Ingredients on hand:</h2>
            <ul className="ingredients-list">{listIngredients}</ul>
            {props.ingredients.length<3 && 
                <p className="warning-text"> Please add at least <strong>3 ingredients</strong> to get a recipe suggestion.</p>}
            {props.ingredients.length > 2 && (
                <div className="get-recipe-container fade-in">
                <div className="get-recipe-subcontainer-1">
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <div className="get-recipe-subcontainer-2">
                    <div className="get-recipe-subcontainer-2-1">
                    <label htmlFor="model-select">Choose a model:</label>
                    <select
                        id="model-select"
                        value={props.model}
                        onChange={props.handleModelChange}
                        name="model"
                    >
                        <option value="default">--Choose--</option>
                        <option value="Mistral AI">Mistral AI</option>
                        <option value="Meta Llama">Meta Llama</option>
                    </select>
                    </div>

                    <button className={props.recipeShown ? "clear-btn":"get-btn"} onClick={props.toggleRecipeShown}>{buttonText}</button>
                </div>
                </div>
            )}
        </section>
    );
}

export default Ingredients;

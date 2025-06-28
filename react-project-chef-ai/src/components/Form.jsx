
function Form(props){
    return (
        <form className="add-form" action={props.formAddIngredient}>
            <input 
                type="text" 
                placeholder="e.g. Parmesan cheese"
                aria-label="Add ingredients"
                name="ingredient"
            />
            <button disabled={props.limitIngredients}>+ Add ingredient</button>
            {props.limitIngredients && 
                <p className="warning-text"> You cannot add more than <strong>50 ingredients</strong></p>}
        </form>
    )
}

export default Form;
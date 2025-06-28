
function Form(props){
    return (
        <form className="add-form" action={props.formAddIngredient}>
            <input 
                type="text" 
                placeholder="e.g. Parmesan cheese"
                aria-label="Add ingredients"
                name="ingredient"
            />
            <button>+ Add ingredient</button>
        </form>
    )
}

export default Form;
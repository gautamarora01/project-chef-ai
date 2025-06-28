import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import {getRecipeFromMistral,getRecipeFromLLAMA3} from './ai.js';
dotenv.config();

const PORT=process.env.PORT || 3001;

const app=express();
app.use(cors());
app.use(express.json());

app.get("/api/healthcheck", (req, res) => {
    res.status(200).send("OK");
});


app.post("/api/recipe",async (req,res)=>{
    const {ingredients,model}=req.body;

    let checkIngredients=false;
    
    ingredients.forEach(element => {
        if(element===''){
            checkIngredients=true;
        }
    });

    if (!Array.isArray(ingredients) || ingredients.length === 0 || checkIngredients) {
        return res.status(400).json({ message: "Invalid or missing ingredients." });
    }

    let message="";
    
    try {
        if(model==="default"|| model==="Mistral AI") message=await getRecipeFromMistral(ingredients);
        else if(model==="Meta Llama") message=await getRecipeFromLLAMA3(ingredients);

        if (!message || typeof message !== "string" || message.trim() === "") {
            return res.json({ message: "Failed to generate a recipe. Try a different model or regenerate." });
        }

        return res.status(200).json({message:message});
        
    } catch (err) {
        console.log(err);
        return res.json({ message: "Server error at backend while generating." });
    }
});


app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`);
})
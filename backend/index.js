import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import {getRecipeFromGemma,getRecipeFromLLAMA3} from './ai.js';
dotenv.config();

const PORT=process.env.PORT || 3001;

const allowedOrigins = [
  "http://localhost:5173",
  "https://chef-ai-project.vercel.app"
];

const app=express();

app.use(cors({
    origin:(origin,callback)=>{
        if(!origin || allowedOrigins.includes(origin)){
            callback(null,true);
        }
        else callback(new Error("Not allowed by CORS"))
    }
}));

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
        if(model==="default"|| model==="Google Gemma") message=await getRecipeFromGemma(ingredients);
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
import dotenv from "dotenv";
dotenv.config();

// import { InferenceClient } from '@huggingface/inference';
import { Groq } from 'groq-sdk';

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a
 user has and suggests a recipe they could make with some or all of those ingredients. 
 You don't need to use every ingredient they mention in your recipe. 
 The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients.
 Format your response in markdown, keep it clean and elegant to look, to make it easier to render to a web page.
 Always keep heading of recipe on top.
`

//const hf = new InferenceClient(process.env.HF_ACCESS_TOKEN);
const groq = new Groq({apiKey:process.env.GROQ_KEY});

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    try {
        const response = await groq.chat.completions.create({
            model: "mistral-saba-24b",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_completion_tokens: 1024,
            top_p: 1,
            stream: false,
        })
        return response.choices[0].message.content;
    } catch (err) {
        console.error(err.message)
    }
}


export async function getRecipeFromLLAMA3(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    try {
        const response = await groq.chat.completions.create({
            "model": "llama-3.3-70b-versatile",
            "messages": [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_completion_tokens: 1024,
            top_p: 1,
            stream: false,
        })
        return response.choices[0].message.content;
    } catch (err) {
        console.error(err.message)
    }
}
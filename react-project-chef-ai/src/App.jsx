import React from "react";
import "./App.css"
import Header from "./components/Header";
import Main from "./components/Main";
import fetchWithTimeout from "./components/fetchWithTimeout";

function App(){
  
  const [backendAwake, setBackendAwake] = React.useState(false);
  
  const MAX_RETRIES=5;

  React.useEffect(() => {

    async function checkHealth(retries) {
      try {
        
        console.log(`Attempting healthcheck (${MAX_RETRIES - retries + 1}/${MAX_RETRIES})`);

        const res = await fetchWithTimeout("https://project-chef-ai.onrender.com/api/healthcheck", {
          timeout: 8000, // 8s timeout
        });

        if (res.ok) {
          console.log("Backend awake");
          setBackendAwake(true);
        } else {
          throw new Error("Not OK");
        }
      } catch (err) {
        console.warn("Healthcheck failed:", err.message);
        if (retries > 0) {
          setTimeout(() => checkHealth(retries-1), 3000); // Retry in 3s
        }
        else console.log("Backend failed to wake up after max retries")
      }
    }

    checkHealth(MAX_RETRIES);
  }, []);

  return (
    <>
      <Header />
      {!backendAwake ? (
        <div className="wake-up-msg">
          Waking up the AI Chef... please wait a few seconds.
        </div>) 
        : (<Main />)
      }      
    </>
  )
}

export default App;
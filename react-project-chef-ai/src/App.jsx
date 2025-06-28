import React from "react";
import "./App.css"
import Header from "./components/Header";
import Main from "./components/Main";

function App(){
  
  const [backendAwake, setBackendAwake] = React.useState(false);
  
  const [healthRetries, setHealthRetries] = React.useState(3);

  React.useEffect(() => {

    async function checkHealth(retries) {
      try {
        const res = await fetch("https://project-chef-ai.onrender.com/api/healthcheck");
        if (res.ok) {
          console.log("Backend awake");
          setBackendAwake(true);
        } else {
          throw new Error("Not OK");
        }
      } catch (err) {
        console.warn("Healthcheck failed:", err.message);
        if (retries > 0) {
          setTimeout(() => checkHealth(retries - 1), 3000); // Retry in 3s
        }
      }
    }

    checkHealth(healthRetries);
  }, []);

  return (
    <>
      <Header />
      {!backendAwake ? (
        <div className={healthRetries<3?"wake-up-msg":"transparent-text"}>
          Waking up the AI Chef... please wait a few seconds.
        </div>) 
        : (<Main />)
      }      
    </>
  )
}

export default App;
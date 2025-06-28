import React from "react";
import "./App.css"
import Header from "./components/Header";
import Main from "./components/Main";

function App(){
  
  React.useEffect(() => {
    // Wake up the backend instance on first load
    fetch("https://project-chef-ai.onrender.com/api/healthcheck")
      .then(() => console.log("Backend awake"))
      .catch((err) => console.error("Healthcheck failed:", err));
  }, []);

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App;
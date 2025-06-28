import chefAiLogo from "../assets/chef-ai.png";

function Header(){

    return (
        <header>
            <img src={chefAiLogo}/>
            <h1>Chef AI</h1>            
        </header>
    )
}

export default Header;
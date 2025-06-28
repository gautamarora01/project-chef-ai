import chefAiLogo from "../assets/chef-ai.png";

function Header(){

    return (
        <header>
            <img src={chefAiLogo} alt="chef-ai-logo-png"/>
            <h1>Chef AI</h1>            
        </header>
    )
}

export default Header;
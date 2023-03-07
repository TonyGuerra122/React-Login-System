import Button from "./Button";
import React from "react";
import { useHistory } from "react-router-dom";
function Home(){
    const history = useHistory();

    if(!sessionStorage.user || sessionStorage.user == null){
        history.push("/")
    }
    
    const sair = () =>{
        sessionStorage.removeItem("user");
        window.location.reload();
    }    
    return(
        <div>
            <h1>Bem-Vindo {sessionStorage.user}</h1>
            <Button onClick={sair} value="Sair"/>
        </div>
    )
}
export default Home;
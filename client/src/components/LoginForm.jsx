import React, {useState} from "react";
import Input from "./Input";
import Button from "./Button";
import "./css/LoginForm.css";
import axios from "axios";
function LoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = () =>{
        const data = {
            email: email,
            password: password
        }
        axios.post('http://localhost:3001/logou', data).then(
            (response) => {
                const {count} = response.data[0];
                const {nome} = response.data[0]; 
                const {email} = response.data[0];
                const {senha} = response.data[0];


                if(count >= 1){
                    sessionStorage.user = nome;
                    sessionStorage.email = email;
                    sessionStorage.password = senha;
                    window.location.href = "/home";
                }
            })
    }
    return(<div className="form-box">
        <header className="form-header">
            <h1>Login</h1>
        </header>
        <main className="form-main">
            <Input 
            type="email" 
            name="email" 
            className="form-input"
            value={email} 
            placeholder="Digite o seu E-mail"
            onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
            type="password" 
            name="password" 
            className="form-input" 
            value={password}
            placeholder="Digite a sua Senha"
            onChange={(e) => setPassword(e.target.value)}
            />
        </main>
        <footer className="form-footer">
            <Button onClick={handleFormSubmit} className="form-submit" value="Logar"/>
        </footer>
    </div>)
}
export default LoginForm;
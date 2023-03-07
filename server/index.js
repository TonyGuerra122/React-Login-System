const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const crypto = require('crypto');
const port = 3001

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_teste"
})

app.post("/logou", (req, res) => {
    let { email } = req.body;
    let { password } = req.body;

    let hash = crypto.createHash('md5').update(password).digest('rex');

    let sql = "SELECT COUNT(id) AS count, nome, email, senha FROM node_teste.usuarios WHERE email = ? AND senha = ?";

    db.query(sql, [email, hash], (err, result) => {
        if(err){
            console.log(err);
            return
        }
        
        res.json(result);
    })

})
app.post("/verify", (req, res) =>{
    let {email} = req.body;
    let {password} = req.body;
    
    let sql = "SELECT COUNT(id) AS count FROM node_teste.usuarios WHERE email = ? AND senha = ?";
    
    let hash = crypto.createHash('md5').update(password).digest('rex');

    db.query(sql, [email, hash], (err, result) =>{
        if(err){
            console.log(err)
            return;
        }
        res.json(result);
    })
})

app.listen(port, (err) =>{
    if(err){
        console.log(err)
        return
    }
    console.log(`App rodando na porta ${port}`)
})

//arquivo principal do meu projeto - entry point
//tecnologia ejs - motor template  = função desenhar html - renderizar
//rota de perfil = quando o usuário entra nesta rota ele vai desenhar o html do perfil
//permite que o html ganhe super poderes - uso código js dentro do html
const express = require("express");  //importando o módulo express
const app = express(); //criando uma instancia do express

//configurando o express para trabalhar com ejs (motor)
app.set("view engine","ejs")


//rota principal "/"
app.get("/:nome/:empresa", (req, res) => {  
    //res.send("Bem vindo ao meu site!");
    //res.render("home") //o render vai direto na pasta view 
    //res.render("principal/perfil") //quando o html estiver dentro de uma pasta ela deverá ser colocada no caminho
    //todos os htmls devem estar dentro da pasta view

    //variáveis de memória com o js
    // var nome="Silvia Fiacador"
    // var empresa="Senac"
    var nome= req.params.nome;
    var empresa=req.params.empresa;
    res.render("index",{nome:nome, empresa:empresa});
   
})

app.listen(3000,()=> {console.log("App rodando!");})
//executar no node js - node index.js - em seguida no navegador: localhost:8080 

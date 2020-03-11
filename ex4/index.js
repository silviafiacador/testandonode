//console.log("Olá mundo!!!!!");

//criar a identidade do projeto  npm init
/*observar que foi criado o arquivo package.json (javascript 
    object notation) que contem informações do projeto.
instalar o framework de node -> express
executar o comando:   npm install express
*/
let express = require('express') //importando o módulo express
let app = express()
let port = 8081
//rota
app.get('/', (req, res) => {
    res.send('<h1>Home</h1>')
  })

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})
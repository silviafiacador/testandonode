const titulo="Generation - NodeJs"

function maiusculo(nome) 
{
    return nome.toUpperCase()
}

function minusculo(nome)
{
     return nome.toLowerCase()
}

function totalLetras(nome)
{
    var total= nome.length
    return "Total de letras: "+total
}

//para que estas funções fiquem acessíveis para outro código
//vamos ter que exportar as funções

module.exports = {
    maiusculo,    //função
    minusculo,  //função
    totalLetras, //função
    titulo  //constante
}
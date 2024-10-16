//função para inserir um número ou a operação
function insert(num){
    let numero = document.getElementById("resultado").innerText;
    document.getElementById("resultado").innerHTML = numero + num
}
//função para limpar o campo
function clean(){
    document.getElementById("resultado").innerHTML = "";
}
// função eval: avalia a expressão de caracteres e retorna seu resultado
function calc(){
    let resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = eval(resultado)
    if (resultado) {
        document.getElementById("resultado").innerHTML = eval(resultado);
//se o usuário não digitar e clicar em = retorna "Nada..."
    }else{
        document.getElementById("resultado").innerHTML = "Nada..."
    }
}
// Math.sqrt retorna a raiz quadrada do número digitado
function radiciação(){
    let resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = Math.sqrt(resultado)
}
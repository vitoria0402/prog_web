const frm = document.querySelector("form");
const resposta = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const Peso = Number(frm.inPeso.value);
    const Altura = Number(frm.inAltura.value);
   
    imc = Peso / (Altura *2)

    if(imc < 18,5){
        print("Você está abaixo do peso")
    }
    if(imc => 18,6 && 24,9){
        print("Você está no peso ideial")
    }
    if(imc => 25 && 29,9){
        print("Você está acima do peso ")
    }
})

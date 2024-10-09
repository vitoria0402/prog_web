const frm = document.querySelector("form");
const resposta = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const Valor = Number(frm.inValor.value);
   
    if(Valor % 0){
        print("O número é par")
    }
    else(Valor % 1)
        print("O número é impar")
    
})

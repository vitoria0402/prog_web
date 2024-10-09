const frm = document.querySelector("form");
const resposta = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const Lado1 = Number(frm.inLado1.value);
    const Lado2 = Number(frm.inLado2.value);
    const Lado3 = Number(frm.inLado3.value);

    if(Lado1 + Lado2 > Lado3){
        print("O triângulo é válido")
    }
    if(Lado1 = Lado2 = Lado3){
        print("O triângulo é equilátero")
    }
    if(Lado1 = Lado2 != Lado3){
        print("O triângulo é isóceles")
    }
    if(Lado1 != Lado2 != Lado3){
        print("O triângulo é escaleno")
    }
})

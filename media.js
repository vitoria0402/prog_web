const frm = document.querySelector("form");
const resposta = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const Valor1 = Number(frm.inValor1.value);
    const Valor2 = Number(frm.inValor2.value);
    const Valor3 = Number(frm.inValor3.value);
   

    media = (Valor1 + Valor2 + Valor3) / 3
    if(media >= 7){
        print("Você foi Aprovado")
    }
    if(media <= 4){
        print("Voce está de recuperação")
    }
   else( media < 3.9)
    print("Você foi reprovado")
    
    resposta.innerText = `A média é ${media}`
    resposta.style.color = "blue"
})

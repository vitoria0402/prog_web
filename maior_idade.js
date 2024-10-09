const frm = document.querySelector("form");
const resposta = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    if(idade >= 18){
        print("Você é maior de idade")
    }
    if(idade < 18){
        print("Você é menor de idade")
    }   
})

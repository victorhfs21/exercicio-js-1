function Trocar(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let soma = numero1 + numero2;

    if(soma==0){
        document.getElementById("mensagem").innerText = "Soma neutra";
    }
    else if(soma>0){
        document.getElementById("mensagem").innerText = "Soma positiva";
    }
    else{
        document.getElementById("mensagem").innerText = "Soma negativa";
    }

}
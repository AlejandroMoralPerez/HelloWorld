function vaciar () { 
    document.getElementById("n1").value = "";
    }

function cuadrado() { 
let num = document.getElementById("n1");
num.value = num.value * num.value;
}

function inverso() {
    let num = document.getElementById("n1");
    if (num.value < 1) {
        alert("El valor indicado es demasiado pequeño");
    } else {
        num.value = 1 / num.value;
    }  
}
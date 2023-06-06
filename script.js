function calcular(cantidad,categoria) {
    let estudiante = 40
    let trainee = 100
    let junior = 170
    let resultado = 0

    if (categoria == "estudiante"){
        resultado = 40 * cantidad
    } else if(categoria == "trainee"){
        resultado = 100 * cantidad
    } else{
        resultado = 170 * cantidad
    }

    return resultado
}

let formulario = document.getElementById("ticket_cat")

let categoria = document.getElementById("categoria")

let cantidad = document.getElementById("cantidad")

let divResultado = document.getElementById("resultado")

formulario.addEventListener("reset", ()=>{
    divResultado.textContent = ""
})

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    divResultado.textContent = "Resultado: $" + calcular(cantidad.value,categoria.value)
})
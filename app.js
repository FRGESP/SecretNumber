let numero = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 3;

// console.log(numero);

function intentoUsuario()
{
    let numeroUsuario = parseInt(document.getElementById("inputNumeroUsuario").value);
    // console.log(numero);
    if(numeroUsuario===numero)
    {
        llenarTexto("h1","¡Ganaste!");
        llenarTexto("p",`Felicidades, lo hiciste en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else
    {
        llenarTexto("p",`El numero secreto es ${numero>numeroUsuario ? "mayor" : "menor"} intento ${intentos}`);
        intentos++;
        limpiarcaja();
    }
}

function llenarTexto (elemento,texto)
{
    let objeto = document.querySelector(elemento);
    objeto.innerHTML = texto;
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;

    if(numerosSorteados.length == numeroMaximo)
    {
        llenarTexto("h1","Ya has adivinado todos los numeros!");
        llenarTexto("p","¡Felicidades!");
        document.getElementById("intentar").setAttribute("disabled","true");
    }
    else
    {
            if (numerosSorteados.includes(numeroSecreto))
        {
            return generarNumeroSecreto();
        }else
        {
            numerosSorteados.push(numeroSecreto);
            return numeroSecreto;
        }
    }

    
}

function mostrarNombre(nombre)
{
    console.log("Hola " + nombre);
}
function limpiarcaja()
{
    let elemento = document.querySelector("#inputNumeroUsuario");
    elemento.value = "";
    return;
}

function prueba()
{
    console.log("Hola mundo");
    let nombre = prompt("Ingrese su nombre:");
        console.log(`Hola ${nombre}`);
        let numero = prompt("Ingrese un numero");
        alert(`El doble de ese numero es: ${numero*2}`);
        let num1 = prompt("numero 1");
        let num2 = prompt("numero 2");
        let num3 = prompt("numero 3");
        alert(`El promedio de esos numeros es: ${(num1+num2+num3)/3}`);
        let numeroext = prompt("Ingrese un numero");
        let numext2 = prompt("Ingrese un numero de nuevo");
        if(numeroext>numext2)
        {
            alert(`EL numero ${numeroext} es mayor que ${numext2}`);
        }else
        {
            alert(`EL numero ${numext2} es mayor que ${numeroext}`);
        }
        let numeromulti = prompt("Ingrese un numero para multiplicar");
        alert(`Ese numero multiplicado por si mismo es: ${numeromulti*numeromulti}`);
        
}

function reiniciarJuego()
{
    limpiarcaja();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled", "true");
}

function condicionesIniciales()
{
    llenarTexto("h1", "Juego adivina el numero");
    llenarTexto("p", "Ingrese un numero de 1 al 10");
    numero = generarNumeroSecreto();
    intentos = 1;
    console.log(numerosSorteados);
    // let abs = encontrar(numerosSorteados,numero);
    // console.log(abs);
    // if(abs == false)
    // {
    //     numerosSorteados.push(numero);
    // }
    // else
    // {
    //     console.log(`Numero repetido ${numero}`);
    //     while(abs == true)
    //     {
    //         numero = generarNumeroSecreto();
    //         abs = encontrar(numerosSorteados,numero);
    //     }
    //     numerosSorteados.push(numero);
    // }
    // console.log(numerosSorteados);
}

function encontrar(arreglo, numeroSecreto)
{
    let long = arreglo.length;
    let contador = 0;
    console.log(long);

    while(contador < long-1)
    {
        if(numeroSecreto == arreglo[contador])
        {
            return true;
        }
        contador ++;
    }

    return false;
}

mostrarNombre("Pedrito");
condicionesIniciales();

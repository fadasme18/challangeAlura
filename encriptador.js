//Estado inicial de la página
document.addEventListener("DOMContentLoaded", function() {
    mostrarCuadro();
});


var respuestaTextarea = document.getElementById('respuestamensaje');


function mostrarCuadro() {
    var mensajeTextarea = document.getElementById('mensaje').value.trim();
    var cuadro = document.querySelector('.cuadro');
    var cuadro1 = document.querySelector('.cuadro1');

    if (mensajeTextarea !== '') {
        cuadro.style.display = 'none';
        cuadro1.style.display = 'inline.block';
        document.getElementById('respuestamensaje').value = mensajeTextarea;
    } else {
        cuadro.style.display = 'inline.block';
        cuadro1.style.display = 'none';
    }
}

function encriptarDesencriptar(tipo) {
    var mensajeTextarea = document.getElementById('mensaje').value.trim();
    var cuadro1 = document.querySelector('.cuadro1');
    var cuadro = document.querySelector('.cuadro');

    if (mensajeTextarea !== '') {
        if (contieneCaracteresEspeciales(mensajeTextarea)){
            alert('No se permiten caracteres especiales, letras mayúsculas ni acentos')
        }
        else{
        // Agrega lógica de encriptación o desencriptación aquí
        var resultado = (tipo === 'Encriptar') ? encriptarTexto(mensajeTextarea) : desencriptarTexto(mensajeTextarea);
        // Actualiza el cuadro1 con el resultado
        respuestaTextarea.value = resultado;
        // Muestra cuadro1 y oculta cuadro
        cuadro1.style.display = 'inline-block';
        cuadro.style.display = 'none';
        }

    } else {
        cuadro.style.display = 'inline-block';
        cuadro1.style.display = 'none';
    }
    return false;
}

function encriptarTexto(texto) {
    // Reglas de encriptación
    var encriptado = texto.replace(/e/g, "enter")
                          .replace(/i/g, "imes")
                          .replace(/a/g, "ai")
                          .replace(/o/g, "ober")
                          .replace(/u/g, "ufat");

    return encriptado;
}

function desencriptarTexto(texto) {
    // Reglas de desencriptación
    var desencriptado = texto.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");

    return desencriptado;
}

function contieneCaracteresEspeciales(texto){
    var restriccion = /[^a-z ]/g;
    return restriccion.test(texto);
}

function copiartexto(){
    respuestaTextarea.select();

    try{
        navigator.clipboard.writeText(respuestaTextarea.value);
    }
    catch (err){
        console.error('no se pudo copiar el texto: ', err);
    }
}
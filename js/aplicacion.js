function addFormulario() {
    let a = 1;
    let count1 = 1;
    let numero = document.getElementById("Automata1").value;

    const texto1 = document.querySelector("#formulario");
    texto1.textContent = "Nombres para el automata 1";
    texto1.className = "alert alert-info py-4 mx-2";
    while (a <= numero) {
        var div = document.createElement('div');
        div.setAttribute('class', 'form-inline');
        div.innerHTML = '<div style="clear:both" class=" "' + a + ' col-md-offset-1 col-md-6"><input id="a1valor' + count1 +
            '" class="form-control" style="margin-bottom: 5px;"  placeholder="Nombre del estado ' + [a] + ' "  ' + a + '" type="text"/> <input type="radio" id="A1inicial' + count1 + '" name="inicia" required>Inicial <input type="checkbox" id="A1final' + count1 + '" name="final" required> Final</div>';
        document.getElementById('formulario').appendChild(div);
        a++;
        count1++;
    }
    const texto3 = document.querySelector("#mostrarLenguaje");
    texto3.textContent = "Variables automata 1";
    texto3.className = "alert alert-info py-3 mr-2";
    var leEntrada = document.getElementById("nEntradas").value;
    console.log("Lenguaje Automata N°1 :", leEntrada);
    var count = 1;
    var x = leEntrada;
    let k = 1;
    while (k <= x) {
        var div = document.createElement('div');
        div.setAttribute('class', 'form-inline');
        div.innerHTML = '<div style="clear:both" class=" "' + k + ' col-md-offset-1 col-md-6"><input id="lenENvalor' + count +
        '" class="form-control" style="margin-bottom: 2px;"  placeholder="Letra de entrada ' + [k] + ' " ' + k + '" type="text"/>';
        document.getElementById('mostrarLenguaje').appendChild(div);
        k++;
        count++;
    }
    var div = document.createElement('div');
    div.setAttribute('class', 'form-inline', 'a', 'style');
    div.innerHTML = '<div class="row d-flex justify-content-center">' +
        '<a onclick="confirmar()" class="btn btn-outline-light px-2 mb-3" style="text-align: center; max-width: 850px;">Confirme los datos</a>' +
        '</div>';
    document.getElementById('confirmar').appendChild(div);
}

function llenarNuevo() {
    var arrayEntradas = [];
    var arraySalidas = [];
    var arrayConjunto1 = [];
    var arrayReturn = [];
    var count1 = 1;
    let numero = document.getElementById("Automata1").value;

    while (count1 <= numero) {
        var automata1 = document.getElementById("a1valor" + count1).value;
        var p = document.getElementById("A1inicial" + count1).checked;
        var f = document.getElementById("A1final" + count1).checked;
        if (p == true && f == false) {
            arrayEntradas.push(automata1);
            console.log("arrayEntrada1 :", arrayEntradas);
        } else {
            if (p == false && f == true) {
                arraySalidas.push(automata1);
                console.log("arraySalida1 :", arraySalidas);
            }
        }
        arrayConjunto1.push(automata1);
        count1++;
    }
    console.log("Estos Son Los Estados Para El Automata N°1 :", arrayConjunto1);
    arrayReturn.push(arrayConjunto1);
    arrayReturn.push(arrayEntradas);
    arrayReturn.push(arraySalidas);
    return arrayReturn;
}

function llenarLENAFD() {
    var leEntrada = document.getElementById("nEntradas").value;
    var arraylenguaje = [];
    var ArrayDefinitivo = [];
    var contador = 1;

    while (contador <= leEntrada) {
        var lenguaje = document.getElementById("lenENvalor" + contador).value;
        arraylenguaje.push(lenguaje);
        contador++;
    }
    ArrayDefinitivo.push(arraylenguaje);
    return ArrayDefinitivo;
}

function llenarLEN() {
    var leEntrada = document.getElementById("nEntradas").value;
    var arraylenguaje = [];
    var ArrayDefinitivo = [];
    var contador = 1;
    while (contador <= leEntrada) {
        var lenguaje = document.getElementById("lenENvalor" + contador).value;
        arraylenguaje.push(lenguaje);
        contador++;
    }
    ArrayDefinitivo.push(arraylenguaje);
    return ArrayDefinitivo;
}

var transiciones0 = ['Entrada', 'Lectura', 'Destino'];
var transiciones = ['Entrada', 'Lectura', 'Destino', 'Ingresar a la Pila', 'Sacar elemento'];

const tablaTransicion1 = document.querySelector("#tablaTransicion1");
const tablaTransicion2 = document.querySelector("#tablaTransicion2");

function TablaTransicion(arrayConjunto, arraylenguaje, tablaTransicion1) {
    var arrayTra = [];
    var tablaPadre = document.createElement('table'),
        filaTitulo = document.createElement('tr');
    tablaPadre.style.marginLeft = "150px";
    tablaPadre.style.paddingBottom = "80px";
    tablaPadre.style.paddingTop = "80px";
    for (let i = 0; i < transiciones0.length; i++) {
        var colTitulo = document.createElement('td');
        colTitulo.className = 'formatoTablaTitulo ';
        colTitulo.textContent = transiciones0[i];
        colTitulo.style.width = "100px";
        colTitulo.style.height = "30px";
        colTitulo.style.backgroundColor = "#2092af";
        colTitulo.style.textAlign = "center";
        filaTitulo.appendChild(colTitulo);
    }
    tablaPadre.appendChild(filaTitulo);
    for (let i = 0; i < arrayConjunto.length; i++) {
        for (let j = 0; j < arraylenguaje.length; j++) {
            var filaDatos = document.createElement('tr'),
                colEstados = document.createElement('td'),
                collenguaje = document.createElement('td'),
                colInput = document.createElement('td');
            var input = document.createElement('input');
            filaDatos.style.width = "70px";
            filaDatos.style.height = "30px";
            filaDatos.style.backgroundColor = "#2092af5b";
            filaDatos.style.textAlign = "center";
            filaDatos.style.borderColor = "#1a1a1a";
            filaDatos.style.marginBottom = "10px";
            colEstados.className = 'formatoTabla';
            colEstados.textContent = arrayConjunto[i];
            collenguaje.className = 'formatoTabla';
            collenguaje.textContent = arraylenguaje[j];
            input.className = 'forma-control';
            input.setAttribute('placeholder', 'Estado Destino');
            input.setAttribute('type', 'text');
            input.style.width = "125px";
            input.id = `${arrayConjunto[i]}-${arraylenguaje[j]}`;
            arrayTra.push(input.id);
            colInput.appendChild(input);
            filaDatos.appendChild(colEstados);
            filaDatos.appendChild(collenguaje);
            filaDatos.appendChild(colInput);
            tablaPadre.appendChild(filaDatos);
        }
    }
    tablaTransicion1.appendChild(tablaPadre);

    return arrayTra;
}

function confirmar() {
    var aux1 = llenarNuevo();
    var aux = llenarLEN();
    TablaTransicion(aux1[0], aux[0], tablaTransicion1);
}

function llenarTransicion1() {
    var aux = llenarNuevo()[0];
    var len = llenarLEN()[0];
    var arrayTransiciones = [];

    for (let i = 0; i < aux.length; i++) {
        for (let j = 0; j < len.length; j++) {
            var t1 = document.getElementById(`${aux[i]}-${len[j]}`).value;
            arrayTransiciones.push(t1);
        }
    }
    console.log("Las Transiciones Son :", arrayTransiciones);

    return arrayTransiciones;
}

function confirmarTRA() {
        console.log("entro a validador AFD");
        var aux1 = validador1();
        if (aux1 === 0) {
            return 0;
        } else {
            llenarTransicion1();
            primeraQuintuplaAFD();
            transicionCompleta();
        }
}

function primeraQuintuplaAFD() {
    var conjunto1 = llenarNuevo()[0];
    var entrada1 = llenarNuevo()[1];
    var salida1 = llenarNuevo()[2];
    var lenguaje = llenarLEN()[0];
    var transicion1 = transicionCompleta()[0];

    console.log("conjunto:", conjunto1);
    console.log("entrada:", entrada1);
    console.log("salidas", salida1);
    console.log("lenguaje:", lenguaje);
    console.log("transicion1:", transicion1);


    const output1 = document.querySelector("#primeraQuintupla1");
    const output2 = document.querySelector("#primeraQuintupla2");
    const output3 = document.querySelector("#primeraQuintupla3");
    const output4 = document.querySelector("#primeraQuintupla4");
    const output5 = document.querySelector("#primeraQuintupla5");


    output1.textContent = (`El conjunto Q de estados es:  [${conjunto1}]:`);
    output1.className = "pt-4";
    output2.textContent = (`El estado inicial es:  [${entrada1}]`);
    output3.textContent = (`El conjunto de salidas del automata 1 es:  [${salida1}]`);
    output4.textContent = (`El alfabeto asociado es:  [${lenguaje}]:`);
    output5.textContent = (`La transicion 1 es:  [${transicion1}]:`);
    output5.className = "pb-4"

}

function validador1() {
    var arrayvali = llenarNuevo()[0];
    var transi = llenarTransicion1();
    var contador = 0;
    var aux1;
    for (let i = 0; i < arrayvali.length; i++) {
        aux1 = arrayvali[i];
        for (let j = 0; j < transi.length; j++) {
            if (transi[j] === "" || transi[j] === " " || transi[j] === "  " || transi[j] === "   ") {
                window.alert("Por favor llenar el/los Destino(s) faltantes en el Automata  N°1!");
                return 0;
            } else if (aux1 === transi[j]) {
                contador++;
            }
        }
    }
    if (contador !== transi.length) {
        window.alert("Hay un estado que no existe o puede haber un espacio(s) extra(s), Por favor reingresa tu(s) opción(es) para el Automata N°1!");
        return 0;
    }
}

function validador3() {
    var arrayvali = llenarNuevo()[0];
    var transi = llenarTransicion1();
    var contador = 0;
    var contador2 = 0;
    var aux1;
    for (let k = 0; k < transi.length; k++) {
        if (transi[k] === "@" || transi[k] === "Z" || transi[k] === "z") {
            contador2++;
        }
    }
    for (let i = 0; i < arrayvali.length; i++) {
        aux1 = arrayvali[i];
        for (let j = 0; j < transi.length; j++) {
            if (transi[j] === "" || transi[j] === " " || transi[j] === "  " || transi[j] === "   ") {
                window.alert("Por favor llenar el/los Destino(s) faltantes en el Automata  N°1!");
                return 0;
            } else if (aux1 === transi[j]) {
                contador++;
            }
        }
    }
    if ((contador + contador2) !== transi.length) {
        window.alert("Hay un estado que no existe o puede haber un espacio(s) extra(s), Por favor reingresa tu(s) opción(es) para el Automata N°1!");
        return 0;
    }
}

function TablaTransicionVacia(arrayConjunto, arraylenguaje, tablaTransicion1) {
    var arrayTra = [];
    var tablaPadre = document.createElement('table'),
        filaTitulo = document.createElement('tr');
    tablaPadre.style.marginLeft = "50px";
    tablaPadre.style.marginRight = "50px";
    tablaPadre.style.paddingBottom = "80px";
    tablaPadre.style.paddingTop = "80px";
    for (let i = 0; i < transiciones.length; i++) {
        var colTitulo = document.createElement('td');
        colTitulo.className = 'formatoTablaTitulo';
        colTitulo.textContent = transiciones[i];
        colTitulo.style.width = "100px";
        colTitulo.style.height = "30px";
        colTitulo.style.backgroundColor = "#2092af";
        colTitulo.style.textAlign = "center";
    }

    for (let i = 0; i < arrayConjunto.length; i++) {
        for (let j = 0; j < arraylenguaje.length; j++) {
            var filaDatos = document.createElement('tr'),
                colEstados = document.createElement('td'),
                collenguaje = document.createElement('td'),
                colInput = document.createElement('td');
            var input = document.createElement('input');
            filaDatos.style.width = "100px";
            filaDatos.style.height = "30px";
            filaDatos.style.backgroundColor = "#2092af5b";
            filaDatos.style.textAlign = "center";
            filaDatos.style.borderColor = "#1a1a1a";
            filaDatos.style.marginBottom = "10px";
            colEstados.className = 'formatoTabla';
            colEstados.textContent = arrayConjunto[i];
            collenguaje.className = 'formatoTabla';
            collenguaje.textContent = arraylenguaje[j];
            input.className = 'forma-control';
            input.setAttribute('placeholder', 'Estado Destino');
            input.setAttribute('type', 'text');
            input.id = `${arrayConjunto[i]}-${arraylenguaje[j]}`;
            arrayTra.push(input.id);
        }

    }
    return arrayTra;
}

function transicionCompleta() {
    var array1 = [];
    var arrayresultante = [];
    const tablaTransicion4 = document.querySelector("#tablaTransicion3");
    var aux1 = llenarNuevo();
    var aux = llenarLEN();
    var idTra1 = TablaTransicionVacia(aux1[0], aux[0], tablaTransicion4);
    var transicion1 = llenarTransicion1();
    for (let i = 0; i < idTra1.length; i++) {
        var conca = [idTra1[i] + " --> " + transicion1[i]];
        array1.push(conca);
    }
    console.log("Este Es El Array1: ", array1);
    arrayresultante.push(array1);
    arrayresultante.push(idTra1);
    arrayresultante.push(transicion1);
    return arrayresultante;
}

function ObtenerDatos() {
    var transicion1 = llenarTransicion1();
    var aux1 = [];
    var aux2 = llenarLENAFD()[0]; // x y

    var ayuda1;
    var ayuda2;
    var conjunto1 = llenarNuevo()[0];
    var aux3 = [],
        aux4 = [];
    for (let i = 0; i < conjunto1.length; i++) {
        for (let j = 0; j < aux2.length; j++) {
            ayuda1 = conjunto1[i];
            aux3.push(ayuda1);
            console.log("AUX3 VALORES =", aux3);
            ayuda2 = aux2[j];
            aux4.push(ayuda2);
        }
    }
    aux1.push(aux3); //Conjunto1 [0]
    aux1.push(aux4); //Lenguaje1 [1]
    aux1.push(transicion1); //transicion1 [2]

    return aux1;
}

function ER2() {
    var lenguaje = ObtenerDatos()[1];
    var conjunto = ObtenerDatos()[0];
    var transicion = ObtenerDatos()[2];
    var conjunto1 = llenarNuevo()[0];
    var Er = "No hay ER que lo defina";
    console.log("valores a trabajar =", conjunto, lenguaje, transicion);
    for (let i = 0; i < conjunto.length; i++) {
        if (conjunto[i] === transicion[i]) {
            transicion[i] = "*";
            console.log(i, " = ", transicion[i]);
        }
    }
    for (let i = 0; i < conjunto1.length; i++) {
        for (let j = 0; j < transicion.length; j++) {
            if (conjunto1[i] === transicion[j]) {
                var NuevosLenguaje = [];
                var NuevasSalidas = [];
                let p = llenarLENAFD()[0].length;
                while (p > 0) {
                    for (let m = 0; m < conjunto.length; m++) {
                        console.log("Transicion que ingresa = ", transicion[m]);
                        if (conjunto[m] === conjunto1[i]) {
                            if (transicion[m] === "*") {
                                NuevosLenguaje.push(lenguaje[m]);
                                NuevasSalidas.push(transicion[m]);
                                p--;
                            } else if (transicion[m].length > 2) {
                                NuevosLenguaje.push(lenguaje[m]);
                                NuevasSalidas.push(transicion[m]);
                                p--;
                            } else {
                                NuevosLenguaje.push(lenguaje[m]);
                                NuevasSalidas.push("*");
                                p--;
                            }
                        }
                    }
                }
                transicion[j] = "";
                for (let h = 0; h < NuevosLenguaje.length; h++) {
                    transicion[j] = transicion[j] + NuevosLenguaje[h] + NuevasSalidas[h];
                    console.log(transicion[j].split("").sort());
                    console.log("Valores = ", transicion[j]);
                    Er = transicion[j];
                }
            }
        }
    }
    return Er;


}

function imprimirEr() {
    var expresion = ER2();
    const output1 = document.querySelector("#LenguajeAsociado1");
    const output2 = document.querySelector("#LenguajeAsociado2");
    output1.textContent = (`Expresion regular del Automata`);
    output1.className = "mb-3 pt-4";
    output2.textContent = (`Er = [${expresion}]`);
    output2.className = "mb-4 pb-4";
}
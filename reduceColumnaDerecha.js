//funcion para reducir la PRIMERA fila a la derecha
function reduceColumna1Derecha(){
    var c1 = document.getElementById('col1');
    var c2 = document.getElementById('col21');
    var c3 = document.getElementById('col31');
    var c4 = document.getElementById('col41');
    var columnas = [c4,c3,c2,c1];
    llenos = actualizaLlenos(columnas);
    //1º OPCION -> Solo hay uno lleno, se mueve a la derecha del todo
    if (llenos.length == 1) {
        mueveNodo(llenos[0], c4);
    //2º OPCION:
    }else if (llenos.length == 2) {
        if (compara(llenos[0], llenos[1])) {
            transformaNodo(llenos[0],llenos[1]);
            mueveNodo(llenos[0],c4);
        }else {
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
    //3º OPCION:
        }
    } else if (llenos.length == 3) {
        if (compara(llenos[0], llenos[1])) {
            transformaNodo(llenos[0],llenos[1]);
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[2],c3);
        }else if(compara(llenos[1], llenos[2])){
            transformaNodo(llenos[1],llenos[2]);
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
        }else {
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
            mueveNodo(llenos[2],c2);
        }
    //4º OPCION:
    } else if (llenos.length == 4) {
        if (compara(llenos[0], llenos[1])) {
            transformaNodo(llenos[0],llenos[1]);
            mueveNodo(llenos[0],c4);
            if (compara(llenos[2], llenos[3])) {
                transformaNodo(llenos[2],llenos[3]);
                mueveNodo(llenos[2],c3);
            }else {
                mueveNodo(llenos[2],c3);
                mueveNodo(llenos[3],c2);
            }
        }else if(compara(llenos[1], llenos[2])){
            transformaNodo(llenos[1],llenos[2]);
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
            mueveNodo(llenos[3],c2);

        }else if(compara(llenos[2], llenos[3])){
            transformaNodo(llenos[2],llenos[3]);
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
            mueveNodo(llenos[2],c2);
        }
    }
}

//funcion para reducir la SEGUNDA fila a la derecha
function reduceColumna2Derecha(){
    var c1 = document.getElementById('col12');
    var c2 = document.getElementById('col22');
    var c3 = document.getElementById('col32');
    var c4 = document.getElementById('col42');
    var columnas = [c4,c3,c2,c1];
    llenos = actualizaLlenos(columnas);
    //1º OPCION -> Solo hay uno lleno, se mueve a la derecha del todo
    if (llenos.length == 1) {
        mueveNodo(llenos[0], c4);
    //2º OPCION:
    }else if (llenos.length == 2) {
        if (compara(llenos[0], llenos[1])) {
            transformaNodo(llenos[0],llenos[1]);
            mueveNodo(llenos[0],c4);
        }else {
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
    //3º OPCION:
        }
    } else if (llenos.length == 3) {
        if (compara(llenos[0], llenos[1])) {
            transformaNodo(llenos[0],llenos[1]);
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[2],c3);
        }else if(compara(llenos[1], llenos[2])){
            transformaNodo(llenos[1],llenos[2]);
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
        }else {
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
            mueveNodo(llenos[2],c2);
        }
    //4º OPCION:
    } else if (llenos.length == 4) {
        if (compara(llenos[0], llenos[1])) {
            transformaNodo(llenos[0],llenos[1]);
            mueveNodo(llenos[0],c4);
            if (compara(llenos[2], llenos[3])) {
                transformaNodo(llenos[2],llenos[3]);
                mueveNodo(llenos[2],c3);
            }else {
                mueveNodo(llenos[2],c3);
                mueveNodo(llenos[3],c2);
            }
        }else if(compara(llenos[1], llenos[2])){
            transformaNodo(llenos[1],llenos[2]);
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
            mueveNodo(llenos[3],c2);

        }else if(compara(llenos[2], llenos[3])){
            transformaNodo(llenos[2],llenos[3]);
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
            mueveNodo(llenos[2],c2);
        }
    }
}

//funcion para reducir la TERCERA fila a la derecha
function reduceColumna3Derecha(){
    var c1 = document.getElementById('col13');
    var c2 = document.getElementById('col23');
    var c3 = document.getElementById('col33');
    var c4 = document.getElementById('col43');
    var columnas = [c4,c3,c2,c1];
    llenos = actualizaLlenos(columnas);
    //1º OPCION -> Solo hay uno lleno, se mueve a la derecha del todo
    if (llenos.length == 1) {
        mueveNodo(llenos[0], c4);
    //2º OPCION:
    }else if (llenos.length == 2) {
        if (compara(llenos[0], llenos[1])) {
            transformaNodo(llenos[0],llenos[1]);
            mueveNodo(llenos[0],c4);
        }else {
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
    //3º OPCION:
        }
    } else if (llenos.length == 3) {
        if (compara(llenos[0], llenos[1])) {
            transformaNodo(llenos[0],llenos[1]);
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[2],c3);
        }else if(compara(llenos[1], llenos[2])){
            transformaNodo(llenos[1],llenos[2]);
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
        }else {
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
            mueveNodo(llenos[2],c2);
        }
    //4º OPCION:
    } else if (llenos.length == 4) {
        if (compara(llenos[0], llenos[1])) {
            transformaNodo(llenos[0],llenos[1]);
            mueveNodo(llenos[0],c4);
            if (compara(llenos[2], llenos[3])) {
                transformaNodo(llenos[2],llenos[3]);
                mueveNodo(llenos[2],c3);
            }else {
                mueveNodo(llenos[2],c3);
                mueveNodo(llenos[3],c2);
            }
        }else if(compara(llenos[1], llenos[2])){
            transformaNodo(llenos[1],llenos[2]);
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
            mueveNodo(llenos[3],c2);

        }else if(compara(llenos[2], llenos[3])){
            transformaNodo(llenos[2],llenos[3]);
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
            mueveNodo(llenos[2],c2);
        }
    }
}

//funcion para reducir la CUARTA fila a la derecha
function reduceColumna4Derecha(){
    var c1 = document.getElementById('col14');
    var c2 = document.getElementById('col24');
    var c3 = document.getElementById('col34');
    var c4 = document.getElementById('col44');
    var columnas = [c4,c3,c2,c1];
    llenos = actualizaLlenos(columnas);
    //1º OPCION -> Solo hay uno lleno, se mueve a la derecha del todo
    if (llenos.length == 1) {
        mueveNodo(llenos[0], c4);
    //2º OPCION:
    }else if (llenos.length == 2) {
        if (compara(llenos[0], llenos[1])) {
            transformaNodo(llenos[0],llenos[1]);
            mueveNodo(llenos[0],c4);
        }else {
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
    //3º OPCION:
        }
    } else if (llenos.length == 3) {
        if (compara(llenos[0], llenos[1])) {
            transformaNodo(llenos[0],llenos[1]);
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[2],c3);
        }else if(compara(llenos[1], llenos[2])){
            transformaNodo(llenos[1],llenos[2]);
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
        }else {
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
            mueveNodo(llenos[2],c2);
        }
    //4º OPCION:
    } else if (llenos.length == 4) {
        if (compara(llenos[0], llenos[1])) {
            transformaNodo(llenos[0],llenos[1]);
            mueveNodo(llenos[0],c4);
            if (compara(llenos[2], llenos[3])) {
                transformaNodo(llenos[2],llenos[3]);
                mueveNodo(llenos[2],c3);
            }else {
                mueveNodo(llenos[2],c3);
                mueveNodo(llenos[3],c2);
            }
        }else if(compara(llenos[1], llenos[2])){
            transformaNodo(llenos[1],llenos[2]);
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
            mueveNodo(llenos[3],c2);

        }else if(compara(llenos[2], llenos[3])){
            transformaNodo(llenos[2],llenos[3]);
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
            mueveNodo(llenos[2],c2);
        }
    }
}

function reduceColumnasDerecha(){
    reduceColumna1Derecha();
    reduceColumna2Derecha();
    reduceColumna3Derecha();
    reduceColumna4Derecha();

    generaNumero();
}
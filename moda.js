const lista1 = [
    1,
    2,
    3,
    4,
    5,
    4,
    3,
    2,
    2,
    3,
];

const lista1count = {};

lista1.map(
    function(elemento){
        if (lista1count[elemento]) {
            lista1count[elemento] += 1;
        }else {
            lista1count[elemento] = 1;}});
//    
// 



            const lista1Array=Object.entries(lista1Count).sort(function(elementoA,elementoB){return elementoA[1]-elementoB[1];});const moda=lista1Array[lista1Array.length-1];

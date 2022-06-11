//Helpers
function calcularMediaAritmetica (lista) {
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};
//calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
};

// mediana general
const salariosMex = Mexico.map (
    function (persona){
        return persona.salary;
    }
);

const salariosMexSorted = salariosMex.sort (
    function (salaryA, salaryB ){
        return salaryA - salaryB
    }
);

function esPar(numero) {
    return (numero % 2 === 0);
}

const medianaGeneralMex = medianaSalarios(salariosMexSorted);
//mediana del top 10%

const spliceStart = (salariosMexSorted.length * (100 - 10) / 100);
const spliceCount = salariosMexSorted.length - spliceStart;

const salariosMextop10 = salariosMexSorted.splice(spliceStart, spliceCount);

const medianaTop10Mex = medianaSalarios(salariosMextop10);

console.log ({
    medianaGeneralMex, 
    salariosMextop10,
});
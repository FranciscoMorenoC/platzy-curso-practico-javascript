
function calcularMediaAritmetica (lista) {
    //     let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista [i];
    // }
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function calcularPromedio (precios) {
    let sumarPrecios = 0;
for (let a = 0; a < precios.length; a++) {
        sumarPrecios = sumarPrecios + precios [a];
    }


    const precioPromedio = sumarPrecios / precios.length;
    return precioPromedio;
}

function calcularPromedioAnimales (animales) {
    const todosAnimales = animales.reduce(
        function (animalesTotales = 0, nuevoAnimal){
            return animalesTotales + nuevoAnimal;
        }
    )
    const promedioAnimales = todosAnimales / animales.length;
    return promedioAnimales;
}

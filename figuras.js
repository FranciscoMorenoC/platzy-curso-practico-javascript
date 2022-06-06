//codigo del cuadrado
    console.group("cuadrado");

    function perimetroCuadrado(lado) {
        return  lado * 4;
    } 

    function areaCuadrado(lado) {
        return  lado * lado;
    } 

    console.groupEnd("cuadrado");



//codigo del triangulo

    console.group("triangulos");

    function perimetroTriangulo (lado1, lado2, base) {
        return lado1 + lado2 + base;
    } 

    function areaTriangulo (base, altura) {
        return (base * altura) / 2;
    }

    console.groupEnd("triangulos");




//codigo circunferencia

    // diametro
    function diametroCirculo (radio) {
        return radio * 2
    }

    // PI
    const PI = Math.PI; 
    console.log("PI es: " + PI);

    // circunferencia
    function perimetroCirculo (radio) {
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    }

    //area
    function areaCirculo(radio) {
        return (radio * radio) * PI;
    }


    console.groupEnd ("circulos");


//interaccion con html
//Calculo del cuadrado
function calcularPerimetroCuadrado () {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado () {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

// Calculo del triangulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputBaseTriangulo");
    const value3 = Number(base.value);
    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El perimetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("InputBaseTriangulo");
    const value3 = Number(base.value);
    const altura = document.getElementById("alturaTriangulo");
    const value4 = Number(altura.value);
    const area = areaTriangulo(value3, value4);
    alert("El area del triangulo es: " + area);
}

//Calculo del circulo

function calcularDiametroCIrculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const diametro = diametroCirculo(value);
    alert("el diametro del circulo es: " + diametro);

}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area =  areaCirculo(value);
    alert("el area del circulo es: " + area);

}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value; 
    
    const perimetro =  perimetroCirculo(value);
    alert("el perimetro del circulo es: " + perimetro);
}

//


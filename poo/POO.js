/*
Programacion orienteada a objetos (POO)

paradigma= manera en la que se puede hacer algo especifico
paradigma de programacion= la forma o manera en la que puedo programar algo.
Condicion con reglas que se debe seguir al piede la letra
Algo ya establecido
Algo qu cambia o revoluciona


///Progamar programacion orientada objetos (el codigo no se crea ni se destruye solo se transforma)

Otras formas de programar:
Programacion orientada objetos
Programacion funcional
Programacion imperativa
Programacion declarativa

Pilares fundamentales de la programacion

De POO
    -polimorfismo
    -herencia
    -encapsulamiento
    -abstraccion

//Clases (Plantillas para hacer muchos objetos)
//Objetos 
    -Atributos (Lo que tengo "ojitos pispiretos")
    -Metodos (Lo que puedo hacer con lo que tengo - mirar lo bello de la vida)


*/

//Ejemplo del gatito

//propiedades = Variables o constantes

const color = "Gris";
var tamanio ="Chiquito";
var edad = 5;
var cicatrices = true;
const raza = "angora";
var caracter = "Agresivo";

//metodos funciones

function comer(){}
function treparArboles(){}
function maullar(){}
function gruñir(){}
function dormir(){}
function correateraPerros(){}

//Precurso de los objetos 
var gato = ['cilantro', 'Agresivo',5,"Angora",true,'Chiquito'];
console.log(typeof(gato));
//lo de arrbia es un objeto pero no tenemos contexto

//Evolucion de los arreglos para tener contexto
var gatoObjeto={
    nombre:"Cilantro",
    edad: 5,
    caracter: "agresivo",
    raza: "Angora",

}
console.log(typeof(Cilantro));
console.log(gatoObjeto.nombre);
console.log(gatoObjeto.caracter);

var perejl = {
    nombre: " Prejil",
    edad: 10,
    caracter: "Feliz",
    raza: "siames",
}

var cebollita = {
    nombre: "Garfield",
    edad: 7,
    caracter: "perezoso",
    raza: "naranja",
}

/*
clases para agilizar este proceso en plantillas

usmaos class para las plantillas
*/
//1. Deefino mi clase con la palabra resrevada class
class gato2{

    //2.- definir mis propiedades o atributos como variables para despues ponerle valores
    nombre="";
    edad= 0;
    carácter= "";
    raza="";

    //4.- Agregar constructores ***basado en los atributos que ya defeni en la clase
/*
// Clases
//Atributos
//Constructores
//Metodos o acciones

*/
    //4.- Agregar constructores ***basado en los atributos que ya defeni en la clase
    //funcion especial para contruir donde necesito esos paramaetros
    constructor(nombre,edad,raza,caracter){
        this.nombre=nombre;
        this.edad=edad;
        this.raza=raza;
        this.caracter=caracter;

    }

    //3.- Definir los metodos que seran definidos como funciones o acciones
    maullar(){
        console.log("Miau");
    }
    dormir(){
        console.log("zzzzzzz");
    }
    ronronerar(){
        console.log("rrrrrrrrrrrrrr");
    }
    
}

//5.- Para emepzar a crear o instanciar objetos (gatos),vamos a utilizar la palabra reservada new

var Gatoconbotas = new gato2("Gato Con Botas",9, "Naranja", "Busca problemas", "dormilon");
var Felix = new gato2("Felix",4,"caricaturas","amistoso");
var GatoAmarillo = new gato2("Gato Amarillo", 3, "Amarilla", "Tranquilo");
var GatoRojo = new gato2("Gato Rojo", 4, "Siames", "Enojon");
var SrGato = new gato2 ("Sr Gato", 6, "Egipcio", "Dosil");


console.log(Gatoconbotas);
Gatoconbotas.ronronerar();
Gatoconbotas.dormir();
Gatoconbotas.maullar();

console.log(GatoAmarillo);



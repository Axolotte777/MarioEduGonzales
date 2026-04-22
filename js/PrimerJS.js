// Console.log nos sirve para depurar y probar nuestras salidas
console.log("Hola mundo desde JavaScript");
//alert nos sirve para mostrarle un alert al usuario
alert("Virus incoming");

function cambiarCarita(){
    document.getElementById("carita").src="images/sad.jpg";
    alert("Uma triste...??");

}
function feliz(){
    document.getElementById("carita").src="images/happy.jpg";
    document.getElementById("TituloJS").textContent="Ejemplo de emoción";
}
function nombresNav() {
    document.getElementById("m1").textContent = "Hogar";
    document.getElementById("m2").textContent = "Listas";
    document.getElementById("m3").textContent = "Tablas";
    document.getElementById("m4").textContent = "Js ejemlos";
    document.getElementById("m5").textContent = "Js tarea";
    document.getElementById("m6").textContent = "quinta pagina";
    document.getElementById("m7").textContent = "Personal";
}
function cambiarTitulo(){
    document.getElementById("titulo").textContent="Practicando JS";
    document.getElementById("titulo").style.color="#5a4581" 
    document.getElementById("logoSenati").src="images/senati3.png";
    document.getElementById("encabezado").style.background="#b399d1"
}
function suma(){
    let num1 = 6;
    let num2 = 7;
    let suma = num1+num2;
    alert("la suma es de" +suma);
}
function eje01(){
    let p1 = 10;
    
}

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
    document.getElementById("titulo").style.color="#5a4581";
    document.getElementById("logoSenati").src="images/senati2.jpg";
    document.getElementById("encabezado").style.backgroundColor="#b399d1";
}
function suma(){
    let num1 = 6;
    let num2 = 7;
    let suma = num1+num2;
    alert("la suma es de" +suma);
}
function eje01(){
    let p1 = 10;
    let p2 = 5;
    let p3 = 15;
    let c1 = 3;
    let c2 = 18;
    let c3 = 6;
    let Stotal, total;
    Stotal = (p1*c1)+(p2*c2)+(p3*c3);
    if(Stotal>100){
        total = Stotal*0.95;
        alert("Su compra lleva descuento");
    }else{
        total = Stotal;
    }
    alert("El total a Pagar es de: S/."+total);

}
function eje02(){
    let amigos = 10;
    let total = 100;
    let cuota = total/amigos;
    alert("Son "+amigos+" amigos"+ " y la cuota del total S/."+total+" es de : S/."+cuota);
}
function eje09(){
    let distanciaR =70
    let tarifaI = 10
    let tarifaporKM = 3
    Stotal = (10+distanciaR*3)
    alert("El total seria de: S/."+Stotal)
}
function mambodance(){
    document.getElementById("mambo").src="images/mambodance.gif";
    alert("Mambo Dance");
}
function mambo(){
    document.getElementById("mambo").src="images/mambo.jpg";
    document.getElementById("TituloJS").textContent="Dance Dance";
    alert("Mambo ");
}
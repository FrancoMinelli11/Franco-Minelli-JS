// let continuar;
// let xB = 1;
// let cantidadBR = xB++;
// let yB = 1;
// let cantidadBA = yB++;
// let zB = 1;
// let cantidadBV = zB++;
// let xP = 1;
// let cantidadJ = xP++;
// let yP = 1;
// let cantidadC = yP++;
// let zP = 1; 
// let cantidadJo = zP++
// const BUZ = true;
// const PANT = true;
// function promos(){
//     do{
//     const OFERTA = prompt("Escriba cuál oferta es la que busca(Buzos - Pantalones - Nada)").toLowerCase().trim();
//     if(OFERTA === "buzos"){
//         alert("Los buzos están a $10000 en efectivo y $12000 con tarjeta")
//         while(BUZ){
//     let tipoBuzo = prompt("¿Cúal color de buzo le gustaría comprar? (Buzo rojo - Buzo azul - Buzo verde - Ninguno)")
//     if(tipoBuzo === "Buzo rojo"){
//         alert(`El artículo ${tipoBuzo} a sido añadido a su compra`);
//         console.log(`Tiene ${cantidadBR++} ${tipoBuzo}`);
//         break
//     }
//     else if(tipoBuzo === "Buzo azul"){
//         alert(`El artículo ${tipoBuzo} a sido añadido a su compra`);
//         console.log(`Tiene ${cantidadBA++} ${tipoBuzo}`);
//         break
//     }
//     else if(tipoBuzo === "Buzo verde"){
//         alert(`El artículo ${tipoBuzo} a sido añadido a su compra`);
//         console.log(`Tiene ${cantidadBV++} ${tipoBuzo}`);
//         break
//     }
//     else if(tipoBuzo === "Ninguno"){
//         break
//     }
//     else if(tipoBuzo != "Buzo rojo" && tipoBuzo != "Buzo azul" && tipoBuzo != "Buzo verde" && tipoBuzo != "Ninguno"){
//         alert("Ingrese un tipo de buzo válido")
//     }
// }
// continuar = prompt("¿Desea seguir comprando?").toLowerCase().trim();
//     }
// }
// while(continuar === "si")
// }
// else if(OFERTA === "pantalones"){
//     alert("Los pantalones están a $7000 en efectivo y $10000 con tarjeta")
//     while (PANT) {
//         let tipoPant = prompt("¿Que tipo de pantalón le gustaría comprar? (Jean - Cargo - Joggin - Ninguno)")
//     if(tipoPant === "Jean"){
//         alert(`El artículo ${tipoPant} a sido añadido a su compra`);
//         console.log(`Tiene ${cantidadJ++} ${tipoPant}`);
//         break
//     }
//     else if(tipoPant === "Cargo"){
//         alert(`El artículo ${tipoPant} a sido añadido a su compra`);
//         console.log(`Tiene ${cantidadC++} ${tipoPant}`);
//         break
//     }
//     else if(tipoPant === "Joggin"){
//         alert(`El artículo ${tipoPant} a sido añadido a su compra`);
//         console.log(`Tiene ${cantidadJo++} ${tipoPant}`);
//         break
//     }
//     else if (tipoPant === "Ninguno"){
//         break
//     }
//     else if(tipoPant != "Jean" && tipoPant != "Joggin" && tipoPant != "Cargo" && tipoBuzo != "Ninguno"){
//         alert("Ingrese un tipo de pantalon válido")
//     }
// }
//     continuar = prompt("¿Desea seguir comprando?").toLowerCase().trim();
// }
// else if(OFERTA !== "buzos" && OFERTA !="pantalones"){
//     break
// }
// alert(`Usted lleva : ${cantidadBR - 1} de buzo rojo, ${cantidadJo - 1} de joggin, ${cantidadC - 1} de cargo, ${cantidadJ - 1} de jean, ${cantidadBA - 1} de buzo azul, ${cantidadBV - 1} de buzo verde`)
// }while (continuar === "si")
// }
function Compra(prenda, tipo, cantidad, medioPago, precio) {
    this.prenda = prenda;
    this.tipo = tipo;
    this.cantidad = cantidad;
    this.medioPago = medioPago;
    this.precio = precio;
    this.productoF = function () {
        console.log(`Usted lleva ${cantidad} de ${prenda} ${tipo} pagando con ${medioPago}`)
    }
}
let elija;
const BUZ = true;
const MET = true;
let comprasArray = [];
do {
    let prenda = prompt("Elija que tipo de prenda desea comprar(Pantalón - Remera - Buzo - Nada)")
    if (prenda == "buzo") {
        let prendaN = prenda;
        let cantidadP;
        let medioPagoP;
        let precioP;
        let tipoP;
        while(BUZ){
        tipoP = prompt("Escriba que color de buzo le gustaría(Rojo - Azul - Verde)").toLowerCase()
        if (tipoP === "rojo" || tipoP === "azul" || tipoP === "verde") {
            while (BUZ) {
                cantidadP = Number(prompt("Escriba cuantos artículos le gustaría llevar(máximo 3)"))
                if (isNaN(cantidadP) || cantidadP > 3 || cantidadP == "") {
                    alert("Ingrese un número menor o igual 3")
                }
                else {
                    while (MET) {
                        medioPagoP = prompt("Escriba método de pago(Tarjeta - Efectivo - Transferencia)").toLowerCase().trim();
                        if (medioPagoP == "tarjeta" || medioPagoP == "efectivo" || medioPagoP == "transferencia") {
                            precioP = 15000
                            break
                        }
                        else {
                            alert("Ingrese un medio de pago válido")
                        }
                    }
                    break
                }
            }
            break
        }
        else{
            alert("Ingrese uno de los colores indicados")
        }
    }
        comprasArray.push(new Compra(prendaN, tipoP, cantidadP, medioPagoP, precioP))
    }
    else if (prenda == "pantalon") {
        let prendaN = prenda;
        let cantidadP;
        let medioPagoP;
        let precioP;
        let tipoP;
        while(BUZ){
            tipoP = prompt("Escriba que tipo de pantalón le gustaría(Jean - Joggin - Cargo)").toLowerCase()
        if (tipoP === "jean" || tipoP === "joggin" || tipoP === "cargo") {
            while (BUZ) {
                cantidadP = Number(prompt("Escriba cuantos artículos le gustaría llevar(máximo 3)"))
                if (isNaN(cantidadP) || cantidadP > 3 || cantidadP == "") {
                    alert("Ingrese un número menor o igual 3")
                }
                else {
                    while (MET) {
                        medioPagoP = prompt("Escriba método de pago(Tarjeta - Efectivo - Transferencia)").toLowerCase().trim();
                        if (medioPagoP == "tarjeta" || medioPagoP == "efectivo" || medioPagoP == "transferencia") {
                            precioP = 20000
                            break
                        }
                        else {
                            alert("Ingrese un medio de pago válido")
                        }
                    }
                    break
                }
            }
            break
        }
        else{
            alert("Ingrese uno de los tipos indicados")
        }
    }
        comprasArray.push(new Compra(prendaN, tipoP, cantidadP, medioPagoP, precioP))
    }
    else if (prenda == "remera") {
        let prendaN = prenda;
        let cantidadP;
        let medioPagoP;
        let precioP;
        let tipoP;
        while(BUZ){
        tipoP = prompt("Escriba color de remera que le gustaría(Rojo - Azul - Verde)").toLowerCase()
        if (tipoP === "rojo" || tipoP === "azul" || tipoP === "verde") {
            while (BUZ) {
                cantidadP = Number(prompt("Escriba cuantos artículos le gustaría llevar(máximo 3)"))
                if (isNaN(cantidadP) || cantidadP > 3 || cantidadP == "") {
                    alert("Ingrese un número menor o igual 3")
                }
                else {
                    while (MET) {
                        medioPagoP = prompt("Escriba método de pago(Tarjeta - Efectivo - Transferencia)").toLowerCase().trim();
                        if (medioPagoP == "tarjeta" || medioPagoP == "efectivo" || medioPagoP == "transferencia") {
                            precioP = 10000
                            break
                        }
                        else {
                            alert("Ingrese un medio de pago válido")
                        }
                    }
                    break
                }
            }
            break
        }
        else{
            alert("Ingrese uno de los colores indicados")
        }
    }
        comprasArray.push(new Compra(prendaN, tipoP, cantidadP, medioPagoP, precioP))
    }
    else{
        break
    }
    elija = prompt("¿Desea agregar algo más?")
} while (elija != "no")

console.log(comprasArray)
for (let productos of comprasArray) {
    let precioFinal = productos.cantidad * productos.precio;
    alert(`Usted lleva ${productos.cantidad} unidades de ${productos.prenda} ${productos.tipo} y pagará mediante ${productos.medioPago}`)
    alert(`Precio final = $${precioFinal}`)
    const PRECIO_FINAL = comprasArray.filter((precio) => productos.precio += productos.precio)
    console.log(PRECIO_FINAL)
}
let compra1 = new Compra("Buzo", "Rojo", 2, "Tarjeta")
compra1.productoF()
let compra2 = new Compra("Pantalón", "Cargo", 1, "Efectivo")
compra2.productoF()


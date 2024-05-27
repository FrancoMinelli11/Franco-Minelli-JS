let continuar;
let xB = 1;
let cantidadBR = xB++;
let yB = 1;
let cantidadBA = yB++;
let zB = 1;
let cantidadBV = zB++;
let xP = 1;
let cantidadJ = xP++;
let yP = 1;
let cantidadC = yP++;
let zP = 1; 
let cantidadJo = zP++
let suma;
const BUZ = true
const PANT = true;
function promos(){
    do{
    let oferta = prompt("Escriba cuál oferta es la que busca(Buzos - Pantalones - Nada)").toLowerCase().trim();
    if(oferta === "buzos"){
        alert("Los buzos están a $10000 en efectivo y $12000 con tarjeta")
        while(BUZ){
    let tipoBuzo = prompt("¿Cúal color de buzo le gustaría comprar? (Buzo rojo - Buzo azul - Buzo verde - Ninguno)")
    if(tipoBuzo === "Buzo rojo"){
        alert(`El artículo ${tipoBuzo} a sido añadido a su compra`);
        console.log(`Tiene ${cantidadBR++} ${tipoBuzo}`);
        break
    }
    else if(tipoBuzo === "Buzo azul"){
        alert(`El artículo ${tipoBuzo} a sido añadido a su compra`);
        console.log(`Tiene ${cantidadBA++} ${tipoBuzo}`);
        break
    }
    else if(tipoBuzo === "Buzo verde"){
        alert(`El artículo ${tipoBuzo} a sido añadido a su compra`);
        console.log(`Tiene ${cantidadBV++} ${tipoBuzo}`);
        break
    }
    else if(tipoBuzo === "Ninguno"){
        break
    }
    else if(tipoBuzo != "Buzo rojo" && tipoBuzo != "Buzo azul" && tipoBuzo != "Buzo verde" && tipoBuzo != "Ninguno"){
        alert("Ingrese un tipo de buzo válido")
    }
}
continuar = prompt("¿Desea seguir comprando?").toLowerCase().trim();
    }
else if(oferta === "pantalones"){
    alert("Los pantalones están a $7000 en efectivo y $10000 con tarjeta")
    while (PANT) {
        let tipoPant = prompt("¿Que tipo de pantalón le gustaría comprar? (Jean - Cargo - Joggin - Ninguno)")
    if(tipoPant === "Jean"){
        alert(`El artículo ${tipoPant} a sido añadido a su compra`);
        console.log(`Tiene ${cantidadJ++} ${tipoPant}`);
        break
    }
    else if(tipoPant === "Cargo"){
        alert(`El artículo ${tipoPant} a sido añadido a su compra`);
        console.log(`Tiene ${cantidadC++} ${tipoPant}`);
        break
    }
    else if(tipoPant === "Joggin"){
        alert(`El artículo ${tipoPant} a sido añadido a su compra`);
        console.log(`Tiene ${cantidadJo++} ${tipoPant}`);
        break
    }
    else if (tipoPant === "Ninguno"){
        break
    }
    else if(tipoPant != "Jean" && tipoPant != "Joggin" && tipoPant != "Cargo" && tipoBuzo != "Ninguno"){
        alert("Ingrese un tipo de pantalon válido")
    }
}
    continuar = prompt("¿Desea seguir comprando?").toLowerCase().trim();
}
else if(oferta !== "buzos" && oferta!="pantalones"){
    break
}
alert(`Usted lleva : ${cantidadBR - 1} de buzo rojo, ${cantidadJo - 1} de joggin, ${cantidadC - 1} de cargo, ${cantidadJ - 1} de jean, ${cantidadBA - 1} de buzo azul, ${cantidadBV - 1} de buzo verde`)
}while (continuar === "si")
}
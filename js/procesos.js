function init(){
 
    var es;
    var time;
    var sex;
    var edad;
    var monto;
    var bandera = false;

    //CAPTURA Y VALIDACION DE DATOS

    //SI ES ESTUDIANTE
    do{
        es = prompt("¿Es estudiante? S/N");
        if(es!="S" && es!="N" && es!="s" && es!="n"){
            alert("Digite una opcion correcta");
        }
    }while(es != "S" && es != "N" && es!="s" && es!="n");

    //EL SEXO
    do{
        sex = prompt("Digite su sexo: H/M");
        if(sex!="M" && sex!="H"){
            alert("Digite una opcion valida");
        }
    }while(sex!="M" && sex!="H")

    //TIEMPO DEL PRESTAMO
    do{
        time = prompt("¿Por cuanto tiempo hará el prestamo? 6, 12 y 18 meses");
        if(time!="6" && time!="12" && time !="18"){
            alert("El prestamos solo puede ser entre 6, 12 y 18 meses");
        }
    }while(time!="6" && time!="12" && time !="18");
    //EDAD
    do{
        edad = parseFloat(prompt("Digite su edad"));
        if(edad<18){
            alert("Debe ser mayor de edad");
        }
    }while(edad<18);

    //CANTIDAD
    do{
        if(es == "S" || es == "s"){
            alert("Puede prestar una cantidad maxima de 2000 dolares, porque es estudiante");
        }
        monto = prompt("¿Cual es el monto a prestar?");
        if(es == "S" || es == "s" && monto<2000){
            alert("Puede prestar una cantidad maxima de 2000 dolares");
            bandera = true;
        }

        if(es == "N" || es == "n"){
            bandera = true;
        }

    }while(bandera == false);


    //PROCESOS
    var tasa = 15;
    var cuota = monto/time;

    if(edad>23 && edad <35){
        tasa = tasa - 3;
    }

    if(sex=="M" && time == "18"){
        tasa = tasa - 5;
    }

    decimal = "0." + parseFloat(tasa);
    
    var final = monto * Math.pow(1+parseFloat(decimal), time);

    var fecha = new Date();
    var dia = fecha.getDate();
  

    var proxmes = parseInt(mes) + 1; 
    var proxfecha = dia + "/" + proxmes+ "/" + anio; 

    document.getElementById("monto").innerHTML = Math.round(final, 4) + "$";

    document.getElementById("cuota").innerHTML = cuota + "$";

    document.getElementById("tasa").innerHTML = tasa + "%";

    document.getElementById("fecha").innerHTML = "El " + dia + " de cada mes";

}

window.onload = init;





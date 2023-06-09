let datos = [];

let form = document.getElementById("form");

form.addEventListener("submit", (e) =>{

    document.getElementById('resp1').innerHTML = "Total de empleados del sexo femenino:";
    document.getElementById('resp2').innerHTML = "Total de hombres casados que ganan más de 2500 Bs:";
    document.getElementById('resp3').innerHTML = "Total de mujeres viudas que ganan más de 1000 Bs:";
    document.getElementById('resp4').innerHTML = "Edad promedio de los hombres:";

    e.preventDefault();

    if(document.getElementById('idCivil1').value == '' ||
     document.getElementById('idCivil2').value == '' || 
     document.getElementById('idCivil3').value == ''|| 
     document.getElementById('idCivil4').value == ''|| 
     document.getElementById('idCivil5').value == ''|| 
     document.getElementById('idSexo1').value == ''|| 
     document.getElementById('idSexo2').value == ''|| 
     document.getElementById('idSexo3').value == ''|| 
     document.getElementById('idSexo4').value == ''|| 
     document.getElementById('idSexo5').value == ''|| 
     document.getElementById('idSueldo1').value == ''|| 
     document.getElementById('idSueldo2').value == ''|| 
     document.getElementById('idSueldo3').value == ''||
     document.getElementById('idSueldo4').value == ''||
     document.getElementById('idSueldo5').value == ''){

        alert('Estado Civil, Sexo o Sueldo no llenados');

    }else{
        let form1 = 
    [document.getElementById('idName1').value, 
    document.getElementById('idApellido1').value, 
    document.getElementById('idEdad1').value, 
    document.getElementById('idCivil1').value,
    document.getElementById('idSexo1').value,
    document.getElementById('idSueldo1').value];

    let form2 = 
    [document.getElementById('idName2').value, 
    document.getElementById('idApellido2').value, 
    document.getElementById('idEdad2').value, 
    document.getElementById('idCivil2').value,
    document.getElementById('idSexo2').value,
    document.getElementById('idSueldo2').value];

    let form3 = 
    [document.getElementById('idName3').value, 
    document.getElementById('idApellido3').value, 
    document.getElementById('idEdad3').value, 
    document.getElementById('idCivil3').value,
    document.getElementById('idSexo3').value,
    document.getElementById('idSueldo3').value];

    let form4 = 
    [document.getElementById('idName4').value, 
    document.getElementById('idApellido4').value, 
    document.getElementById('idEdad4').value, 
    document.getElementById('idCivil4').value,
    document.getElementById('idSexo4').value,
    document.getElementById('idSueldo4').value];

    let form5 = 
    [document.getElementById('idName5').value, 
    document.getElementById('idApellido5').value, 
    document.getElementById('idEdad5').value, 
    document.getElementById('idCivil5').value,
    document.getElementById('idSexo5').value,
    document.getElementById('idSueldo5').value];

    datos.push(form1);
    datos.push(form2);
    datos.push(form3);
    datos.push(form4);
    datos.push(form5);

    console.log(datos);
    
        var count1 = 0;
        for (let i = 0; i < datos.length; i++) {
            let filtrarF = datos[i][4].includes("F");
            
            if (filtrarF == true){
                count1++;
            }
        }
    
        var count2 = 0;
        for (let i = 0; i < datos.length; i++){
            let filtrarM = datos[i][4].includes("M");
            let filtrarC = datos[i][3].includes("casado");
            let cobres = datos[i][5].includes("mas");

            if (filtrarC == true && cobres == true && filtrarM == true){
                count2++;
            }
    
        }

    
        var count3 = 0;
        for(let i = 0; i < datos.length; i++){
            let filtrarF = datos[i][4].includes("F");
            let filtrarV = datos[i][3].includes("viuda");
            let Mcobres = datos[i][5].includes("entre");

            if (filtrarV == true && filtrarF == true && Mcobres == true){
                count3++;
            }
        }

    
        var count4 = 0;
        var promedio = 0;
        
        for(let i = 0; i < datos.length; i++){
            let filtrarM = datos[i][4].includes("M");
            if (filtrarM == true){
                if (datos[i][2].length === 0){
                    continue;
                }else{
                    count4++;
                    promedio =+ datos[i][2];
                }

            }
           
        }
        var SuperPromedio = (promedio / count4);


    document.getElementById('resp1').innerHTML += count1;

    document.getElementById('resp2').innerHTML +=  count2;

    document.getElementById('resp3').innerHTML += count3;

    document.getElementById('resp4').innerHTML += SuperPromedio;

    datos = [];
    }
});


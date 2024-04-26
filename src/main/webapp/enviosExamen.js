/**
 * 
 */
var envios = [];//array donde se guardaran todos los envios

function agregarUnEnvio() {//funcion que solicitará los datos para añadir un envio a la tabla
	var idEnvio = prompt("Ingrese el ID del envío:");
	var usuarioEnvio = prompt("Ingrese el nombre completo del usuario:");
	var costeEnvio = parseFloat(prompt("Ingrese el costo del envío:"));
	var fechaEntrada = prompt("Ingrese la fecha de entrada del envío en formato (yyyy-mm-dd):");
	
	if (!idEnvio || !usuarioEnvio || isNaN(costeEnvio) || !fechaEntrada) {
		alert("Ha habido un error verifique que los datos son correctos e ingreselos");
		return;
	}
	envios.push(idEnvio);///Esto añade el id al array
	envios.push(usuarioEnvio);///Esto añade el usuario al array
	envios.push(costeEnvio);///Esto añade el coste al array
	envios.push(fechaEntrada);///Esto añade fecha al array
	
	//invoca los datos en el documento html
	document.getElementById("idEnvio").innerHTML=idEnvio;
	document.getElementById("usuarioEnvio").innerHTML=usuarioEnvio;
	document.getElementById("costeEnvio").innerHTML=costeEnvio;
	document.getElementById("fechaEntrada").innerHTML=fechaEntrada;
	document.getElementById("fechaSalida").innerHTML=fechaSalida;

	for (let i =0; i< envios.length; i++){
		alert(envios[1]);
	}
	
	agregarEnvio(idEnvio, usuarioEnvio, costeEnvio, fechaEntrada);
	mostrarEnvios(agregarEnvio);
}

function quitarEnvio() {//funcion para quitar un envio, solicita un id y en funcion del id ingresado borra el id  con la propuiedad slice
   var id = prompt("Ingrese el ID del envío que desea quitar:");
	for(let i=0; i<envios.length; i++){
		if(id==envios.idEnvio){
			envios.splice(idEnvio)
		}
		else{
			alert("No se encontró ningún envío con el ID especificado.");
                return;
		}
	}
	
		  mostrarEnvios();
	}
	
	function quitarEnvioId() {
		var id = prompt("Ingrese el ID del envío que desea quitar:");
	if (envios.length > 0) {
		envios.pop(id);
		mostrarEnvios();
		alert("Se elimino el envio");
	} else {
		alert("No hay envíos para eliminar.");
	}
	mostrarEnvios();
}

	   
function calcularFechaSalida(fechaEntrega) {
	const fecha = new Date(fechaEntrega);
	fecha.setDate(fecha.getDate() + 5);
	if (fecha.getDay() === 0) {
		fecha.setDate(fecha.getDate() + 1);
	}
	return fecha;
}


function mostrarColaSalida() {//funcion para mostrar la cola de salida
	if (envios.length === 0) {
		alert("No hay envios ");
		return;
	}

	const proximoEnvio = envios[0];
	const fechaSalida = calcularFechaSalida(proximoEnvio.fechaEntrada);

	alert('Próximo envío a realizar:Fecha de salida: ${fechaSalida} Usuario: ${proximoEnvio.usuarioEnvio} Coste: ${proximoEnvio.costeEnvio}`');
}

function mostrarEnvioRapido() {//funcion para mostrar los envios rapidos
	    if (envios.length === 0) {
	        alert("No hay envios");
	        return;
	    }

	    const envioRapido = encontrarEnvioRapido();
	    if (envioRapido) {
	        const fechaSalida = calcularFechaSalida(envioRapido.fechaEntrada);
	        alert("Próximo envío rápido Fecha de salida: ${fechaSalida}Usuario: ${envioRapido.user}Coste: ${envioRapido.coste}");
	    } else {
	        alert("Aun no se han añadido envios rapidos para mostrar");
	    }
	}
	function abreviarNombre(usuarioEnvio) {
    const partesNombre = usuarioEnvio.split(' ');
    let nombreAbreviado = partesNombre[0].slice(0, 3);
    if (partesNombre.length > 1) {
      nombreAbreviado += ' ' + partesNombre[1].slice(0, 3);
    }
    return nombreAbreviado;
  }

	



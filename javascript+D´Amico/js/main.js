class PlazoFijo {
	constructor(cliente, capital, dias, tasa) {
			this.cliente = cliente;
			this.capital = capital;
			this.dias = dias;
			this.tasa = this.asignarTasa(tasa);
			this.interes = parseFloat(this.calcularInteres().toFixed(2));
			this.total = parseFloat(this.calcularTotal().toFixed(2));
	}
 
	asignarTasa(tipo) {
		switch (tipo) {
			case 1:
				return 0.455;
			case 2:
				return 0.48;
			case 3:
				return 0.521;
		}
	}  
 
	calcularInteres(capital,tasa,dias) {
	  
		   this.interes =0;
		 
	interes= capital * (tasa * dias / 365);
		 document.getElementById('resultado').innerHTML = interes;  
	

 };
 
 
 calcularTotal(interes) {
   const total = 0;	
interes = parseInt(interes); // Convertir el valor a un entero (número).
	
    total = document.getElementById('').innerHTML;
	
    // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
    total = (total == null || total == undefined || total == "") ? 0 : total;
	
    /* Esta es la suma. */
    total = (parseInt(total) + parseInt(interes));
	
    // Colocar el resultado de la suma en el control "span".
    document.getElementById('resultado').innerHTML = total;
}
	
 }
 
 // Array donde se almacenan los objetos de al aplicación
 const arrayPlazoFijo = [];
 
 // Por defecto hay 2 plazos fijos creados para que la aplicación no esté vacía
 arrayPlazoFijo.push(new PlazoFijo('Juan', 100000, 60, 1));
 arrayPlazoFijo.push(new PlazoFijo('Pedro', 225000, 30, 2));
 
 
 
 // Esta función crea un nuevo objeto PlazoFijo con los datos ingresados y lo guarda en el array
 function ingresarPlazoFijo() {
	const nombre = document.getElementById("nombre")
	nombre.innerHTML='Ingrese su nombre'
	const capital =document.getElementById('capital')
	capital.innerHTML='Ingrese el capital a invertir'
	const dias =document.getElementById("dias")
	dias.innerHTML='Ingrese la cantidad de días del plazo fijo'
	const tasa =  document.getElementById("tasa")
	tasa.innerHTML=
	('¿Qué tipo de cliente es? (Ingrese el número de la opción)\n1 - Particular\n2 - Empleado bancario\n3 - Jubilado');
 
	const nuevoPlazoFijo = new PlazoFijo(nombre, capital, dias, tasa);
 
	arrayPlazoFijo.push(nuevoPlazoFijo);
 }
 
 
 
 // Esta función se encarga de mostrar los plazos fijos registrados por consola
 function mostrarPlazosFijos() {
	for (const plazoFijo of arrayPlazoFijo= document.getElementsByName("plazo fijo")) {
	   plazoFijo.innerHTML;
	}
 }
 
 
 
 // Este es el menu inicial y punto de partida de la aplicación,
 
 let opcion;
 
 while(opcion != "3") {
	opcion = document.getElementById(opcion)
	opcion.getElementById=("Seleccione una opción:\n\n1 - Ingresar un nuevo plazo fijo\n2 - Mostrar los plazos fijos registrados\n3 - Salir")
 
	switch (opcion) {
		case "1":
			ingresarPlazoFijo.innerHTML();
			break;
		case "2":
			mostrarPlazosFijos.innerHTML()
			break;
		case "3":
		innerHTML("Gracias por utilizar nuestros servicios");
			break;
		default:
			innerHTML("Opción incorrecta, inténtelo de nuevo");
			break;
	}
 }
 
  
 let miFormulario      = document.getElementById("formulario");
 miFormulario.addEventListener("submit", validarFormulario);
 
 function validarFormulario(e){
	e.preventDefault();
	console.log("Formulario Enviado"); }
	
	
	const enJSON    = JSON.stringify(nuevoPlazoFijo);
	const enJSON1    = JSON.stringify(mostrarplazofijo);
	const enJSON2    = JSON.stringify(salir);
 
 
 
 const enJSON3    = JSON.stringify(nombre);
 const enJSON4    = JSON.stringify(capital);
 const enJSON5    = JSON.stringify(dias);
 const enJSON6    = JSON.stringify(tasa);
 
 localStorage.setItem("nuevoplazofijo", enJSON);
 localStorage.setItem("mostrarplazofijo", enJSON1);
 localStorage.setItem("salir", enJSON2);
 localStorage.setItem("nombre", enJSON3);
 localStorage.setItem("capital", enJSON4);
 localStorage.setItem("dias", enJSON5);
 localStorage.setItem("tasa", enJSON6);
 
 
 fetch('https://jsonplaceholder.typicode.com/posts')
	.then( (resp) => resp.json() )
	.then( (data) => {
		console.log(data)
	})
	
	
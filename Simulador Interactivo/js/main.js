let operacion;
let num1;
let num2;
let resultado;
let ciclo = true;

function getNumeros(){
	num1 = parseInt(prompt("Ingrese un numero:"),10);
	num2 = parseInt(prompt("Ingrese un numero:"),10);
}

function mostarResultado(){
	alert("El resultado es: "+resultado);
}

function suma(){
	getNumeros();
	resultado = num1 + num2;
	mostarResultado();
}

function resta(){
	getNumeros();
	resultado = num1 - num2;
	mostarResultado();
}

function division(){
	getNumeros();
	if(num2 == 0)
		alert("Error, imposible dividir por 0");
	else{
		resultado = num1 / num2;
		mostarResultado();
	}
}

function multiplicacion(){
	getNumeros();
	resultado = num1 * num2;
	mostarResultado();
}

while(ciclo){
	operacion = prompt("Seleccione la operacion a realizar:")
	switch(operacion){
		case "+":
			suma();
			break;
		case "-":
			resta();
			break;
		case "/":
			division();
			break;
		case "*":
			multiplicacion();
			break;
		case null:
			alert("La calculadora se cerro, recargue la pagina para reiniciar");
			ciclo=false;
			break;
		default:
			alert("El operador ingresado no es valido");
			break;
	}
}
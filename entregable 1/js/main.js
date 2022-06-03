let operacion;
let num1;
let num2;
let resultado;
let ciclo = true;
while(ciclo){
	operacion = prompt("Seleccione la operacion a realizar:")
	switch(operacion){
		case "+":
			num1 = parseInt(prompt("Ingrese un numero:"),10);
			num2 = parseInt(prompt("Ingrese un numero:"),10);
			resultado = num1 + num2;
			alert("El resultado es:"+resultado);
			break;
		case "-":
			num1 = parseInt(prompt("Ingrese un numero:"),10);
			num2 = parseInt(prompt("Ingrese un numero:"),10);
			resultado = num1 - num2;
			alert("El resultado es:"+resultado);
			break;
		case "/":
			num1 = parseInt(prompt("Ingrese el dividendo:"),10);
			num2 = parseInt(prompt("Ingrese el divisor:"),10);
			if(num2 == 0)
				alert("Error, imposible dividir por 0");
			else{
				resultado = num1 / num2;
			alert("El resultado es:"+resultado);
			}
			break;
		case "*":
			num1 = parseInt(prompt("Ingrese un numero:"),10);
			num2 = parseInt(prompt("Ingrese un numero:"),10);
			resultado = num1 * num2;
			alert("El resultado es:"+resultado);
			break;
		default:
			alert("El operador ingresado no es valido");
			break;
	}
}
var operandoA = 0;
var operandoB = 0;
var operacion = "";
var detalle = [];

$(document).ready(function () {
   $("#uno").on("click", function () { $("#resultado").append("1"); });
   $("#dos").on("click", function () { $("#resultado").append("2"); });
   $("#tres").on("click", function () { $("#resultado").append("3"); });
   $("#cuatro").on("click", function () { $("#resultado").append("4"); });
   $("#cinco").on("click", function () { $("#resultado").append("5"); });
   $("#seis").on("click", function () { $("#resultado").append("6"); });
   $("#siete").on("click", function () { $("#resultado").append("7"); });
   $("#ocho").on("click", function () { $("#resultado").append("8"); });
   $("#nueve").on("click", function () { $("#resultado").append("9"); });
   $("#cero").on("click", function () { $("#resultado").append("0"); });
   $("#punto").on("click", function () { $("#resultado").append("."); });
   $("#masmenos").on("click", function () { 
      var valor = parseFloat($("#resultado").html());
      limpiar();
      var valor2 = -valor;
      $("#resultado").append(valor2.toString()); 
   });
  

   $("#reset").on("click", function () {
      resetear();
   });

   $("#suma").on("click", function () {
      operandoA = $("#resultado").html();
      operacion = "+";
      limpiar();
   });
   $("#resta").on("click", function () {
      operandoA = $("#resultado").html();
      operacion = "-";
      limpiar();
   });
   $("#multiplicacion").on("click", function () {
      operandoA = $("#resultado").html();
      operacion = "*";
      limpiar();
   });
   $("#division").on("click", function () {
      operandoA = $("#resultado").html();
      operacion = "/";
      limpiar();
   });
   $("#potencia").on("click", function () {
      operandoA = $("#resultado").html();
      operacion = "potencia";
      limpiar();
   });
   $("#raiz").on("click", function () {
      operandoA = $("#resultado").html();
      operacion = "raiz";
      resolver();
   });

   $("#igual").on("click", function () {
      operandoB = $("#resultado").html();
      igual = "=";
      resolver();
   });
  
});

//Operaciones
function limpiar() {
   $("#resultado").html("");

}

function resetear() {
   $("#resultado").html("");
   operandoA = 0;
   operandoB = 0;
   operacion = "";
   detalle = [];
   igual = "";
   $("#detalle").empty();
}

function resolver() {
   $("#detalle").empty();
   detalle = [];
   detalle.push(operandoA);
   var res = 0;
   switch (operacion) {
      case "+":
         res = parseFloat(operandoA) + parseFloat(operandoB);
         detalle.push(operacion);
         break;
      case "-":
         res = parseFloat(operandoA) - parseFloat(operandoB);
         detalle.push(operacion);
         break;
      case "*":
         res = parseFloat(operandoA) * parseFloat(operandoB);
         detalle.push(operacion);
         break;
      case "/":
         res = parseFloat(operandoA) / parseFloat(operandoB);
         detalle.push(operacion);
         break;
      case "potencia":
         res = Math.pow(operandoA, operandoB);
         detalle.push(`&#8743;`)
         break;
      case "raiz":
         res = Math.sqrt(operandoA).toFixed(2);
         detalle.push(`&radic;`)
         detalle.push("=");
         operandoB="";
         igual="";
         break;
   }

   if(operandoB != 0){
      detalle.push(operandoB);
   };
   if(igual != ""){
      detalle.push(igual);
   }
   detalle.push(res);
   let desplegar = document.querySelector("#detalle");
   desplegar.innerHTML = "";
   var i = 0;
   while (i < detalle.length) {
       desplegar.innerHTML +=  `<span class="btnR">${detalle[i]}</span> `
       i++;
   }

   $("#resultado").html(res);
   operandoA=res;
}
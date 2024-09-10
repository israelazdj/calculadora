document.addEventListener("DOMContentLoaded", () => {
  const numeros = document.getElementsByName("number");
  const operadores = document.getElementsByName("operador");
  const igual = document.getElementsByName("btn_result")[0];
  const borrar = document.getElementsByName("btn_limpiar")[0];
  var resultado = document.getElementById("result");

  var opeActual = "";
  var opeAnterior = "";
  var operacion = undefined;

  numeros.forEach(function (btn) {
    btn.addEventListener("click", function () {
      agregarnumero(btn.innerText);
      //alert(btn.innerText);
    });
  });

  operadores.forEach(function (btn) {
    btn.addEventListener("click", function () {
      //alert(btn.innerText);
      selecionaroperacion(btn.innerText);
    });
  });

  igual.addEventListener("click", function () {
    calcular();
    actualizardisplay();
  });

  borrar.addEventListener("click", function () {
    clear();
    actualizardisplay();
  });

  function selecionaroperacion(op) {
    if (opeActual === "") return;
    if (opeAnterior !== "") {
      calcular();
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = " ";
  }

  function calcular() {
    var calculo;
    const anterior = Number(opeAnterior);
    const actual = Number(opeActual);
    if (isNaN(opeAnterior) || isNaN(actual)) return;

    switch (operacion) {
      case "+":
        calculo = anterior + actual;
        break;
      case "-":
        calculo = anterior - actual;
        break;
      case "/":
        calculo = anterior / actual;
        break;
      case "x":
        calculo = anterior * actual;
        break;
      default:
        return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = "";
  }

  function clear() {
    opeActual = " ";
    opeAnterior = " ";
    operacion = undefined;
  }

  function agregarnumero(num) {
    opeActual = opeActual.toString() + num.toString();
    actualizardisplay();
  }

  function actualizardisplay() {
    result.value = opeActual;
  }

  clear();
});

document.addEventListener("DOMContentLoaded", () => {
  const numeros = document.getElementsByName("number");
  const operadores = document.getElementsByName("operador");
  const resultado_btn = document.getElementsByName("btn_result");
  const limpiar = document.getElementsByName("btn_limpiar");

  let resultado = document.getElementById("result");

  numeros.forEach(function (btn) {
    btn.addEventListener("click", function () {
      //agregarNumer(btn.innerText);
      alert(btn.innerText);
    });
  });

  operadores.forEach(function (btn) {
    btn.addEventListener("click", function () {
      //selecionaroperacion(btn.innerText);
      alert(btn.innerText);
    });
  });

  resultado_btn.addEventListener("click", function () {
    calcular();
    actualizardisplay();
  });
  limpiar.addEventListener("click", function () {
    clear();
    actualizardisplay();
  });
});

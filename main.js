(function () {
  "use strict";

  let calculation = [];

  function pushNumber(e) {
    alert(e.target.value);
    calculation.push(parseInt(e.target.value, 10));
  }
  function pushOperator(e) {
    alert(e.target.value);
    calculation.push(e.target.value);
  }
  function calculate(e) {
    alert(e.target.value);
  }

  document.querySelectorAll(".number").forEach(function (element) {
    element.addEventListener("click", pushNumber);
  });
  document.querySelectorAll(".operator, .clear").forEach(function (element) {
    element.addEventListener("click", pushOperator);
  });
  document.querySelector(".equal-sign").addEventListener("click", pushOperator);

  // Keeping track of the calculation array
  document.querySelectorAll("button").forEach(function (element) {
    element.addEventListener("click", () => console.log(calculation));
  });
})();

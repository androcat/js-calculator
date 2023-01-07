(function () {
  "use strict";

  let calculation = [];
  let operator;
  let num1;
  let num2;
  let result;

  function pushNumber(e) {
    alert(e.target.value);
    calculation.push(e.target.value); // parseInt(e.target.value, 10));
  }
  function pushOperator(e) {
    alert(e.target.value);
    calculation.push(e.target.value);
  }
  function calculate(e) {
    alert(calculation.toString().split(",").join(""));
    console.log(typeof calculation);
    for (let i = 0; i < calculation.length; i++) {
      if (
        calculation[i] === "*" ||
        calculation[i] === "/" ||
        calculation[i] === "+" ||
        calculation[i] === "-"
      ) {
        operator = calculation[i];
        num1 = calculation.slice(0, i).join("");
        num2 = calculation.slice(i + 1).join("");
        console.log("num1:", num1);
        console.log("num2:", num2);
      }
    }
    if (operator === "*") {
      result = num1 * num2;
    } else if (operator === "/") {
      result = num1 / num2;
    } else if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    }

    alert(result);

    calculation = []; //reset calculation for next one
    console.log("end calculate");
  }

  document.querySelectorAll(".number").forEach(function (element) {
    element.addEventListener("click", pushNumber);
  });
  document.querySelectorAll(".operator, .clear").forEach(function (element) {
    element.addEventListener("click", pushOperator);
  });
  document.querySelector(".equal-sign").addEventListener("click", calculate);

  // Keeping track of the calculation array
  document.querySelectorAll("button").forEach(function (element) {
    element.addEventListener("click", () => console.log(calculation));
  });
})();

(function () {
  "use strict";
  function pushNumber(e) {
    //event is default param
    alert(e.target.value); //document.querySelector("button")
  }
  function pushOperator(e) {
    //event is default param
    alert(e.target.value); //document.querySelector("button")
  }
  function calculate(e) {
    //event is default param
    alert(e.target.value); //document.querySelector("button")
  }

  document.querySelectorAll(".number").forEach(function (element) {
    element.addEventListener("click", pushNumber);
  });

  document.querySelectorAll(".operator, .clear").forEach(function (element) {
    element.addEventListener("click", pushOperator);
  });

  document.querySelector(".equal-sign").addEventListener("click", pushOperator);
})();

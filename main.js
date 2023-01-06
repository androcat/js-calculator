(function () {
  "use strict";
  function pushNumber(e) {
    //event is default param
    alert(e.target.value); //document.querySelector("button")
  }

  document.querySelectorAll(".number").forEach(function (element) {
    element.addEventListener("click", pushNumber);
  });
})();

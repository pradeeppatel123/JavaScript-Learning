document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const btnSin = document.getElementById("btnSin");

  const btnCos = document.getElementById("btnCos");
  const btnTan = document.getElementById("btnTan");

  const btnRad = document.getElementById("btnRad");
  const btnDeg = document.getElementById("btnDeg");
  const btnLog = document.getElementById("btnLog");
  const btnLn = document.getElementById("btnLn");
  const btnOpenBracket = document.getElementById("btnOpenBracket");
  const btnCloseBracket = document.getElementById("btnCloseBracket");
  const btnInverse = document.getElementById("btnInverse");
  const btnFactorial = document.getElementById("btnFactorial");
  const btnClear = document.getElementById("btnClear");
  const btnModulo = document.getElementById("btnModulo");
  const btnBackspace = document.getElementById("btnBackspace");
  const btnDivide = document.getElementById("btnDivide");
  const btnPow = document.getElementById("btnPow");
  const btnSeven = document.getElementById("btnSeven");
  const btnEight = document.getElementById("btnEight");
  const btnNine = document.getElementById("btnNine");
  const btnMultiply = document.getElementById("btnMultiply");
  const btnRoot = document.getElementById("btnRoot");
  const btnFour = document.getElementById("btnFour");
  const btnFive = document.getElementById("btnFive");
  const btnSix = document.getElementById("btnSix");
  const btnMinus = document.getElementById("btnMinus");
  const btnPi = document.getElementById("btnPi");
  const btnOne = document.getElementById("btnOne");
  const btnTwo = document.getElementById("btnTwo");
  const btnThree = document.getElementById("btnThree");
  const btnPluse = document.getElementById("btnPluse");
  const btnE = document.getElementById("btnE");
  const btnDoubleZero = document.getElementById("btnDoubleZero");
  const btnZero = document.getElementById("btnZero");
  const btnPoint = document.getElementById("btnPoint");
  const btnEqual = document.getElementById("btnEqual");

  const appendToDisplay = (value) => {
    display.value += value;
  };

  const calculate = () => {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = `Error`;
    }
  };

  const clearDisplay = () => {
    display.value = "";
  };

  const backSpace = () => {
    let currentValue = display.value;
    display.value = currentValue.slice(0, -1);
  };
  const squareRoot = () => {
    display.value = Math.sqrt(display.value);
  };
  const eularsValue = () => {
    display.value = Math.E;
  };
  const log = () => {
    display.value = Math.log10(display.value);
  };
  const ln = () => {
    display.value = Math.log(display.value);
  };
  const exponentPower = () => {
    display.value += "**";
  };

  const factorial = () => {
    var number = 1;
    if (display.value === 0) {
      display.value = "1";
    } else if (display.value < 0) {
      display.value = "undefined";
    } else {
      var number = 1;
      for (var i = display.value; i > 0; i--) {
        number *= i;
      }
      display.value = number;
    }
  };

  const pi = () => {
    display.value = Math.PI;
  };

  // tigonometry functions implementation

  let degreeMode = true;
  btnDeg.style.color = "#f6a29e";
  let inverseMode = false; // Initialize the flag
  btnDeg.addEventListener("click", () => {
    degreeMode = true;
    btnDeg.style.color = "#f6a29e";
    btnRad.style.color = "";
  });

  btnRad.addEventListener("click", () => {
    degreeMode = false;
    btnDeg.style.color = "";
    btnRad.style.color = "#f6a29e";
  });

  const toRadians = (angle) => (degreeMode ? angle * (Math.PI / 180) : angle);

  const sin = () => {
    const angle = parseFloat(display.value);
    const result = Math.sin(toRadians(angle));
    display.value = result;
  };

  const cos = () => {
    const angle = parseFloat(display.value);
    const result = Math.cos(toRadians(angle));
    display.value = result;
  };

  const tan = () => {
    const angle = parseFloat(display.value);
    const result = Math.tan(toRadians(angle));
    display.value = result;
  };

  const sinInverse = () => {
    const angle = parseFloat(display.value);
    if (angle >= -1 && angle <= 1) {
      let result = degreeMode
        ? (Math.asin(angle) * 180) / Math.PI
        : Math.asin(angle);
      display.value = result;
    } else {
      display.value = "Invalid input";
    }
  };

  const cosInverse = () => {
    const angle = parseFloat(display.value);
    if (angle >= -1 && angle <= 1) {
      const result = degreeMode
        ? (Math.acos(angle) * 180) / Math.PI
        : Math.acos(angle);
      display.value = result;
    } else {
      display.value = "Invalid input";
    }
  };

  const tanInverse = () => {
    const angle = parseFloat(display.value);
    const result = degreeMode
      ? (Math.atan(angle) * 180) / Math.PI
      : Math.atan(angle);
    display.value = result;
  };

  const tenPow = () => {
    display.value = 10 ** parseFloat(display.value);
  };

  const ePowerX = () => {
    display.value = Math.exp(parseFloat(display.value));
  };

  const toggleInverseMode = () => {
    inverseMode = !inverseMode; // Toggle the state

    if (inverseMode) {
      btnInverse.style.color = "#f6a29e";
      btnSin.innerText = "sin⁻¹";
      btnCos.innerText = "cos⁻¹";
      btnTan.innerText = "tan⁻¹";
      btnLog.innerText = "10^";
      btnLn.innerText = "eˣ";

      // Replace text and add event listeners for asin, acos, atan
      btnSin.removeEventListener("click", sin);
      btnCos.removeEventListener("click", cos);
      btnTan.removeEventListener("click", tan);
      btnLog.removeEventListener("click", log);
      btnLn.removeEventListener("click", ln);

      btnSin.addEventListener("click", sinInverse);
      btnCos.addEventListener("click", cosInverse);
      btnTan.addEventListener("click", tanInverse);
      btnLog.addEventListener("click", tenPow);
      btnLn.addEventListener("click", ePowerX);
    } else {
      // Reset the text to original
      btnInverse.style.color = "#fff";
      btnSin.innerText = "sin";
      btnCos.innerText = "cos";
      btnTan.innerText = "tan";
      btnLog.innerText = "log";
      btnLn.innerText = "ln";

      // Restore original event listeners for sin, cos, tan
      btnSin.removeEventListener("click", sinInverse);
      btnCos.removeEventListener("click", cosInverse);
      btnTan.removeEventListener("click", tanInverse);
      btnLog.removeEventListener("click", tenPow);
      btnLn.removeEventListener("click", ePowerX);

      btnSin.addEventListener("click", sin);
      btnCos.addEventListener("click", cos);
      btnTan.addEventListener("click", tan);
      btnLog.addEventListener("click", log);
      btnLn.addEventListener("click", ln);
    }
  };

  // this is by default events when inverse btn was clicked;

  btnSin.addEventListener("click", sin);
  btnCos.addEventListener("click", cos);
  btnTan.addEventListener("click", tan);
  btnLog.addEventListener("click", log);
  btnLn.addEventListener("click", ln);

  btnInverse.addEventListener("click", toggleInverseMode);

  // All numeric and logrithimatic events

  btnOne.addEventListener("click", () => appendToDisplay("1"));
  btnTwo.addEventListener("click", () => appendToDisplay("2"));
  btnThree.addEventListener("click", () => appendToDisplay("3"));
  btnFour.addEventListener("click", () => appendToDisplay("4"));
  btnFive.addEventListener("click", () => appendToDisplay("5"));
  btnSix.addEventListener("click", () => appendToDisplay("6"));
  btnSeven.addEventListener("click", () => appendToDisplay("7"));
  btnEight.addEventListener("click", () => appendToDisplay("8"));
  btnNine.addEventListener("click", () => appendToDisplay("9"));
  btnZero.addEventListener("click", () => appendToDisplay("0"));
  btnDoubleZero.addEventListener("click", () => appendToDisplay("00"));
  btnPluse.addEventListener("click", () => appendToDisplay("+"));
  btnEqual.addEventListener("click", calculate);
  btnClear.addEventListener("click", clearDisplay);
  btnBackspace.addEventListener("click", backSpace);
  btnMinus.addEventListener("click", () => appendToDisplay("-"));
  btnMultiply.addEventListener("click", () => appendToDisplay("*"));
  btnDivide.addEventListener("click", () => appendToDisplay("/"));
  btnModulo.addEventListener("click", () => appendToDisplay("%"));
  btnPoint.addEventListener("click", () => appendToDisplay("."));
  btnOpenBracket.addEventListener("click", () => appendToDisplay("("));
  btnCloseBracket.addEventListener("click", () => appendToDisplay(")"));
  btnLog.addEventListener("click", log);
  btnLn.addEventListener("click", ln);
  btnPow.addEventListener("click", exponentPower);
  btnE.addEventListener("click", eularsValue);
  btnRoot.addEventListener("click", squareRoot);
  btnFactorial.addEventListener("click", factorial);
    btnPi.addEventListener("click", pi);

});
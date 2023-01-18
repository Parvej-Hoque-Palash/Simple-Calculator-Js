function setInitialValue() {
  document.getElementById("marks-inp1").value = 0;
  document.getElementById("marks-op").value = "+";
  document.getElementById("marks-inp2").value = 0;
}

function calculateGrade() {
  const number1 = parseInt(document.getElementById("marks-inp1").value);
  let operator = document.getElementById("marks-op").value;
  const number2 = parseInt(document.getElementById("marks-inp2").value);
  function fact(n) {
    if (n <= 1) return 1;

    return n * fact(n - 1);
  }

  function nPr(n, r) {
    return Math.floor(fact(n) / fact(n - r));
  }
  function nCr(n, r) {
    return fact(n) / (fact(r) * fact(n - r));
  }
  function log10(val) {
    return Math.log(val) / Math.LN10;
  }

  if (operator === "+") {
    document.getElementById("result").innerText = number1 + number2;
  } else if (operator === "-") {
    document.getElementById("result").innerText = number1 - number2;
  } else if (operator === "*") {
    document.getElementById("result").innerText = number1 * number2;
  } else if (operator === "/") {
    document.getElementById("result").innerText = number1 / number2;
  } else if (operator === "%") {
    document.getElementById("result").innerText = number1 % number2;
  } else if (operator === "P" ||operator === "p") {
    document.getElementById("result").innerText = nPr(number1, number2);
  } else if (operator === "C" || operator === "c") {
    document.getElementById("result").innerText = nCr(number1, number2);
  } else if (operator === "log" || operator === "Log" || operator === "LOG") {
    document.getElementById("result").innerText = log10(number2)/log10(number1);
  }
  else {
    document.getElementById("result").innerText = "Invalid Input";
  }
}

setInitialValue();

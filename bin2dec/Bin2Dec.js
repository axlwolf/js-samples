const convertToBinary = (number) => {
  let num = number;
  let binary = (num % 2).toString();
  for (; num > 1; ) {
    num = parseInt(num / 2);
    binary = (num % 2) + binary;
  }
  return binary;
};

const binaryToDec = (binaryNumber) => parseInt(binaryNumber, 2);

const Bin2Dec = ((binaryToDec) => {
  const DATA_COMPONENT = "";
  const $decimalNumberInput = document.getElementById("decimalNumber");
  const $convertButton = document.getElementById("convertButton");
  const $result = document.getElementById("result");
  let binNumber;

  const render = (binNumber) => {
    $result.innerHTML = +binNumber;
  };

  const events = () => {
    $convertButton.addEventListener("click", (e) => {
      e.preventDefault();
      binNumber = $decimalNumberInput.value;
      if (binNumber) {
        render(binaryToDec(binNumber));
      }
    });

    $decimalNumberInput.addEventListener("keyup", (e) => {
      console.log(e);
      e.target.value = e.target.value.replace(/[^0-1]/g, "");
    });
  };

  const init = () => {
    console.log("Bin2Dec Init");
    events();
  };

  return { render, init };
})(binaryToDec);

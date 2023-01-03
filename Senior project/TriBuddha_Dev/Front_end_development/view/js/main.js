const getNumberTH = (number) => {
  let numberTH = "";
  let numberString;
  if (typeof number !== "string") {
    numberString = number.toString();
  } else {
    numberString = number;
  }
  for (let i = 0; i < numberString.length; i++) {
    switch (numberString[i]) {
      case "0":
        numberTH += "๐";
        break;
      case "1":
        numberTH += "๑";
        break;
      case "2":
        numberTH += "๒";
        break;
      case "3":
        numberTH += "๓";
        break;
      case "4":
        numberTH += "๔";
        break;
      case "5":
        numberTH += "๕";
        break;
      case "6":
        numberTH += "๖";
        break;
      case "7":
        numberTH += "๗";
        break;
      case "8":
        numberTH += "๘";
        break;
      case "9":
        numberTH += "๙";
        break;
      default:
        numberTH += numberString[i];
    }
  }
  return numberTH;
};

const UNITS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const TEENS = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const TENS = [
  "",
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
const SCALES = [
  "",
  "thousand",
  "million",
  "billion",
  "trillion",
  "quadrillion",
];

export function numberToWord(num: number | string): string {
  // Convert string input to number (e.g., "4.55" → 4.55)
  const parsedNum = typeof num === "string" ? parseFloat(num) : num;

  // Validate input
  if (isNaN(parsedNum)) {
    throw new Error("Input must be a valid number");
  }

  // Check for more than 2 decimal places
  const decimalPart = parsedNum.toString().split(".")[1];
  if (decimalPart && decimalPart.length > 2) {
    throw new Error("Maximum 2 decimal places allowed");
  }

  // Handle negative numbers
  if (parsedNum < 0) {
    return "minus " + numberToWord(Math.abs(parsedNum));
  }

  // Split into integer and decimal parts
  const integerPart = Math.floor(parsedNum);
  const decimalValue = Math.round((parsedNum - integerPart) * 100);

  // Convert integer part
  let result = convertInteger(integerPart);

  // Convert decimal part (if exists)
  if (decimalValue > 0) {
    result += " point " + convertInteger(decimalValue);
  }

  return result;
}

function convertInteger(num: number): string {
  if (num < 20) return num < 10 ? UNITS[num] : TEENS[num - 10];
  if (num < 100) {
    const ten = Math.floor(num / 10);
    const unit = num % 10;
    return TENS[ten] + (unit ? "-" + UNITS[unit] : "");
  }
  if (num < 1000) {
    const hundred = Math.floor(num / 100);
    const remainder = num % 100;
    return (
      UNITS[hundred] +
      " hundred" +
      (remainder ? " and " + convertInteger(remainder) : "")
    );
  }
  for (let i = 0; i < SCALES.length; i++) {
    const scaleValue = Math.pow(1000, i + 1);
    if (num < scaleValue) {
      const scaleNum = Math.floor(num / (scaleValue / 1000));
      const remainder = num % (scaleValue / 1000);
      return (
        convertInteger(scaleNum) +
        " " +
        SCALES[i] +
        (remainder
          ? (remainder < 100 ? " and " : " ") + convertInteger(remainder)
          : "")
      );
    }
  }
  return "number too large";
}

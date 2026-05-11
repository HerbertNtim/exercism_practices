//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  const stringNumber = number.toString().slice(-2);
  const number_to_ordinal = {
    1: "st",
    2: "nd",
    3: "rd",
    11: "th",
    12: "th",
    13: "th",
  };

  const lastDigit = number % 10;
  console.log(lastDigit);
  console.log(number_to_ordinal[lastDigit]);
  const suffix =
    number_to_ordinal[stringNumber] ?? number_to_ordinal[lastDigit] ?? "th";

  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
};


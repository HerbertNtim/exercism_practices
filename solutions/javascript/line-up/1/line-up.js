//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  const stringNumber = number.toString();
  for (let i = stringNumber.length - 1; i >= 0; i--) {
    if (stringNumber[i] === "1") {
      if (stringNumber[i - 1] !== "1") {
        return `${name}, you are the ${number}st customer we serve today. Thank you!`;
      }
      return `${name}, you are the ${number}th customer we serve today. Thank you!`;
    } else if (stringNumber[i] === "2") {
        if (stringNumber[i - 1] !== "1") {
          return `${name}, you are the ${number}nd customer we serve today. Thank you!`;
      }
      return `${name}, you are the ${number}th customer we serve today. Thank you!`;
    } else if (stringNumber[i] === "3") {
        if (stringNumber[i - 1] !== "1") {
          return `${name}, you are the ${number}rd customer we serve today. Thank you!`;
        }
      return `${name}, you are the ${number}th customer we serve today. Thank you!`;
    } else {
        return `${name}, you are the ${number}th customer we serve today. Thank you!`;
    }
  }
};


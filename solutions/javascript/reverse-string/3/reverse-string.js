//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (str) => {
  let newStr = ''

  for (let index = str.length - 1; index >= 0; index--) {
    newStr += str[index]
  }

  return newStr;
}

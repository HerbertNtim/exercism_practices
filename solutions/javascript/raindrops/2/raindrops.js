//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (drop) => {
  let result = ''

  if(drop % 3 === 0) {
    result += "Pling"
  }

  if(drop % 5 === 0) {
    result += "Plang"
  }

  if(drop % 7 === 0) {
    result += "Plong"
  }

  return result || drop.toString()
};

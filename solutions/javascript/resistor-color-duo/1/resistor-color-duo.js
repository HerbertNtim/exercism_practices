//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const colorCodes = {
  black: 0, brown: 1, red: 2, orange: 3,
  yellow: 4, green: 5, blue: 6, violet: 7,
  grey: 8, white: 9
};

export const decodedValue = (values) => {
  const firstTwo = values.slice(0, 2)
  const result = firstTwo.map((value) => colorCodes[value]).join('')

  return Number(result)
};
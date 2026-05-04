//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (strings) => {
  const cleanedString = strings.toLowerCase().replace(/[^a-z]/g, '')
  const uniqueLetters = new Set(cleanedString)

  return uniqueLetters.size === 26
};

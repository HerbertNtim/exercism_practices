//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (dna1, dna2) => {
  if(dna2.length > dna1.length || dna1.length > dna2.length) {
    throw new Error('strands must be of equal length');
  }

  let dnaLengths = 0;
  let hamming = 0;
  while(dnaLengths < dna1.length) {
    if(dna1[dnaLengths] !== dna2[dnaLengths]) {
      hamming++
    }
    dnaLengths++
  }

  return hamming;
};

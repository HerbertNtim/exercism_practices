//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (dna1, dna2) => {
  if(dna2.length > dna1.length || dna1.length > dna2.length) {
    throw new Error('strands must be of equal length');
  }

  let currentDNA1 = 0;
  let currentDNA2 = 0;
  let hamming = 0;
  while(currentDNA1 < dna1.length) {
    if(dna1[currentDNA1] !== dna2[currentDNA2]) {
      hamming++
    }
    currentDNA1++
    currentDNA2++
  }

  return hamming;
};

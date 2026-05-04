//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
  let count = 0
  if(!Number.isInteger(n) || n <= 0) {
    throw new Error('Only positive integers are allowed');
  }
  
  while (n > 1) {
    if(n % 2 === 0) {
      n = n / 2;
    } else {
      n = n * 3 + 1
    }
    count ++
  }

  return count;
};

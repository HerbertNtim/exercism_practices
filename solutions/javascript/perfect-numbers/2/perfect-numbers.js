//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (number) => {
  if(number < 1) {
    throw new Error('Classification is only possible for natural numbers.')
  }

  const factors = [];
  for(let i = 1; i < number; i++) {
    if(number % i === 0 ) {
      factors.push(i)
    }
  }

const sum = factors.reduce((acc, val) => acc + val, 0);
  
  switch(true) {
    case sum === number:
      return "perfect";

    case number < sum:
      return "abundant";

    case number > sum: 
      return "deficient";
  }
};

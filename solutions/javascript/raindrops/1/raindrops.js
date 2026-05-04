//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (drop) => {
  if(drop % 3 === 0 && drop % 5 === 0 && drop % 7 === 0) {
    return "PlingPlangPlong"
  }
  
  if(drop % 3 === 0 && drop % 5 === 0) {
    return "PlingPlang"
  }

  if(drop % 3 === 0 && drop % 7 === 0) {
    return "PlingPlong"
  }

  if(drop % 5 === 0 && drop % 7 === 0) {
    return "PlangPlong"
  }

  if(drop % 3 === 0) {
    return "Pling"
  }

  if(drop % 5 === 0) {
    return "Plang"
  }

  if(drop % 7 === 0) {
    return "Plong"
  }

  return drop.toString();
};

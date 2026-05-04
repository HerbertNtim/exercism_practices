//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase) => {
  let acronym = ""
  acronym += phrase[0].toUpperCase();

  for (let i = 1; i < phrase.length; i++) {
    if (phrase[i].includes(' ') || phrase[i].includes("-") || phrase[i].includes('_')) {
      if ((phrase[i + 1] !== " " && phrase[i + 1] !== "-") && phrase[i + 1] !== "_")
        acronym += phrase[i + 1].toUpperCase();
    }
  }

  return acronym;
};

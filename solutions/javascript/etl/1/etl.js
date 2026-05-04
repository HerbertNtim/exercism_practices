//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (data) => {
  const newFormat = {};

  Object.entries(data)
    .forEach(([score, letters]) => letters
      .forEach(lett => newFormat[lett.toLowerCase()] = Number(score)));
  return newFormat;
}

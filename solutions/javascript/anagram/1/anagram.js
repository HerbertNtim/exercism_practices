//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target, candidates) => {
  const normalize = (word) => word.toLowerCase().split("").sort().join("");
  const lowerTarget = target.toLowerCase();
  const sortedTarget = normalize(target);

  return candidates.filter((word) => {
    const lowerWord = word.toLowerCase();

    if(lowerWord === lowerTarget) {
      return false;
    }

    return normalize(word) === sortedTarget;
  })
};

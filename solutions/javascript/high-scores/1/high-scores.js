//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(list) {
    this.data = list;
  }

  get scores() {
    return this.data;
  }

  get latest() {
    return this.data[this.data.length - 1];
  }

  get personalBest() {
  return Math.max(...this.data);
}

  get personalTopThree() {
    const sorted = [...this.data].sort((a, b) => b - a);
    return sorted.slice(0, 3);
  }
}
//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.allRows = matrix.split('\n').map(row => row.split(' ').map(r => Number(r)));
  }

  get rows() {
    return this.allRows;
  }

  get columns() {
    return this.allRows[0].map((_, colIndex) => this.allRows.map(row => row[colIndex]))
  }
}

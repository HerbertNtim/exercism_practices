//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dnaStrand) => {
  let rna = ''
  for (let i = 0; i < dnaStrand.length; i++) {
    switch(dnaStrand[i]) {
      case 'G':
        rna += "C"
        break
      case 'C':
        rna += 'G'
        break
      case "T":
        rna += 'A'
        break
      case 'A':
        rna += 'U'
        break
      default:
        rna += ''
    }
  }
  
  return rna
};

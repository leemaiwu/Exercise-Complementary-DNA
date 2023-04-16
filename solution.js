const DNAStrand = (dna) => {
    let pairs = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    }

    return dna.replace(/A|T|C|G/g, function(key) {
        return pairs[key]
    })
}

console.log(DNAStrand('ATTGC')) // TAACG
console.log(DNAStrand('GTAT')) // CATA
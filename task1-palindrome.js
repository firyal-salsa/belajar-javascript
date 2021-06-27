const clean = (kata) => kata.toLowerCase().replace(/[\W_]/g, '')
const palindrom = (kata) => {
    const cleanStr = clean(kata);
    return cleanStr.split('').every((c,i) => c == cleanStr[cleanStr.length - 1 - i])
}

console.log(palindrom('malam'))
console.log(palindrom('iyal'))

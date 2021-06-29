let palindrom = (kata) => {
    let syarat = kata.toLowerCase().replace(/[\W_]/g, '')
    return syarat.split('').every((elemen,index) => elemen == syarat[kata.length - 1 - index]) === true? 'palindrom':'bukan palindrom'
}

console.log(palindrom('kapak'))

let findClosestNum = (array,angka)=>{
    return array.reduce((p, n) => (Math.abs(p) > Math.abs(n - angka) ? n - angka : p), Infinity) + angka
}

console.log(findClosestNum([1, 2, 3, 4, 5, 6, 7, 8, 9], 12))

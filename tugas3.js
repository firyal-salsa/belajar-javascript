let SeleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if(nilaiAwal<nilaiAkhir && dataArray.length>=5){
        return dataArray.filter((v)=> v > nilaiAwal && v < nilaiAkhir).sort((a,b)=>a-b)
    }else if(nilaiAwal>nilaiAkhir && dataArray.length<5){
        console.log('Nilai akhir harus lebih besar dari nilai awal dan Jumlah angka dalam dataArray harus lebih dari 5')
    }else if(nilaiAwal>nilaiAkhir){
        console.log('Nilai akhir harus lebih besar dari nilai awal')
    }else if(dataArray.length<5){
        console.log('Jumlah angka dalam dataArray harus lebih dari 5')
    }
}

console.log(SeleksiNilai(3,15,[2,25,8,14,9,30, 0]))
//console.log(SeleksiNilai(15,3,[2,25,4,14,17,30,8]))
//console.log(SeleksiNilai(4,17,[2,25,4]))
/*Algoritma
1. Mulai
2. Buat variabel
3. Isi variabel dengan angka-angka
4. Gunakan angka nol dalam variabel sebagai pemisah antara satu bilangan dengan bilangan lainnya
5. Pisahkan dan urutkan elemen di dalam variabel
6. Gabungkan kembali elemen-elemen tanpa pemisah (0)
7. Output berupa bilangan integer
8. Selesai
*/

//Code
                                    
let divideAndSort = (int)=>{
    let a = String(int).split("0")
        for (const i of a) {
            console.log(i.split('').sort().map((num)=>{return Number(num)}).join(''))
        }
    
}
console.log(divideAndSort(5956560159466056))

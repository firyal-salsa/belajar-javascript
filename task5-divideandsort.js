/*
                            Soal
    1. Diberikan sebuah variabel yang berisikan bilangan integer dengan
    2. ketentuan angka 0 (nol) dalam variabel tersebut merupakan pemisah antara satu bilangan dengan bilangan lainnya
    3. Bilangan-bilangan tersebut akan dipisah dan diurutkan berdasarkan angka di bilangan-bilangan itu sendiri
    4. Bilangan hasil pengurutan akan digabungkan kembali dengan tanpa pemisah dengan output berupa bilangan integer
    5. Buatlah method/function yang menerima parameter hanya deret angka
    6. Menghasilkan output angka saja

*/


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

//map((num)=>{return Number(num)}).sort((a,b)=>a-b).join(' ')

//Code
                                    
let divideAndSort = (int)=>{
    let a = String(int).split("0")
        for (const i of a) {
            console.log(i.split('').sort().map((num)=>{return Number(num)}).join(''))
        }
    
}
console.log(divideAndSort(5956560159466056))

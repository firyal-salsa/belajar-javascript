// Built-in function JavaScript (Metode bawaan JS)

/* reduce (array method)
    yaitu Metode yang mengeksekusi fungsi yang diberikan pada setiap elemen dari array lalu menghasilkan nilai output tunggal.
    digunakan untuk : mengakumulasi atau mengurangi nilai berdasarkan elemen di dalam array
    parameter : function(accumulator,currentValue, index,arr)
    arguments : Accumulator     : Required. initialValue atau nilai function yang dikembalikan sebelumnya
                Current Value   : Required. Nilai element saat ini
                Current Index   : Optional. Indeks array dari elemen saat ini
                Source Array    : Optional. Objek array yang dimiliki elemen saat ini
                initial Value   : Optional. Nilai yang akan diteruskan ke fungsi sebagai nilai awal
*/

        // Cara dan contoh penggunaan reduce

        //function
        //tambah semua nilai di dalam array
        //array.reduce(function(accumulator, currentValue))
        // var x = [4, 8, 1, 9, 5].reduce(function(accumulator, currentValue) {
        //     return accumulator + currentValue
        // })
        // console.log(x)

        //Arrow function
        //Array ke number
        //reduce((accumulator, currentValue) => { ... } )
        // const nilai = [67, 70, 75, 80];
        // const total = (accumulator, currentValue) => accumulator + currentValue;
        // console.log(nilai.reduce(total));

        // callback
        //menentukan nilai yang paling besar
        //reduce(callbackFn, initialValue)
        // const x = (a, b) => Math.max(a, b);
        // console.log([1, 50].reduce(x, 25));


        // Arrow function
        // array ke object
        //reduce((accumulator, currentValue, index, array) => { ... }, initialValue)
        // const jumlah = array => array.reduce(
        //     (a, n) => {
        //     return a + n
        // }, 0)

        // console.log('01', {jumlah:jumlah([6,4,7])})


/* some (array method)
    yaitu Metode yang mengecek satu atau lebih elemen dalam array apakah sesuai dengan fungsi yang disediakan,
    jika 'iya' akan mengembalikan nilai true dan jika 'tidak' akan mengembalikan false.
    digunakan untuk : menentukan satu atau lebih nilai yang sesuai dengan yang dicari
    parameter : function(currentValue, index, arr)
    arguments : currentValue : Required. Nilai element saat ini
                index : Optional. Indeks array dari elemen saat ini
                arr : Optional. Objek array yang dimiliki elemen saat ini
*/
//Cara dan contoh penggunaan some

        //elemen pada array menggunakan arrow function
        //array.some((currentValue)=>{...})
        // console.log([9, 13, 6, 0, 19.5].some(x => x > 20))
        // console.log([17, 21, 1, 8, 4].some(x => x > 20))

        //Function
        //Memeriksa apakah ada nilai dalam array
        // const sayur = ['wortel', 'buncis', 'tomat', 'kol'];
        // function ketersediaan(a, v) {
        //   return a.some(ketersediaan => v === ketersediaan);
        // }
        // console.log(ketersediaan(sayur, 'buncis'));   
        // console.log(ketersediaan(sayur, 'kangkung'));


/* filter (array method)
    yaitu Metode yang membuat sebuah array baru dengan semua elemen yang lulus tes dilaksanakan oleh fungsi yang disediakan.
    digunakan untuk : menentukan nilai yang sesuai dengan apa yang disaring
    parameter : function(currentValue, index,arr)
    arguments : currentValue : Required. Nilai elemen saat ini
                index   : Optional. Indeks array dari elemen saat ini
                arr     : Optional. Objek array yang dimiliki elemen saat ini

*/
        //Cara dan contoh penggunaan filter

        //Function
        //Memfilter nilai lebih dari 15
        //var newArray = umur.filter(function(item) {return condition;});
        // let umur = [5,6,18,7,21,14];

        // let hasil = umur.filter(function(umur) {
        // return umur < 15;
        // });
        
        // console.log(hasil)

        //Arrow function
        // let genap = (value)=>{
        //     return value % 2 == 0;
        //   }
          
        //   var diFilter = [13,5,6,8,23,26].filter(genap);
        //   console.log(diFilter);


/* split (string method)
 yaitu metode yang mengubah input string menjadi array oleh separator(pemisah), 
 digunakan untuk : memisahkan karakter tertentu pada string
 parameter : separator : Optional. Menentukan karakter, atau ekspresi reguler, yang akan digunakan untuk memisahkan string
             limit : Optional. Integer yang menentukan jumlah split, item setelah batas split tidak akan dimasukkan dalam array
*/
        //Cara dan contoh penggunaan split

        //split(separator)
        //menghilangkan karakter dalam kalimat
        let kalimat = "metode yang digunakan untuk mengubah input string menjadi array"
        // console.log(kalimat.split('input string'))

        //split()
        //mengubah string menjadi array
        // console.log(kalimat.split())

        //split(separator, limit)
        //mengambil 3 kata dalam kalimat
        // console.log(kalimat.split(' ', 3))

        //split(separator)
        //mengambil huruf dalam kalimat
        //console.log(kalimat[0])


/* getMonth (date method)
    yaitu Metode yang mengembalikan bulan (dari 0 hingga 11) untuk tanggal yang ditentukan, menurut waktu setempat.
    digunakan untuk : memperoleh dan menampilkan bulan
*/
//Cara dan contoh penggunaan getMonth

//Date.getMonth()

//menentukan bulan sekarang
// let tgl = new Date();
// var bln = new Array();
// bln[0] = "Januari";
// bln[1] = "Februari";
// bln[2] = "Maret";
// bln[3] = "April";
// bln[4] = "Mei";
// bln[5] = "Juni";
// bln[6] = "Juli";
// bln[7] = "Agustus";
// bln[8] = "September";
// bln[9] = "Oktober";
// bln[10] = "November";
// bln[11] = "Desember";
// let hasil = bln[tgl.getMonth()];

// console.log(hasil);

//menentukan bulan lahir
// const lahir = new Date('October 01, 1999 15:30:30');
// const month = lahir.getMonth()+1;

// console.log(month);

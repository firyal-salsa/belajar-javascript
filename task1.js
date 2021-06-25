//mengecek hari kerja
const cekHariKerja = (day)=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
			let cek = dataDay.find((item)=>{ // nilai elemen pertama dalam array yang disediakan yang memenuhi fungsi pengujian yang disediakan
				return item === day
			})
			if(cek){
				resolve(cek)
			}else{
				reject(new Error('Hari ini bukan hari kerja'))
			}
		}, 3000)
	})
}
try {
    cekHariKerja('senin')
        .then(cek => console.log(cek))
        .catch(error => console.log(`${error}`));
} catch (error) {
    console.log(`${error}`);
}

//then catch digunakan pada promise, then untuk menangkap resolve (janji terpenuhi)
									//catch untuk menangkap reject (janji dibatalkan)
//try catch digunakan pada async await, try digunakan untuk jika code berhasil berjalan
									//  catch digunakan untuk mengirimkan error dan menampilkan error

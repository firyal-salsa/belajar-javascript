// //Program cek Nomor

// function cekNomor(nomor) {
//     return new Promise((resolve, reject) => {
//         if (nomor > 0) {
//             console.log('nomor positif')
//         }else{
// 			const negatif = 'nomor negatif'
//             reject(negatif)
// 		}
//     });
// }



// try {
//     cekNomor(-1)
//         .then(response => console.log(response))
//         .catch(err => console.log(`error : ${err}`));
// } catch (error) {
//     console.log(`error : ${error}`);
// }



//Program mengerjakan tugas

let sudah = true

const ApakahSudah = new Promise((resolve, reject) => {
  if (sudah) {
    const kerjaanSelesai = 'Sudah selesai mengerjakan'
    resolve(kerjaanSelesai)
  } else {
    const belum = 'Masih ada kendala'
    reject(belum)
  }
})

const cekTugas = (tugas)=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			const dataTugas = ['task1', 'task2', 'task3', 'task4', 'task5','task6']
			let cek = dataTugas.find((item)=>{
				return item === tugas
			})
			if(cek){
				resolve(cek)
			}else{
				reject(new Error('bukan tugas'))
			}
		}, 1000)
	})
}
try {
    Promise.all([ApakahSudah, cekTugas('task1')]).then(response => console.log(response))    
} catch (error) {
    console.log(`${error}`);
}

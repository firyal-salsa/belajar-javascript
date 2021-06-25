const getmonth = (callback)=>{
	setTimeout(()=>{
	let error = false
	let month = ['January', 'February', 'March', 'April','May', 'Juni', 'July', 'August', 'September', 'October', 'November', 'Desember']
	if(!error){
		callback(null,month)
	}else{
		callback(new Error('Sorry Data Not Found', []))
	}
	}, 4000)
}

callback = function(angka,bulan) {
	this.null = angka
	this.month = bulan;
	return console.log(this.month.map(x => x)) //membuat array baru yang diisi dengan hasil pemanggilan fungsi.
   }


  try { 
	newMonth = getmonth(callback)
	console.log(newMonth)
  }catch (error) {
	monthName = 'null';
	console.log(error)
  }




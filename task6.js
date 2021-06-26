const fetch = require('node-fetch');

let data1 = {
	id: 4,
	email: "astrowarden@moba.ml",
	first_name: "Yve",
	last_name: "astrowarden",
	avatar : "https://regres.in/",
}

function ObjectCompare() {
	fetch('https://reqres.in/api/users/4')
    .then(res => res.json())
    .then(json => {json.data;

		let a = Object.keys(data1)
		let b = Object.keys(json.data)
		let c = Boolean(a,b)
		let ax = Object.values(data1)
		let bx = Object.values(json.data)

		if(c === true){
			console.log(`Value : ${ax == bx? true:false}`)
			console.log(`Tipe data : ${typeof a == typeof b? true:false}`)
		}else{
			return false;
		}
	})
}

ObjectCompare()
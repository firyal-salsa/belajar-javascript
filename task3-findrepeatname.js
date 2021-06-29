const name = [
'Abigail', 'Alexandra', 'Fatih',
'Amanda', 'Angela', 'Bella',
'Carol', 'Caroline', 'fatih',
'Deirdre', 'Diana', 'Elizabeth',
'Ella', 'Faith', 'Olivia', 'Penelope',
'Diani', 'fatih', 'carol' , 'fatih', 'Faith'
]

let findRepeatName = (name)=>{
    if(name.length == 0){
        console.log('array tidak boleh kosong')
    }else{
        return name.filter((s => v => s.has(v) || !s.add(v))(new Set)).splice(' ',1).toString()
    }
}

console.log(findRepeatName(name))

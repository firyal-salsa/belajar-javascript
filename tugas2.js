const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope']
    
    const searchNama = (arr,query,jumlah, callback) => {
            let x = arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)

            callback(x,jumlah)
    }
    
    const rentang = (x,jumlah)=>{
        x.length = jumlah
        x.forEach(element => console.log(element))
    }
  
    
    
    console.log(searchNama(name,'rol',2,rentang))
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=-';
        let charactersLength = characters.length;
        let panjang = Math.random() * (6 - 4) + 4;

function checkPass(password,level) {
    if(level === 'strong'){
        
        for ( let i = 0; i < panjang; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        } 
        //charAt =mengembalikan karakter pada indeks tertentu dalam sebuah string. Indeks dari karakter pertama adalah 0, karakter kedua adalah 1, dan seterusnya.
        //floor =sebuah fungsi untuk mengembalikan nilai menjadi bilangan bulat dari yang terbesar kurang dari atau sama dengan.

        password = password.replace(/^\w/, c => c.toUpperCase());
        return password+result;
        //replace = penggantian sebuah String
        //mengonversi string menjadi huruf besar
        //digunakan untuk menemukan karakter kata
    }else if(level === 'good'){
        password = password.replace(/^\w/, c => c.toUpperCase());
        return password;
    }else if(level === 'low'){
        return password;
    }
    
 }
console.log(checkPass('abc', 'strong'));
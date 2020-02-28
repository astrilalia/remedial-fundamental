// Uang tersedia 25, 50, 100 dollar
// Jika ada kembalian maka YES
// Jika tidak ada kembalian maka NO

function ticket(arr){
    var kasir = 0
    // console.log(kasir)
    for (let i = 0; i<arr.length; i++){
        if(arr[i] === 25){
            kasir += 25
        }else if (arr[i] === 50 && kasir >= 50){
            kasir += arr[i]
            kasir -= 25
        }else if (arr[i] === 100){
            kasir -= 75
        }
    }
    if (kasir < 75 && kasir != 0){
        return ('NO')
    }else{
        return ('YES')
    }
}

console.log(ticket([25,25,50]))
console.log(ticket([25,100]))
console.log(ticket([25,25,50,50,100]))
console.log(ticket([100]))
console.log(ticket([25,25,50,100]))

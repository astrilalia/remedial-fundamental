// Bikin segitiga sama kaki (ganjil)

let output = []
function segitigaGanjil(baris){
    let x = 1
    for (let i = 0; i<baris; i++){
        for(let j = 1; j<baris-i; j++){
            output.push(' ')
        }
        for(let y = 1; y<=i; y++){
            output.push(x+' ')
            x += 2
        }
        output.push('\n')
    }
    return output.join('')
}
// console.log(segitigaGanjil(2))
// console.log(segitigaGanjil(5))
console.log(segitigaGanjil(8))
// console.log(segitigaGanjil(10))

// Bikin jumlah angka tiap baris

function segitigaGanjilTambah(num){
    return num*num*num
}
console.log(segitigaGanjilTambah(2))
console.log(segitigaGanjilTambah(5))
console.log(segitigaGanjilTambah(8))
console.log(segitigaGanjilTambah(10))
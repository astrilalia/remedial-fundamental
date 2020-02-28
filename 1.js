// Jika sama semua = True
// Jika beda = False

function allEqual(arr) {   
    for (var i=1; i< arr.length; i++) {
        if (arr[i] !== arr[0]) { 
            return false
        }
    }
  
    for (var i=1; i< arr.length; i++) {
        if (arr[i] === arr[0]) { 
            return true
        }
    }
  }

console.log(allEqual([1,2,3,4,5,6]))
console.log(allEqual([12,12,12,12]))
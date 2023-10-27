
function modify(arr){ // arr = arr1
    for(let i = 0; i<=arr.length-1; i++){
        arr[i] = arr[i] ** 2;
    }

    return arr
}


let arr1 = [1,2,3,4,5];

let x = modify(arr1);

console.log(arr1);
console.log(x)


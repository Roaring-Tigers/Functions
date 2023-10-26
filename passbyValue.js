// pass by value / Call by value: 


function change(a){ // a = 20
     a = 10 
     console.log("Value of 'A' inside function",a)
}

let a = 20 

change(a)

console.log("Value of 'A' outside function",a) 


// tmd:

// let x = 100  // global scope

// for(let i = 1; i<=1; i++){
// //    console.log(x)
//    let x = 200 // local scope


// }

// console.log(x) 
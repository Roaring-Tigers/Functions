

function modify(b){ // b = a =  address of a(1st elemnt of a)
  b[0] = 100

//   console.log("Value of 'B' inside function",b)
}



let a = [10,20,30,40,50]

modify(a)

console.log("Value of 'A' outside function",a)


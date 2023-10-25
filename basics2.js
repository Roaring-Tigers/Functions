// paramaters: 

// function hello(name, age){ // parameter
//     console.log("Hello " + name + " your age is " + age)
// }


// hello("John", 30, "apple") // argument



// function sum(a=0,b=0){ // default parameter
//      console.log(a,b)
    
// }

// sum()



function sum(t, ...arr){ // rest parameter
    console.log(t, arr)
}

// sum([10,20])
// sum([10,20,30])
// sum([10,20,30,40])
// sum([10,20,30,40,50])

// sum(10,20,30,40,50)
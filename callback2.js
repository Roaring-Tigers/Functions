


function hello(n, fun){ //  n = 100 , fun  = function(){sum(10,20)}
    console.log(n)
    fun()
}



// function fun(){
//     sum(10,20)
// }



let a = 100 

function sum(x,y){
    console.log("Sum is:",x+y)
}

hello(a,  function(){sum(10,20)})
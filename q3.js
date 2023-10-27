
function q3(hello){ //  hello = function(){return sum(10,20)}
    console.log("A")
    console.log(hello()); 
}


function sum (a,b){
    return a+b;
}

// q3(sum)
// q3(sum(1,2))
// q3(sum())
// q3(function(){return sum(10,20)})

// q3(()=>{return sum(10,20)})  

q3(()=>sum(10,20))  // 30
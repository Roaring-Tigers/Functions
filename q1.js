
// Lets take a number   // 765
// step 1:  find  sum of its digits // 7+6+5 = 18
// ste2: Multiply that number with itself // 18*18 = 324
// step 3:  find the sum of digits of number in step 2 : 3+2+4 = 9
// step 4: find cube of that number // 9*9*9 = 729
// step 5: find the sum of digits of number in step 4 : 7+2+9 = 18


// let n1 = 765

// let sum1 = 0
// while(n1>0){
//     let last = n1%10 
//     sum1  = sum1 + last
//     n1 = parseInt(n1/10)
// }

// console.log(sum1)

//  n1 = sum1*sum1 
//  sum1 = 0

// while(n1>0){
//     let last = n1%10 
//     sum1  = sum1 + last
//     n1 = parseInt(n1/10)
// }

// console.log(sum1)

// n1 = sum1*sum1*sum1
// sum1 = 0
// while(n1>0){
//     let last = n1%10 
//     sum1  = sum1 + last
//     n1 = parseInt(n1/10)
// }

// console.log(sum1)

// functional approcah:


function sumOfDigits(n){
     let sum = 0
     while(n>0){
            let last = n%10 
            sum  = sum + last
            n = parseInt(n/10)
     }
     return sum
}

let n1 = 765

let digits_sum = sumOfDigits(n1) 

let n2 = digits_sum*digits_sum // 18*18 = 324

digits_sum =  sumOfDigits(n2)

let n3 = digits_sum**3 // 9*9*9 = 729
digits_sum = sumOfDigits(n3)

console.log(digits_sum)
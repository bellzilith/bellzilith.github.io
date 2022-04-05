//Exercise #1
const paymentPerMonthCost = (cost) => {
    const transactionFee = 3
    const interestFee = cost * 0.001
    return cost + transactionFee + interestFee
}
console.log (paymentPerMonthCost(100))
  
//Exercise #2
//Part1
const Welcome3Friends = (name1, name2, name3) => {
    return `Welcome ${name1}, ${name2}, ${name3}`
}
console.log (Welcome3Friends(1,2,3))

//Part2
const calAge = (birthYear) => {
    birthYear = Number(birthYear); // แปลง string ให้เป็นตัวเลข
    const currentYear = new Date().getFullYear(); // รับค่าปีปัจจุบัน
    return currentYear - birthYear;
}

console.log (calAge(1989))

//Part3
const welcome3FriendsAge = (name1, age1, name2, age2, name3, age3) =>{
    return `Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`
} 

console.log (welcome3FriendsAge(1,1,2,2,3,3))

//Challenge Yourself
const isPassRubricGrade = (score) => {
    score = Number(score) // แปลง string ให้เป็นตัวเลข
    if (score > 11 || score <  0) {
        console.log ('Wrong grading')
        return false;
    }
    const isScorePass5 = (score) >= 5 //Part1
    
    if (score === 11 ) {
        console.log('Perfect') //Part2
    }else if (score > 8) {
        console.log('Excellent') //Part3
    }
    return isScorePass5
} 

console.log (isPassRubricGrade());
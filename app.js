const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromEuroToDollar= (a,b)=>{
    return a * oneEuroIs.USD
}
console.log (fromEuroToDollar(10))

const fromEuroToYen=(c,d)=>{
    return c * oneEuroIs.JPY
}
console.log (fromEuroToYen (10))

const fromEuroToPound=(e,f)=>{
    return e * oneEuroIs.GBP
}
console.log (fromEuroToPound (10))

const fromDollarToYen=(a,b)=>{
    return oneEuroIs.JPY / oneEuroIs.USD
}
console.log (Math.floor(fromDollarToYen (1)))



const fromYenToPound=(a,b)=>{
    return oneEuroIs.GBP / oneEuroIs.JPY
}
console.log (fromYenToPound (1))



module.exports = { fromEuroToDollar, sum, fromEuroToYen, fromEuroToPound, fromDollarToYen, fromYenToPound };
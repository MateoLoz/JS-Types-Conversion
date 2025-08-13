function sum (a,b) {
    let sum = Number(a) + Number(b)
    return sum
}

function formatMoney (amount) {
 const newAmount = amount.toFixed(2)
 const result = `$${newAmount}`
 return result
}

function convertToBoolean (value) {
    return Boolean(value)
}


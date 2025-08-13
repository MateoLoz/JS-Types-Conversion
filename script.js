function sum (a,b) {
    let sum = Number(a) + Number(b);
    return sum
}

function formatMoney (amount) {
 return `$${amount.toFixed(2)}`;
}

function convertToBoolean (value) {
    return Boolean(value);
}

if (typeof window !== 'undefined') {
    window.sum = sum;
    window.formatMoney = formatMoney;
    window.convertToBoolean = convertToBoolean;
} else if (typeof global !== 'undefined') {
    global.sum = sum;
    global.formatMoney = formatMoney;
    global.convertToBoolean = convertToBoolean;
}
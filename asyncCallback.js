
function displayContent(something) {
    console.log(something)
}

function calculator (num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum)
}

calculator(10, 5, displayContent); 


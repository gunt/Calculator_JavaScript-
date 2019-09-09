// Inside the function calc (inside curly bracket 
// we need to do 
// 3 different things.
// 1. Grab the value from inside the form. 
// 2. Then Calcualate them.
// 3. Output inside the website

// Function, Methods, properties, conditional statement.

function calc() {
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var op = (document.querySelector("#operator").value);

    var calculate;

    if (op == "add") {
        calculate = a + b;
    } else if (op == "min") {
        calculate = a - b;
    } else if (op == "div") {
        calculate = a / b;
    } else if (op == "mul") {
        calculate = a * b;
    }

    // console.log(calculate);
    document.querySelector("result").innerHTML = calculate;
}

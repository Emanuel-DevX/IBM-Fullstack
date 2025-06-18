let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    console.log(length, width)
    let result = length * width
    let resText = `The area of the given rectangle is ${result}`
    document.getElementById("result").innerText = resText
   }

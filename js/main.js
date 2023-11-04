const spesa = ["pesca", "pasta", "pane", "salmone", "cereali"];
console.log(spesa);

let x = 0;
while (x < spesa.length) {
    document.getElementById("compere").innerHTML = spesa;
    x++
}
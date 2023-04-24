// Addition
function sum() {
    var a = document.getElementById('optionA').value;
    var b = document.getElementById('optionB').value;
    var c = parseInt(a);
    var d = parseInt(b);
    if (c + d) {
        document.getElementById('p1').innerHTML = c + d + " " + "is the sum";
    } else {
        document.getElementById('p1').innerHTML = "Enter a valid number";
    }
}
// Multiplication
function times() {
    var e = document.getElementById('optionE').value;
    var f = document.getElementById('optionF').value;
    var g = e * f;
    if (e * f) {
        document.getElementById('p2').innerHTML = g + " " + "is the answer";
    } else {
        document.getElementById('p2').innerHTML = "Enter a valid number";
    }
}
// Divide
function divide() {
    var h = document.getElementById('optionH').value;
    var i = document.getElementById('optionI').value;
    var j = h / i;
    if (h / i) {
        document.getElementById('p3').innerHTML = j + " " + "is the division";
    } else {
        document.getElementById('p3').innerHTML = "Enter a valid value"
    }
}
//Minus
function minus() {
    var k = document.getElementById('optionK').value;
    var l = document.getElementById('optionL').value;
    var m = (k - l);
    if (k - l) {
        document.getElementById('p4').innerHTML = m + " " + "is the value";
    } else {
        document.getElementById('p4').innerHTML = "Enter a valid value";
    }
}
// Greater-Than
function greater() {
    var n = document.getElementById('optionN').value;
    var o = document.getElementById('optionO').value;

    if (n > o) {
        document.getElementById('p5').innerHTML = n + " " + "is greater";
    } else if (o > n) {
        document.getElementById('p5').innerHTML = o + " " + "is greater";
    } else if (o == n) {
        document.getElementById('p5').innerHTML = "Similar Values";
    } else {
        document.getElementById('p5').innerHTML = "Enter a valid number";
    }
}

// Module
function mod(){
    var p = document.getElementById('optionP').value;
    var q = document.getElementById('optionQ').value;
    var r = (p % q);
    var s;
    var v = (p % q)? s = r + " " + "is the Remainder": s = "No Remainder";
    document.getElementById('p6').innerHTML = v;
}

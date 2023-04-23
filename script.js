    // (a > b)? c = document.getElementById('optionA').value + "is greater":    

function ans(){

    var a = document.getElementById('optionA').value;
    var b = document.getElementById('optionB').value;
     
    if (a > b) {
        document.getElementById('p1').innerHTML = a + " " + "is Greater";
        return c;
    } else if (b > a) {
        document.getElementById('p1').innerHTML = b + " " + "is Greater";
        return c;
    } else if (a == b) {
        document.getElementById('p1').innerHTML = "Both A & B are equal";
        return c;
    } else {
        document.getElementById('p1').innerHTML = "Enter a valid number";
        return c;
    }
}
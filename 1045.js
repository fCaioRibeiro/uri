var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines.shift())
var b = parseFloat(lines.shift())
var c = parseFloat(lines.shift())
var tp = null

if (b > a && b > c) {
    tp = a;
    a = b;
    b = tp;
} else if (c > a) {
    tp = a;
    a = c;
    c = tp;
}

if (a >= (b + c)) { 
    console.log("NAO FORMA TRIANGULO");
} else {
    if (a*a == (b*b) + (c*c)) console.log("TRIANGULO RETANGULO");
    if (a*a > (b*b) + (c*c)) console.log("TRIANGULO OBTUSANGULO");
    if (a*a < (b*b) + (c*c)) console.log("TRIANGULO ACUTANGULO");
    if (a == b && a == c) console.log("TRIANGULO EQUILATERO");
    if ((a == b && a != c) || (a == c && a != b) || (b == c && b != a)) console.log("TRIANGULO ISOSCELES");
}

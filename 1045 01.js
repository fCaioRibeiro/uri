var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

lines = lines.sort((a, b) => b - a)

var a = parseFloat(lines.shift())
var b = parseFloat(lines.shift())
var c = parseFloat(lines.shift())

if (a >= (b + c)) return console.log("NAO FORMA TRIANGULO")

if (a*a == (b*b) + (c*c)) console.log("TRIANGULO RETANGULO")
if (a*a > (b*b) + (c*c)) console.log("TRIANGULO OBTUSANGULO")
if (a*a < (b*b) + (c*c)) console.log("TRIANGULO ACUTANGULO")
if (a == b && a == c) console.log("TRIANGULO EQUILATERO")
if ((a == b && a != c) || (a == c && a != b) || (b == c && b != a)) console.log("TRIANGULO ISOSCELES")


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const calcVolume = (raio, pi = 3.14159) => 4/2 * pi * Math.pow(raio, 3)
console.log(`VOLUME = ${calcVolume(parseFloat(input))}`)
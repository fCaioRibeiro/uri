var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n',)

for (j = 0; j < lines.length; j++) {
    var diamante = 0
    for (i = 0; i < lines[j].length; i++) {
        if (lines[j][i] === '<') {
            for (i = 0; i < lines[j].length; i++) {
                if (lines[j][i] === '>') {
                    diamante ++ 
                    lines[j][i] = ''
                }
            }
        }
    }    
    console.log(diamante);
}

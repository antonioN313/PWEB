const fs = require('fs');
fs.readFile('cidades.txt',(err,data) =>{
    if (err) throw err;
    console.log(data.toString());
});

for (let i = 1; i <= 10; i++) {
    console.log('Segunda Parte='+i);
    
}
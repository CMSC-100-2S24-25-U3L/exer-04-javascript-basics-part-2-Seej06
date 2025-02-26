const test = require('./index.js');

console.log(test.generateUniqueID("Alan", "Turing"))
console.log(test.addAccount(["Alan", "Turing", "aturing@w3c.com", 58]));
console.log(test.addAccount(["Tim", "Berners-Lee", "tim@w3c.com", 17]));
console.log(test.addAccount(["Ted", "Nelson", "ted.n@w3c.com", 43]));
console.log(test.addAccount(["Alan", "Turing", "aturingw3c.com", 58]));
console.log(test.addAccount(["Alan", "aturing@w3c.com", 58]));
console.log(test.addAccount(["Tim", "Berners-Lee", "tim@w3c.com", 18]));

var hashword = require('./index.js');
var bcrypt = require('bcrypt');

hashword.init();
var password = hashword.generatePassword(10);


var sym = [".", " "];
var n = 100;
console.log('\n\nRunning Benchmark 1 : Check Hash');

//bcrypt
var hash = bcrypt.hashSync(password, 10);
var started = new Date().getTime();
process.stdout.write(sym[1]);
for (var i = 0; i < n; i++) {
    var success = bcrypt.compareSync(password, hash);
    process.stdout.write("\b\b" + sym[i % 2]);
}
var finished0 = new Date().getTime() - started;
console.log("\nBcrypt \t\t: " + n + " hashes in ", finished0 + " msec");

//hashword
var hash = hashword.hashPassword(password);
var started = new Date().getTime();
process.stdout.write(sym[1]);
for (var i = 0; i < n; i++) {
    var success = hashword.checkPassword(password, hash);
    process.stdout.write("\b\b" + sym[i % 2]);
}
var finished1 = new Date().getTime() - started;
console.log("\bHashword \t: " + n + " hashes in ", finished1 + " msec\n");

//results
if (finished0 > finished1) {
    console.log("Hashword is faster by " + (finished0 / finished1 * 100 - 100).toFixed(2) + "%")
} else if (finished0 < finished1) {
    console.log("Bcrypt is faster by " + (finished1 / finished0 * 100 - 100).toFixed(2) + "%")
} else {
    console.log("Scores level")
}


var n = 100;
console.log('\n\nRunning Benchmark 2 : Generate Hash');

//bcrypt
var started = new Date().getTime();
process.stdout.write(sym[1]);
for (var i = 0; i < n; i++) {
    var hash = bcrypt.hashSync(password, 10);
    process.stdout.write("\b\b" + sym[i % 2]);
}
var finished0 = new Date().getTime() - started;
console.log("\nBcrypt \t\t: " + n + " hashes in ", finished0 + " msec");

//hashword
var started = new Date().getTime();
process.stdout.write(sym[1]);
for (var i = 0; i < n; i++) {
    var hash = hashword.hashPassword(password);
    process.stdout.write("\b\b" + sym[i % 2]);
}
var finished1 = new Date().getTime() - started;
console.log("\bHashword \t: " + n + " hashes in ", finished1 + " msec\n");

//results
if (finished0 > finished1) {
    console.log("Hashword is faster by " + (finished0 / finished1 * 100 - 100).toFixed(2) + "%")
} else if (finished0 < finished1) {
    console.log("Bcrypt is faster by " + (finished1 / finished0 * 100 - 100).toFixed(2) + "%")
} else {
    console.log("Scores level")
}
console.log("\n\n");

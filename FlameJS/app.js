const readline = require("readline");

console.log("---------------------------------------------");
console.log("Flame recreation for JavaScript made by Foraged at 12 am.");
console.log("---------------------------------------------");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

rl.question("Enter the first name.\n", (firstName) => {
    firstName = firstName.toLowerCase();
    rl.question("Enter the second name\n", (secondName) => {
        secondName = secondName.toLowerCase();
        for (let c of Array.prototype.map.call(firstName, i => i)) {
            if (firstName.includes(c) && secondName.includes(c)) {
                firstName = firstName.split(c).join("");
                secondName = secondName.split(c).join("");
            }
        }


        let chars = ["F", "L", "A", "M", "E"];

        let charAmount = (firstName + secondName).length;

        for (let z = 0; z < 4; z++) {
            let f = 0;

            for (let i = 0; i < (charAmount - 1); i++) {
                f++;
                if (f === chars.length) f = 0;
            }

            chars.remove(f)
        }

        console.log("---------------------------------------------");
        console.log("The result is " + format(chars[0]));
        console.log("---------------------------------------------");
    });
});

function format(string) {
    if (string == "F") return "Friend";
    if (string == "L") return "Love";
    if (string == "A") return "Affection";
    if (string == "M") return "Marry";
    if (string == "E") return "Enemy";
    return "Error";
}
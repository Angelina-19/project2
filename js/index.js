let n = 5;
let number = 1/2;
let message = "Hello";
let boolean = true;

n = 7;
number = 3/4;
message = "Buy";
boolean = false;

console.log(typeof n);
console.log(typeof number);
console.log(typeof message);
console.log(typeof boolean);

let konk = n + message;
number = "Hi";
boolean = 4;

let object = {
    name: "Angelina",
    age: 16,
    village: "Lypyny",
    student: true,
}

console.log(JSON.stringify(object));


let number1 = prompt("Введіть перше число:");
let number2 = prompt("Введіть друге число:");
let number3 = prompt("Введіть третє число:");

let aruf = number1 + number2 + number3 / 3;
console.log(aruf);
let abs;
if (number1 < 0) {
    abs = -number1;
} else {
    abs = number1;
}

let ceilNumber2;
if (number2 % 1 === 0) {
    ceilNumber2 = number2;
} else {
    if (number2 > 0) {
        ceilNumber2 = parseInt(number2) + 1;
    } else {
        ceilNumber2 = parseInt(number2);
    }
}

let floorNumber3;
if (number3 % 1 === 0) {
    floorNumber3 = number3;
} else {
    floorNumber3 = parseInt(number3);
}

let pow = number1;
for (let aruf = number2; aruf > 1; aruf --) {
    pow *= number1;
}

if (number1 % 5 == 0);
if (number2 % 7 == 0);

let n1 = 3, n2 = 6, n3 = 8;
if (n1 + n2 > n3 && n1 + n3 > n2 && n2 + n3 > n1) {
    console.log("Трикутник існує");
} else {
    console.log("Трикутник не існує");
}


let snag1 = prompt("Введіть перше значення:");
let snag2 = prompt("Введіть друге значення:");
let snag3 = prompt("Введіть третє значення:");
let nab = Math.max(snag1, snag2, snag3);
let nam = Math.min(snag1, snag2, snag3);

let par = snag1 % 2 === 0 || snag2 % 2 === 0 || snag3 % 2 === 0;
console.log(par);

let gag = snag1 > snag2 && snag2 < snag3;
console.log(gag);

function isPrime(num) {
    if(num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i ++) {
        if (num % 1 === 0) return false;
    }
    return true;
}
console.log(isPrime(snag1));


let name = prompt("Введіть ваше ім'я:");
console.log(name);
let hb = prompt("Введіть рік народження:");
let city = prompt("Введіть місто проживання:");

let year = new Date().getFullYear();
let age = year - hb;
console.log(age);

let groups;
if (age < 13) {
    groups = "Дитина";
} else if (age < 18) {
groups = "Підліток";
} else if (age < 60) {
    groups = "Дорослий";
} else {
    groups = "Літня людина";
}
if (age < 1 || age > 105 || isNaN(age)) {
    console.log("Некоректний вік")
}
console.log(groups);

let capitals = {
   Ukraine: "Kyiv",
   Spain: "Madrid"
};

let citi = "Kyiv"
let couName = null;
for (let cou in capitals) {
    if (capitals[cou] === city) {
couName = cou;
break;
    }
}
if (couName) {
    console.log(`${city} - столиця ${couName}.`);
} else {
 console.log(`${city} - не столиця.`)
};

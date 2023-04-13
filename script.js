//1
let age = prompt('Enter your age');

if (age >= 0 && age < 11) {
    alert(`You're a babby`);
}
if (age >= 12 && age < 17) {
    alert(`You're a teenager`);
}
if (age >= 18 && age < 59) {
    alert(`You're an adult`);
}
if (60 <= age) {
    alert(`You're a pensioner`);
}
if (0 > age) {
    alert(`Wrong age`);
}

//2
let digit = prompt('Enter digit between 0 - 9');
switch (Number(digit)) {
    case 0:
        alert(')');
        break;
    case 1:
        alert('!');
        break;
    case 2:
        alert('@');
        break;
    case 3:
        alert('#');
        break;
    case 4:
        alert('$');
        break;
    case 5:
        alert('%');
        break;
    case 6:
        alert('^');
        break;
    case 7:
        alert('&');
        break;
    case 8:
        alert('*');
        break;
    case 9:
        alert('(');
        break;
}

//3
let range_start = prompt('Enter number start range');
let range_end = prompt('Enter number end range');
let sum = 0;
for(let i = +range_start; i <= +range_end; i++){
    sum = sum + i;
}
console.log(`Sum is ${sum}`)

//4
let number_one = prompt('Enter first number');
let number_two = prompt('Enter second number');
let divider;

for (let i = 1; i <= number_one && i <= number_two; i++) {
    if( number_one % i == 0 && number_two % i == 0) {
        divider = i;
    }
}
console.log(`Greatest Common Divisor of ${number_one} and ${number_two} is ${divider}.`);

//5
let number_div = prompt('Enter first');
let dividers;

for (let i = 1; i <= number_div; i++) {
    if( number_div % i == 0) {
        dividers = i;
        console.log(`Divisor for ${number_div} is ${i}`);
    }
}

//1
let number_five = prompt('Enter five-digit number');

if (number_five.length == 5) {

    for (let i = 0; i < number_five.length / 2; i++) {  
        if (number_five[i] !== number_five[number_five.length - 1 - i]) {  
            alert( 'It is not a palindrome');  
        }  
    }  
    alert( 'It is a palindrome');
}

//2
let purchase_sum = prompt('Enter sum of purchase');
switch(true) {
    case (purchase_sum > 200 && purchase_sum < 300):
        console.log(`Sum of purchase with discount 3% - ${purchase_sum - ((purchase_sum * 3) / 100)}`)
        break;

    case (purchase_sum > 300 && purchase_sum < 500):
        console.log(`Sum of purchase with discount 5% - ${purchase_sum - ((purchase_sum * 5) / 100)}`)
        break;

    case (purchase_sum > 500):
        console.log(`Sum of purchase with discount 7% - ${purchase_sum - ((purchase_sum * 7) / 100)}`)
        break;
}

//3
var user_numbers = [];
for(var u = 0; u < 10; u++){
        user_numbers.push(prompt("Enter numbers 1 - 10"));
    }
let positive_number = 0;
let negative_number = 0;
let zero_number = 0;
let even_number = 0;
let odd_number = 0;

for(let i = 0; i < 10; i++) {

    if(user_numbers[i] > 0) {
        positive_number = positive_number + 1;
    }

    if(user_numbers[i] < 0) {
        negative_number = negative_number + 1;
    }

    if(user_numbers[i] == 0) {
        zero_number = zero_number + 1;
    }

    if(user_numbers[i] % 2 == 0) {
        even_number = even_number + 1;
    }

    if(user_numbers[i] % 2 == 1) {
        odd_number = odd_number + 1;
    }
}

console.log(`Positive numbers: ${positive_number}`);
console.log(`Negative numbers: ${negative_number}`);
console.log(`Zero numbers: ${zero_number}`);
console.log(`Even numbers: ${even_number}`);
console.log(`Odd numbers: ${odd_number}`);

//4
let arr = ['Sunday', 'Monday', 'Tueasday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let check;
    let i = 0;
    do {
        if(i == arr.length) {
            i = 0;
        }
        check = confirm(`${arr[i]}. Do you want to see next day?`);
        i++;
    }
    while (check) 

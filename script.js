//1
function sayHi() {
    alert( 'Hello!' );
  };
  sayHi(); 

  let sayHello = function() {
    alert( "Hello" );
  };
  sayHello();

  //2
  let f_args = function(a, b, c) {
    alert(arguments.length);
  };
  f_args(7,8);

  //3
let num_function = (num1, num2) => {
    if(num1 < num2) {
        return -1;
    }
    if(num1 > num2) {
        return 1;
    }
    if(num1 == num2) {
        return 0;
    }
}

alert(num_function(6, 9))

//4
let f = (num) => {
    let fuct = 1;
    let temp = num;

    for(let i = 1; i <= num; i++) {    
        fuct = fuct * temp; 
        temp = temp - 1;
    }
    return fuct;
} 

console.log(f(6));

//5
let join_numbers = (num1, num2, num3) => {
    return String(num1) + String(num2) + String(num3);
};
alert(join_numbers(4, 7, 0));

//6
let square = function (width, length) {
    if(arguments.length == 2) {
        return width * length;
    };

    if(arguments.length == 1) {
        return width * width;
    }
};
alert(square(5, 9));


//1, 2
function perfect(number) {
    let temp = 0;
    for(let i = 1; i <= number / 2; i++) {
            if(number % i === 0) {
                temp += i;
            }
        }
    
        if(temp === number && temp !== 0) {
            console.log(`${number}  is a perfect number.`);
            return true;
                }  
            return false;
 } 
perfect(28); 


function range(min, max) {
    for(let i = min; i <= max; i++) { 
        if(perfect(i)) {
            console.log(`Perfect number in range ${min} - ${max} is: ${i}`);
        }
    }
}

range(4, 50)
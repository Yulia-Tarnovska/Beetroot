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
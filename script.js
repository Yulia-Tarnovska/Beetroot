let products = [
    {
        name: 'cucumber',
        quantity: 3,
        bought: false,
        price: 50,
        sum: 150,
    },
    {
        name: 'popato',
        quantity: 10,
        bought: true,
        price: 13,
        sum: 130,
    },
    {
        name: 'tomato',
        quantity: 1,
        bought: false,
        price: 25,
        sum: 25,
    },
    {
        name: 'orange',
        quantity: 4,
        bought: true,
        price: 15,
        sum: 60,
    },
];

products.forEach(element => {
    if(!element.bought) {
        console.log(element);
    };
});

products.forEach(element => {
    if(element.bought) {
        console.log(element);
    };
});



let buy = (product_name) => {
    products.forEach(item  => {
        if(item.name === product_name){
            item.bought = true;
            console.log(item);
        };
    })
};

buy('cucumber');


let remove = (product) => {
    const new_array = products.filter((element) => {
        if(element.name != product) {
            return element;
        } ;
    });
    console.log(new_array)
};

remove('tomato');



let add = (product) => {
    products.forEach(element => {
        if(element.name === product.name) {
            product.quantity += element.quantity;
            product.sum += element.sum ;
        }
        else {
            products.push(product);
        }
    })
    console.log(product)

}


add({
    name: 'banana',
    quantity: 6,
    bought: true,
    price: 30,
    sum: 180
});

add({
    name: 'tomato',
    quantity: 2,
    bought: false,
    price: 25,
    sum: 50
});


let sum_bought = (products) => {
    let sum = 0;
    products.forEach(element => {
        if(element.bought === true){
            sum += element.sum;
    }
});
    console.log(sum)
};

sum_bought(products);


let sum_not_bought = (products) => {
    let sum = 0;
    products.forEach(element => {
        if(element.bought === false){
            sum += element.sum;
    }
});
    console.log(sum)
};

sum_not_bought(products);
//1
let car = {
    producer: 'McLaren',
    model: 'P1',
    year: 2023,
    avarage_speed: 350,
    fuel_tank: 50,
    fuel_100: 7.5,
    driver: 'Abbie Eaton',

    info: function () {
        let output ='';
        for(let i in car) {
            output += i + ': ' + car[i]+'; ';
        };
        console.log(`Car info: ${output}`);
    },
    
    add_driver: function (driver_name) {
        this.driver = driver_name;
        console.log(`Car drivers: ${this.driver}`);
    },
    
    check_driver: function (check_driver) {
        if(this.driver === check_driver) {
            console.log('It is our driver'); 
        }
        else {
            console.log('It is not our driver'); 
        }
    },
    
    check_time_fuel: function(distance) {
        console.log(`Time: ${(distance / this.avarage_speed) + ((distance / this.avarage_speed)/4)})`);
        console.log(`Fuel: ${(this.fuel_100 * distance) / 100}`);
    },
};


car.info();
car.add_driver('Michael Schumacher');
car.check_driver('Michael Schumacher');
car.check_time_fuel(300);



//2
let time = {
    hour: 15,
    minute: 45,
    second: 30,

    show_time: function() {
        console.log(`Time is ${this.hour}:${this.minute}:${this.second}`);
    },

    change_second: function(sec) {
        this.second += sec;
        if(this.second > 60) {
            this.second -= 60;
            this.minute = this.minute + 1;
        };
        if(this.second > 60) {
            this.minute += Math.trunc(sec / 60);
            this.second = (sec % 60); 
        };
        console.log(`Time is ${this.hour}:${this.minute}:${this.second}`);
    },

    change_minute: function(min) {
        this.minute += min;
        if(this.minute > 60) {
            this.minute -= 60;
            this.hour = this.hour + 1;
        };
        if(this.minute > 60) {
            this.hour += Math.trunc(min / 60);
            this.minute = (min % 60); 
        };
        console.log(`Time is ${this.hour}:${this.minute}:${this.second}`);
    },

    change_hour: function(h) {      
        this.hour += h;
        if(this.hour > 24) {
            this.hour = (this.hour + h) - 24;
        }
        console.log(`Time is ${this.hour}:${this.minute}:${this.second}`);},
};

time.show_time();
time.change_second(140);
time.change_minute(240);
time.change_hour(2);
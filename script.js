//1
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get circleRadius() {
      return this.radius;
    };


  set circleRadius(radius) {
      this.radius = radius;
  }  

  get circleDiameter() {
    return this.radius * 2;
  };

  circleSquare (radius) {
      return Math.PI * Math.pow(this.radius, 2);
    }

  circleLength (radius) {
      return 2* Math.PI * this.radius;
    }  
}

let circle1 = new Circle(5);

console.log(circle1.circleSquare());
console.log(circle1.circleLength()); 


//2

const inkPersent = 20;
const body = document.getElementsByTagName('body')[0];
let shouldReFill = false;

class Marker {

  constructor(color, ink) {
    this.color = color;
    this.ink = ink;
  }

markerMethod() {
  let text = prompt('Enter text');
  let textPersent = text.replace(/\s/g, "").length / 2;
  let percent = this.ink;

  while (textPersent <= percent) {
    console.log(text);
    percent = percent - textPersent;

    const textP = document.createElement('p');
    textP.innerHTML = text;
    textP.style.color = this.color;
    body.appendChild(textP);
  }
  shouldReFill = true;
};

}

let marker1 = new Marker ('red', inkPersent);
marker1.markerMethod();


class reFill extends Marker{
constructor(){
  super()
}
reFillMethod() {
  if(shouldReFill){
    this.ink = inkPersent;
    this.markerMethod()
  }
 };
}

let fill = new reFill();
fill.reFillMethod();


//3
class Employee {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let empArray = [
{
  name: 'John',
  age: 33,
},
{
  name: 'Jane',
  age: 37,
},
{
  name: 'Bob',
  age: 25,
},
{name: 'Mark',
age: 26,}
];


class EmpTable extends Employee {
constructor(empArray){
      super()
    };

  
  getHtml () {
    let body = document.getElementsByTagName('body')[0];
    let table = document.createElement('table');
   

    for(let item = 0; item < empArray.length; item++) {
      let row = document.createElement('tr');
      let data1 = document.createElement('td');
      data1.textContent = empArray[item].name;
      row.appendChild(data1);

      let data2 = document.createElement('td');
      data2.textContent = empArray[item].age;
      row.appendChild(data2);

      table.appendChild(row);
    }
    body.appendChild(table);
    table.style.border = "1px solid black";
    table.style.width = "200px";
  }
}; 


let EmpTable1 = new EmpTable();

console.log(EmpTable1.getHtml());
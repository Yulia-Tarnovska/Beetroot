// 1
var playList = [
  {
   author: "LED ZEPPELIN",
   song:"STAIRWAY TO HEAVEN"
  },
  
  {
   author: "QUEEN",
   song:"BOHEMIAN RHAPSODY"
  },
  
  {
   author: "LYNYRD SKYNYRD",
   song:"FREE BIRD"
  },
  
  {
   author: "DEEP PURPLE",
   song:"SMOKE ON THE WATER"
  },
  
  {
   author: "JIMI HENDRIX",
   song:"ALL ALONG THE WATCHTOWER"
  },
  
  {
   author: "AC/DC",
   song:"BACK IN BLACK"
  },
  
  {
   author: "QUEEN",
   song:"WE WILL ROCK YOU"
  },
  
  {
   author: "METALLICA",
   song:"ENTER SANDMAN"
  }
  ];


let list = document.createElement("ol");
document.body.appendChild(list);
 
playList.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item;
  li.innerText = item.author + item.song;
  list.appendChild(li);
});


//2

// let modal = document.getElementById("myModal");
// let btn = document.getElementById("myBtn");
// let span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   modal.style.display = "none";
}


//3

// function makeRed() {
//   clearLight();
//   document.getElementById('redLight').style.backgroundColor = "red";
// };
// function makeYellow() {
//   clearLight();
//   document.getElementById('yellowLight').style.backgroundColor = "yellow";
// };
// function makeGreen() {
//   clearLight();
//   document.getElementById('greenLight').style.backgroundColor =  "green";
// };


// function clearLight() {
//   document.getElementById("redLight").style.backgroundColor =  "black";
//   document.getElementById("yellowLight").style.backgroundColor = "black";
//   document.getElementById("greenLight").style.backgroundColor = "black";
// };

// document.getElementById("red").onclick = makeRed;
// document.getElementById("yellow").onclick = makeYellow;
// document.getElementById("green").onclick = makeGreen;
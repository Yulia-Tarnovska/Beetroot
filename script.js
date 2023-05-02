//1
// const body = document.getElementsByTagName("body")[0];
// const div_text = document.getElementById("div-text");
// const area = document.createElement("textarea");

// document.body.addEventListener("keyup", (event) => {
//     event.preventDefault();
//     event.stopPropagation();

//     if (event.ctrlKey && event.key === 'e') {
        
//         area.innerHTML = div_text.innerHTML;
//         div_text.parentNode.replaceChild(area, div_text);
//     } else if (event.ctrlKey && event.key === 's') {
//         div_text.innerHTML = area.value;
//         area.parentNode.replaceChild(div_text, area);
//     }
// });

//2
let body = document.getElementsByTagName("body")[0];
let ourTable = document.createElement("table");
let ourTableBody = document.createElement("tbody");
ourTable.createCaption().innerHTML = "Random numbers";
let arr = [];
let cell;

for (let i = 0; i < 50; i++) {
    let row = document.createElement("tr");
      cell = document.createElement("td");
      let cellText = document.createTextNode(Math.floor(Math.random() * 11) + i);
      cell.appendChild(cellText);
      row.appendChild(cell);
      arr.push(cellText);
    
    ourTableBody.appendChild(row);
  }
 
ourTable.appendChild(ourTableBody);
body.appendChild(ourTable);
 
let title = document.getElementsByTagName("caption")[0];
title.addEventListener("click", (cellText) => {
    cellText.preventDefault();
    arr.sort(function(a, b){return a-b});
    for (let i = 0; i < 50; i++) {
            cell.innerText = arr[i];
           
        }
});
// const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
// const para = document.createElement('p');
// const section = document.querySelector(".preview");

// // Add your code here

// function randName() {
//  let num = names.length - 1;
//  let nameNumber = Math.floor(Math.random()*num);
//  return names[nameNumber];
// }

// // Don't edit the code below here!

// section.innerHTML = ' ';

// section.appendChild(para);


//add

function add() {
    let num = parseFloat((document.getElementById("add").value));
    if (typeof num === "number") {
        document.getElementById("addText").innerText = `${num.toFixed(2)} + 7 = ` + parseFloat(num + 7).toFixed(2);
    } else {
        document.getElementById("addText").innerText = "Please enter a valid number";
    }
}

//multiply  

function multiply() {
    let a = parseInt((document.getElementById("multiplyA").value));
    let b = parseInt((document.getElementById("multiplyB").value));
    if (typeof a && b == "number") {
        document.getElementById("multText").innerText = `${a} x ${b} = ` + a * b;
    } else {
    document.getElementById("multText").innerText = "Please enter a valid number";
    }
}


//capitalizes first letter of string input

function capitalize() {

    let string = document.getElementById("capitalize").value;
    document.getElementById("capText").innerText = string[0].toUpperCase() + string.slice(1).toLowerCase();
}

//returns last letter of input 

function lastLetter() {
    let string = document.getElementById("lastLetter").value;
    document.getElementById("lastText").innerText = "The last letter is: " + string.slice(-1);
    console.log(string);
}
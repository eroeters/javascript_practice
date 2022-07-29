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


function add() {
    let addition = parseInt((document.getElementById("add").value));
    document.getElementById("addText").innerText = `${addition} + 7 = ` + parseInt(addition + 7);
}

function multiply() {
    let a = parseInt((document.getElementById("multiplyA").value));
    let b = parseInt((document.getElementById("multiplyB").value));
    document.getElementById("multText").innerText = `${a} x ${b} = ` + a * b;
}

//returns last letter of input 

function capitalize() {
    // try {
    //     let firstLetter = string[0].toUpperCase();
    //     let restOfString = string.slice(1).toLowerCase();
    //     // return firstLetter + restOfString;
    //     document.getElementById("input").innerText = firstLetter + restOfString;
    // } catch (err) {

    // }

    let string = document.getElementById("capitalize").value;
    document.getElementById("capText").innerText = string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function lastLetter() {
    let string = document.getElementById("lastLetter").value;
    document.getElementById("lastText").innerText = "The last letter is: " + string.slice(-1);
    console.log(string);
}
//pseudo code
//moment().format('dddd')
//9:00 am - 5:00 pm  can use a for loop let i = 9; <=17; i++) {}
//find a clock, like the moment() and compare to future events
//use color coding: grey for what has passed, red for current, and green for future events
//maybe have local storage activate on key up
//can start with an empty array that is then filled in with the save, ['','','','','','','','','','','','','','','','']
//0 = 9 am, 1 = 10, ect
//need eventListener for saving events
//need a way to update when an event is saved
//display saved event for the day/hour
//use an if statement to determine if they are first time user
//find a way to load previous events and allow the user to add to the list
const nowMoment = moment();
const displayMoment = document.querySelector("#displayMoment");
const displayDate = document.querySelector("#displayDate");

//connecting moment
function instantiateMoment() {
  displayMoment.innerHTML = moment().format("MM-DD-YYYY, hh:mm:ss a");
}

//having a continual updating clock that is visible to the user
setInterval(() => {
  instantiateMoment();
}, 1000);

const clock = document.querySelectorAll(".time-block");
const textBlockElement = document.querySelector(".description");
const saveBtn = document.querySelector(".saveBtn");
const hourBlock = document.querySelectorAll(".hour");
let schedule = [];
const hourBlock9am = document.getElementById("9am");
const hourBlock10am = document.getElementById("10am");
const hourBlock11am = document.getElementById("11am");
const hourBlock12pm = document.getElementById("12pm");
const hourBlock13pm = document.getElementById("13pm");
const hourBlock14pm = document.getElementById("14pm");
const hourBlock15pm = document.getElementById("15pm");
const hourBlock16pm = document.getElementById("16pm");
const hourBlock17pm = document.getElementById("17pm");



//to check if anything is stored in localStorage
function checkHistory(callback) {
  for (var i = 0; i < localStorage.length; i++) {
    callback(localStorage.key(i));
  }return "you got history!";
}
checkHistory(console.log)

console.log(clock);
//running a function with for loop an if, else if, else statement to change the color of the hourBlock
function handleTime (hourBlock) {
    let thisHour = moment().format("HH");
for (let i = 0; i < 9; i++) {
    if (parseInt(hourBlock[i].textContent) < parseInt(thisHour)) {        
      hourBlock[i].classList.add("past");
      } else if (parseInt(hourBlock[i].textContent)=== parseInt(thisHour)) {        
        hourBlock[i].classList.add("present");
      } else (parseInt(hourBlock[i].textContent) > parseInt(thisHour)) 
      hourBlock[i].classList.add("future");
    }console.log(hourBlock);
}

handleTime(clock, textBlockElement);

    





// localStorage.getItem('9am').value= document.getElementById('9am');
// localStorage.getItem('10am').value= document.getElementById('10am');
// localStorage.getItem('11am').value= document.getElementById('11am');
// localStorage.getItem('12pm').value= document.getElementById('12pm');
// localStorage.getItem('13pm').value= document.getElementById('13pm');
// localStorage.getItem('14pm').value= document.getElementById('14pm');
// localStorage.getItem('15pm').value= document.getElementById('15pm');
// localStorage.getItem('16pm').value= document.getElementById('16pm');
// localStorage.getItem('17pm').value= document.getElementById('17pm');

//saving the user's input to localStorage and having a visual representation for accountability/ adjustment to the user's day
saveBtn.addEventListener("click", function(e) {
 localStorage.setItem(hourBlock, textBlockElement.value);
});


  console.log(textBlockElement);
  

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
const nowDate = new Date();
const eDisplayMoment = document.querySelector("#displayMoment");
const eDisplayDate = document.querySelector("#displayDate");

//connecting moment
function instantiateMoment() {
  eDisplayMoment.innerHTML = moment().format("MMMM Do YYYY, hh:mm:ss a");
}
//having a continual updating clock that is visible to the user
setInterval(() => {
  instantiateMoment();
}, 1000);

const clock = document.querySelector(".time-block");
const textBlockElement = document.querySelector(".textarea");
const saveB = document.querySelector(".saveBtn");
const hourBlock = document.querySelectorAll(".hour");
let schedule = [];
const hourBlock9am = document.querySelector("#9am");
const hourBlock10am = document.querySelector("#10am");
const hourBlock11am = document.querySelector("#11am");
const hourBlock12pm = document.querySelector("#12pm");
const hourBlock13pm = document.querySelector("#13pm");
const hourBlock14pm = document.querySelector("#14pm");
const hourBlock15pm = document.querySelector("#15pm");
const hourBlock16pm = document.querySelector("#16pm");
const hourBlock17pm = document.querySelector("#17pm");

localStorage.setItem(hourBlock, textBlockElement);

//to check if anything is stored in localStorage
if (localStorage.getItem == null) {
  return "";
}
localStorage.getItem('9am').value=document.querySelector('#9am');
localStorage.getItem('10am').value=document.querySelector('#10am');
localStorage.getItem('11am').value=document.querySelector('#11am');
localStorage.getItem('12pm').value=document.querySelector('#12pm');
localStorage.getItem('13pm').value=document.querySelector('#13pm');
localStorage.getItem('14pm').value=document.querySelector('#14pm');
localStorage.getItem('15pm').value=document.querySelector('#15pm');
localStorage.getItem('16pm').value=document.querySelector('#16pm');
localStorage.getItem('17pm').value=document.querySelector('#17pm');


//running a function with for loop and if, else if, else statement to change the color of the hourBlock
function handleTime (hourBlockElement,hourBlock) {
    let thisHour = moment().format("HH");
for (let i = 9; i < 17; i++) {
    if (parseInt(hourBlockElement[i]) < parseInt(thisHour)) {
        clock[i].classList.add(".past");
      } else if (parseInt(hourBlockElement[i])=== parseInt(thisHour)) {
        clock.classList.add(".present");
      } else (parseInt(hourBlockElement[i]) > parseInt(thisHour)) 
        hourBlock.classList.add(".future");
    }
}

console.log(handleTime);
handleTime();


//saving the user's input to localStorage and having a visual representation for accountability/ adjustment to the user's day 
    function checkCalendar(localStorage) {
        localStorage.getItem(hourBlock , hourBlockElement),value = hourBlockElement;
        console.log(localStorage);
    }
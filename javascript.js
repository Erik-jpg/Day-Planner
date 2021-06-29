//pseudo code
//moment().format('dddd')
//9:00 am - 5:00 pm  can use a for loop let i = 9; <=17; i++) {}
//find a clock, like the moment() and compare to future events
//use color coding: grey for what has passed, red for current, and green for future events
//maybe have local storage activate on key up
//can start with an empty array that is then filled in with the save, ['','','','','','','','','','','','','','','','']
//0 = 9 am, 1 = 10, ect
//need eventListner for saving events
//need a way to update when an event is saved
//display saved event for the day/hour
//use an if statement to determine if they are first time user
//find a way to load previous events and allow the user to add to the list
const nowMoment = moment();
const nowDate = new Date();
const eDisplayMoment = document.querySelector("#displayMoment");
const eDisplayDate = document.querySelector("#displayDate");
const clock = document.querySelector(".time-block");
const hourBlockElement = document.querySelector(".textarea");
const saveB = document.querySelector(".saveBtn");
const hourBlock = document.querySelectorAll(".hour");


function instantiateMoment() {
  eDisplayMoment.innerHTML = moment().format("MMMM Do YYYY, HH:mm:ss");
}

setInterval(() => {
  instantiateMoment();
}, 1000);



//would a forEach be the way? it seems slow and clunky




    
// console.log(saveBtn);
// }

function handleTime (hourBlockElement,hourBlock) {
    let thisHour = moment().format("HH");
for (let i = 0; i < 9; i++) {
    if (parseInt(hourBlockElement[i]) < parseInt(thisHour)) {
        clock[i].classList.add(".past");
      } else if (parseInt(hourBlockElement[i])=== parseInt(thisHour)) {
        clock.classList.add(".present");
      } else (parseInt(hourBlockElement[i]) > parseInt(thisHour)) 
        hourBlock.classList.add(".future");
    }
}


handleTime();



    function checkCalendar(localStorage) {
        localStorage.getItem(hourBlock , hourBlockElement),value = hourBlockElement;
        console.log(localStorage);
    }
  
    //     let schedule = JSON.stringify(localStorage.setItem(nowMoment, hourBlockElement.value)) || [];
    
    //     let scheduledEvent = JSON.parse(localStorage.getItem("schedule")) || [];

    //     const hourBlockElement = $(".textarea");

    //     const colorByHour = document.querySelector(hourBlockElement[i].id)

    // $(hourBlockElement[i].id).removeClass('.present .past .future')}}}
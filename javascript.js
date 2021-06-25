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
const nowDate = new Date;
const eDisplayMoment = document.querySelector("#displayMoment");
const eDisplayDate = document.querySelector("#displayDate");
const hourBlock = document.querySelector("#time-block");
 
function instantiateMoment(){
    eDisplayMoment.innerHTML = moment().format('MMMM Do YYYY, hh:mm:ss a');
}

setInterval (() => {
    instantiateMoment();
}, 1000);

 if (moment()!== nowMoment) {
    hourBlock.classList.add(".past");
}

else if (moment()=== nowMoment) {
    hourBlock.classList.add(".present");
}
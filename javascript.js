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


//get and set section of momentjs.com
//get hour
const currentDay = document.getElementById('currentDay');
currentDay.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
// $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));



// var datetime = null,
//         date = null;

// var update = function () {
//     date = moment(new Date())
//     datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
// };

// $("#currentDay").ready(function(){
//     datetime = $('#datetime')
//     update();
//     setInterval(update, 1000);
// });
// console.log($("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a')));
// function displayTime() {
//     const refresh=1000;
//     myTime=setTimeout('display_ct', refresh)
// };

// function displayTimer(){
//     const x = new Date()
//         document.getElementById('currentDay').innerHTML = x;
//     display_c();
// }

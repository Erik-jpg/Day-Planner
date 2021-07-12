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
const blockElement = document.querySelector(".hour");
const saveBtn = document.querySelector(".saveBtn");
const hourBlock = document.querySelectorAll(".description");
let schedule = [];


//to check if anything is stored in localStorage
// function checkHistory(callback) {
//   for (var i = 0; i < localStorage.length; i++) {
//     callback(localStorage.key(i));
//   }
//   return "you got history!";
// }
// checkHistory(console.log);

//running a function with for loop an if, else if, else statement to change the color of the hourBlock
function handleTime(hourBlock) {
  let thisHour = moment().format("HH");
  for (let i = 0; i < 9; i++) {
    if (parseInt(hourBlock[i].getAttribute("id")) < parseInt(thisHour)) {
      hourBlock[i].classList.add("past");
    } else if (parseInt(hourBlock[i].getAttribute("id")) === parseInt(thisHour)) {
      hourBlock[i].classList.add("present");
    } else {
      hourBlock[i].classList.add("future");
    }
  } 
}

handleTime(hourBlock);

$(".saveBtn").on("click", function () {
  
  const savedText = $(this).siblings(".description").val();
  const hour = $(this).parent().attr(".hour");
  console.log(hour);
  localStorage.setItem(hour, savedText);
});

$(".hour .description").val(localStorage.getItem("9am"));
$(".hour .description").val(localStorage.getItem("10am"));
$(".hour .description").val(localStorage.getItem("11am"));
$(".hour .description").val(localStorage.getItem("12pm"));
$(".hour .description").val(localStorage.getItem("13pm"));
$(".hour .description").val(localStorage.getItem("14pm"));
$(".hour .description").val(localStorage.getItem("15pm"));
$(".hour .description").val(localStorage.getItem("16pm"));
$(".hour .description").val(localStorage.getItem("17pm"));


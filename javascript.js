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
const blockElement = document.querySelectorAll(".hour");
const saveBtn = document.querySelector(".saveBtn");
const hourBlock = document.querySelectorAll(".description");

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

$(".saveBtn").on("click", function (event) {
event.preventDefault();  
  const savedText = $(this).siblings(".description").val();
  const blockElement = $(this).parent().attr("id");
  
  console.log(blockElement);
  localStorage.setItem(blockElement, savedText);
  // localStorage.setItem('#9-am', savedText);
  // localStorage.setItem('#10-am', savedText);
  // localStorage.setItem('#11-am', savedText);
  // localStorage.setItem('#12-pm', savedText);
  // localStorage.setItem('#13-pm', savedText);
  // localStorage.setItem('#14-pm', savedText);
  // localStorage.setItem('#15-pm', savedText);
  // localStorage.setItem('#16-pm', savedText);
  // localStorage.setItem('#17-pm', savedText);
});

$("#9-am .description").val(localStorage.getItem("9-am"));
$("#10-am .description").val(localStorage.getItem("10-am"));
$("#11-am .description").val(localStorage.getItem("11-am"));
$('#12-pm .description').val(localStorage.getItem("12-pm"));
$("#13-pm .description").val(localStorage.getItem("13-pm"));
$("#14-pm .description").val(localStorage.getItem("14-pm"));
$("#15-pm .description").val(localStorage.getItem("15-pm"));
$("#16-pm .description").val(localStorage.getItem("16-pm"));
$("#17-pm .description").val(localStorage.getItem("17-pm"));


var containerEl = document.getElementsByClassName("container")
var hoursDisplayed= 8
var todayDateEl = moment();
$("#currentDay").text(todayDateEl.format("LL HH:mm"));

// Create hour time blocks for each hour of the day using for loops
timeBlocks();

function timeBlocks () {
    for (let i = 0; i < 10; i++) {
        var workHours= ["8 AM","9 AM", "10 AM", "11 AM", "12 PM","1 PM", "2 PM", "3 PM", "4 PM", "5 PM",];
        console.log(workHours);
    }

}





// Create click events 
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
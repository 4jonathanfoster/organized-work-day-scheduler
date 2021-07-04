// HTML recalls
var currentDayHTML = $("#currentDay"); //HTML Variable
var saveBtn = $('.saveBtn');
var timeblock = $('.time-block');


currentDayHTML = currentDayHTML.text(moment().format('LL'));

console.log(moment().format('H'));

function checkTime() {
    timeblock.each(function() {
        var timeID = parseInt(($(this)).attr('id')); // Grabs the time-blocks id
        var hour = moment().format('H'); // gets the current hour
        var textarea = $(this).childern('.description');

        if (timeID == hour) {
            textarea.addClass('present');
        } else if (timeID < hour) {
            textarea.addClass('past');
        } else {
            textarea.addClass('future');
        }
    })
}

saveBtn.click(function(event) {
    var div = $event.target);
var timeID = parseInt(div.parent().attr('id'));
var textDisplay = div.siblings('.description').val();

localStorage.setItem(timeID, textDisplay)
})

function checkTodo() {
    timeblock.each(function() {

        }
        var timeID = parseInt(($(this)).attr('id'));
        var textD = $(this).childern('.description ');

        if (localStorage.getItem(timeID) === null); {
            rturn;
        } else {
            textD.val(localStorage.getItem(timeID));

        }

    })
}
checkTime();
checkTodo();
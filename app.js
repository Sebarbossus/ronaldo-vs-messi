let date = new Date();
let hours = date.getHours();
$(document).ready(function () {
    if (hours < 12) {
        $("#body").css("background", "url('img/bernabeu.jpg') no-repeat fixed center")
        .css("background-size", "cover");
    } else {
        $("#body").css("background", "url('img/camp-nou.jpg') no-repeat fixed center")
        .css("background-size", "cover");
    }
});
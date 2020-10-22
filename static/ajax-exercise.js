"use strict";


// PART 1: SHOW A FORTUNE

// $.get('/adjective', (response) => {
//   $('#adjective').text(response);
// });

// $.get(url, successFunction)
// url — the GET request URL

// successFunction — the function to call when we get a response from the server

function showFortune(evt) {
    $.get('/fortune', (response) => {
        $('#fortune-text').html(response);
    })}
    // TODO: get the fortune and show it in the #fortune-text div

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};


    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);



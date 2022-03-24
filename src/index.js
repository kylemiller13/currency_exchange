import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
import $ from 'jquery';
import CurrencyExchange from './../src/js/currency.js';

function clearFields() {
  $('#currency').val("");
  $('.show-dollaz').val("");
  $('.show-errors').text("");
}

// function getElements(response){    //////forEachLoop///////
//   if(response){
//     response.conversion_rates.forEach(function(conversionRates) {
//       $('.show-dollaz').append(`Your USD is worth ${conversionRates} in selected currency. <br>`);
//     });
//   } else {
//     $('.showErrors').text(`There was an error: ${response}`);
//   }
// }


// const dollarKeys = Object.keys(response.conversion_rate);
//  dollarstring = ""
//  dollarKeys.forEach(function(key) {
//  dollarString = dollarString.concat(key + ": " + response.conversion_rate[key] + "\n"); 
// });

function getElements(response, userDollars, chedduh){
  if(response) {
    const convertedMonies = (response.conversion_rate * userDollars).toFixed(2);
    $('.show-dollaz').append(`Your USD is worth ${convertedMonies} in ${chedduh}. <br>`);  
    // console.log(response);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(foreignCurrency, userDollars, chedduh) {
  const response = await CurrencyExchange.exchangeCurrency(foreignCurrency);
  console.log(response);
  getElements(response, userDollars, chedduh);
}

$(document).ready(function() {
  $('#displayCurrency').click(function() {
    let currency = parseInt($('#currency').val());
    let bigMoney = $('#bigMoney').val();
    // console.log(bigMoney);
    clearFields();
    makeApiCall(bigMoney, currency, bigMoney);
  });
});

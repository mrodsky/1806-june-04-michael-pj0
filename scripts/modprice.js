(function () {
  'use strict';

  function toFixed(num, fixed) {      //function to truncate decimals 
    fixed = fixed || 0;
    fixed = Math.pow(10, fixed);
    return Math.floor(num * fixed) / fixed;
}

  var addBook = document.querySelector("button[name='addBook']");
  var formElement = document.querySelector('form'); //needed for add book functionality 

  //start of button 1
  var button1 = document.querySelector("button[name='price1']");

  button1.addEventListener('click', () => {
    var priceHTML = document.querySelector("div[name='price1']").innerHTML;
    var temp;
    temp = Number(document.querySelector("input[name='price1Input']").value);
    console.log('PRICE CHECK: ' + " " + temp);
    if (Number(temp) >= 0 || Number(temp) === 0) {
      document.querySelector("div[name='price1']").innerHTML = toFixed(temp,2);
      }
      else{
        alert("cannot have negative price")
        document.querySelector("div[name='price1']").innerHTML = '0';
      }
  })
  // end of button 1 


  //start button 2
  var button2 = document.querySelector("button[name='price2']");

  button2.addEventListener('click', () => {
    var priceHTML = document.querySelector("div[name='price2']").innerHTML;
    var temp = Number(priceHTML);
    temp = Number(document.querySelector("input[name='price2Input']").value);
    console.log('this is in add button: ' + priceHTML + " " + temp);
    if (Number(temp) >= 0 || Number(temp) === 0) {
      document.querySelector("div[name='price2']").innerHTML = toFixed(temp,2);
      }
      else{
        alert("cannot have negative price")
        document.querySelector("div[name='price2']").innerHTML = '0';
      }
  })
  //end of button 2

  //start button 3
  var button3 = document.querySelector("button[name='price3']");

  button3.addEventListener('click', () => {
    var priceHTML = document.querySelector("div[name='price3']").innerHTML;
    var temp = Number(priceHTML);
    temp = Number(document.querySelector("input[name='price3Input']").value);
    console.log('this is in add button: ' + priceHTML + " " + temp);
    if (Number(temp) >= 0 || Number(temp) === 0) {
      document.querySelector("div[name='price3']").innerHTML = toFixed(temp,2);
      }
      else{
        alert("cannot have negative price")
        document.querySelector("div[name='price3']").innerHTML = '0';
      }
  })
  //end button 3

  //start button 4
  var button4 = document.querySelector("button[name='price4']");

  button4.addEventListener('click', () => {
    var priceHTML = document.querySelector("div[name='price4']").innerHTML;
    var temp = Number(priceHTML);
    temp = Number(document.querySelector("input[name='price4Input']").value);
    console.log('this is in add button: ' + priceHTML + " " + temp);
    if (Number(temp) >= 0 || Number(temp) === 0) {
      document.querySelector("div[name='price4']").innerHTML = toFixed(temp,2);
      }
      else{
        alert("cannot have negative price")
        document.querySelector("div[name='price4']").innerHTML = '0';
      }
  })
  //end of button 4

  //start of button 5
  var button5 = document.querySelector("button[name='price5']");

  button5.addEventListener('click', () => {
    var priceHTML = document.querySelector("div[name='price5']").innerHTML;
    var temp = Number(priceHTML);
    temp = Number(document.querySelector("input[name='price5Input']").value);
    console.log('this is in add button: ' + priceHTML + " " + temp);
    if (Number(temp) >= 0 || Number(temp) === 0) {
      document.querySelector("div[name='price5']").innerHTML = toFixed(temp,2);
      }
      else{
        alert("cannot have negative price")
        document.querySelector("div[name='price5']").innerHTML = '0';
      }
  })
  //end of button 5

  //start of button 6
  var button6 = document.querySelector("button[name='price6']");

  button6.addEventListener('click', () => {
    var priceHTML = document.querySelector("div[name='price6']").innerHTML;
    var temp = Number(priceHTML);
    temp = Number(document.querySelector("input[name='price6Input']").value);
    console.log('this is in add button: ' + priceHTML + " " + temp);
    if (Number(temp) >= 0 || Number(temp) === 0) {
      document.querySelector("div[name='price6']").innerHTML = toFixed(temp,2);
      }
      else{
        alert("cannot have negative price")
        document.querySelector("div[name='price6']").innerHTML = '0';
      }
  })
  //end of button 6

  //start of button 7
  var button7 = document.querySelector("button[name='price7']");

  button7.addEventListener('click', () => {
    var priceHTML = document.querySelector("div[name='price7']").innerHTML;
    var temp = Number(priceHTML);
    temp = Number(document.querySelector("input[name='price7Input']").value);
    console.log('this is in add button: ' + priceHTML + " " + temp);
    if (Number(temp) >= 0 || Number(temp) === 0) {
      document.querySelector("div[name='price7']").innerHTML = toFixed(temp,2);
      }
      else{
        alert("cannot have negative price")
        document.querySelector("div[name='price7']").innerHTML = '0';
      }
  })
  //end of button 7

  //start of button 8
  var button8 = document.querySelector("button[name='price8']");

  button8.addEventListener('click', () => {
    var priceHTML = document.querySelector("div[name='price8']").innerHTML;
    var temp = Number(priceHTML);
    temp = Number(document.querySelector("input[name='price8Input']").value);
    console.log('this is in add button: ' + priceHTML + " " + temp);
    if (Number(temp) >= 0 || Number(temp) === 0) {
      document.querySelector("div[name='price8']").innerHTML = toFixed(temp,2);
      }
      else{
        alert("cannot have negative price")
        document.querySelector("div[name='price8']").innerHTML = '0';
      }
  })
  //end of button 8

  //start of button 9
  var button9 = document.querySelector("button[name='price9']");

  button9.addEventListener('click', () => {
    var priceHTML = document.querySelector("div[name='price9']").innerHTML;
    var temp = Number(priceHTML);
    temp = Number(document.querySelector("input[name='price9Input']").value);
    console.log('this is in add button: ' + priceHTML + " " + temp);
    if (Number(temp) >= 0 || Number(temp) === 0) {
      document.querySelector("div[name='price9']").innerHTML = toFixed(temp,2);
      }
      else{
        alert("cannot have negative price")
        document.querySelector("div[name='price9']").innerHTML = '0';
      }
  })
  //end of button 9

  //start of button 10
  var button10 = document.querySelector("button[name='price10']");

  button10.addEventListener('click', () => {
    var priceHTML = document.querySelector("div[name='price10']").innerHTML;
    var temp = Number(priceHTML);
    temp = Number(document.querySelector("input[name='price10Input']").value);
    console.log('this is in add button: ' + priceHTML + " " + temp);
    if (Number(temp) >= 0 || Number(temp) === 0) {
      document.querySelector("div[name='price10']").innerHTML = toFixed(temp,2);
      }
      else{
        alert("cannot have negative price")
        document.querySelector("div[name='price10']").innerHTML = '0';
      }
  })


  //end of button 10

  //start of button 11
  var button11 = document.querySelector("button[name='price11']");

  button11.addEventListener('click', () => {
    var priceHTML = document.querySelector("div[name='price11']").innerHTML;
    var temp = Number(priceHTML);
    temp = Number(document.querySelector("input[name='price11Input']").value);
    console.log('this is in add button: ' + priceHTML + " " + temp);
    if (Number(temp) >= 0 || Number(temp) === 0) {
      document.querySelector("div[name='price11']").innerHTML = toFixed(temp,2);
      }
      else{
        alert("cannot have negative price")
        document.querySelector("div[name='price11']").innerHTML = '0';
      }
  })
  //end of button 11

  //start of button 12
  var button12 = document.querySelector("button[name='price12']");

  button12.addEventListener('click', () => {
    var priceHTML = Number(document.querySelector("div[name='price12']").innerHTML);
    var temp = Number(priceHTML);
    temp = Number(document.querySelector("input[name='price12Input']").value);
    console.log('this is in add button: ' + priceHTML + " " + temp);
    if (Number(temp) >= 0 || Number(temp) === 0) {
      document.querySelector("div[name='price12']").innerHTML = toFixed(temp,2);
      }
      else{
        alert("cannot have negative price")
        document.querySelector("div[name='price12']").innerHTML = '0';
      }
  })
}());
//end of button 12
  //end of button sequence. 

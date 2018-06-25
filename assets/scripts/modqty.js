(function () {
  'use strict';

  
  var addBook = document.querySelector("button[name='addBook']");
  var formElement = document.querySelector('form'); //needed for add book functionality 
  
//start of button 1
  var addButton1 = document.querySelector("button[name='stock1Add']");
  var removeButton1 = document.querySelector("button[name='stock1Remove']");

    addButton1.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock1']").innerHTML;
    var temp = Number(quantityReal);
    temp += Number(document.querySelector("input[name='stock1Input']").value);
    console.log('this is in add button: ' + quantityReal + " " + temp);
    document.querySelector("div[name='stock1']").innerHTML = temp;
    
      
    
  })

  removeButton1.addEventListener('click', () => {   //template for avoiding negative stock?
    var quantityReal = document.querySelector("div[name='stock1']").innerHTML;
    var temp = Number(quantityReal);
    var total = temp -  Number(document.querySelector("input[name='stock1Input']").value);
    if (Number(total) >= 0 || Number(total) === 0) {
      console.log('this is in add button: ' + quantityReal + " " + total);
      document.querySelector("div[name='stock1']").innerHTML = total;
      }
      else{
        alert("cannot have negative stock")
        document.querySelector("div[name='stock1']").innerHTML = '0';
      }
    // console.log('this is in add button: ' + quantityReal + " " +temp);
    // document.querySelector("div[name='stock1']").innerHTML = total;
  })
 // end of button 1 

 //start button 2
 var addButton2 = document.querySelector("button[name='stock2Add']");
  var removeButton2 = document.querySelector("button[name='stock2Remove']");

  addButton2.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock2']").innerHTML;
    var temp = Number(quantityReal);
    temp += Number(document.querySelector("input[name='stock2Input']").value);
    console.log('this is in add button: ' + quantityReal + " " +temp);
    document.querySelector("div[name='stock2']").innerHTML = temp;
  })

  removeButton2.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock2']").innerHTML;
    var temp = Number(quantityReal);
    var total = temp -  Number(document.querySelector("input[name='stock2Input']").value);
    if (Number(total) >= 0 || Number(total) === 0) {
      console.log('this is in add button: ' + quantityReal + " " + total);
      document.querySelector("div[name='stock2']").innerHTML = total;
      }
      else{
        alert("cannot have negative stock")
        document.querySelector("div[name='stock2']").innerHTML = '0';
      }
  })
//end of button 2

//start button 3
var addButton3 = document.querySelector("button[name='stock3Add']");
  var removeButton3 = document.querySelector("button[name='stock3Remove']");

  addButton3.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock3']").innerHTML;
    var temp = Number(quantityReal);
    temp += Number(document.querySelector("input[name='stock3Input']").value);
    console.log('this is in add button: ' + quantityReal + " " +temp);
    document.querySelector("div[name='stock3']").innerHTML = temp;
  })

  removeButton3.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock3']").innerHTML;
    var temp = Number(quantityReal);
    var total = temp -  Number(document.querySelector("input[name='stock3Input']").value);
    if (Number(total) >= 0 || Number(total) === 0) {
      console.log('this is in add button: ' + quantityReal + " " + total);
      document.querySelector("div[name='stock3']").innerHTML = total;
      }
      else{
        alert("cannot have negative stock")
        document.querySelector("div[name='stock3']").innerHTML = '0';
      }
  })
//end button 3

//start button 4
var addButton4 = document.querySelector("button[name='stock4Add']");
  var removeButton4 = document.querySelector("button[name='stock4Remove']");

  addButton4.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock4']").innerHTML;
    var temp = Number(quantityReal);
    temp += Number(document.querySelector("input[name='stock4Input']").value);
    console.log('this is in add button: ' + quantityReal + " " +temp);
    document.querySelector("div[name='stock4']").innerHTML = temp;
  })

  removeButton4.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock4']").innerHTML;
    var temp = Number(quantityReal);
    var total = temp -  Number(document.querySelector("input[name='stock4Input']").value);
    if (Number(total) >= 0 || Number(total) === 0) {
      console.log('this is in add button: ' + quantityReal + " " + total);
      document.querySelector("div[name='stock4']").innerHTML = total;
      }
      else{
        alert("cannot have negative stock")
        document.querySelector("div[name='stock4']").innerHTML = '0';
      }
  })
//end of button 4

//start of button 5
var addButton5 = document.querySelector("button[name='stock5Add']");
  var removeButton5 = document.querySelector("button[name='stock5Remove']");

  addButton5.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock5']").innerHTML;
    var temp = Number(quantityReal);
    temp += Number(document.querySelector("input[name='stock5Input']").value);
    console.log('this is in add button: ' + quantityReal + " " +temp);
    document.querySelector("div[name='stock5']").innerHTML = temp;
  })

  removeButton5.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock5']").innerHTML;
    var temp = Number(quantityReal);
    var total = temp -  Number(document.querySelector("input[name='stock5Input']").value);
    if (Number(total) >= 0 || Number(total) === 0) {
      console.log('this is in add button: ' + quantityReal + " " + total);
      document.querySelector("div[name='stock5']").innerHTML = total;
      }
      else{
        alert("cannot have negative stock")
        document.querySelector("div[name='stock5']").innerHTML = '0';
      }
  })
  //end of button 5

  //start of button 6
  var addButton6 = document.querySelector("button[name='stock6Add']");
  var removeButton6 = document.querySelector("button[name='stock6Remove']");

  addButton6.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock6']").innerHTML;
    var temp = Number(quantityReal);
    temp += Number(document.querySelector("input[name='stock6Input']").value);
    console.log('this is in add button: ' + quantityReal + " " +temp);
    document.querySelector("div[name='stock6']").innerHTML = temp;
  })

  removeButton6.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock6']").innerHTML;
    var temp = Number(quantityReal);
    var total = temp -  Number(document.querySelector("input[name='stock6Input']").value);
    if (Number(total) >= 0 || Number(total) === 0) {
      console.log('this is in add button: ' + quantityReal + " " + total);
      document.querySelector("div[name='stock6']").innerHTML = total;
      }
      else{
        alert("cannot have negative stock")
        document.querySelector("div[name='stock6']").innerHTML = '0';
      }
  })
  //end of button 6

  //start of button 7
  var addButton7 = document.querySelector("button[name='stock7Add']");
  var removeButton7 = document.querySelector("button[name='stock7Remove']");

  addButton7.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock7']").innerHTML;
    var temp = Number(quantityReal);
    temp += Number(document.querySelector("input[name='stock7Input']").value);
    console.log('this is in add button: ' + quantityReal + " " +temp);
    document.querySelector("div[name='stock7']").innerHTML = temp;
  })

  removeButton7.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock7']").innerHTML;
    var temp = Number(quantityReal);
    var total = temp -  Number(document.querySelector("input[name='stock7Input']").value);
    if (Number(total) >= 0 || Number(total) === 0) {
      console.log('this is in add button: ' + quantityReal + " " + total);
      document.querySelector("div[name='stock7']").innerHTML = total;
      }
      else{
        alert("cannot have negative stock")
        document.querySelector("div[name='stock7']").innerHTML = '0';
      }
  })
  //end of button 7

  //start of button 8
  var addButton8 = document.querySelector("button[name='stock8Add']");
  var removeButton8 = document.querySelector("button[name='stock8Remove']");
  addButton8.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock8']").innerHTML;
    var temp = Number(quantityReal);
    temp += Number(document.querySelector("input[name='stock8Input']").value);
    console.log('this is in add button: ' + quantityReal + " " +temp);
    document.querySelector("div[name='stock8']").innerHTML = temp;
  })

  removeButton8.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock8']").innerHTML;
    var temp = Number(quantityReal);
    var total = temp -  Number(document.querySelector("input[name='stock8Input']").value);
    if (Number(total) >= 0 || Number(total) === 0) {
      console.log('this is in add button: ' + quantityReal + " " + total);
      document.querySelector("div[name='stock8']").innerHTML = total;
      }
      else{
        alert("cannot have negative stock")
        document.querySelector("div[name='stock8']").innerHTML = '0';
      }
  })
  //end of button 8

  //start of button 9
  var addButton9 = document.querySelector("button[name='stock9Add']");
  var removeButton9 = document.querySelector("button[name='stock9Remove']");
  addButton9.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock9']").innerHTML;
    var temp = Number(quantityReal);
    temp += Number(document.querySelector("input[name='stock9Input']").value);
    console.log('this is in add button: ' + quantityReal + " " +temp);
    document.querySelector("div[name='stock9']").innerHTML = temp;
  })

  removeButton9.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock9']").innerHTML;
    var temp = Number(quantityReal);
    var total = temp -  Number(document.querySelector("input[name='stock9Input']").value);
    if (Number(total) >= 0 || Number(total) === 0) {
      console.log('this is in add button: ' + quantityReal + " " + total);
      document.querySelector("div[name='stock9']").innerHTML = total;
      }
      else{
        alert("cannot have negative stock")
        document.querySelector("div[name='stock9']").innerHTML = '0';
      }
  })
  //end of button 9
  
  //start of button 10
  var addButton10 = document.querySelector("button[name='stock10Add']");
  var removeButton10 = document.querySelector("button[name='stock10Remove']");
  addButton10.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock10']").innerHTML;
    var temp = Number(quantityReal);
    temp += Number(document.querySelector("input[name='stock10Input']").value);
    console.log('this is in add button: ' + quantityReal + " " +temp);
    document.querySelector("div[name='stock10']").innerHTML = temp;
  })

  removeButton10.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock10']").innerHTML;
    var temp = Number(quantityReal);
    var total = temp -  Number(document.querySelector("input[name='stock10Input']").value);
    if (Number(total) >= 0 || Number(total) === 0) {
      console.log('this is in add button: ' + quantityReal + " " + total);
      document.querySelector("div[name='stock10']").innerHTML = total;
      }
      else{
        alert("Cannot have negative stock")
        document.querySelector("div[name='stock10']").innerHTML = '0';
      }
  })
  //end of button 10

  //start of button 11
  var addButton11 = document.querySelector("button[name='stock11Add']");
  var removeButton11 = document.querySelector("button[name='stock11Remove']");
  addButton11.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock11']").innerHTML;
    var temp = Number(quantityReal);
    temp += Number(document.querySelector("input[name='stock11Input']").value);
    console.log('this is in add button: ' + quantityReal + " " +temp);
    document.querySelector("div[name='stock11']").innerHTML = temp;
  })

  removeButton11.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock11']").innerHTML;
    var temp = Number(quantityReal);
    var total = temp -  Number(document.querySelector("input[name='stock11Input']").value);
    if (Number(total) >= 0 || Number(total) === 0) {
      console.log('this is in add button: ' + quantityReal + " " + total);
      document.querySelector("div[name='stock11']").innerHTML = total;
      }
      else{
        alert("Cannot have negative stock")
        document.querySelector("div[name='stock11']").innerHTML = '0';
      }
  })
  //end of button 11

  //start of button 12
  var addButton12 = document.querySelector("button[name='stock12Add']");
  var removeButton12 = document.querySelector("button[name='stock12Remove']");
  addButton12.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock12']").innerHTML;
    var temp = Number(quantityReal);
    temp += Number(document.querySelector("input[name='stock12Input']").value);
    console.log('this is in add button: ' + quantityReal + " " +temp);
    document.querySelector("div[name='stock12']").innerHTML = temp;
  })

  removeButton12.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock12']").innerHTML;
    var temp = Number(quantityReal);
    var total = temp -  Number(document.querySelector("input[name='stock12Input']").value);
    if (Number(total) >= 0 || Number(total) === 0) {
      console.log('this is in add button: ' + quantityReal + " " + total);
      document.querySelector("div[name='stock12']").innerHTML = total;
      }
      else{
        alert("Cannot have negative stock")
        document.querySelector("div[name='stock12']").innerHTML = '0';
      }
  })
  //end of button 12
  //end of button sequence. 
}());        //end of self invoke

  // })
  // (function () {
  //   'use strict';

  //   var qty = function () {
  //     return this.text = document.querySelector('#form-control').value;
  //   }



  //   // document.querySelector('#myBtn').addEventListener("click", reverse(x));  
  //   var newStock = qty();
  //   var stockElement = document.querySelector('#stock');
  //   var addBtnElement = document.querySelector('#button');
  //   addBtnElement.addEventListener('click', () => {
  //     var s = new qty();
  //     alert('thank you' + s.text)

  //   })
  // }());




  // formElement.addEventListener('submit',() =>{
  //   var s = new Sentance();
  //   alert('thank you, ' + s.text);


  //var addBtn = document.querySelectorAll(#)
  //document.querySelector('#myBtn').addEventListener("click", alert('thank you'));


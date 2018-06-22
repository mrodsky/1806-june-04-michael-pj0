(function () {
  'use strict';

  var addButton = document.querySelector("button[name='stock1Add']");
  var removeButton = document.querySelector("button[name='stock1Remove']");
  var addBook = document.querySelector("button[name='addBook']");

  var formElement = document.querySelector('form');

  addButton.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock1']").innerHTML;
    var temp = Number(quantityReal);
    temp += Number(document.querySelector("input[name='stock1Input']").value);
    console.log('this is in add button: ' + quantityReal + " " +temp);
    document.querySelector("div[name='stock1']").innerHTML = temp;
  })

  removeButton.addEventListener('click', () => {
    var quantityReal = document.querySelector("div[name='stock1']").innerHTML;
    var temp = Number(quantityReal);
    temp -= Number(document.querySelector("input[name='stock1Input']").value);
    console.log('this is in add button: ' + quantityReal + " " +temp);
    document.querySelector("div[name='stock1']").innerHTML = temp;
  })
}());

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


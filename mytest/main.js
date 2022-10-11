//side burger
var addOns =  document.querySelector('#btn1');

addOns.addEventListener('click', function () {
   let qte = document.querySelector('input').value;
   let price = document.querySelector('#price').textContent;

   if (qte > 0) {
    let product = 70 * qte;
    product += 70;
    document.querySelector('#price').textContent = product + ' dhs';
    return product;
   }

   else {
    document.querySelector('#price').textContent = 70 +'dhs';
   }

});

var subtract = document.querySelector('#btn');

subtract.addEventListener ('click' , function() {
    let qte = document.querySelector('input').value;
   let price = document.querySelector('#price').textContent;
   let product = 70 * qte;
   product += 70;
   let subtract = product - 70;
   document.querySelector('#price').textContent = subtract + ' dhs';

});

var reset = document.querySelector('#del');

reset.addEventListener('click' , function () {
let qte = document.querySelector('input').value;
let price = document.querySelector('#price').textContent;
document.querySelector('#price').textContent = 70 + ' dhs';
}); 
  

var img1 = document.querySelector('#heart');

img1.addEventListener('click', function () {
    img1.style.backgroundColor = "red";
    
});


//side pizza

var addition = document.querySelector('#btnp');

addition.addEventListener ('click', ()=> {
   let qte = document.querySelector('#qte2').value;
   let price = document.querySelector('#price1').textContent;
   
   if (qte > 0) {
    let produit = qte * 60;
    produit += 60;
    document.querySelector("#price1").textContent  = produit + ' dhs';
   }

   else {
    document.querySelector('#price1').textContent = 60 + ' dhs';
   }

});

var subtract = document.querySelector('#btnm');

subtract.addEventListener('click', function () {
    let qte = document.querySelector('#qte2').value;
    let price = document.querySelector('#price1').textContent;
    
    let produit = qte * 60;
    produit +=60;

    let subtract = produit - 60;
    document.querySelector('#price1').textContent = subtract + ' dhs';
});

var reset = document.querySelector('#del1');

reset.addEventListener('click' , function () {
    let qte = document.querySelector('#qte2').value;
    let price = document.querySelector('#price1').textContent;
    document.querySelector('#price1').textContent = 60 + ' dhs';
    }); 

    var img2 = document.querySelector('#heart1');

    img2.addEventListener('click', function () {
        img2.style.backgroundColor = "red";
        
    });

    //side tacos
var addit = document.querySelector('#add');

addit.addEventListener ('click', ()=> {
   let qte = document.querySelector('#qte3').value;
   let price = document.querySelector('#price3').textContent;
   
   if (qte > 0) {
    let produit = qte * 50;
    produit += 50;
    document.querySelector("#price3").textContent  = produit + ' dhs';
   }

   else {
    document.querySelector('#price3').textContent = 50 + ' dhs';
   }

});

var subtract = document.querySelector('#subt');

subtract.addEventListener('click', function () {
    let qte = document.querySelector('#qte3').value;
    let price = document.querySelector('#price3').textContent;
    
    let produit = qte * 50;
    produit +=50;

    let subtract = produit - 50;
    document.querySelector('#price3').textContent = subtract + ' dhs';
});

var reset = document.querySelector('#del2');

reset.addEventListener('click' , function () {
    let qte = document.querySelector('#qte3').value;
    let price = document.querySelector('#price3').textContent;
    document.querySelector('#price3').textContent = 50 + ' dhs';
    }); 


    var img3 = document.querySelector('#heart2');

    img3.addEventListener('click', function() {
        img3.style.backgroundColor = "red";
        
    });
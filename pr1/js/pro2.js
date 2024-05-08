document.querySelector('.product').innerHTML="Product";
document.querySelector('.name').innerHTML="Product name";
document.querySelector('.price').innerHTML=" product Price";
document.querySelector('.total').innerHTML="Total-price";
document.querySelector('.discount').innerHTML="Discount";
document.querySelector('.amount').innerHTML=" Total amount";

let product1 = 50000;
let product2 = 4000;
let product3 = 8000;
let product4 = 10000;
let discount1 = 10 +"%";
let discount2 = 12 + "%";
let discount3 = 10 +"%";
let discount4 = 12 + "%";
let p1_discount = product1 - (product1 * 8) /100;
let p2_discount = product2 - (product2 * 10) /100;
let p3_discount = product3 - (product3 * 8) /100;
let p4_discount = product4 - (product4 * 10) /100;
let amount = p1_discount + p2_discount + p3_discount + p4_discount;

document.querySelector('.pn').innerHTML="SOFA";
document.querySelector('.p').innerHTML= product1;
document.querySelector('.t').innerHTML= product1;
document.querySelector('.d').innerHTML= discount1;
document.querySelector('.ta').innerHTML= p1_discount;


document.querySelector('.pn2').innerHTML="CHAIR";
document.querySelector('.p2').innerHTML= product2;
document.querySelector('.t2').innerHTML= product2;
document.querySelector('.d2').innerHTML= discount2;
document.querySelector('.ta2').innerHTML= p2_discount;



document.querySelector('.pn3').innerHTML="DOINING-TABLE";
document.querySelector('.p3').innerHTML= product3;
document.querySelector('.t3').innerHTML= product3;
document.querySelector('.d3').innerHTML= discount3;
document.querySelector('.ta3').innerHTML= p3_discount;


document.querySelector('.pn4').innerHTML="POT";
document.querySelector('.p4').innerHTML= product4;
document.querySelector('.t4').innerHTML= product4;
document.querySelector('.d4').innerHTML= discount4;
document.querySelector('.ta4').innerHTML= p4_discount;

document.querySelector('.final').innerHTML="Total Amount";
document.querySelector('.famount').innerHTML= amount;

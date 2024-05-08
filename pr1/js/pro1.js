let principal = 12500;
let rate = 5;
let year = 2;


let interest = (principal * rate * year) / 100;

document.querySelector(".price").innerHTML = "Simple-interest";
document.querySelector(".box").innerHTML = principal;
document.querySelector(".box1").innerHTML = rate;
document.querySelector(".box2").innerHTML = year;
document.querySelector(".ans").innerHTML = ("Simple Interest: " + interest);



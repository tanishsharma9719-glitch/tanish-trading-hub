```javascript id="98n3sw"
// ===== Page Loading Animation =====

window.addEventListener("load", () => {

document.body.style.opacity = "0";

setTimeout(() => {

document.body.style.transition = "opacity 1s";

document.body.style.opacity = "1";

}, 100);

});


// ===== Navbar Shadow =====

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.boxShadow = "0 8px 25px rgba(0,0,0,0.4)";

}else{

header.style.boxShadow = "none";

}

});


// ===== Stats Counter =====

const stats = document.querySelectorAll(".stat h2");

stats.forEach((stat)=>{

const target = stat.innerText;

if(target.includes("₹")) return;

if(target.includes("/")) return;

if(target.includes("+")){

const number = parseInt(target);

let count = 0;

const timer = setInterval(()=>{

count++;

stat.innerText = count + "+";

if(count >= number){

clearInterval(timer);

}

},100);

}

});


// ===== Module Card Animation =====

const cards = document.querySelectorAll(".card");

cards.forEach((card)=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// ===== Console Message =====

console.log("THE ONE PERCENT SCALPING BLUEPRINT");
console.log("Website Developed Successfully");
```

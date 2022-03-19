import { data } from "./data.js";

let {title} = data[0];

let cardHeaders = document.querySelectorAll(".card .card-header");
Array.from(cardHeaders).forEach((item, index) => {
    item.innerText = data[index].title;
    
});

let cardFotos = document.querySelectorAll(".card-body .card-img-top");
Array.from(cardFotos).forEach((item, index) => {
    item.setAttribute("src", data[index].image)
})


let text = document.querySelectorAll(".text");
text.forEach((item, index) => {
    item.innerText = data[index].desc;
})

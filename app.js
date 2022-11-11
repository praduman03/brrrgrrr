// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: false,
  Cheese: false,
  Tomatoes: false,
  Onions: false,
  Lettuce: false
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese= document.getElementById('cheese')
  if(state.Cheese){
    cheese.style.display = "inherit"
  }
  else{
    cheese.style.display = "none"
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes= document.getElementById('tomato')
  if(state.Tomatoes){
    tomatoes.style.display = "inherit"
  }
  else{
    tomatoes.style.display = "none"
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion= document.getElementById('onion')
  if(state.Onions){
    onion.style.display = "inherit"
  }
  else{
    onion.style.display = "none"
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce= document.getElementById('lettuce')
  if(state.Lettuce){
    lettuce.style.display = "inherit"
  }
  else{
    lettuce.style.display = "none"
  }
}
document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderPatty1();
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick= function () {
  state.Cheese= !state.Cheese;
  renderCheese1();
  renderAll()
  
}

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick= function () {
  state.Tomatoes= !state.Tomatoes;
  renderTomato1()
  renderAll()
}

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick= function () {
  state.Onions= !state.Onions;
  renderOnions1();
  renderAll()
}

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick= function () {
  state.Lettuce= !state.Lettuce;
  renderLettuce1()
  renderAll()
}

//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons(){
  if(!state.Patty){
    document.querySelector(".btn-patty").classList.remove("active")
  }
  else{
    document.querySelector(".btn-patty").classList.add("active")
  }
  if(!state.Cheese){
    document.querySelector(".btn-cheese").classList.remove("active")
  }
  else{
    document.querySelector(".btn-cheese").classList.add("active")
  }
  if(!state.Tomatoes){
    document.querySelector(".btn-tomatoes").classList.remove("active")
  }
  else{
    document.querySelector(".btn-tomatoes").classList.add("active")
  }
  if(!state.Onions){
    document.querySelector(".btn-onions").classList.remove ("active")
  }
    else{
      document.querySelector(".btn-onions").classList.add("active")
    }
  if(!state.Lettuce){
    document.querySelector(".btn-lettuce").classList.remove("active")
  }
  else{
    document.querySelector(".btn-lettuce").classList.add("active")
  }
  
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard(){
  if(!state.Patty){
    document.getElementById("patty1").classList.add("items")
  }
  else{
    document.getElementById("patty1").classList.remove("items")
}
if(!state.Cheese){
  document.getElementById("cheese1").classList.add("items")
}
else{
  document.getElementById("cheese1").classList.remove("items")
}
if(!state.Tomatoes){
  document.getElementById("tomato1").classList.add("items")
}
else{
  document.getElementById("tomato1").classList.remove("items")
}
if(!state.Onions){
  document.getElementById("onions1").classList.add("items")
}
else{
  document.getElementById("onions1").classList.remove("items")
}
if(!state.Lettuce){
  document.getElementById("lettuce1").classList.add("items")
}
else{
  document.getElementById("lettuce1").classList.remove("items")
}
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

var totalCost=10;

const a=document.getElementById("totalCost");
function renderPrice(){ 
  a.innerText=totalCost;
}


function renderPatty1(){
  if(state.Patty){
    totalCost+=ingredients.Patty;
  }
  else{
    totalCost-=ingredients.Patty;
  }
}
function renderCheese1(){
  if(state.Cheese){
    totalCost+=ingredients.Cheese;
  }
  else{
    totalCost-=ingredients.Cheese;
  }
}
function renderTomato1(){
  if(state.Tomatoes){
    totalCost+=ingredients.Tomatoes;
  }
  else{
    totalCost-=ingredients.Tomatoes;
  }
}
function renderOnions1(){
    if(state.Onions){
    totalCost+=ingredients.Onions;
  }
  else{
    totalCost-=ingredients.Onions;
  } 
}
function renderLettuce1(){
  if(state.Lettuce){
    totalCost+=ingredients.Lettuce;
  }
  else{
    totalCost-=ingredients.Lettuce;
  }
}




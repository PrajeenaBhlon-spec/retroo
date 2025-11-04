const drinks = JSON.parse(localStorage.getItem("selectedDrinks"));
const appetizers = JSON.parse(localStorage.getItem("selectedAppetizer"));
const knoodles = JSON.parse(localStorage.getItem("selectedKnoodles"));
const maindishes = JSON.parse(localStorage.getItem("selectedMainDishes"));

if (drinks && drinks.length > 0) {
  const drinklist = document.getElementById("drink-list");

  drinks.forEach(drink => {
    const p = document.createElement("p");
    p.textContent = drink;
    drinklist.appendChild(p);
  });
}
else {
  document.getElementById("drink-list").textContent = "No drinks selected";
}

if (appetizers && appetizers.length > 0) {
  const appetizerlist = document.getElementById("appetizer-list");
  appetizers.forEach(appetizer => {
    const a = document.createElement("p");
    a.textContent = appetizer;
    appetizerlist.appendChild(a);
  });
}
else {

  document.getElementById("appetizer-list").textContent = "No appetizer selected";
}

if (knoodles && knoodles.length > 0) {
  const knoodlelist = document.getElementById("knoodle-list");
  knoodles.forEach(knoodle => {
    const b = document.createElement("p");
    b.textContent = knoodle;
    knoodlelist.appendChild(b);
  });
}
else {
  document.getElementById("knoodle-list").textContent = "No knoodles selected"
}

if (maindishes && maindishes.length > 0) {
  const maindishlist = document.getElementById("main-dish-list");
  maindishes.forEach(maindish => {
    c = document.createElement("p");
    c.textContent = maindish;
    maindishlist.appendChild(c);
  });
}
else {
  document.getElementById("main-dish-list").textContent = "No Dish selected"
}


const btn = document.getElementById("go-back-button");
btn.addEventListener("click", function (event) {
  window.location.href = "Order.html";
});
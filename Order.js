const button = document.getElementById("order-button");

button.addEventListener("click", function (event) {

  const drinkOrder = document.querySelectorAll('input[name="drink"]:checked');
  const appetizerOrder = document.querySelectorAll('input[name="appetizer"]:checked');
  const knoodleOrder = document.querySelectorAll('input[name="knoodle"]:checked');
  const mainDishOrder = document.querySelectorAll('input[name="main-dish"]:checked');

  const drinkValues = Array.from(drinkOrder).map(cb => cb.value);
  const appetizerValues = Array.from(appetizerOrder).map(cb => cb.value);
  const knoodleValues = Array.from(knoodleOrder).map(cb => cb.value);
  const mainDishValues = Array.from(mainDishOrder).map(cb => cb.value);

  localStorage.setItem("selectedDrinks", JSON.stringify(drinkValues));
  localStorage.setItem("selectedAppetizer", JSON.stringify(appetizerValues));
  localStorage.setItem("selectedKnoodles", JSON.stringify(knoodleValues));
  localStorage.setItem("selectedMainDishes", JSON.stringify(mainDishValues));

  window.location.href = 'Display.html';

});
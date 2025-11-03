const button = document.getElementById("order-button");

button.addEventListener("click", function (event) {

  const drinkOrder = document.querySelectorAll('input[name="drink"]:checked');
  const appetizerOrder = document.querySelectorAll('input[name="appetizer"]:checked');

  const drinkValues = Array.from(drinkOrder).map(cb => cb.value);
  const appetizerValues = Array.from(appetizerOrder).map(cb => cb.value);

  localStorage.setItem("selectedDrinks", JSON.stringify(drinkValues));
  localStorage.setItem("selectedAppetizer", JSON.stringify(appetizerValues));

  window.location.href = 'Display.html';
});
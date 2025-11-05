const button = document.getElementById("order-button");

const popup = document.getElementById("popup");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");


button.addEventListener("click", () => {
  popup.style.display = "flex";
});


yesBtn.addEventListener("click", () => {
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
  window.location.href = "Display.html";
});

noBtn.addEventListener("click", () => {
  popup.style.display = "none";
  alert("You must have an account to order food.");
});
/*button.addEventListener("click", function (event) {
  const confirmation = confirm("Do you have an account?");
  if (confirmation) {
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
  }
  else {
    alert("You must have an account to order food");
  }


});*/
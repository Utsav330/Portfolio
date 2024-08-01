

let input1 = document.getElementById("input1");

input1.addEventListener("input", function() {
  let inputValue = input1.value;
  input1.value = inputValue.trim().charAt(0).toUpperCase() + inputValue.trim().slice(1).toLowerCase();
});


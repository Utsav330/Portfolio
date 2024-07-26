var typed = new Typed(".text", {
    strings: ["Front-End Developer", "Back-End Developer", "Web-Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let input1 = document.getElementById("input1");

input1.addEventListener("input", function() {
  let inputValue = input1.value;
  input1.value = inputValue.trim().charAt(0).toUpperCase() + inputValue.trim().slice(1).toLowerCase();
});


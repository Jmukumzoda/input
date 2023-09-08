let input = document.querySelector(".ipn");

input.addEventListener("input", function() {
  let add = input.value;

  if (!isNaN(add)) {
    input.classList.remove("green_border");
    input.classList.add("red_border");
  } else {
    input.classList.remove("red_border");
    input.classList.add("green_border");
  }
});


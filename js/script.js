// let input = document.querySelector(".ipn");

// input.addEventListener("input", function () {
//   let add = input.value;

//   if (!isNaN(add)) {
//     input.classList.add("red_border");
//     input.classList.remove("green_border");
//   } else {
//     input.classList.add("green_border");
//     input.classList.remove("red_border");
//   }

// });

let inps = document.querySelectorAll("input")
let p = document.querySelector('.p3')
let p1 = document.querySelector('.p2')
let form = document.querySelector('form')
let patterns = {
  name: /^[a-z ,.'-]+$/i,
  surename: /^[a-z ,.'-]+$/i,
  phone: /^\+998([- ])?(90|91|93|94|95|98|99|33|97|71)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/i,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
  age: /^\S[0-9]{0,3}$/i
}
inps.forEach((ipn) => {
  ipn.onkeyup = () => {
    if (patterns[ipn.name].test(ipn.value)) {
      ipn.style.borderColor = 'blue'
      ipn.style.overflow = 'blue'
      ipn.classList.remove('error')
      document.querySelector("button").style.background = '#4200FF'
    } else {
      ipn.style.borderColor = 'red'
      ipn.classList.add('error')
      ipn.style.overflow = 'red'
      document.querySelector("button").style.background = '#EE0004'
    }

  }

})

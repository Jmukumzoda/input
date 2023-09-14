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
// if (message.trim() === "") {
//   alert("ничего");
//   return false; // Отменить отправку формы
// }

let inps = document.querySelectorAll("input")
let form = document.querySelector('.login')

let patterns = {
  name: /^[a-z ,.'-]+$/i,
  // surename: /^[a-z ,.'-]+$/i,
  // phone: /^\+998([- ])?(90|91|93|94|95|98|99|33|97|71)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/i,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
  age: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|100)$/i,
  About_you: /^[a-z ,.'-]+$/i,
  What_is_JavaScript: /^[a-z ,.'-]+$/i,
  What_is_HTML: /^[a-z ,.'-]+$/i,
  What_is_CSS: /^[a-z ,.'-]+$/i
}
inps.forEach((ipn) => {
  ipn.onkeyup = () => {
    if (patterns[ipn.name].test(ipn.value)) {
     
      ipn.style.borderColor = 'blue'
      ipn.style.overflow = 'blue'
      ipn.classList.remove('error')
      ipn.parentElement.classList.remove('error-field')
      document.querySelector("button").style.background = '#4200FF'
    } else {
      ipn.parentElement.classList.add('error-field')
      ipn.style.borderColor = 'red'
      ipn.classList.add('error')
      ipn.style.overflow = 'red'
      document.querySelector("button").style.background = '#EE0004'
    }


  }

})
form.onsubmit = (event) => {
  event.preventDefault();
  let error = false
  inps.forEach(ipn => {
    if (ipn.parentElement.classList.contains('error-field')) {
      error = true
    }
  })
  if (error) {
    alert('error')
  } else {
    submit()
  }


}
function submit() {
  let user = {}

  let fm = new FormData(form)

  fm.forEach((value, key) => {
    user[key] = value
  })

  let input = document.getElementById("name").value;
  if (input === "") {
    alert("Что ты вёл там ничего нету");
    return fm;
  }


  console.log(user);
}




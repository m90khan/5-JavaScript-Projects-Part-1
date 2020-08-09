const form = document.querySelector("form");
const username = document.querySelector(".form-control__username");
const password = document.querySelector(".form-control__password");
const email = document.querySelector(".form-control__email");
const confirmPass = document.querySelector(".form-control__confirm");
const submitBtn = document.querySelector(".btn");
// const formControl = document.querySelectorAll(".form-control");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");
const message = document.querySelector(".passMessage");
// When the user clicks on the password field, show the message box
// password.addEventListener("focus", () => {
//   message.style.display = "flex";
// });

// // When the user clicks outside of the password field, hide the message box
// password.addEventListener("blur", () => {
//   message.style.display = "none";
// });

// function checkPassword(arrInputs) {
//   const lowerCaseLetters = /[a-z]/g;
//   const upperCaseLetters = /[A-Z]/g;
//   const numbers = /[0-9]/g;

//   arrInputs.forEach((input) => {
//     if (
//       !password.value.match(
//         lowerCaseLetters &&
//           upperCaseLetters &&
//           numbers &&
//           password.value.length > 6
//       )
//     ) {
//       showError(password, `${getCapatalize(password)} NOT mACTHING`);
//       input.classList.remove("passMessage__invalid");
//     } else {
//       showSuccess(password);
//       input.classList.add("passMessage__valid");
//     }
//   });
// }

// password.addEventListener("keyup", () => {
//   // Validate lowercase letters
//   checkPassword([letter, capital, number, length]);
// });

// * Event Listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([username, email, password, confirmPass]);

  checkLength(username, 5, 15);
  checkLength(password, 8, 25);
  isEmail(email);
  checkPasswordMatch(password, confirmPass);
});

// ! check Reuired Fields
// * check if empty or not
function checkRequired(arrInputs) {
  arrInputs.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getCapatalize(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
// * Make first letter of input capalize
function getCapatalize(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// ! check length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getCapatalize(input)} should be atleast ${min} characters.`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getCapatalize(input)} should be less than ${max} characters.`
    );
  } else {
    showSuccess(input);
  }
}

// * Input Error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// * Input Success
function showSuccess(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add("success");
}

// * Email check
function isEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(String(email).toLowerCase());
  if (re.test(email.value)) {
    showSuccess(email);
  } else {
    showError(email, "Email is not valid");
  }
}

// * check password compare  confirm Password

function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords did not match");
  }
}

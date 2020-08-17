const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const seatHall = document.querySelector(".movie-container");
const selectMovie = document.querySelector(".movie-box__options");

let ticketPrice = +selectMovie.value;
let bookings = [];
// ! Event listener
// * Seat Click
seatHall.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSeats();
  }
});
// *
selectMovie.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSeats();
  saveMovieData(e.target.selectedIndex, e.target.value);
});
// seats.forEach((seat) => {
//   seat.addEventListener("click", (e) => {
//     e.target.classList.toggle("selected");
//   });
// });

// Functions
// * update text
function updateSeats() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  count.innerText = selectedSeats.length;
  const totalAmount = ticketPrice * selectedSeats.length;
  total.innerText = totalAmount;
  // get te position of the seat
  const seatsIndex = [...selectedSeats].map((seat) => {
    return [...seats].indexOf(seat);
  });

  // local storagge
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
}

// save movie data
function saveMovieData(index, moviePrice) {
  localStorage.setItem("selectedMovieIndex", index);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        // greater than -1 means that its there
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    selectMovie.selectedIndex = selectedMovieIndex;
  }
}
populateUI();
updateSeats();
// localStorage.clear();

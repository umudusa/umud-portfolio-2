const params = new URLSearchParams(window.location.search);
const movie = params.get("movie");
const price = +params.get("price");

document.getElementById("movieTitle").innerText = movie;

const seatsContainer = document.querySelector(".seats");
const count = document.getElementById("count");
const total = document.getElementById("total");

for (let i = 0; i < 48; i++) {
  const seat = document.createElement("div");
  seat.classList.add("seat");

  if (Math.random() < 0.2) {
    seat.classList.add("occupied");
  }

  seatsContainer.appendChild(seat);
}

function update() {
  const selected = document.querySelectorAll(".seat.selected");
  count.innerText = selected.length;
  total.innerText = selected.length * price;
}

seatsContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    update();
  }
});

document.getElementById("bookBtn").addEventListener("click", () => {
  alert("Booking Confirmed 🎉");
});

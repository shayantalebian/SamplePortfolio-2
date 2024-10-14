// Select elements
const head1 = document.getElementById("head1");
const head2 = document.getElementById("head2");
const head3 = document.getElementById("head3");

// Simple eventlistener to all elements
head2.addEventListener("click", function () {
  // remove all inactive head names
  head1.classList.remove("selected");
  head3.classList.remove("selected");
  // add active class the head name
  head2.classList.add("selected");
});

head1.addEventListener("click", function () {
  head2.classList.remove("selected");
  head3.classList.remove("selected");
  head1.classList.add("selected");
});

head3.addEventListener("click", function () {
  head1.classList.remove("selected");
  head2.classList.remove("selected");
  head3.classList.add("selected");
});

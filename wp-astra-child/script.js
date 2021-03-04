console.log("Child Theme JS is running!");

document.addEventListener("DOMContentLoaded", function () {
  initTypedJs();
});





// ---------- typed.js ---------- //

function initTypedJs() {
  new Typed(".typed", {
    strings: [
      "UX-nut",
      "Dependable",
      "Team Player",
      "Copy Writer",
      "Spanish-speaker",
      "DJ",
      "Diplomatic",
      "Kind",
    ],
    typeSpeed: 100,
    loop: true,
  });
}

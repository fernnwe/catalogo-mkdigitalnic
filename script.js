// Filtro de búsqueda
const searchBar = document.getElementById("searchBar");
const cards = document.querySelectorAll(".card");

searchBar.addEventListener("keyup", () => {
  const query = searchBar.value.toLowerCase();
  cards.forEach(card => {
    const name = card.getAttribute("data-name").toLowerCase();
    card.style.display = name.includes(query) ? "block" : "none";
  });
});

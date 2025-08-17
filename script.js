// ===== VARIABLES =====
const searchBar = document.getElementById("searchBar");
const cards = document.querySelectorAll(".card");
const flyersSection = document.querySelector(".flyers");
const catalog = document.getElementById("catalog");

// ===== FUNCION FILTRAR =====
searchBar.addEventListener("keyup", () => {
  const query = searchBar.value.toLowerCase();
  let anyVisible = false;

  // Ocultar flyers si hay texto
  if (query.trim() !== "") {
    flyersSection.style.display = "none";
  } else {
    flyersSection.style.display = "flex";
  }

  // Filtrar cards
  cards.forEach(card => {
    const name = card.getAttribute("data-name").toLowerCase();
    if (name.includes(query)) {
      card.style.display = "block";
      anyVisible = true;
    } else {
      card.style.display = "none";
    }
  });

  // Manejo de mensaje "Producto no disponible ❌"
  let noProductMsg = document.getElementById("no-product-msg");
  if (!anyVisible && query.trim() !== "") {
    if (!noProductMsg) {
      noProductMsg = document.createElement("p");
      noProductMsg.id = "no-product-msg";
      noProductMsg.textContent = "Producto no disponible ❌";
      noProductMsg.style.textAlign = "center";
      noProductMsg.style.color = "#ff5555";
      noProductMsg.style.fontSize = "1.2rem";
      noProductMsg.style.marginTop = "2rem";
      catalog.parentNode.insertBefore(noProductMsg, catalog);
    }
  } else {
    if (noProductMsg) {
      noProductMsg.remove();
    }
  }
});

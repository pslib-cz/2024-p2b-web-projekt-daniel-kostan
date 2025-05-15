document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".faction-btn");
  const contents = document.querySelectorAll(".faction-content");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const selected = button.dataset.faction;

      // Zobrazit správný obsah
      contents.forEach(content => {
        if (content.dataset.faction === selected) {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
      });

      // Přepnout aktivní tlačítko
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const artId = params.get("id");

  fetch("data/art-details.json")
    .then(res => res.json())
    .then(data => {
      const art = data[artId];
      if (!art) {
        document.querySelector(".art-container").innerHTML = "<p>Artwork not found.</p>";
        return;
      }

      // Update image and alt
      const img = document.getElementById("art-image");
      img.src = art.image;
      img.alt = art.title || "Artwork image";

      // Update text fields individually to match your layout
      document.getElementById("mediumsUsed").textContent = art.mediumsUsed || "N/A";
      document.getElementById("yearCreated").textContent = art.yearCreated || "N/A";
      document.getElementById("artDimensions").textContent = art.artDimensions || "N/A";
      document.getElementById("titleBody").textContent = art.title || "N/A";

      // Update title on top section
      const titleEl = document.getElementById("title");
      if (titleEl) titleEl.textContent = art.title || "";
    })
    .catch(error => {
      console.error("Error loading artwork:", error);
      document.querySelector(".art-container").innerHTML = "<p>Error loading artwork.</p>";
    });
});

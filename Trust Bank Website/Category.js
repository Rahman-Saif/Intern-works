document.addEventListener("DOMContentLoaded", function () {
  const categoryFilter = document.getElementById("categoryFilter");
  const toggleButton = document.getElementById("toggleButton");
  const cards = document.querySelectorAll("#cardContainer .card");
  const initialVisibleCards = 6; // Number of cards to show initially
  let showingMore = false;

  // Function to update the visibility of cards
function updateCardVisibility() {
  const selectedCategory = categoryFilter.value;
  let visibleCount = 0; // Track the number of visible cards

  cards.forEach((card) => {
    const isInSelectedCategory =
      selectedCategory === "all" || card.classList.contains(selectedCategory);

    const shouldBeVisible =
      isInSelectedCategory &&
      (showingMore || visibleCount < initialVisibleCards);

    if (shouldBeVisible) {
      visibleCount++; // Increment the count of visible cards
    }

    card.style.display = shouldBeVisible ? "block" : "none";
  });

  // Hide the "Show More" button if all cards are already visible
  const totalInCategory = Array.from(cards).filter((card) =>
    selectedCategory === "all" || card.classList.contains(selectedCategory)
  ).length;

  toggleButton.style.display =
    totalInCategory > initialVisibleCards ? "block" : "none";
}


  // Event listener for the category filter
  categoryFilter.addEventListener("change", function () {
    showingMore = false; // Reset "Show More" state when category changes
    toggleButton.textContent = "Show More";
    updateCardVisibility();
  });

  // Event listener for the "Show More"/"Show Less" button
  toggleButton.addEventListener("click", function () {
    showingMore = !showingMore; // Toggle the state
    toggleButton.textContent = showingMore ? "Show Less" : "Show More";
    updateCardVisibility();
  });

  // Initial setup
  updateCardVisibility();
});

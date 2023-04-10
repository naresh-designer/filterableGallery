const filterContainer = document.querySelector(".gallery_filter");
const galleryItems = document.querySelectorAll(".gallery_items");

filterContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter_items")) {
    filterContainer.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");

    // Show Hide Container Image
    const filterValue = event.target.getAttribute("data-filter");
    galleryItems.forEach((items) => {
      if (items.classList.contains(filterValue) || filterValue === "all") {
        items.classList.remove("hide");
        items.classList.add("show");
      } else {
        items.classList.remove("show");
        items.classList.add("hide");
      }
    });
  }
});

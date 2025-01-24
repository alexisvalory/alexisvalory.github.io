// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons .btn-sm");
const filterableCards = document.querySelectorAll("#filterable-cards .portfolio-item");


let activeFilter = "all"

// Function to filter cards based on filter buttons
const filterCards = (e) => {

    const clickedFilter = e.target.dataset.filter;
    if(clickedFilter === activeFilter) return;

    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        if(!classList.contains("hide"))
            card.classList.add("hide");
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));
document.addEventListener("DOMContentLoaded", function() {
    const dropdownButton = document.getElementById("dashboard_dropdowns");
    const dropdownContent = document.getElementById("show_dropdown_item");

    dropdownButton.addEventListener("click", function() {
        if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
            dropdownContent.style.display = "block";
        } else {
            dropdownContent.style.display = "none";
        }
    });
});
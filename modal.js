document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const modal = document.getElementById("myModal");
        modal.style.display = "flex";
    }, 3000); // Display the modal after 3 seconds

    const closeModalButton = document.getElementById("closeButton");
    const closeModalIcon = document.getElementById("closeModal");
    
    closeModalButton.addEventListener("click", function() {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
    });

    closeModalIcon.addEventListener("click", function() {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const generalToggle = document.getElementById("generalToggle");
    const businessToggle = document.getElementById("businessToggle");
    const formTitle = document.getElementById("formTitle");
    const generalFields = document.getElementById("generalFields");
    const businessFields = document.getElementById("businessFields");

    generalToggle.addEventListener("click", () => {
        formTitle.textContent = "General Inquiry";
        generalFields.style.display = "block";
        businessFields.style.display = "none";

        generalToggle.classList.add("active");
        businessToggle.classList.remove("active");
    });

    businessToggle.addEventListener("click", () => {
        formTitle.textContent = "Host a Tournament";
        generalFields.style.display = "none";
        businessFields.style.display = "block";

        businessToggle.classList.add("active");
        generalToggle.classList.remove("active");
    });
});

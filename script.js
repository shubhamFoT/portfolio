document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const responseMessage = document.getElementById("response");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            responseMessage.textContent = "Please fill out all fields.";
            responseMessage.style.color = "red";
            return;
        }

        responseMessage.textContent = "Message sent successfully!";
        responseMessage.style.color = "green";

        form.reset();
    });

    // Dynamic Skill Level Change
    document.querySelectorAll(".progress").forEach((bar) => {
        bar.addEventListener("click", function() {
            let newWidth = Math.floor(Math.random() * 101) + "%";
            this.style.width = newWidth;
        });
    });
});

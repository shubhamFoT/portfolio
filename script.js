document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("response").innerText = "Message sent successfully!";
    document.getElementById("response").style.color = "green";
    this.reset();
});

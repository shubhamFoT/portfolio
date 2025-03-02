document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("response").innerText = "Message sent!";
    document.getElementById("response").style.color = "cyan";
    this.reset();
});

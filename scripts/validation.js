document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Sélection des champs
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Sélection des messages d'erreur
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    let isValid = true;

    // Validation du champ Name
    if (name.value.trim() === "") {
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    // Validation du champ Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex pour l'email
    if (!emailPattern.test(email.value.trim())) {
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // Validation du champ Message
    if (message.value.trim() === "") {
        messageError.style.display = "block";
        isValid = false;
    } else {
        messageError.style.display = "none";
    }

    // Si tous les champs sont valides, envoyer le formulaire ou afficher un message de succès
    if (isValid) {
        alert("Message sent successfully!");
        // Vous pouvez soumettre le formulaire ici, si nécessaire.
    }
});

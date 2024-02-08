function validateAge() {
    
    var age = document.getElementById('age').value;
    if (isNaN(age) || age <= 0 || age >100) {
        document.getElementById('ageError').innerText = "Inserire un'età valida.";
    } else {
        document.getElementById('ageError').innerText = "";
    }
}

function submitForm() {
    validateAge();
    if (document.getElementById('ageError').innerText === "") {
        // Invia il form o esegui altre azioni necessarie
        alert("Form inviato con successo!");
    } else {
        alert("Il form contiene errori. Per favore, correggi gli errori.");
    }
}

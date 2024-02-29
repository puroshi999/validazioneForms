
<<<<<<< HEAD
const regexName = /^[A-Za-z]+$/;
const regexDateOfBirth = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
const regexPhoneNumber = /^\+\d{10,15}$/;
const regexStreetNumber = /^\d+[a-zA-Z]*$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateField(fieldId, regex, errorMessage) {
    var value = document.getElementById(fieldId).value;
    var errorElement = document.getElementById(fieldId + 'Error');

    if (regex.test(value)) {
        errorElement.innerText = "";
    } else {
        errorElement.innerText = errorMessage;
    }
}
=======
>>>>>>> f62764cf410fddc3c5376615db53aa46db1e6157

function validateForm() {
    validateField('name', regexName, "Inserire un nome valido.");
    validateField('surname', regexName, "Inserire un cognome valido.");
    validateField('dob', regexDateOfBirth, "Inserire una data di nascita valida.");
    validateField('phone', regexPhoneNumber, "Inserire un numero di telefono valido.");
    validateField('address', /.+/, "Inserire un indirizzo.");
    validateField('streetNumber', regexStreetNumber, "Inserire un numero civico valido.");
    validateField('email', regexEmail, "Inserire un indirizzo email valido.");
}

function submitForm() {
<<<<<<< HEAD
    validateForm();
    var errorElements = document.querySelectorAll('.error-message');
    var hasErrors = Array.from(errorElements).some(element => element.innerText !== "");

    if (!hasErrors) {
        // Invia il form o esegui altre azioni necessarie
        alert("Form inviato con successo!");
=======
    // Ottenere l'input dell'età e l'elemento di errore
    var ageInput = document.getElementById('age');
    var ageError = document.getElementById('ageError');
  
    // Creare la regex per l'età
    var ageRegex = /^(100|[1-9][0-9]?)$/;
  
    // Verificare se l'input dell'età corrisponde alla regex
    if (ageRegex.test(ageInput.value)) {
      // Se l'input è valido, rimuovere l'errore
      ageError.textContent = '';
>>>>>>> f62764cf410fddc3c5376615db53aa46db1e6157
    } else {
      // Se l'input non è valido, mostrare un messaggio di errore
      ageError.textContent = 'Per favore, inserisci un\'età valida tra 1 e 100.';
    }
<<<<<<< HEAD
}
=======
  }
>>>>>>> f62764cf410fddc3c5376615db53aa46db1e6157

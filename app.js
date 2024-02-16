

function submitForm() {
    // Ottenere l'input dell'età e l'elemento di errore
    var ageInput = document.getElementById('age');
    var ageError = document.getElementById('ageError');
  
    // Creare la regex per l'età
    var ageRegex = /^(100|[1-9][0-9]?)$/;
  
    // Verificare se l'input dell'età corrisponde alla regex
    if (ageRegex.test(ageInput.value)) {
      // Se l'input è valido, rimuovere l'errore
      ageError.textContent = '';
    } else {
      // Se l'input non è valido, mostrare un messaggio di errore
      ageError.textContent = 'Per favore, inserisci un\'età valida tra 1 e 100.';
    }
  }
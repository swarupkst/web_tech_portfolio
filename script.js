/*
document.getElementById("form1").addEventListener("submit", function(event) {
  console.log("hi, i am here");
  event.preventDefault();
  let isValid = true;

  let name = document.getElementById("name").value;
  let email = document.getElementById("email1").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  /*let errorName = document.getElementById("errorName");
  let errorEmail = document.getElementById("errorEmail");
  let errorSubject = document.getElementById("errorSubject");
  let errorMessage = document.getElementById("errorMessage");/

  errorName.textContent = "";
  errorEmail.textContent = "";
  errorSubject.textContent = "";
  errorMessage.textContent = "";

  if (name === "") {
    errorName.textContent = "Name is required";
    isValid = false;
  }

  //let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    console.log("i am in email")
    errorEmail.textContent = "Email is required";
    isValid = false;
  } 
  // else if (!email.match(emailPattern)) {
  //   errorEmail.textContent = "Enter a valid email address";
  //   isValid = false;
  // }


  if (subject === "") {
    console.log("i am in sub")
    errorSubject.textContent = "Subject is required";
    isValid = false;
  }

  if (message === "") {
    errorMessage.textContent = "Message is required";
    isValid = false;
  }

  
}); */


function validateRealTime() {
    const formInputs = document.querySelectorAll('#form1 input, #form1 textarea');

    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateSingleField(this);
        });
        input.addEventListener('input', function() {
            validateSingleField(this);
        });
    });
}

function validateSingleField(field) {
    const fieldName = field.name;
    const value = field.value.trim();
   
    switch(fieldName) {
        case 'name':
            if (value === '') {
                showError('errorName', 'Name is required');
            } else if (value.length < 2) {
                showError('errorName', 'Name must be at least 2 characters long');
            } else {
                showError('errorName', '');
            }
            break;

        case 'email':
            if (value === '') {
                showError('errorEmail', 'Email is required');
            } else if (!isValidEmail(value)) {
                showError('errorEmail', 'Please enter a valid email address');
            } else {
                showError('errorEmail', '');
            }
            break;

        case 'subject':
            if (value === '') {
                showError('errorSubject', 'Subject is required');
            } else {
                showError('errorSubject', '');
            }
            break;

        case 'message':
            if (value === '') {
                showError('errorMessage', 'Write your message');
            } else {
                showError('errorMessage', '');
            }
            break;
    }
}

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

validateRealTime();
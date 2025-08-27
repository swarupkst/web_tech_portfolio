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
    let isValid = true;

    switch(fieldName) {
        case 'name':
            if (value === '') {
                showError('errorName', 'Name is required');
                isValid = false;
            } else if (value.length < 2) {
                showError('errorName', 'Name must be at least 2 characters long');
                isValid = false;

                
            } 
            else if (!/^[a-zA-Z\s]+$/.test(value)) {
                showError('errorName', 'Name can only contain letters');
}

            
            else {
                showError('errorName', '');
            }
            break;

        case 'email':
            if (value === '') {
                showError('errorEmail', 'Email is required');
                isValid = false;
            } else if (!isValidEmail(value)) {
                showError('errorEmail', 'Please enter a valid email address');
                isValid = false;
            } else {
                showError('errorEmail', '');
            }
            break;

        case 'subject':
            if (value === '') {
                showError('errorSubject', 'Subject is required');
                isValid = false;
            } else {
                showError('errorSubject', '');
            }
            break;

        case 'message':
            if (value === '') {
                showError('errorMessage', 'Write your message');
                isValid = false;
            } else {
                showError('errorMessage', '');
            }
            break;
    }

    return isValid;
}

function showError(id, message) {
    const el = document.getElementById(id);
    if (el) {
        el.textContent = message;
    }
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

validateRealTime();

// ✅ Submit event (alert বাদ দিয়ে, error message দেখাবে)
document.getElementById('form1').addEventListener('submit', function(e) {
    let formIsValid = true;
    const inputs = this.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        if (!validateSingleField(input)) {
            formIsValid = false;
        }
    });

    if (!formIsValid) {
        e.preventDefault(); // prevent form submission
    }
});

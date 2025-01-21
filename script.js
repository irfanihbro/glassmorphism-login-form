document.addEventListener("DOMContentLoaded", function() {
    const userInput = document.getElementById('user');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');
    const togglePassword = document.getElementById('togglePassword');
    const inputFields = document.querySelectorAll('.input_field');
    
    togglePassword.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePassword.classList.replace('fa-eye-slash', 'fa-eye');
        } else {
            passwordInput.type = 'password';
            togglePassword.classList.replace('fa-eye', 'fa-eye-slash');
        }
    });

    inputFields.forEach(field => {
        field.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        field.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });
    });

    submitBtn.addEventListener('click', function(event) {
        if (!userInput.value || !passwordInput.value) {
            event.preventDefault();
            alert('Please fill in both the username and password!');
        }
    });
});

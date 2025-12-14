// admission.js

document.addEventListener('DOMContentLoaded', function() {
    const API_URL = 'http://localhost:3000/students';
    const form = document.getElementById('admissionForm');
    const successMessage = document.getElementById('successMessage');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const applicationIdSpan = document.getElementById('applicationId');
    
    // Set default values
    const today = new Date();
    const defaultDOB = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    document.getElementById('dob').value = defaultDOB.toISOString().split('T')[0];
    document.getElementById('dob').max = new Date(today.getFullYear() - 16, today.getMonth(), today.getDate()).toISOString().split('T')[0];
    document.getElementById('year').value = today.getFullYear() - 1;
    document.getElementById('year').min = 1980;
    document.getElementById('year').max = today.getFullYear() + 2;
    document.getElementById('percentage').value = ''; 
    
    // Show/hide error
    function showError(fieldId, message) {
        document.getElementById(fieldId + 'Error').textContent = message;
        document.getElementById(fieldId + 'Error').style.display = 'block';
        document.getElementById(fieldId).classList.add('error');
    }
    
    function hideError(fieldId) {
        document.getElementById(fieldId + 'Error').style.display = 'none';
        document.getElementById(fieldId).classList.remove('error');
    }
    
    //validation functions
    function validateRequired(fieldId, fieldName) {
        const value = document.getElementById(fieldId).value.trim();
        if (!value) {
            showError(fieldId, fieldName + ' is required');
            return false;
        }
        hideError(fieldId);
        return true;
    }
    
    function validateEmail() {
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            showError('email', 'Email is required');
            return false;
        }
        if (!emailRegex.test(email)) {
            showError('email', 'Please enter a valid email');
            return false;
        }
        hideError('email');
        return true;
    }
    
    function validatePhone() {
        const phone = document.getElementById('phone').value.trim();
        const phoneRegex = /^[0-9]{10}$/;
        if (!phone) {
            showError('phone', 'Phone is required');
            return false;
        }
        if (!phoneRegex.test(phone)) {
            showError('phone', 'Please enter a 10-digit number');
            return false;
        }
        hideError('phone');
        return true;
    }
    
    function validatePercentage() {
        const percentage = document.getElementById('percentage').value.trim();
        if (!percentage) {
            showError('percentage', 'Percentage is required');
            return false;
        }
        const num = parseFloat(percentage);
        if (isNaN(num)) {
            showError('percentage', 'Please enter a valid number');
            return false;
        }
        if (num < 0 || num > 100) {
            showError('percentage', 'Must be between 0 and 100');
            return false;
        }
        hideError('percentage');
        return true;
    }
    
    function validateGender() {
        const genderSelected = document.querySelector('input[name="gender"]:checked');
        if (!genderSelected) {
            document.getElementById('genderError').style.display = 'block';
            document.getElementById('genderGroup').classList.add('error');
            return false;
        }
        document.getElementById('genderError').style.display = 'none';
        document.getElementById('genderGroup').classList.remove('error');
        return true;
    }
    
    // Validate on blur
    document.getElementById('firstName').addEventListener('blur', () => validateRequired('firstName', 'First name'));
    document.getElementById('lastName').addEventListener('blur', () => validateRequired('lastName', 'Last name'));
    document.getElementById('email').addEventListener('blur', validateEmail);
    document.getElementById('phone').addEventListener('blur', validatePhone);
    document.getElementById('percentage').addEventListener('blur', validatePercentage);
    document.getElementById('address').addEventListener('blur', () => validateRequired('address', 'Address'));
    document.getElementById('school').addEventListener('blur', () => validateRequired('school', 'School'));
    document.querySelectorAll('input[name="gender"]').forEach(radio => {
        radio.addEventListener('change', validateGender);
    });
    
    // Clear error on input
    document.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('input', function() {
            hideError(this.id);
        });
    });
    
    // Get next ID from JSON server
    async function getNextId() {
        try {
            const response = await fetch(API_URL);
            if (response.ok) {
                const students = await response.json();
                if (students.length === 0) return 1;
                
                // Find max ID
                const maxId = students.reduce((max, student) => {
                    const id = parseInt(student.id) || 0;
                    return id > max ? id : max;
                }, 0);
                return maxId + 1;
            }
        } catch (error) {
            console.log('JSON Server not connected, using demo mode');
        }
        return 1; // Default if no server
    }
    
    // Form submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        successMessage.style.display = 'none';
        
        // Validate all required fields
        let isValid = true;
        if (!validateRequired('firstName', 'First name')) isValid = false;
        if (!validateRequired('lastName', 'Last name')) isValid = false;
        if (!validateEmail()) isValid = false;
        if (!validatePhone()) isValid = false;
        if (!validateRequired('address', 'Address')) isValid = false;
        if (!validateGender()) isValid = false;
        if (!validateRequired('school', 'School')) isValid = false;
        if (!validatePercentage()) isValid = false;
        if (!validateRequired('qualification', 'Qualification')) isValid = false;
        if (!validateRequired('course', 'Course')) isValid = false;
        if (!validateRequired('specialization', 'Specialization')) isValid = false;
        if (!validateRequired('campus', 'Campus')) isValid = false;
        if (!validateRequired('intake', 'Intake')) isValid = false;
        if (!document.getElementById('declaration').checked) {
            document.getElementById('declarationError').style.display = 'block';
            isValid = false;
        }
        
        if (!isValid) {
            document.querySelector('.error-message[style*="display: block"]')?.scrollIntoView({ behavior: 'smooth' });
            return;
        }
        
        loadingSpinner.style.display = 'block';
        
        try {
            const nextId = await getNextId();
            const applicationId = 'APP' + Date.now().toString().slice(-8);
            
            const studentData = {
                id: nextId,
                applicationId: applicationId,
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                dob: document.getElementById('dob').value,
                gender: document.querySelector('input[name="gender"]:checked').value,
                address: document.getElementById('address').value,
                qualification: document.getElementById('qualification').value,
                percentage: document.getElementById('percentage').value,
                school: document.getElementById('school').value,
                year: document.getElementById('year').value,
                course: document.getElementById('course').value,
                specialization: document.getElementById('specialization').value,
                campus: document.getElementById('campus').value,
                intake: document.getElementById('intake').value,
                updates: document.getElementById('updates').checked,
                status: "submitted",
                submissionDate: new Date().toISOString().split('T')[0],
                submissionTime: new Date().toLocaleTimeString('en-IN')
            };
            
            // Save to JSON server
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(studentData)
            });
            
            const savedData = await response.json();
            
            // Show success
            loadingSpinner.style.display = 'none';
            successMessage.style.display = 'block';
            applicationIdSpan.textContent = savedData.applicationId || applicationId;
            successMessage.scrollIntoView({ behavior: 'smooth' });
            
            alert(` Application submitted! Student ID: ${savedData.id || nextId}`);
            
            // Reset form after 3 seconds
            setTimeout(() => {
                form.reset();
                // Reset defaults
                document.getElementById('dob').value = defaultDOB.toISOString().split('T')[0];
                document.getElementById('year').value = today.getFullYear() - 1;
                document.getElementById('percentage').value = '';
                // Clear errors
                document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
                document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
            }, 3000);
            
        } catch (error) {
            loadingSpinner.style.display = 'none';
            alert(' Failed to submit. Please try again.');
           
            successMessage.style.display = 'block';
            applicationIdSpan.textContent = 'APP' + Date.now().toString().slice(-8);
            setTimeout(() => form.reset(), 3000);
        }
    });
    
    // Reset button
    document.getElementById('resetBtn').addEventListener('click', function() {
        if (confirm('Reset all form data?')) {
            form.reset();
            document.getElementById('dob').value = defaultDOB.toISOString().split('T')[0];
            document.getElementById('year').value = today.getFullYear() - 1;
            document.getElementById('percentage').value = '';
            document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
            document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
            successMessage.style.display = 'none';
        }
    });
});




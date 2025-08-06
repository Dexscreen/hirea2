// Form handling and management
class FormManager {
    constructor() {
        this.forms = new Map();
        this.init();
    }

    init() {
        this.setupContactForm();
        this.setupFormValidation();
        this.setupFormSubmission();
        this.loadFormConfigurations();
    }

    setupContactForm() {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            this.forms.set('contact', {
                element: contactForm,
                endpoint: 'https://formsubmit.io/send/24forhire@protonmail.com',
                fields: ['name', 'email', 'country', 'service', 'message'],
                required: ['name', 'email', 'service', 'message'],
                validation: {
                    email: this.validateEmail,
                    name: this.validateName,
                    message: this.validateMessage
                }
            });

            this.bindFormEvents(contactForm);
        }
    }

    setupFormValidation() {
        // Real-time validation
        document.addEventListener('input', (e) => {
            if (e.target.matches('input, select, textarea')) {
                this.validateField(e.target);
            }
        });

        // Form submission validation
        document.addEventListener('submit', (e) => {
            if (e.target.matches('form')) {
                if (!this.validateForm(e.target)) {
                    e.preventDefault();
                }
            }
        });
    }

    setupFormSubmission() {
        document.addEventListener('submit', async (e) => {
            if (e.target.matches('form')) {
                e.preventDefault();
                await this.handleFormSubmission(e.target);
            }
        });
    }

    bindFormEvents(form) {
        const submitButton = form.querySelector('button[type="submit"]');
        
        // Add loading state management
        form.addEventListener('submit', () => {
            this.setLoadingState(submitButton, true);
        });

        // Add form reset functionality
        const resetButton = form.querySelector('button[type="reset"]');
        if (resetButton) {
            resetButton.addEventListener('click', () => {
                this.resetForm(form);
            });
        }
    }

    async handleFormSubmission(form) {
        const formId = form.id || 'unknown';
        const formConfig = this.forms.get(formId.replace('-form', ''));
        
        if (!formConfig) {
            console.error('Form configuration not found');
            return;
        }

        try {
            // Validate form
            if (!this.validateForm(form)) {
                throw new Error('Form validation failed');
            }

            // Collect form data
            const formData = this.collectFormData(form);
            
            // Add metadata
            formData.append('_subject', 'New Contact Form Submission - Hire a Hacker');
            formData.append('_template', 'table');
            formData.append('_captcha', 'false');
            formData.append('_next', window.location.href + '?success=true');

            // Submit form
            const response = await fetch(formConfig.endpoint, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                this.handleFormSuccess(form);
                
                // Track form submission
                this.trackFormSubmission(formId, formData);
                
                // Notify chat widget
                if (window.chatWidget) {
                    window.chatWidget.addTags(['form-submitted', formId]);
                }
            } else {
                throw new Error('Form submission failed');
            }

        } catch (error) {
            console.error('Form submission error:', error);
            this.handleFormError(form, error.message);
        }
    }

    collectFormData(form) {
        const formData = new FormData();
        const inputs = form.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            if (input.name && input.value) {
                formData.append(input.name, input.value);
            }
        });

        // Add timestamp
        formData.append('submission_time', new Date().toISOString());
        
        // Add page URL
        formData.append('page_url', window.location.href);
        
        // Add user agent
        formData.append('user_agent', navigator.userAgent);

        return formData;
    }

    validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';

        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }

        // Specific field validations
        if (value && fieldName) {
            switch (fieldName) {
                case 'email':
                    if (!this.validateEmail(value)) {
                        isValid = false;
                        errorMessage = 'Please enter a valid email address';
                    }
                    break;
                case 'name':
                    if (!this.validateName(value)) {
                        isValid = false;
                        errorMessage = 'Please enter a valid name (2-50 characters)';
                    }
                    break;
                case 'message':
                    if (!this.validateMessage(value)) {
                        isValid = false;
                        errorMessage = 'Message must be at least 10 characters long';
                    }
                    break;
            }
        }

        // Update field UI
        this.updateFieldUI(field, isValid, errorMessage);
        
        return isValid;
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    validateName(name) {
        return name.length >= 2 && name.length <= 50 && /^[a-zA-Z\s]+$/.test(name);
    }

    validateMessage(message) {
        return message.length >= 10 && message.length <= 1000;
    }

    updateFieldUI(field, isValid, errorMessage) {
        // Remove existing error styling
        field.classList.remove('error', 'success');
        
        // Remove existing error message
        const existingError = field.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        if (!isValid && errorMessage) {
            // Add error styling
            field.classList.add('error');
            
            // Add error message
            const errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.textContent = errorMessage;
            field.parentNode.appendChild(errorElement);
        } else if (field.value.trim()) {
            // Add success styling for valid fields with content
            field.classList.add('success');
        }
    }

    setLoadingState(button, isLoading) {
        if (isLoading) {
            button.disabled = true;
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        } else {
            button.disabled = false;
            button.innerHTML = '<i class="fas fa-paper-plane"></i> Send Secure Message';
        }
    }

    handleFormSuccess(form) {
        // Reset loading state
        const submitButton = form.querySelector('button[type="submit"]');
        this.setLoadingState(submitButton, false);

        // Show success message
        this.showNotification('Message sent successfully! We\'ll get back to you within 24 hours.', 'success');

        // Reset form
        this.resetForm(form);

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    handleFormError(form, errorMessage) {
        // Reset loading state
        const submitButton = form.querySelector('button[type="submit"]');
        this.setLoadingState(submitButton, false);

        // Show error message
        this.showNotification('There was an error sending your message. Please try again or contact us directly.', 'error');
    }

    resetForm(form) {
        form.reset();
        
        // Remove all validation styling
        const fields = form.querySelectorAll('input, select, textarea');
        fields.forEach(field => {
            field.classList.remove('error', 'success');
        });

        // Remove all error messages
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${this.getNotificationIcon(type)}"></i>
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add to page
        document.body.appendChild(notification);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);

        // Close button functionality
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });
    }

    getNotificationIcon(type) {
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            warning: 'fa-exclamation-triangle',
            info: 'fa-info-circle'
        };
        return icons[type] || icons.info;
    }

    trackFormSubmission(formId, formData) {
        // Track form submission for analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
                form_id: formId,
                form_name: formId.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())
            });
        }

        // Store in localStorage for follow-up
        const submissions = JSON.parse(localStorage.getItem('form_submissions') || '[]');
        submissions.push({
            formId,
            timestamp: new Date().toISOString(),
            data: Object.fromEntries(formData.entries())
        });
        localStorage.setItem('form_submissions', JSON.stringify(submissions));
    }

    loadFormConfigurations() {
        // Load any dynamic form configurations
        // This can be extended to load from an API or config file
        const configs = {
            contact: {
                autoSave: true,
                showProgress: true,
                customValidation: true
            }
        };

        // Apply configurations
        Object.keys(configs).forEach(formId => {
            const form = this.forms.get(formId);
            if (form) {
                Object.assign(form, configs[formId]);
            }
        });
    }

    // Method to dynamically update form endpoints
    updateFormEndpoint(formId, newEndpoint) {
        const form = this.forms.get(formId);
        if (form) {
            form.endpoint = newEndpoint;
        }
    }

    // Method to add custom validation rules
    addValidationRule(fieldName, validationFunction) {
        // Add to all forms that have this field
        this.forms.forEach(form => {
            if (form.validation) {
                form.validation[fieldName] = validationFunction;
            }
        });
    }
}

// Initialize form manager
document.addEventListener('DOMContentLoaded', () => {
    window.formManager = new FormManager();
});

// Add CSS for form styling and notifications
const formStyles = document.createElement('style');
formStyles.textContent = `
    /* Form validation styles */
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: var(--warning-color);
        box-shadow: 0 0 0 3px rgba(248, 81, 73, 0.1);
    }

    .form-group input.success,
    .form-group select.success,
    .form-group textarea.success {
        border-color: var(--success-color);
        box-shadow: 0 0 0 3px rgba(35, 134, 54, 0.1);
    }

    .error-message {
        color: var(--warning-color);
        font-size: 0.85rem;
        margin-top: 5px;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .error-message::before {
        content: '⚠';
        font-size: 0.9rem;
    }

    /* Notification styles */
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--surface-color);
        border-radius: 8px;
        padding: 15px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
        border-left: 4px solid var(--primary-color);
    }

    .notification-success {
        border-left-color: var(--success-color);
    }

    .notification-error {
        border-left-color: var(--warning-color);
    }

    .notification-warning {
        border-left-color: #f59e0b;
    }

    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--text-primary);
    }

    .notification-content i {
        font-size: 16px;
    }

    .notification-success i {
        color: var(--success-color);
    }

    .notification-error i {
        color: var(--warning-color);
    }

    .notification-warning i {
        color: #f59e0b;
    }

    .notification-close {
        background: none;
        border: none;
        color: var(--text-secondary);
        font-size: 18px;
        cursor: pointer;
        margin-left: auto;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .notification-close:hover {
        color: var(--text-primary);
    }

    /* Loading button styles */
    .btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .btn .fa-spinner {
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;

document.head.appendChild(formStyles);

// Export for use in other scripts
window.FormManager = FormManager;
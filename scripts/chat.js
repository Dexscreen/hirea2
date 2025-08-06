// Chat widget functionality
class ChatWidget {
    constructor() {
        this.isInitialized = false;
        this.tawkToId = '687008994b257b1909ec6eb3/1ivqq36l7'; // Your Tawk.to ID
        this.init();
    }

    init() {
        // Initialize Tawk.to chat widget
        this.loadTawkTo();
        
        // Add custom styling and positioning
        this.customizeChatWidget();
        
        // Add event listeners
        this.addEventListeners();
    }

    loadTawkTo() {
        // Tawk.to script loading
        var Tawk_API = Tawk_API || {};
        var Tawk_LoadStart = new Date();
        var self = this; // Capture this context before IIFE
        
        (function() {
            var s1 = document.createElement("script");
            var s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = `https://embed.tawk.to/${self.tawkToId}`;
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();

        // Tawk.to API configuration
        Tawk_API.onLoad = () => {
            this.isInitialized = true;
            this.customizeChatWidget();
            console.log('Chat widget loaded successfully');
        };

        Tawk_API.onStatusChange = (status) => {
            console.log('Chat status:', status);
        };

        // Store Tawk_API globally for access
        window.Tawk_API = Tawk_API;
    }

    customizeChatWidget() {
        // Wait for Tawk.to to load
        setTimeout(() => {
            const chatWidget = document.getElementById('tawk-bubble');
            if (chatWidget) {
                // Add custom styling
                chatWidget.style.cssText += `
                    background: linear-gradient(135deg, var(--primary-color), #00cc33) !important;
                    box-shadow: 0 4px 20px rgba(0, 255, 65, 0.3) !important;
                    border: 2px solid var(--primary-color) !important;
                `;
            }

            // Customize chat window
            const chatFrame = document.querySelector('[id^="tawk-"]');
            if (chatFrame) {
                chatFrame.style.cssText += `
                    border-radius: 12px !important;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3) !important;
                `;
            }
        }, 2000);
    }

    addEventListeners() {
        // Custom chat triggers
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('chat-trigger')) {
                this.openChat();
            }
        });

        // Auto-open chat for specific pages or conditions
        this.autoOpenConditions();
    }

    openChat() {
        if (window.Tawk_API && window.Tawk_API.maximize) {
            window.Tawk_API.maximize();
        }
    }

    closeChat() {
        if (window.Tawk_API && window.Tawk_API.minimize) {
            window.Tawk_API.minimize();
        }
    }

    sendMessage(message) {
        if (window.Tawk_API && window.Tawk_API.addEvent) {
            window.Tawk_API.addEvent('Automated Message', {
                message: message,
                timestamp: new Date().toISOString()
            });
        }
    }

    autoOpenConditions() {
        // Auto-open chat after user spends time on page
        setTimeout(() => {
            if (!this.hasUserInteracted()) {
                this.showChatNotification();
            }
        }, 30000); // 30 seconds

        // Auto-open on exit intent
        document.addEventListener('mouseleave', (e) => {
            if (e.clientY <= 0) {
                this.showExitIntentChat();
            }
        });
    }

    hasUserInteracted() {
        // Check if user has scrolled or clicked
        return window.scrollY > 100 || localStorage.getItem('user_interacted');
    }

    showChatNotification() {
        // Create a subtle notification
        const notification = document.createElement('div');
        notification.className = 'chat-notification';
        notification.innerHTML = `
            <div class="chat-notification-content">
                <i class="fas fa-comments"></i>
                <span>Need help? Chat with our security experts!</span>
                <button class="chat-notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 20px;
            background: var(--surface-color);
            border: 1px solid var(--primary-color);
            border-radius: 8px;
            padding: 15px;
            color: var(--text-primary);
            box-shadow: 0 4px 20px rgba(0, 255, 65, 0.2);
            z-index: 9999;
            animation: slideInRight 0.3s ease;
            max-width: 300px;
            cursor: pointer;
        `;

        document.body.appendChild(notification);

        // Auto-remove after 10 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 10000);

        // Click handlers
        notification.addEventListener('click', (e) => {
            if (!e.target.classList.contains('chat-notification-close')) {
                this.openChat();
                notification.remove();
            }
        });

        notification.querySelector('.chat-notification-close').addEventListener('click', (e) => {
            e.stopPropagation();
            notification.remove();
        });
    }

    showExitIntentChat() {
        if (!localStorage.getItem('exit_intent_shown')) {
            this.openChat();
            localStorage.setItem('exit_intent_shown', 'true');
        }
    }

    // Method to update Tawk.to settings dynamically
    updateSettings(settings) {
        if (window.Tawk_API) {
            Object.keys(settings).forEach(key => {
                window.Tawk_API[key] = settings[key];
            });
        }
    }

    // Method to set visitor information
    setVisitorInfo(info) {
        if (window.Tawk_API && window.Tawk_API.setAttributes) {
            window.Tawk_API.setAttributes(info);
        }
    }

    // Method to add tags to conversation
    addTags(tags) {
        if (window.Tawk_API && window.Tawk_API.addTags) {
            window.Tawk_API.addTags(tags);
        }
    }
}

// Initialize chat widget when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.chatWidget = new ChatWidget();
});

// Add CSS for chat notifications
const chatStyles = document.createElement('style');
chatStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .chat-notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
    }

    .chat-notification-content i {
        color: var(--primary-color);
        font-size: 16px;
    }

    .chat-notification-close {
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

    .chat-notification-close:hover {
        color: var(--text-primary);
    }

    /* Custom Tawk.to styling */
    #tawk-bubble {
        background: linear-gradient(135deg, var(--primary-color), #00cc33) !important;
        box-shadow: 0 4px 20px rgba(0, 255, 65, 0.3) !important;
    }

    /* Chat trigger buttons */
    .chat-trigger {
        background: var(--primary-color);
        color: var(--background-dark);
        border: none;
        padding: 10px 20px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        transition: var(--transition-normal);
    }

    .chat-trigger:hover {
        background: #00cc33;
        transform: translateY(-2px);
    }
`;

document.head.appendChild(chatStyles);

// Export for use in other scripts
window.ChatWidget = ChatWidget;
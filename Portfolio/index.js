document.addEventListener('DOMContentLoaded', function () {
    const outputContainer = document.getElementById('output-container');
    let currentText = '';
    let typingInterval;

    function typeMessage(message) {
        if (currentText.length < message.length) {
            currentText += message.charAt(currentText.length);
            outputContainer.textContent = currentText;
        } else {
            clearInterval(typingInterval); // This stops typing when the message has been completed
        }
    }

    function startTyping(message) {
        currentText = ''; // Reset currentText
        typingInterval = setInterval(() => typeMessage(message), 150); // Adjust the interval for typing speed (in milliseconds)
    }

    function resetTyping(message) {
        clearInterval(typingInterval);
        startTyping(message);
    }

    // Initial call with the default message
    startTyping("Hi, my name is Phil, and welcome. I'm glad you made it here.");

    // Media Query for smaller screens
    const mediaQuery = window.matchMedia('(max-width: 425px)');
    mediaQuery.addEventListener('change', (event) => {
        if (event.matches) {
            // Adjusted message for smaller screens
            resetTyping("Hi, I'm Phil, and welcome.");
        } else {
            // Original message for larger screens
            resetTyping("Hi, my name is Phil, and welcome. I'm glad you made it here.");
        }
    });
});

function generatePassword(length, allowRepeat, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    let characters = '';

    // Build the character set based on the user's selections
    if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) characters += '0123456789';
    if (includeSymbols) characters += '!@#$%^&*()_-+=<>?';

    // If no character types are selected, return an empty string
    if (characters.length === 0) return '';

    let password = '';
    const usedChars = {}; // To track used characters if repeats are not allowed

    // Generate the password
    while (password.length < length) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const char = characters[randomIndex];

        // If repeats are not allowed, check if the character has already been used
        if (!allowRepeat && usedChars[char]) continue;

        password += char;
        usedChars[char] = true; // Mark this character as used
    }

    return password;
}

document.getElementById('generate').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value);
    const allowRepeat = document.getElementById('repeat').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const password = generatePassword(length, allowRepeat, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById('password').value = password || 'Please select at least one character type.';
});

// Funktion zum Kopieren des Passworts in die Zwischenablage
document.getElementById('copy').addEventListener('click', () => {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
});

// Feedback-Handling
document.getElementById('send-feedback').addEventListener('click', () => {
    const feedbackInput = document.getElementById('feedback');
    const feedbackMessage = document.getElementById('feedback-message');

    if (feedbackInput.value) {
        // Here, you can handle the feedback (e.g., send it to a server)
        feedbackMessage.textContent = 'Thank you for your feedback!';
        feedbackMessage.style.color = 'green';
        feedbackInput.value = ''; // Clear the feedback field
    } else {
        feedbackMessage.textContent = 'Please enter feedback before submitting.';
        feedbackMessage.style.color = 'red';
    }
});

function generatePassword(length, allowRepeat) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?';
    let password = '';
    const usedChars = {};

    while (password.length < length) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const char = characters[randomIndex];

        if (!allowRepeat && usedChars[char]) continue;

        password += char;
        usedChars[char] = true; // Mark this character as used
    }
    return password;
}

document.getElementById('generate').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value);
    const allowRepeat = document.getElementById('repeat').checked;

    const password = generatePassword(length, allowRepeat);
    document.getElementById('password').value = password;
});

document.getElementById('copy').addEventListener('click', () => {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
});

document.getElementById('send-feedback').addEventListener('click', () => {
    const feedback = document.getElementById('feedback').value;
    if (feedback) {
        document.getElementById('feedback-message').textContent = 'Thanks for your feedback!';
        document.getElementById('feedback').value = ''; // Clear the textarea
    } else {
        alert('Please provide some feedback before sending!');
    }
});

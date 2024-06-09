document.getElementById("user-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        let input = this.textContent.trim().toLowerCase();

        switch (input) {
            case 'cd home':
                window.location.href = 'index.html';
                break;
            case 'cd projects':
                window.location.href = 'projects.html';
                break;
            case 'cd about':
                window.location.href = 'about.html';
                break;
            case 'cd contact':
                window.location.href = 'contact.html';
                break;
            default:
                alert('Invalid command: ' + input + '. Type \'cd <page-title>\' and press \'enter\' to go to a different page.');
        }
    }
});
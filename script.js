
function verifyCode() {
    const accessCode = document.getElementById('access-code').value;
    const errorMessage = document.getElementById('error-message');

    if (accessCode === "Umbra123") {
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Access Denied. Incorrect Code.";
    }
}

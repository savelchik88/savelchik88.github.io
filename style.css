document.addEventListener("DOMContentLoaded", function() {
    
    // Элементы входа
    const loginButton = document.getElementById("login-button");
    const passwordInput = document.getElementById("password-input");
    const loginContainer = document.getElementById("login-container");
    const errorMessage = document.getElementById("error-message");

    // Новые контейнеры для профилей
    const contentSavas = document.getElementById("content-savas");
    const contentInko = document.getElementById("content-inko");

    // Новые кнопки "Отправить"
    const sendSavas = document.getElementById("send-savas");
    const sendInko = document.getElementById("send-inko");


    // ГЛАВНАЯ ЛОГИКА ВХОДА
    loginButton.addEventListener("click", function() {
        const password = passwordInput.value;

        // 1. Проверяем, ввел ли 'savas'
        if (password === "savas") {
            loginContainer.style.display = "none"; // Прячем вход
            contentSavas.style.display = "block";  // Показываем профиль Savas
            errorMessage.textContent = "";

        // 2. Проверяем, ввел ли 'inko' (как ты и просил)
        } else if (password === "inko") {
            loginContainer.style.display = "none"; // Прячем вход
            contentInko.style.display = "block";   // Показываем профиль Inko
            errorMessage.textContent = "";

        // 3. Если пароль неверный
        } else {
            errorMessage.textContent = "Неверный пароль!";
        }
    });

    // Добавим "заглушку" на кнопки "Отправить"
    function showServerAlert() {
        alert("Сообщение не отправлено! Для этого нужен сервер (бэкенд).");
    }

    sendSavas.addEventListener("click", showServerAlert);
    sendInko.addEventListener("click", showServerAlert);
});

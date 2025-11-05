// Ждем, пока вся страница загрузится
document.addEventListener("DOMContentLoaded", function() {
    
    // Находим нужные элементы на странице
    const loginButton = document.getElementById("login-button");
    const passwordInput = document.getElementById("password-input");
    const loginContainer = document.getElementById("login-container");
    const contentContainer = document.getElementById("content-container");
    const errorMessage = document.getElementById("error-message");

    // Добавляем "слушателя" на кнопку входа
    loginButton.addEventListener("click", function() {
        // Проверяем, совпадает ли введенный пароль с "savas"
        if (passwordInput.value === "savas") {
            // Если да - прячем окно входа
            loginContainer.style.display = "none";
            // И показываем скрытый контент
            contentContainer.style.display = "block";
        } else {
            // Если нет - показываем ошибку
            errorMessage.textContent = "Неверный пароль!";
        }
    });
});

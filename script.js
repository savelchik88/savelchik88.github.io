/* ... (все твои старые стили остаются) ... */

body {
    font-family: Arial, sans-serif;
    background-color: #f0fff0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background-color: #ffffff;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 350px;
    text-align: center;
}

h2 {
    color: #2e8b57;
}

input[type="password"],
input[type="file"],
textarea {
    width: 90%;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

textarea {
    height: 80px;
    resize: vertical;
}

/* Кнопка "Войти" */
#login-button {
    background-color: #32cd32; /* Яркий зеленый */
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
    font-size: 16px;
}

#login-button:hover {
    background-color: #28a745;
}

/* НОВЫЙ СТИЛЬ для кнопок "Отправить" */
.send-button {
    background-color: #20b2aa; /* Другой оттенок зеленого (LightSeaGreen) */
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
    font-size: 16px;
    width: 95%; /* На всю ширину */
}

.send-button:hover {
    background-color: #1a8f8f;
}


.error {
    color: red;
    font-size: 14px;
    height: 20px;
}

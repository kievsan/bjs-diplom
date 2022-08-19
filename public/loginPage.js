"use strict";

const myServer = 'http://localhost:8000/';
let userStart = new UserForm();

userStart.loginFormCallback = (data) => {
    /// 1. Создаем запрос
    let xhr = new XMLHttpRequest();

    // 2. Определяем функцию обратного вызова
    xhr.onreadystatechange = processResponse;

    // Этот код выполнится, кода запрос будет в пути
    function processResponse(e) {
        if (xhr.readyState === 4) {
            console.log(xhr.responseText);
        } else {
            console.log('Загружаем ...')
        }
    }

    // 3. Определяем куда слать запрос
    xhr.open('GET', myServer, true);

    // 4. Отправляем запрос
    xhr.send(ApiConnector.login(data, () => console.log(data)));

    console.log('Другая важная работа ...')

};



// location.reload();


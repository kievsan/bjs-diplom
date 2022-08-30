"use strict";

const myServer = 'http://localhost:8000/';
const userForm = new UserForm();
const errLog = document
    .getElementById('login')
    .getElementsByClassName("ui message negative")[-1];
const errReg = document
    .getElementById('register')
    .getElementsByClassName("ui message negative")[-1];


userForm.loginFormCallback = (data) => {
    ApiConnector.login(data, (response) => {
        console.log(response);
        if (response.success) {
            location.reload();
        } else {
            console.error(response.error);
            errLog.textContent = response.error;
        }
    });
}

userForm.registerFormCallback = (data) => {
    ApiConnector.register(data, (response) => {
        console.log(response);
        if (response.success) {
            location.reload();
        } else {
            console.error(response.error);
            errReg.textContent = response.error;
        }
    });
}

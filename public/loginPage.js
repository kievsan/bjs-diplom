"use strict";

const myServer = 'http://localhost:8000/';
const userForm = new UserForm();
const className = "ui message negative";
const errLog = document
    .getElementById('login')
    .getElementsByClassName(className)[-1];
const errReg = document
    .getElementById('register')
    .getElementsByClassName(className)[-1];


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

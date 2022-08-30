"use strict";

const myServer = 'http://localhost:8000/';

const userForm = new UserForm();

const className = "ui message negative";
const errLog = document
    .getElementById('login')
    .getElementsByClassName(className)[0];
errLog.element = errLog.textContent;
const errReg = document
    .getElementById('register')
    .getElementsByClassName(className)[0];
errReg.element = errReg.textContent;


userForm.loginFormCallback = (data) => {
    ApiConnector.login(data, (response) => {
        console.log(response);
        if (response.success) {
            errLog.style = "display: none;";
            location.reload();
        } else {
            // console.error(response.error);
            errLog.style = "display: box;";
            errLog.textContent = response.error;
        }
    });
}

userForm.registerFormCallback = (data) => {
    ApiConnector.register(data, (response) => {
        console.log(response);
        if (response.success) {
            errLog.style = "display: none;";
            location.reload();
        } else {
            // console.error(response.error);
            errLog.style = "display: box;";
            errReg.textContent = response.error;
        }
    });
}

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

userForm.loginFormCallback = (data) => ApiConnector.login(data, (response) => checkErr(response, errLog));
userForm.registerFormCallback = (data) => ApiConnector.login(data, (response) => checkErr(response, errReg));

function checkErr (response, errDisplay) {
    if (response.success) {
        errDisplay.style = "display: none;";
        errDisplay.textContent = errDisplay.element;
        location.reload();
    } else {
        // console.error(response.error);
        errDisplay.style = "display: box;";
        errDisplay.textContent = response.error;
    }
}

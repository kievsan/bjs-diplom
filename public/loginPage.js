"use strict";

const myServer = 'http://localhost:8000/';

const userForm = new UserForm();

const className = "ui message negative";
const errLoginBox = getElement('login', className);
const errRegBox = getElement('register', className);

userForm.loginFormCallback = (data) => ApiConnector.login(data, (response) => checkErr(response, errLoginBox));
userForm.registerFormCallback = (data) => ApiConnector.login(data, (response) => checkErr(response, errRegBox));

function checkErr (response, errDisplayBox) {
    if (response.success) {
        if (errDisplayBox) {
            errDisplayBox.style = "display: none;";
            errDisplayBox.textContent = errDisplayBox.content;
        }
        location.reload();
    } else {
        // console.error(response.error);
        if (errDisplayBox) {
            errDisplayBox.style = "display: box;";
            errDisplayBox.textContent = response.error;
        }
    }
}

function getElement (idParent, className, positionInParent = 0) {
    const element = document
        .getElementById(idParent)
        .getElementsByClassName(className)[positionInParent];
    element ? element.content = element.textContent : console.log('Заданный элемент не найден!');
    return element;
}

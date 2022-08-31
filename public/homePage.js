"use strict";

// Личный кабинет пользователя

// Получение информации о пользователе
ApiConnector.current((response) => {
    if (response.success) {
        ProfileWidget.showProfile(response.data);
    }});

// Получение текущих курсов валюты
const exchangeRates = new RatesBoard();
exchangeRates.intervalID = setInterval( () => {
    ApiConnector.getStocks((response) => {
        if (response.success) {
            exchangeRates.clearTable();
            exchangeRates.fillTable(response.data);
        }});
    exchangeRates.asyncDelay = 1000;
    }, exchangeRates.asyncDelay);

// Выход из личного кабинета
const homeExit = new LogoutButton();
homeExit.action = (data) => ApiConnector.logout((response) => {
    if (response.success) {
        clearInterval(exchangeRates.intervalID);
        location.reload();
    }});

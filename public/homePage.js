"use strict";

// Личный кабинет пользователя

// Получение информации о пользователе
ApiConnector.current((response) => {
    if (response.success) {
        ProfileWidget.showProfile(response.data);
    }});

// Получение текущих курсов валюты
const exchangeRates = new RatesBoard();
exchangeRates.renews = () => ApiConnector.getStocks((response) => {
    if (response.success) {
        exchangeRates.clearTable();
        exchangeRates.fillTable(response.data);
    }});
exchangeRates.renews();
exchangeRates.renewsIntervalID = setInterval( () => exchangeRates.renews(), 1000);

// Операции с деньгами
const moneyManager = new MoneyManager();
    // пополнение баланса:
moneyManager.addMoneyCallback = (data) => ApiConnector.addMoney(data, (response) => {
    if (response.success) {
        ProfileWidget.showProfile(response.data);
    }
    moneyManager.setMessage(response.success, response.success ? 'Счёт пополнен' : response.error);
});
    // конвертирование валюты:
moneyManager.conversionMoneyCallback = (data) => ApiConnector.convertMoney(data, (response) => {
    if (response.success) {
        ProfileWidget.showProfile(response.data);
    }
    moneyManager.setMessage(response.success, response.success ? 'Счёт пополнен' : response.error);
});


// Выход из личного кабинета
const homeExit = new LogoutButton();
homeExit.action = (data) => ApiConnector.logout((response) => {
    if (response.success) {
        clearInterval(exchangeRates.renewsIntervalID);
        location.reload();
    }});

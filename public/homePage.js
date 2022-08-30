"use strict";

// Личный кабинет пользователя

// Выход из личного кабинета
const homeExit = new LogoutButton();
homeExit.action = (data) => ApiConnector.logout((response) => response.success ? location.reload() : {});

// Получение информации о пользователе
ApiConnector.current((response) => response.success ? ProfileWidget.showProfile(response.data) : {});


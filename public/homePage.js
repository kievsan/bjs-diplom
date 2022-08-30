"use strict";

// Личный кабинет пользователя

const homeExit = new LogoutButton();
homeExit.action = (data) => {
    ApiConnector.logout((response) => {
        console.error(response);
        if (response.success) {
            location.reload();
        }
    })
}

ApiConnector.current((response) => response.success ? ProfileWidget.showProfile(response.data) : {});


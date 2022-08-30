"use strict";

const myServer = 'http://localhost:8000/';

const homeExit = new LogoutButton();
homeExit.action = (data) => {
    ApiConnector.logout((response) => {
        console.error(response);
        if (response.success) {
            location.reload();
        }
    })
}



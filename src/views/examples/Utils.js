let API_ADDRESS = 'https://notarius-api.herokuapp.com/api/register';

function getAddress(path) {
    //return 'https://notarius-api.herokuapp.com' + path;
    return 'http://localhost:8080' + path;
}


function register() {
    fetch(getAddress('/api/register'), {
        method: 'POST',
        body: JSON.stringify({
            "username": "admin",
            "password": "admin",
            "firstname": "Админ",
            "patronymic": "Админович",
            "lastname": "Админов",
            "role": "NOTARY"
        })
    })
        .then(data => data.json())
        .then(data => {
            console.log(data);
            auth();
        })
        .catch(data => {
            console.log(data);
        });
}

function auth() {
    console.log(" before")
    let formData = new FormData();
    formData.append('username', 'admin');
    formData.append('password', 'admin');

    return fetch(getAddress('/login'), {
        method: 'POST',
        "Content-Type": "multipart/form-data;boundary='",
        body: formData,
        credentials: "include"
    })
        .then(data => data.json())
        .then(data => {
            console.log(data);
        })
        .catch(data => {
            console.log(data);
        });
}

function claims() {
    fetch(getAddress('/api/status/success/ok'), {
        method: 'GET',
        credentials: "include"
    })
        .then(data => data.json())
        .then(data => {
            console.log(data);
        })
        .catch(data => {
            console.log(data);
        });
}

function initChat(title) {
    fetch(getAddress('/api/chat'), {
        method: 'POST',
        body: JSON.stringify({
            "title": title
        }),
        credentials: "include"
    })
        .then(data => data.json())
        .then(data => {
            console.log(data);

            fetch(getAddress(`/api/chat/${data.data.id}/message` ), {
                method: 'POST',
                body: JSON.stringify({
                    "text": "Сообщение 2"
                }),
                credentials: "include"
            })
                .then(mdata => console.log(mdata))
                .catch(mdata => console.log(mdata));

        })
        .catch(data => {
            console.log(data);
        });
}

function getMessages() {
    return fetch(getAddress('/api/chat/17/message'), {
        method: 'GET',
        credentials: "include"
    })
        .then(data => data.json())
        .then(data => data.data);
}

export default {
    auth, register, getAddress, claims,
    initChat, getMessages
};
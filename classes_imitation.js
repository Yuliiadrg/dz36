let accountName = document.querySelector(".name-input");
let role = document.querySelector(".status-input");

let loginButton = document.querySelector(".login");
let users = ["Oleg"];
let admins = ["Masha"];

class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
        this.loggedIn = false;
        if (this.role !== "admin" && this.role !== "user") {
            alert("Не коректно введена роль! Перевірте ввод ролі");
            return;
        }

    }

    getName() {
        return this.name;
    }

    getRole() {
        return this.role;
    }

    loginStatus() {
        this.loggedIn = true;
    }

    logoutStatus() {
        this.loggedIn = false;
    }

    changeName(newName) {
        this.name = newName;
    }
    changePassword(newPassword) {
        this.password = newPassword;
    }


}


class Admin extends User {
    constructor(name, role) {
        super(name, role);
    }

    addAdmin(name) {
        this.name = name;
        this.role = role;
        admins.push(name);
        alert(`Адмін: ${name} доданий`);

    }

    removeUser(name) {
        this.name = name;
        users.remove(name);
        alert(`Юзер: ${name} видалений`);

    }

    changeUserRole(newRole) {
        if (this.role !== "admin" || this.role !== "user") {
            alert("Не коректно введено роль! Перевірте ввод ролі");
            return;
        } else {
            this.role = newRole;
        }
    }

    getAllUSers() {
        console.log(users);
    }

    removeAllUsers() {
        users = [];
        alert("Список юзерів очищено");
    }
}

loginButton.addEventListener("click", function () {


    let accNameValue = accountName.value;
    let roleValue = role.value;

    console.log(accNameValue);
    console.log(roleValue);


    let form = new User(accNameValue, roleValue);

    function checRole() {
        if (role.value == "admin" && admins.includes(accountName.value)) {
            alert(`Вхід успішно виконано, Адміне!`);
        } else if (role.value == "user" && users.includes(accountName.value)) {
            alert(`Доброго дня ${accountName.value}!`);
        } else {
            alert("")
        }
    }
    checRole();
});

$(document).ready(function () { //form
    return $('.login').click(function (event) {
        if (true) {
        } else {
            return alert("Невірно введено ім'я або роль");
        }
    });
});
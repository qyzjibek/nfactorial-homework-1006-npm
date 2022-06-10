function setLightMode() {
    localStorage.setItem("mode", "light");
    document.body.className = 'light';
}

function setDarkMode() {
    localStorage.setItem("mode", "dark");
    document.body.className = 'dark';
}

function setMode() {
    let mode = localStorage.getItem("mode");
    document.body.className = mode;
}

function setCityCookie() {
    console.warn("i am here");
    document.cookie = "city=Almaty";
}

function setCountryCookie() {
    document.cookie = "country=KZ";
}

function deleteCityCookie() {
    console.warn("i am here");
    document.cookie = "city=";
}

function deleteCountryCookie() {
    document.cookie = "country=";
}

function setUserCookie() {
    console.log("Setting user cookie");
    const text = document.getElementById("user-input").value;
    let date = new Date();
    date.setDate(date.getDate() + 1);
    document.cookie = `user=${text};` + "; expires=" + date.toUTCString();

}
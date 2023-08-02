var settingMenu = document.querySelector('.setting-menu')
var darkbtn = document.getElementById("dark-btn")


function settingMenuToogle() {
    settingMenu.classList.toggle("setting-menu-height")
}

darkbtn.onclick = function() {
    darkbtn.classList.toggle("dark-btns-on");
    document.body.classList.toggle("dark-theme")

    if (localStorage.getItem("theme") == "dark") {
        localStorage.setItem("theme", "dark")
    }
    else {
        localStorage.getItem("theme", "light")
    }
}



if (localStorage.getItem("theme") == "light") {
    darkbtn.classList.remove("dark-btns-on");
    document.body.classList.remove("dark-theme")
}
else if (localStorage.getItem("theme") == "dark") {
    darkbtn.classList.add("dark-btns-on");
    document.body.classList.add("dark-theme")
}
else {
    localStorage.getItem("theme", "light")
}


// localStorage.setItem("theme", "dark");
// localStorage.getItem("theme")
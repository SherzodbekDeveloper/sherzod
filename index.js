
let typed = new Typed(".auto-type",{
    strings:["Front-end Developer", "Web Designer" , "Pro Video Editor"],
    typeSpeed:100,
    backSpeed:50,
    loop:true,
})

let menu = document.querySelector("#menu-bars")
let header = document.querySelector("header")

menu.onclick = () =>{
    menu.classList.toggle('bx-x')
    header.classList.toggle('active')
}

window.onscroll = () =>{
    menu.classList.remove('bx-x')
    header.classList.remove('active')
}

//bot token
var telegram_bot_id = "7298772287:AAFqF9GuuuAhrGQDP-WBCo0WZm2Bb4KOzaA";
//chat id
var chat_id = '@sherzodeveloperMessages';
var u_name, email, message;
var ready = function () {
   
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    message = "Name: " + u_name + "\nEmail: " + email + "\nMessage: " + message;
};
var sender = function () {
    ready();
    let p = document.getElementById('p')
    p.innerHTML = "Malumot Yuborildi✅"
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
};

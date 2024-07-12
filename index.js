
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
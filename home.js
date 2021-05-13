var nav_open = false

function navbar(){
    console.log(nav_open)
    if (nav_open){
        document.getElementById("navbar").style.animationName = "op"
        document.getElementsByTagName("header")[0].style.animationName = "oop"
        document.getElementsByTagName("svg")[0].style.opacity = 1
        nav_open = false
    }else{
        document.getElementById("navbar").style.animationName = "po"
        document.getElementsByTagName("header")[0].style.animationName = "poo"
        document.getElementsByTagName("svg")[0].style.opacity = 0
        nav_open = true
    }
}

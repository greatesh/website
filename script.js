document.getElementById("intro").style.backgroundImage = 'url("https://i.pinimg.com/originals/7f/89/42/7f89421f894717c5a59647627884d4ff.gif")'
document.getElementById("tagline").style.color = "white"

var nav_open = false

function navbar(){
    console.log(nav_open)
    if (nav_open){
        document.getElementById("navbar").style.animationName = "op"
        document.getElementsByTagName("header")[0].style.animationName = "oop"
        nav_open = false
    }else{
        document.getElementById("navbar").style.animationName = "po"
        document.getElementsByTagName("header")[0].style.animationName = "poo"
        nav_open = true
    }
}
if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.body.innerHTML = "<h1> mobiles not supported :/</h1>"
   }

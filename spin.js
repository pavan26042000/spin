function closeLoadingPage(){
    document.getElementById("Loadig").style.display="none"
}
function rotateWheel()
{
    var randomNum=Math.floor(Math.random()*360)
    document.getElementById("wheel").style.transition="rotate 10s"
    document.getElementById("wheel").style.rotate=randomNum*10+"deg"
}
const upIcon = document.querySelector(".yuxari-button")

window.onscroll = function(){
    if(document.body.scrollTop >20 || document.documentElement.scrollTop >20 ){
        upIcon.style.display = "block"
    }
    else{
        upIcon.style.display = "none"
    }

}

upIcon.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"

    })
    



})
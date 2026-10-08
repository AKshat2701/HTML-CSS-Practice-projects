var stats = document.querySelector("h5")
var btn = document.querySelector("#add")
let check = 0 ; 

btn.addEventListener("click", function () 
{
    if(check == 0 )
    {
        stats.innerHTML = "Friends" ;
        stats.style.color = "green" ;
        btn.innerHTML = "Remove Friend"
        check = 1 ;
    }
    else 
    {
        stats.innerHTML = "Stranger"
        stats.style.color = "red"
        btn.innerHTML = "Add Friend"
        check = 0 ; 
    }
})
const sideNavTogglers = document.getElementsByClassName('side-nav-toggle'); // Navbar toggle for mobile view
for (let y of sideNavTogglers){
    y.addEventListener("click", function(e){
        let target = e.currentTarget;
        
        let mainTarget = document.querySelector(`.side-nav`)
        mainTarget.classList.toggle("responsive");
        mainTarget.addEventListener("blur", function(e){
            let t = e.currentTarget;
            t.classList.remove("responsive");
        })
            
    })  
}
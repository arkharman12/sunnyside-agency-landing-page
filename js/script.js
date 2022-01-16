// Hamburger menu
const hamIcon = document.getElementById("ham-menu-icon");
const navOverlay = document.getElementById("nav-overlay");


hamIcon.addEventListener("click", function() {
    hamIcon.classList.toggle("active");
    
    if (hamIcon.classList.contains("active")) {
        navOverlay.style.display = "block";
        document.body.style.overflow = "hidden";
    } else {
        navOverlay.style.display = "none";
        document.body.style.overflow = "visible";
    }
    
    (function() {
        window.onresize = displayWindowSize;
        window.onload = displayWindowSize;
        
        function displayWindowSize() {
            let width = window.innerWidth;
            
            if (width >= 700) {
                hamIcon.classList.remove("active");
                navOverlay.style.display = "none";
                document.body.style.overflow = "visible";
            }
        }
    })();  
});

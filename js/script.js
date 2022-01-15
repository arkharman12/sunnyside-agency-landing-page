// Hamburger menu
const hamIcon = document.getElementById("ham-menu-icon");

hamIcon.addEventListener("click", function() {
    hamIcon.classList.toggle("active");

    if (hamIcon.classList.contains("active")) {
        document.getElementById("nav-overlay").style.display = "block";
        // document.body.style.position = "fixed";
        document.body.style.overflow = "hidden";
    } else {
        document.getElementById("nav-overlay").style.display = "none";
        document.body.style.position = "static";
    }

    (function() {
        window.onresize = displayWindowSize;
        window.onload = displayWindowSize;
        
        function displayWindowSize() {
            let myWidth = window.innerWidth;
            
            // if (myWidth >= 700) {
            //     document.getElementById("nav-overlay").style.display = "none";
            //     document.body.style.position = "static";
            // }
        }
    })();  
});

        // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
        window.onscroll = function() {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
                document.getElementById("navbar2").style.padding = "25px 10px";
                document.getElementById("logo").style.fontSize = "25px";
            } else {
                document.getElementById("navbar2").style.padding = "40px 10px";
                document.getElementById("logo").style.fontSize = "35px";
            }
        }
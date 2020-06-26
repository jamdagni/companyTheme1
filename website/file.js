window.onscroll = function() {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 0 ||
            document.documentElement.scrollTop >0)
        {
            document.getElementById("navlist")
                        .style.padding = "0px 50px";

            document.getElementById("feather")
                    .style.fontSize = "40px";
        }
        else {
            document.getElementById("navlist")
                        .style.padding = "60px 50px";

            document.getElementById("feather")
                        .style.fontSize = "80px";
        }
    }
    

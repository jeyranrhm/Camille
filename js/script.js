document.addEventListener("DOMContentLoaded", function () {



    // bottom_header
   
    // fixed navbar
    var fixednav = document.querySelector("fixednav");
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 100) {
            $('.fixednav').addClass('black');
        } else {
            $('.fixednav').removeClass('black');
        }
    })

    // navbar
    var mobile_button = document.querySelector(".mobile_button");
    var navbar = document.querySelector(".mobile_navbar");
    mobile_button.addEventListener("click", function () {
        navbar.classList.toggle("active");
    })

    // about
    var stylish = document.querySelectorAll(".services .row div");
    for (var stylis of stylish) {
        stylis.addEventListener("click", function () {
            for (var styl of stylish) {
                styl.classList.remove("active");
            }
            this.classList.add("active");
        })
    }
})


function openNav() {
    document.getElementById('sidenav').style.width = "250px";
}

function closeNav() {
    document.getElementById('sidenav').style.width = "0";
}
let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;
valueDisplays.forEach((valueDisplays) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function() {
        startValue += 1;
        valueDisplays.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});


window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


$(document).ready(function() {
    $(".read").click(function() {
        $(this).prev().toggle();
        if ($(this).text() == 'read less') {
            $(this).text('read more')
        } else {
            $(this).text('read less')

        }
    })
});
$(document).ready(function () {

    $(".test").on("click", function () {
        console.log("Hello")
    })

    // fix main menu to page on passing
    $('.main.menu').visibility({
        type: 'fixed'
    });
    $('.overlay').visibility({
        type: 'fixed',
        offset: 80
    });
    // lazy load images
    $('.image').visibility({
        type: 'image',
        transition: 'vertical flip in',
        duration: 500
    });
    // show dropdown on hover
    $('.main.menu  .ui.dropdown').dropdown({
        on: 'hover'
    });

    // Hitting the copy button copies your email address and related animations
    // ______________________________________________________________________________________________________

    function copyToClip(str) {
        function listener(e) {
            e.clipboardData.setData("text/html", str);
            e.clipboardData.setData("text/plain", str);
            e.preventDefault();
        }
        document.addEventListener("copy", listener);
        document.execCommand("copy");
        document.removeEventListener("copy", listener);
    };

    $(".myEmail").click(function () {
        // console.log($("#email").text());
        var email = "anet417@sbcglobal.net"
        console.log(email);
        copyToClip(email);

    })

    $(".myEmail").popup({
        popup: $('.custom.popup'),
        on: 'click'
    });
    // ______________________________________________________________________________________________________


});


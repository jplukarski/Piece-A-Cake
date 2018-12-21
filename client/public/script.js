$(document).ready(function () {


    // fix main menu to page on passing
    $('.main.menu').visibility({
        type: 'fixed'
    });
    $('.overlay').visibility({
        type: 'fixed',
        offset: 80
    });

    // show dropdown on hover
    $('.main.menu  .ui.dropdown').dropdown({
        on: 'hover'
    });

    // Fix jumping screen, need to find a better fix because this one is still jumpy but corrects it

    var mn = $('.stackable'),
        core = $('.band').eq(0),
        fix = core.attr('style') || '',
        bit, hdr;

    $(window).resize(function () {

        bit = mn.outerHeight();
        hdr = $('.top-container').outerHeight();
    })
        .resize().scroll(function () {

            if ($(this).scrollTop() > hdr) {
                core.css('margin-top', bit);
            } else {
                core.attr('style', fix);
            }
        })
        .on('load', function () {

            $(this).scroll();
        });
    // ______________________________________________________________________________________________________

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


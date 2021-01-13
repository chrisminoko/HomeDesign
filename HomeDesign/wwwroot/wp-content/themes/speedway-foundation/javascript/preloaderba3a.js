/*

window.addEventListener('pageshow', function(e) {
    if (e.persisted) {
        window.location.reload();
    }
}, false);

jQuery( document ).ready(function($) {
    Site.init();
});

var Site = {
    init: function() {
        var _ = this;
        _.buttons();
        _.show();
    },
    buttons: function() {
        $("a[href^='http://'],a[href^='https://'],a[href^='mailto:']").each(function() {
            /* type in conditions to say whether or not the page is part of the current site *//*
            if ($(this).attr('href').indexOf('gothamv2') <= 0 || $(this).attr('target') == "_blank") { ///////////////////////////////////////////////////// CHANGE BEFORE LAUNCH
                var nothing = true;
            } else {
                $(this).on('click', function(e) {
                    e.preventDefault();
                    var href = $(this).attr('href');
                    $('.preloader').fadeIn(function() {
                        window.location.href = href;
                    });
                });
            }
        });
    },
    show: function() {
        setTimeout(function() {
            $('body').addClass('loaded');
            $('.preloader').fadeOut(400);
        }, 200);
    }
}

*/

jQuery( document ).ready(function($) {

    $(".preloader").fadeOut(1000);

    $("a.internal").click(function(event){

        event.preventDefault();

        linkLocation = this.href;

        $(".preloader").fadeIn(300, redirectPage);

    });

    $(".header-menu a").not('.header .contact-button a').click(function(event){

        event.preventDefault();

        linkLocation = this.href;

        $(".preloader").fadeIn(300, redirectPage);

    });
});

function redirectPage() {

    window.location = linkLocation;

}
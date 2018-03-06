const toggleMenu = $('#toggle-menu');
const navMenu = $('#nav-menu');

toggleMenu.click(function(){
    const $this= $(this);
    let h;
    if(navMenu.is(':hidden')) {
        h = navMenu.show().height();
            navMenu.css('height', 0);

            navMenu.animate({'height': h}, 500, function(){
                $this.addClass('active');
            });
    } else {
        navMenu.animate({'height': 0}, 500, function(){
            $this.removeClass('active');
            navMenu.removeAttr('style').hide();
        });
    }
});

function initMobile() {

    $('body').addClass('is-mobile').removeClass('is-desktop');
    console.log("is-mobile");
}


function initDesktop() {
    $('body').addClass('is-desktop').removeClass('is-mobile');
    toggleMenu.removeClass('active');
    navMenu.removeAttr('style');
    console.log("is-desktop");
 }





ssm.addState({
    id: 'tablet',
    query: '(max-width: 768px)',
    onEnter: function(){
        initMobile();
    }
});

ssm.addState({
    id: 'desktop',
    query: '(min-width: 768px)',
    onEnter: function(){
        initDesktop();
    }
});


$('#slider').slick({
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    dotsClass: 'mydots'
});

$(function(){
    $('.minimized').click(function(event) {
        var i_path = $(this).attr('src');
        $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
        $('#magnify').css({
            left: ($(document).width() - $('#magnify').outerWidth())/2,

            top: ($(window).height() - $('#magnify').outerHeight())/2
        });
        $('#overlay, #magnify').fadeIn('fast');
    });

    $('body').on('click', '#close-popup, #overlay', function(event) {
        event.preventDefault();

        $('#overlay, #magnify').fadeOut('fast', function() {
            $('#close-popup, #magnify, #overlay').remove();
        });
    });
});









function l_image (a) {
    document.example_img.src=a;
}



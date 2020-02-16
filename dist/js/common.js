$(document).ready(function () {

    /* SLICK SLIDER */

    $('.team-section__gallery').slick({
        adaptiveHeight: true,
        autoplay: true,
        dots: true, 
    });
    $('.videos-section__gallery').slick({
        autoplay: true,
        dots: true,
        draggable: false,
        fade: true 
    });
    $('.merch-section__gallery').slick({
        autoplay: false,
        dots: true,
        draggable: false,
        slidesToShow: 2,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });

    /* SCROLL */

    const scroll = function(){
        $('.scroll-button').click(function(e){
            e.preventDefault();
            let elementOffset = $($(this).attr('data-scroll')).offset().top;
            $('html, body').animate({scrollTop : elementOffset} , 500);    
        });
    }

    /* SIDE MENU */

    const sideMenu = function(){
        let isOpened = false;
        $('.header__side-menu-btn').click(function(){
            $('.side-menu').removeClass('fade-out').css('display', 'block').addClass('fade-in');
            isOpened = true;
        });
        $('.side-menu__close').click(function(){
            $('.side-menu').removeClass('fade-in').addClass('fade-out');
            setTimeout(function(){
                $('.side-menu').css('display', 'none');
            },600);
            isOpened=false;
        });
        $(window).click(function(e){
            if(isOpened){
                if(e.target.closest('[class*="side-menu"]') == null){
                    e.preventDefault();
                    $('.side-menu').removeClass('fade-in').addClass('fade-out');
                setTimeout(function(){
                    $('.side-menu').css('display', 'none');
                },600);
                isOpened=false;
                } 
            }
        });
    }


/* POP-UP */

var popup = function(){
    var closeWindow = function(){
        $('.popup').css('display', 'none');
        $('body').css('overflow','auto');
    }
    $('.popup-btn').click(function(e){
        e.preventDefault();
        $($(this).attr('data-popup')).css('display', 'block');
        $('body').css('overflow','hidden');
    });
    $('.popup__close').click(closeWindow);
    $('.popup__sub').click(closeWindow);
}
/* ACORDION */

var faqAccordion = function(){
    var isOpened = false;
    $('.faq-section__item-head').click(function(){
            if($(this).find('.faq-section__item-btn').filter('.rotate-out').length == 0 && $(this).find('.faq-section__item-btn').filter('.rotate-in').length ==0){
                $(this).find('.faq-section__item-btn').addClass('rotate-in');
            }
            else{
                $(this).find('.faq-section__item-btn').toggleClass('rotate-out').toggleClass('rotate-in');
            }
        $(this).next().slideToggle(400, function(){
            if(!isOpened){
                isOpened=true;
            }
        }); 
    });
}

/* DROPDOWN */

var lyricsDropdown = function(){
    $("#dropdown-lyrics_winds").click(function(){
        $(this).next().slideToggle("slow")
    });
}

/* MASONRY GRID*/

$('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: 40,
    horizontalOrder: true
  });
faqAccordion();
popup();
sideMenu();
scroll();
lyricsDropdown();
});
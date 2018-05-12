$(function(){
    var $getLink = $('.navbar-nav>li>a')
    var $getNavCollapse = $('.navbar-collapse');

    function navHide(){
        $getNavCollapse.collapse('hide');
    }
    $getLink.on('click', navHide);


    var $myLogo = $('.my-logo');
    var $welcomeText = $('.header-text');
    var $pictureOfMe = $('.picture-of-me');

    $pictureOfMe.fadeIn();
    $welcomeText.animate({right: '0'}, 600);
    $myLogo.animate({left: '0'}, 700);

    // smooth scroll
    const $page = $('body, html');
    const $navbar = $('.navbar-nav');
    const $navLinks = $navbar.find('a');

    function scrollToSection() {
        const animationTime = 700;
        const anchor = $(this).attr('href');
        $(this)
            .parent()
            .addClass('active')
            .siblings()
            .removeClass('active');

        $page.animate({scrollTop: $(anchor).offset().top}, animationTime);
    }

$navLinks.on('click', scrollToSection);

});
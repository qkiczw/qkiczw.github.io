$(function(){
    const $getLink = $('.navbar-nav>li>a')
    const $getNavCollapse = $('.navbar-collapse');
    const $window = $(window)
    const $scrollToTopBtn = $('.scroll-to-top-btn');
    const $myLogo = $('.my-logo');
    const $welcomeText = $('.header-text');
    const $pictureOfMe = $('.picture-of-me');
    const $page = $('body, html');
    const $nav = $('.navbar');
    const $navbar = $('.navbar-nav');
    const $navLinks = $navbar.find('a');
    const $navbarMyBrand = $('.navbar-my-brand');
    const $navbarMyLogo = $('.navbar-my-logo');
    const $portfolioRow1 = $('.portfolio-row-1');
    const $portfolioRow2 = $('.portfolio-row-2');
    const $portfolioRow3 = $('.portfolio-row-3');
    const $achievementsIcons = $('.achievements-icons');
    const $portfolioRowTitleWww = $('.portfolio-row-title-www');
    const $portfolioRowTitleSmallProjects = $('.portfolio-row-title-small-projects');

    function checkPos() {
        console.log('Ypos', $window.scrollTop())
    };

    function navHide(){
        $getNavCollapse.collapse('hide');
    }
    $getLink.on('click', navHide);

    $pictureOfMe.fadeIn();
    $welcomeText.animate({right: '0'}, 600);
    $myLogo.animate({left: '0'}, 700);

    function scrollToSection() {
        const animationTime = 700;
        const anchor = $(this).attr('href');
        console.log(anchor)
        $(this)
            .parent()
            .addClass('active')
            .siblings()
            .removeClass('active');
        $page.animate({scrollTop: $(anchor).offset().top}, animationTime);
    }

function showPortfolioRow() {
    if($window.scrollTop() > 1400){
        $portfolioRowTitleWww.css({'opacity':'1', 'transform': 'translateY(0)'});
    }
    if($window.scrollTop() > 1450){
        $portfolioRow1.css({'opacity':'1', 'transform': 'translateY(0)'});
    } 
    if($window.scrollTop() > 2650){
        $portfolioRowTitleSmallProjects.css({'opacity':'1', 'transform': 'translateY(0)'});
    }
    if($window.scrollTop() > 2700){
        $portfolioRow2.css({'opacity':'1', 'transform': 'translateY(0)'});
    }
};

function changeMyBrandToLogo() {
    if($window.scrollTop() > 200){
        $navbarMyBrand.css('display', 'none');
        $navbarMyLogo.css('display', 'block');
    }
    else{
        $navbarMyLogo.css('display', 'none');
        $navbarMyBrand.css('display', 'block');
    }
};

function toggleScrollToTopVisibility() {
    if($(this).scrollTop() > 500) {
        $scrollToTopBtn.fadeIn(750);
    }else {
        $scrollToTopBtn.fadeOut();
    }
};

function scrollMeToTop() {
    $page.animate({scrollTop: 0}, 0);
}

function achievementsIconsAnimation() {
    if($window.scrollTop() > 700) {
        $achievementsIcons.css({'opacity':'1', 'transform': 'translateY(0)'});
    }
}

function showDarkNaw() {
    // if($window.scrollTop() > 200){
    //     $nav.addClass('bg-dark');
    // }
    $window.scrollTop() > 200 ? $nav.addClass(' nav-shadow') : $nav.removeClass('nav-shadow');
}

// $navLinks.on('click', scrollToSection);
$window.on('scroll', changeMyBrandToLogo);
$window.on('scroll', showPortfolioRow);
$window.on('scroll', checkPos);
$window.on('scroll', toggleScrollToTopVisibility);
$window.on('scroll', achievementsIconsAnimation);
$window.on('scroll', showDarkNaw);
$scrollToTopBtn.on('click', scrollMeToTop);
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
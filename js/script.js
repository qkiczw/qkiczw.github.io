$(function(){
    const $getLink = $('.navbar-nav>li>a')
    const $getNavCollapse = $('.navbar-collapse');
    const $window = $(window)

    function navHide(){
        $getNavCollapse.collapse('hide');
    }
    $getLink.on('click', navHide);


    const $myLogo = $('.my-logo');
    const $welcomeText = $('.header-text');
    const $pictureOfMe = $('.picture-of-me');

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
        console.log(anchor)
        $(this)
            .parent()
            .addClass('active')
            .siblings()
            .removeClass('active');

        $page.animate({scrollTop: $(anchor).offset().top}, animationTime);
    }

$navLinks.on('click', scrollToSection);

const $navbarMyBrand = $('.navbar-my-brand');
const $navbarMyLogo = $('.navbar-my-logo');
const $portfolioRow1 = $('.portfolio-row-1');
const $portfolioRow2 = $('.portfolio-row-2');
const $portfolioRow3 = $('.portfolio-row-3');

function showPortfolioRow() {
    if($window.scrollTop() > 1100){
        $portfolioRow1.css('opacity', '1')
    } 
    if($window.scrollTop() > 1500){
        $portfolioRow2.css('opacity', '1')
    }
    if($window.scrollTop() > 2000){
        $portfolioRow3.css('opacity', '1')
    }
}

function checkPos() {
    console.log('Ypos', $window.scrollTop())
}

function changeMyBrandToLogo() {
    if($window.scrollTop() > 400){
        $navbarMyBrand.css('display', 'none');
        $navbarMyLogo.css('display', 'block');
    }
    else{
        $navbarMyLogo.css('display', 'none');
        $navbarMyBrand.css('display', 'block');
    }
}

$window.on('scroll', changeMyBrandToLogo)
$window.on('scroll', showPortfolioRow)
$window.on('scroll', checkPos)

});
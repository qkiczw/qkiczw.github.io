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



});
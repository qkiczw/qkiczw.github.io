$(document).ready(function(){
    var $getLink = $('.navbar-nav>li>a')
    var $getNavCollapse = $('.navbar-collapse');

    function navHide(){
        $getNavCollapse.collapse('hide');
    }
    $getLink.on('click', navHide);
});
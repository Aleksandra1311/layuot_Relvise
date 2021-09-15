$(document).ready(function () {
    $('.header__burger').click(function (e) {
        $('.header__burger').toggleClass('active');
        $('.header__menu').toggleClass('active');
        $('body').toggleClass('lock'); /*При открытом бургере скрол заблокирован*/
    });
    
})
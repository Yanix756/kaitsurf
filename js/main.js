$(function(){

    $('.popup__link-1').on('click', function(){
        $('.popup__contacts').toggleClass('popup__contacts--active');
    });

    $('.popup__contacts-btn').on('click', function(){
        $('.popup__contacts').removeClass('popup__contacts--active');
    });

    $('.popup__link-2').on('click', function(){
        $('.popup__form').toggleClass('popup__form--active');
    });
    $('.popup__forms-btn').on('click', function(){
        $('.popup__form').removeClass('popup__form--active');
    });

    $('.menu__btn').on('click', function(){
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.menu').toggleClass('menu--active');
    });

  
});
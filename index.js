// slader at the top of the page
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    center: true,
    nav: true,
    navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
    dots: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
});

// fixed header
window.onscroll = function showHeader() {
    var nav = document.querySelector('.nav');
    var scrollHeight = document.getElementsByTagName('header')[0].clientHeight + nav.clientHeight;
    // if don't neet to fixed header on mobiles or tablets && (window.innerWidth>550))
    if ((window.pageYOffset > scrollHeight) )  { 
        nav.classList.add('navigation__fixed');
    } else {
        nav.classList.remove('navigation__fixed');
    }
}
//burger animation
$(document).ready(function(){
    var link = $('.menu__link');
    var link_active = $('.menu__link--active');
    var navbar = $('.main__menu');
    link.click(function(){
        link.toggleClass('menu__link--active');
        navbar.toggleClass('menu--active');
    });
    link_active.click(function(){
        link.removeClass('menu__link--active');
        navbar.removeClass('menu--active');
    });
})
// подменю для больших экранов
$(document).ready(function(){
    var submenu = $('.submenu');
    var menu = $('.menu');    
    menu.hover(function(){
        submenu.toggleClass('submenu--active');
    }, function(){
        submenu.mouseleave(function(){
            $(this).removeClass('submenu--active');
        })    
    });
})
// показать ещё новости
$(document).ready(function(){
    var news = $('.news__more')
    var addnews = $('.newsblock__item--add');
    news.click(function(){
        console.log(addnews);
        addnews.removeClass('newsblock__item--add');
    });
})

//валидация
$(document).ready(function(){
    $('.form').submit(function(e){
        e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var comment = $('#comment').val();
    $('.error').remove();
    console.log(name.length);
    if (name.length < 1){
        $('#name').before('<span class="error">Заполните поле</span>');
        $('#name').toggleClass('form-error');
    } 
    if (email.length < 1){
        $('#email').before('<span class="error">Заполните поле</span>');
        $('#email').toggleClass('form-error');
    } 
    if (comment.length < 1){
        $('#comment').before('<span class="error">Заполните поле</span>');
        $('#comment').toggleClass('form-error');
    } 
    if(name.length + email.length + comment.length > 3){
        $('.form').remove();
        $('.form__title').remove();
        $('.submit__done--not').removeClass('submit__done--not');

    }
    })
})


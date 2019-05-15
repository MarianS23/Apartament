//const clockContainer = document.querySelector('.clock');
//setInterval( () => clockContainer.innerText = (new Date()).toLocaleTimeString(), 1000);

//const dateContainer = document.querySelector('.calendar');
//setInterval( () => dateContainer.innerText = (new Date()).toLocaleDateString(), 1000);
 
 
/*const productList = new ProductList(
  'products.json',
  $('.products-container'),
  
);*/


// const ukLang = document.documentElement.lang('uk');
// const engLang = document.documentElement.lang('eng');

// if(document.documentElement.lang === ukLang){
//   $('body').append('<a href="#" id="go-top" title="Вверх">Вверх</a>');
// } else {
//   $('body').append('<a href="#" id="go-top" title="Up">Up</a>');
  
// }








$(document).ready(function() {
  $('body').append('<a href="#" id="go-top" title="Вверх">Вверх</a>');
});

$(function() {
  $.fn.scrollToTop = function() {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
    var scrollDiv = $(this);
    $(window).scroll(function() {
      if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
      else $(scrollDiv).fadeIn("slow")
    });
    $(this).click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow")
    })
  }
});

$(function() {
  $("#go-top").scrollToTop();
});






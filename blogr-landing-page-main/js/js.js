$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger, .menu__list').toggleClass('active');
  });
});

// $(document).ready(function(){
//  $('.menu__link').click(function(event){
//    $('.sub-menu__list').not(this).removeClass('active')
//    $('.sub-menu__list').toggleClass('active')
//      });
//   });
$(document).ready(function(){
  $('.products').click(function(event){
    $('.products').toggleClass('active')
    $('.connect, .company').removeClass('active');

  });

});
$(document).ready(function(){
  $('.connect').click(function(event){
    $('.connect').toggleClass('active')
    $('.products, .company').removeClass('active');
  });

});
$(document).ready(function(){
  $('.company').click(function(event){
    $('.company').toggleClass('active'),
    $('.connect, .products').removeClass('active');
  });

});

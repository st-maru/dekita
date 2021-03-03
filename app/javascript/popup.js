$(document).on('turbolinks:load', function() {
  $('.login').on('click',function(){
    $('.login-popup').addClass('show').fadeIn();
  });

  $('#login-close').on('click',function(){
    $('.login-popup').fadeOut();
  });

  $('.account').on('click',function(){
    $('.account-popup').addClass('show').fadeIn();
  });

  $('#account-close').on('click',function(){
    $('.account-popup').fadeOut();
  });
});
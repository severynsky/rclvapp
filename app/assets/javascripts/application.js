//
//
//
//= require jquery
//= require jquery_ujs
//= require angular
//= require angular-route
//= require angular-resource
//= require angular-sanitize
//= require angular-rails-templates
//= require bootstrap-sprockets
//= require ckeditor/init
//= require_tree ./angular
//= require_tree ./angular/controllers
//= require_tree .


console.log('hello app')

$initialFunction = function(){
  $('.right').fadeIn(900);
  $('.left').animate({
    marginLeft: 0
  }, 700, "linear");

    $( window ).resize(function() {

    });
};

$(document).ready(function(){
  if ( $('#ckeditor').length ) 
    CKEDITOR.replace( 'ckeditor' );
  if ( $('#ckeditor').prev('label').length ) 
    $('#ckeditor').prev('label').css('float','none');
});
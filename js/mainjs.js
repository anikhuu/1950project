//Carson Bain + Anita Khuu COMP1950 Project

$(document).ready(function(){
//mobile nav function
  $("#mobile-nav").hide();
  $(".mob-second-drop").hide();
  $("#mob-nav-icon").click(function(){
	$("#mobile-nav").slideToggle('fast');
	});
  $(".parent-cat").click(function(){
    $(".mob-second-drop").slideToggle('fast');
    });
//hide header and slide main container up for more presenting area
    $(".hide-header").click(function() {
      $(".head-wrap").hide();
      $('.main-container').animate({marginTop: '30px'}, 1200);
    });

});

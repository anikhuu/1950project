//Carson Bain + Anita Khuu COMP1950 Project

$(document).ready(function(){
//mobile nav function
  $("#mobile-nav").hide();
  $(".mob-second-drop").hide();
  $("#mob-nav-icon").click(function(){
	$("#mobile-nav").slideToggle('fast');
	});
  $(".parent-cat.one").click(function(){
    $(".mob-second-drop.one").slideToggle('fast');
    });
    $(".parent-cat.two").click(function(){
      $(".mob-second-drop.two").slideToggle('fast');
      });
//hide header and slide main container up for more presenting area
    $(".hide-header").click(function() {
      $(".hide-header").addClass("disabled");
      $(".head-wrap").slideUp("slow");
      $('.main-container').animate({marginTop: '30px'}, "slow");
      $(".show-header").removeClass("disabled");
    });
    //show header and slide main container down for less presenting area
        $(".show-header").click(function() {
          $('.main-container').animate({marginTop: '175px'}, "slow");
          $(".head-wrap").slideDown("slow");
          $(".show-header").addClass("disabled");
          $(".hide-header").removeClass("disabled");

        });
});

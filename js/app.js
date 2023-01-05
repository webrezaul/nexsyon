SmoothScroll({
  frameRate: 500,
  animationTime: 500,
  stepSize: 100,
  pulseAlgorithm: 1,
  pulseScale: 4,
  pulseNormalize: 1,
  accelerationDelta: 50,
  accelerationMax: 3,
  keyboardSupport: 1,
  arrowScroll: 50,
  fixedBackground: 1
});



/*  SCROLL TO THE TOP */
var btn = $('#btn-scroll');
$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
});


btn.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, '300');
});

/*--------------------- Fade Animation Time ----------------------*/
AOS.init({
	duration: 1000,
});

/*--------------------- PRELOADER ----------------------*/

$(window).load(function() {
  $(".loader-background").fadeOut(700);
});

    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('.nav').addClass('affix');
            console.log("OK");
        } else {
            $('.nav').removeClass('affix');
        }
});


/*--------------------- SWITCH NAVBER ----------------------*/

$('.navTrigger').click(function() {
	$(this).toggleClass('active');
	console.log("Clicked menu");
	$("#mainListDiv").toggleClass("show_list");
	$("#banner").toggleClass("show-content");
  $("#show-nav").toggleClass("show-navbar");
  
	$("#mainListDiv").fadeIn();
});





  var Helyptic_First_Service = $('.service-1').offset().top; 
  var Helyptic_Last_Service = $('.service-5').offset().top;   
 
  $(window).scroll(function(e){ 
   var $each_service_text = $('.each-service-text'); 
   if ($(this).scrollTop() > Helyptic_First_Service && $(this).scrollTop() <= Helyptic_Last_Service){ 
      $each_service_text.css({'position': 'fixed'}); 
      
   }
   else{
     $each_service_text.css({'position': 'absolute'}); 
   } 
   });






 

  /** 
  var Helyptic_Second_Service = $('.service-1').offset().top; 

  $(window).scroll(function(e){ 
    var $whitee = $('.scroll-to-top'); 
    if ($(this).scrollTop() > Helyptic_Second_Service){ 
      $whitee.addClass('changetowhite'); 
    }

    });


    var Other_Service = $('.service-5').offset().top; 

    $(window).scroll(function(e){ 
      var $whitee = $('.scroll-to-top'); 
      if ($(this).scrollTop() > Other_Service){ 
        $whitee.removeClass('changetowhite'); 
       
      }
     
      });
*/

  

/* 
  if ($(window).height() >= 1080){
    $(window).scroll(function(e){ 
      var $el = $('.service-1-tablet'); 
      if ($(this).scrollTop() > 1990){ 
        $el.css({'background-attachment': 'fixed'}); 
      }
      if ($(this).scrollTop() <= 1990){
        $el.css({'background-attachment': 'unset'}); 
      } 
      });
  }
  else{
    theheight = $(window).innerHeight();
    average = 1990 - theheight; 
    

    average = average + 840; 
    console.log(average)
    $(window).scroll(function(e){ 
      var $el = $('.service-1-tablet'); 
      if ($(this).scrollTop() > average){ 
        $el.css({'background-attachment': 'fixed'}); 
      }
      if ($(this).scrollTop() <= average){
        $el.css({'background-attachment': 'unset'}); 
      } 
      });
  }

  */





/** 
var serviceOne = $('.service-1').offset().top; 
$(window).scroll(function(){ 
  
  var $dsds = $(window).scrollTop();

    $('.service-heading-1').css("opacity", 1 - $(window).scrollTop() / 250);

});
*/





  var Helyptic_First_Service1 = $('.service-1').offset().top; 
  var Helyptic_Last_Service1 = $('.service-2').offset().top;   
  var diff = Helyptic_Last_Service1 - Helyptic_First_Service1;
  var difff =  diff / 2;

  $(window).scroll(function(e){ 
   var $each_service_text = $('.each-service-text'); 
   if ($(this).scrollTop() > Helyptic_First_Service1+difff-100){ 
    $(".of-service-1").fadeOut();
   }
   else{
    $(".of-service-1").fadeIn();
   } 
   });


   var Helyptic_First_Service2 = $('.service-2').offset().top; 
   var Helyptic_Last_Service2 = $('.service-3').offset().top;   
   var diff2 = Helyptic_Last_Service2 - Helyptic_First_Service2;
   var difference2 =  diff2 / 2;
 
   $(window).scroll(function(e){ 
    var $each_service_text = $('.each-service-text'); 
    if ($(this).scrollTop() > Helyptic_First_Service2+difference2-100){ 
     $(".of-service-2").fadeOut();
    }
    else{
     $(".of-service-2").fadeIn();
    } 
    });


    var Helyptic_First_Service3 = $('.service-3').offset().top; 
    var Helyptic_Last_Service3 = $('.service-4').offset().top;   
    var diff3 = Helyptic_Last_Service3 - Helyptic_First_Service3;
    var difference3 =  diff3 / 2;
  
    $(window).scroll(function(e){ 
     var $each_service_text = $('.each-service-text'); 
     if ($(this).scrollTop() > Helyptic_First_Service3+difference3-100){ 
      $(".of-service-3").fadeOut();
     }
     else{
      $(".of-service-3").fadeIn();
     } 
     });


     var Helyptic_First_Service4 = $('.service-4').offset().top; 
     var Helyptic_Last_Service4 = $('.service-5').offset().top;   
     var diff4 = Helyptic_Last_Service4 - Helyptic_First_Service4;
     var difference4 =  diff4 / 2;
   
     $(window).scroll(function(e){ 
      var $each_service_text = $('.each-service-text'); 
      if ($(this).scrollTop() > Helyptic_First_Service4+difference4-100){ 
       $(".of-service-4").fadeOut();
      }
      else{
       $(".of-service-4").fadeIn();
      } 
      });


/*--------------------- SLIDER ----------------------*/

/*--------------------- FIRST INPUT FOCUS ---------------------
$(document).ready(function() {
  $('form:first *:input[type!=hidden]:first').focus();
});*/



  var Helyptic__Service1 = $('.service-1').offset().top; 
  var Helyptic__Service2 = $('.service-2').offset().top;  
  var Helyptic__Service3 = $('.service-3').offset().top;  
  var Helyptic__Service4 = $('.service-4').offset().top;  
  var Helyptic__Service5 = $('.service-5').offset().top;   



  var diffrence = Helyptic__Service2 - Helyptic__Service1;
  var difference__s =  (diffrence / 2);

  $(window).scroll(function(e){ 
    if ($(this).scrollTop() < Helyptic__Service1+difference__s){ 
        $("#change").attr("href", "./redline-project.html"); 
    }
    else if($(this).scrollTop() > Helyptic__Service1+difference__s && $(this).scrollTop() < Helyptic__Service2+difference__s){
       $("#change").attr("href", "./software-development.html"); 
    } 
    else if($(this).scrollTop() > Helyptic__Service2+difference__s && $(this).scrollTop() < Helyptic__Service3+difference__s){
      $("#change").attr("href", "./software-testing.html"); 
   } 
   else if($(this).scrollTop() > Helyptic__Service3+difference__s && $(this).scrollTop() < Helyptic__Service4+difference__s){
    $("#change").attr("href", "./AUTOSAR-tools.html"); 
  } 
  else{
    $("#change").attr("href", "./test-automation.html"); 
  }

  });

 
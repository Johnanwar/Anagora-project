/* global , $ , console */

$(function(){
	
		/* start  loading section */ 
	
    $(".loading").fadeOut(1000 , function(){ $("body").css("overflow","auto") });
	  
	
		/* END  loading section */ 
	$(".navbar-toggler-icon i").click(function(){
		console.log("nm")
		$(".nav-link").css("background-color" , "grey" )
	})
	
//  $('#Home').height($(window).height());
//        $(window).resize(function(){
// 	  $('#Home').height($(window).height())
//                                 });
	
 $(window).scroll(function(){
	    if($(window).scrollTop()>5){
		$(".navbar").addClass("fixed"); }
		else $(".navbar").removeClass("fixed"); });
		
		
	
	             $(".nav-item a").click(function() { $(this).addClass("activee").parent().siblings().find("a").removeClass("activee")});
	
				 $(".nav-item a").click(function (e){
                 e.preventDefault();                     
                 $("html , body").animate({ scrollTop:$("#" + $(this).data("value")).offset().top -30 },1000)  });  
     			 
	
	             $(".contact-us button").click(function (){                     
                 $("html , body").animate({ scrollTop:$("#" + $(this).data("value")).offset().top },1000)  });
	
				 $(".wheal i").click(function(){$("html , body").animate({ scrollTop:$($("#About")).offset().top -30 },1000)  });
	
	             $(".scroll-top").click(function(){ $("html , body").animate({ scrollTop:0 },1000)   });
	            $(".home-content .btn-main").click(function(){ $("html , body").animate({scrollTop:$($("#About")).offset().top -30},1000) });
	            $(".home-content .btn-2").click(function(){$("html , body").animate({scrollTop: $($("#Projects")).offset().top -30 },1000) });
	 /* end home and naaaaaaaav  */
	
   /* chose your color   */
	
			$(".alwan li").click(function(){
			$(":root").css("--maincolor" , $(this).data("color"))  });
		                                    
	        $(".alwan i").click(function(){
	     	$(".alwan").toggleClass("appear");
	
	
	     if($(".alwan").hasClass('appear')){
		console.log("vbnm")
		$(".alwan").animate({left:0},500) }
		 
		 else {$(".alwan").animate({left :'-300px'},500)};
	
		});

	
    /* chose your color  */
	
	
  /*  START  TYPE . JS  */
	
new TypeIt('.dream', {
  strings: ["DREAM", "SUCSESS"],
  speed: 300,
  breakLines: false,
  waitUntilVisible: true,
 loop: true,

}).go();

	/*  END  TYPE . JS  */
	  /* MIX IT UP SLIDER */ 
	
var mixer = mixitup(container);
mixer.filter('all');
var containerEl = document.querySelector('.container');
var mixer = mixitup(containerEl , {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }  });
	$(".project-header li").click(function(){
		$(this).addClass('activ').siblings().removeClass('activ')
	});
	
/* END  MIX IT UP SLIDER  */
	
	/* END  owlCarousel  */
	
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
	animateOut: 'fadeIt',
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
})
	/* END  owlCarousel */ 
	
	
	/* start  project section */ 
	  $(".exit").click(function(){
		  $("#project-3").fadeOut(500 ,function(){$("html , body").animate({scrollTop: $($("#Projects")).offset().top-30 },1000) })
		  $("#project-2").fadeOut(500 ,function(){$("html , body").animate({scrollTop: $($("#Projects")).offset().top-30 },1000) })
		  $("#project").fadeOut(500 , function(){$("html , body").animate({scrollTop: $($("#Projects")).offset().top  -30 },1000) }) });
	
	
	
	  $(".Branding").click(function(){
		  $("#project-3").fadeOut();
		  $("#project-2").fadeOut();
		  $("#project").fadeIn( 800 , function(){
		  $("html , body").animate({scrollTop: $($("#Projects")).offset().top+850 },500) }  
														     )});
	
	
	  $(".Photography").click(function(){
		  $("#project").fadeOut();
		  $("#project-2").fadeOut();
		  $("#project-3").fadeIn( 800 , 
	  function(){$("html , body").animate({scrollTop: $($("#Projects")).offset().top+850 },1000) } 												
															  )});
	
	  $(".Web-Design").click(function(){
		  $("#project-3").fadeOut();
		  $("#project").fadeOut();
		  $("#project-2").fadeIn( 800 ,
	  function(){$("html , body").animate({scrollTop: $($("#Projects")).offset().top+850 },1000) } 												                                                          )});
	
	/* END  project section */ 


	        
            /*Counter*/
			$(window).scroll(function(){
				if($(window).scrollTop()>=$("#clients").offset().top-200)
					{
						$('.data').each(function(){
						$(this).prop('Counter',0).animate({
						Counter:$(this).attr("data-count")
						},{
						duration:5000,
						easing: 'swing',
						step: function(now){
						$(this).text(Math.ceil(now))
					}
				})
			})  
					} 
			})
	


  
	
  
    
});




$(document).ready(function(){	

	// fancybox
	$('.fancybox').fancybox();
	$('.black-fancy').fancybox({
		tpl: {
				wrap     : '<div class="fancybox-wrap fancybox-black" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>'
			},
	});
	$('.blue-fancy').fancybox({
		afterLoad: function () {
			$(".fancybox-overlay").addClass("fancybox-blue");
		}
	});
	// Radio
	$(".radio, .check").uniform();
	
	
	// mobile nav
	$(document).on('click','.nav-icon',function(e){
		e.preventDefault();
		if($(this).hasClass('active')){
			$('.header-links').hide();
			$(this).removeClass('active');
		}else{
			$('.header-links').show();
			$(this).addClass('active');
		}
	});
	if($(window).width() < 1023){
		$(document).mouseup(function (e){
			var container = $('.header-links, .nav-icon');
			if (!container.is(e.target) // if the target of the click isn't the container...
				&& container.has(e.target).length === 0) // ... nor a descendant of the container
			{
				$('.header-links').hide();
				$('.nav-icon').removeClass('active');
			}
		});
	}
	$(window).resize(function(){
		if($(window).width() < 1023){
			$(document).mouseup(function (e){
				var container = $('.header-links, .nav-icon');
				if (!container.is(e.target) // if the target of the click isn't the container...
					&& container.has(e.target).length === 0) // ... nor a descendant of the container
				{
					$('.header-links').hide();
					$('.nav-icon').removeClass('active');
				}
			});
		}
	});
	
	
	// nav hidden
	$(document).on('click','.header-link-about',function(e){
		e.preventDefault();
		if($(this).hasClass('active')){
			$('.header-about-hidden').slideUp();
			$(this).removeClass('active');
		}else{
			$('.header-about-hidden').slideDown();
			$(this).addClass('active');
		}
	});
	
	// menu hidden
	$(document).on('click','.menu-top',function(e){
		e.preventDefault();
		if($(this).hasClass('active')){
			$(this).next('.menu-hidden').slideUp();
			$(this).removeClass('active');
		}else{
			$('.menu-hidden').slideUp();
			$('.menu-top').removeClass('active');
			$(this).next('.menu-hidden').slideDown();
			$(this).addClass('active');
		}
	});
	// popup pay method
	$(document).on('click','.pay-item',function(e){
		$('.pay-item').removeClass('active');
		$(this).addClass('active');
	});
	// big camera switch
	$(document).on('click','.main-camera-link',function(e){
		e.preventDefault();
		$('.main-camera-link').removeClass('active');
		$(this).addClass('active');
	});
	$(document).on('click','.main-camera-online, .main-camera-record',function(e){
		e.preventDefault();
		$('.main-camera-online, .main-camera-record').removeClass('active');
		$(this).addClass('active');
	});
	
	// sliders	
	$('.interior-slider .owl-carousel').owlCarousel({
		loop: true,
		items:1,
		nav: true,
		dots: false,
		//autoHeight : true,
		navText: [''],
		autoplay: true	
	});
	
	// scroll to top	
	$(document).on('click','.fixed-scroll-top',function(e){
		var selected = $('body, html');
		$.scrollTo(selected, 1000);
		return false;
	});
	
	
	
	
});	

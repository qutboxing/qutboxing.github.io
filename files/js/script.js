$(document).ready(function (){
	$('.slider').slick({
	  centerPadding: '60px',
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: false,
	  // autoplay: true,
	  autoplaySpeed: 4000,
	  dots: true
	});
	setFooterHeight();
});

function setFooterHeight(){
	$('.fixed_spacer').css('height', $('footer').outerHeight() + 'px');
	if($(document).scrollTop() > 100){
		$('footer').css('z-index', '-1');
	}
	else {
		$('footer').css('z-index', '-2');
	}
	$(window).scroll(function(){
		if($(document).scrollTop() > 100){
			$('footer').css('z-index', '1');
		}
		else {
			$('footer').css('z-index', '-2');
		}
	});
}
function centerSlider(){
	var currentSlide = $('.slider').slick('slickCurrentSlide');
    currentSlide = $('.slider').slick('slickGoTo', currentSlide + 1);
}

//Handle resizes by dynamically changes elements
$(window).resize(function (){
	centerSlider();
    setFooterHeight();
});
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
	setCopyrightYear();
});

function setCopyrightYear(){
	var theDate = new Date(); 
 	$(".year").text(theDate.getFullYear());
}
function setFooterHeight(){
	$('.fixed_spacer').css('height', $('footer').outerHeight() + 'px');
	if($(document).scrollTop() > 100){
		$('footer').css('z-index', '1');
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

//Handle resizes by dynamically changes elements
$(window).resize(function (){
	setTimeout(function(){
		if($(window).width() < 991){
			$('.slider')[0].slick.refresh();
		}
	}, 100);
    setFooterHeight();
});
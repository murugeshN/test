//- Sticky Header
$(function(){
	$(window).scroll(function() {
		if ( $(window).scrollTop() >= 100 ) {
			$('#site-header').addClass('sticky-header');
		} else {
			$('#site-header').removeClass('sticky-header');
		}
	});
});

//- Mobile menu
function toggleMenu(){ 
	var bodyElement = document.body;
	if(bodyElement.className == 'null' || bodyElement.className =='showSideBar'){
		bodyElement.className = 'hideSideBar';
		document.getElementById('faded-bg').style.display = 'none';
	}else {
		bodyElement.className = 'showSideBar';
		document.getElementById('faded-bg').style.display = 'block';
	}
}
$(document).ready(function(){
	$(".menu-icon").click(function() {
		$(this).toggleClass("active");
    });
    $('#faded-bg').click( function() {
		$('.menu-icon').removeClass("active");
    });
});

$(function(){
	$(".m-menu").click(function(){
		$(".menu-ddm").slideUp('medium');
		if($(this).next(".menu-ddm").css('display') === 'block') 
		{
			$(this).next(".menu-ddm").slideUp('medium');
		}
		else
		{
			$(this).next(".menu-ddm").slideDown('medium');
		}
	}); 
});


// lightbox
$(function(){
    $("[data-toggle-lightbox]").click(function(){
	    var popUpWindow = '#' + $(this).attr('data-toggle-lightbox');
	    $(popUpWindow).show();
	    $('body').addClass('lightbox-open');
	});
    $('.light-box-bg, .close-light-box').click(function(){
	    $('body').removeClass('lightbox-open');
	    $('.light-box-overlay').hide();
	});
});



// Scroll to top
$("[data-scrolltop]").click(function() {
	var targetId= $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(targetId).offset().top
    }, 1000);
});

$(function(){
	var $windowHeight = $(window).height();
    var $backToTop = $('.back-to-top');
	$(window).scroll(function() {
		if ( $(window).scrollTop() >= $windowHeight ) {
			$('body').addClass('sticky-disclaimer--active');
		} else {
			$('body').removeClass('sticky-disclaimer--active');
		}
	});

	$backToTop.click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 700);
		return false;
	});

});


/* Chat Icon*/
$(document).ready(function(){
	$(".chat").click(function(){
		$(".chat-popup").slideToggle("slow");
	});
	$(".chat-popup-close").click(function(){
		$(".chat-popup").slideToggle("slow");
	});
});

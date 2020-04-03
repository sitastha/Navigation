$("#nav-icon1").click(function() {
	if($(this).hasClass('open')) {
		$(this).removeClass('open');
		$('.side-navigation').removeClass('side-navigation-left');
		$('.logo-toggle-holder').css('margin-left','0');
	} else {
		$(this).addClass('open');
		$('.side-navigation').addClass('side-navigation-left');
		$('.logo-toggle-holder').css('margin-left','-235px');
	}
});

$(window).scroll(function() {
	if($(window).scrollTop()>50){
		$('.navigation-menu-holder').addClass('navigation-menu-holder-top');
		$('.side-navigation').addClass('side-navigation-top');
		$('.mobile-navigation').addClass('mobile-navigation-top');
		$('.logo-toggle-holder').addClass('logo-toggle-holder-top');

	} else{
		$('.navigation-menu-holder').removeClass('navigation-menu-holder-top');
		$('.side-navigation').removeClass('side-navigation-top');
		$('.mobile-navigation').removeClass('mobile-navigation-top');
		$('.logo-toggle-holder').removeClass('logo-toggle-holder-top');
	}
});

$('.sign-up').mouseover(function() {
	$(this).addClass('sign-up-hover');
});

$('.sign-up').mouseleave(function() {
	$(this).removeClass('sign-up-hover');
});

$('.settings').mouseover(function() {
	$(this).addClass('settings-hover');
});

$('.settings').mouseleave(function() {
	$(this).removeClass('settings-hover');
})
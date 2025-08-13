//fix lista
$(window).scroll(function() {
	var height = $(window).scrollTop();

	if(height  > 139) {
		$( "#fixmenu" ).addClass("navbar-fixed-top");
		$( "#logo_fixed" ).addClass("logo_fixed");
	} else {
		$( "#fixmenu" ).removeClass("navbar-fixed-top");
		$( "#logo_fixed" ).removeClass("logo_fixed");
	}

});


$('.matches-owl').owlCarousel({
	loop:false,
	margin:0,
	nav:true,
	navText: ['',''],
	startPosition: 3,
	responsive:{
		0:{
			items:1,
			nav:true
		},
		600:{
			items:2,
			nav:true
		},
		1000:{
			items:3
		},
		1200:{
			items:4
		}
	}
});


$(document).ready(function() {
	if ($(window).width()>778) {
		jQuery('#nav-menu ul.nav li.dropdown').hover(function() {
			jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
		}, function() {
			jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
		});
	}

});





$(document).ready(function() {
	if ($(window).width()<977) {
	  $("#topstory-big").addClass("topstory-small");
	} else {
	  $("#topstory-big").removeClass("topstory-small");
	}

});





$(window).on('resize', function(){
	  var win = $(this); //this = window
	  if (win.width() < 977) {
		$("#topstory-big").addClass("topstory-small");
	  } else {
		$("#topstory-big").removeClass("topstory-small");
	  }
});

function homepageMatchesTabsHandler() {
    const links = document.querySelectorAll('.match-tab-buttons li');
    const tabs = document.querySelectorAll('.match-tab');

    if (!tabs.length || !links.length) return;

    links.forEach((filter) => {
        filter.addEventListener('click', function () {
            const linkId = filter.getAttribute('data-id');

            let current = document.querySelector(`.match-tab-buttons li.active`);
            current.className = current.className.replace('active', '');
            this.classList.add('active');

            tabs.forEach((tab) => {
                if (tab.getAttribute('id') == linkId) {
                    tab.style.display = 'block';
                    tab.animate([{ opacity: '0' }, { opacity: '1' }], {
                        duration: 400,
                    });
                } else {
                    tab.style.display = 'none';
                }
            });
        });
    });
};

homepageMatchesTabsHandler();
jQuery( document ).ready(function($) {



    
    //////////////////////////////////////////////////////////////////////////


    Cookies.set('whVisited', 'yes')
    
    
    //////////////////////////////////////////////////////////////////////////



    $.fancybox.defaults.loop = true;

	//$(document).foundation();



	/* SPLIT TEXT

	var tl = gsap.timeline(), 
	    mySplitText1 = new SplitText(".hero-image-subtitle h1", {type:"words,chars"}), 
	    chars = mySplitText1.chars; //an array of all the divs that wrap each character

	tl.from(chars, {duration: 1, opacity:0, scale:0, y:50, ease:"back", stagger: 0.05}, "+=0");

	*/

    // Set the pages up

    $('.contact-page-address br').replaceWith( " . " );

	
	
	//////////////////////////////////////////////////////////////////////////
	

	// Hash Link Activate
	
	window.onload = function() {
		if(location.hash) { $(location.hash).trigger('click'); }
	};
	
	 
	//////////////////////////////////////////////////////////////////////////
	
	
	// FANCYBOX

	$(".fancybox").fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
	
	 
	//////////////////////////////////////////////////////////////////////////
    
    
    // SCROLL TO ANCHOR

    $('.anchorLink').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top -115
	    }, 800);
	    return false;
	});

	function scrollToElement(ele) {
	    $(window).scrollTop(ele.offset().top).scrollLeft(ele.offset().left);
	}


	//////////////////////////////////////////////////////////////////////////


	// Hide Header on on scroll down

	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('header').outerHeight();

	$(window).scroll(function(){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);

	function hasScrolled() {
	    var st = $(this).scrollTop();
	    
	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta) {
	        return;
	    }
	    
	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        $('#header').removeClass('hw-on').removeClass('hw-crunch').removeClass('hw-top');
	        $('.mobile-menu-button').removeClass('mmb-down').addClass('mmb-up');

	        setTimeout(function() {
		        $( '#header' ).addClass('hw-off').removeClass('hw-trans');
		    }, 500);


	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $('#header').removeClass('hw-off').removeClass('hw-foot-on').addClass('hw-on').addClass('hw-crunch');
	        	$('.mobile-menu-button').addClass('mmb-up');
	        }
	    }
	    
	    lastScrollTop = st;
	}
	
	 
	 
	//////////////////////////////////////////////////////////////////////////


	/*

    $( '.mobile-menu-button' ).click(function() {
	
	    $( '.mobile-menu' ).toggleClass('mobile-menu-on');
	    $( '.hamburger' ).toggleClass('open');
	    $( '#contact' ).removeClass('contact-active');
	    $( '.mobile-menu-button' ).removeClass('mobile-menu-button-back');
	
	});

    */

    $( '.mmb-inner-off' ).click(function() {
    
        $( this ).removeClass('active');
        $( '.mmb-inner-on' ).addClass('active');
        $( '.mobile-menu' ).addClass('mobile-menu-on');
        $( '.hamburger' ).addClass('open');
        $( '.header-rescue' ).addClass('hr-back');

        var menuWrap = document.querySelector('#mobnav');
        var menuItems = menuWrap.querySelectorAll("li");
        gsap.timeline().to(menuItems, 0, {opacity:0, y:30})
        .staggerTo(menuItems, 0.8, {delay: 0.1, opacity:1, y:0, ease: Back.easeOut.config(1.7)}, 0.05);
    
    });

    $( '.mmb-inner-on' ).click(function() {
    
        $( this ).removeClass('active');
        $( '.mmb-inner-off' ).addClass('active');
        $( '.mobile-menu' ).removeClass('mobile-menu-on');
        $( '.hamburger' ).removeClass('open');
        $( '.header-rescue' ).removeClass('hr-back');
    
    });
	 
	 
	//////////////////////////////////////////////////////////////////////////


	// Waypoints



    // Header Scrolled Bottom

    $('.fullheight-fixer').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            $('.header').addClass('header-scrolled');
    
        }
    
    },{
      offset:'90%'
    });
    
    
    $('.fullheight-fixer').waypoint(function(direction) {
    
        if (direction === 'up') {
    
            $('.header').removeClass('header-scrolled');
    
        }
    
    },{
      offset:'90%'
    });



	
	// Fader
    
    $('.fader').waypoint(function(direction) {
    
        if (direction === 'down') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, y:30, scale:0.9});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('.fader').waypoint(function(direction) {
    
        if (direction === 'down') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, y:30, scale:0.9})
    		.to(this.element, 0.5, {delay: 0.3, opacity:1, y:0, scale:1});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('.fader').waypoint(function(direction) {
    
        if (direction === 'up') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, y:30, scale:0.9});
    
        }
    
    },{
      offset:'100%'
    });




    // H2
    
    $('h2').waypoint(function(direction) {
    
        if (direction === 'down') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, x:-30});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('h2').waypoint(function(direction) {
    
        if (direction === 'down') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, x:-30})
    		.to(this.element, 0.5, {delay: 0.3, opacity:1, x:0});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('h2').waypoint(function(direction) {
    
        if (direction === 'up') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, x:-30});
    
        }
    
    },{
      offset:'100%'
    });
    



    // H3
    
    $('h3').waypoint(function(direction) {
    
        if (direction === 'down') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, y:30});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('h3').waypoint(function(direction) {
    
        if (direction === 'down') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, y:30})
    		.to(this.element, 0.5, {delay: 0.3, opacity:1, y:0});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('h3').waypoint(function(direction) {
    
        if (direction === 'up') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, y:30});
    
        }
    
    },{
      offset:'100%'
    });




    // P
    
    $('p').waypoint(function(direction) {
    
        if (direction === 'down') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, y:30});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('p').waypoint(function(direction) {
    
        if (direction === 'down') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, y:30})
    		.to(this.element, 0.5, {delay: 0.3, opacity:1, y:0});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('p').waypoint(function(direction) {
    
        if (direction === 'up') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, y:30});
    
        }
    
    },{
      offset:'100%'
    });




    // Button
    
    $('a.button').waypoint(function(direction) {
    
        if (direction === 'down') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, y:30, scale:0.9});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('a.button').waypoint(function(direction) {
    
        if (direction === 'down') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, y:30, scale:0.9})
    		.to(this.element, 0.5, {delay: 0.3, opacity:10, y:0, scale:1});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('a.button').waypoint(function(direction) {
    
        if (direction === 'up') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, y:30, scale:0.9});
    
        }
    
    },{
      offset:'100%'
    });
    
    


    // .wp-block-button
    
    $('.wp-block-button').waypoint(function(direction) {
    
        if (direction === 'down') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, x:-30});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('.wp-block-button').waypoint(function(direction) {
    
        if (direction === 'down') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, x:-30})
    		.to(this.element, 0.5, {delay: 0.3, opacity:1, x:0});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('.wp-block-button').waypoint(function(direction) {
    
        if (direction === 'up') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, x:-30});
    
        }
    
    },{
      offset:'100%'
    });
    



    // Block Image
    
    $('.wp-block-image').waypoint(function(direction) {
    
        if (direction === 'down') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, x:-30});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('.wp-block-image').waypoint(function(direction) {
    
        if (direction === 'down') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, x:-30})
    		.to(this.element, 0.5, {delay: 0.3, opacity:1, x:0});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('.wp-block-image').waypoint(function(direction) {
    
        if (direction === 'up') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, x:-30});
    
        }
    
    },{
      offset:'100%'
    });
    



    // Block Embed
    
    $('.wp-block-embed').waypoint(function(direction) {
    
        if (direction === 'down') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, x:-30});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('.wp-block-embed').waypoint(function(direction) {
    
        if (direction === 'down') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, x:-30})
    		.to(this.element, 0.5, {delay: 0.3, opacity:1, x:0});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('.wp-block-embed').waypoint(function(direction) {
    
        if (direction === 'up') {
    
    		gsap.timeline().to(this.element, 0, {opacity:0, x:-30});
    
        }
    
    },{
      offset:'100%'
    });




    // Portfolio Pic
    
    $('.portfolio-pic').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, x:-30});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('.portfolio-pic').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, x:-30})
            .to(this.element, 0.5, {delay: 0.3, opacity:1, x:0});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('.portfolio-pic').waypoint(function(direction) {
    
        if (direction === 'up') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, x:-30});
    
        }
    
    },{
      offset:'100%'
    });




    // Portfolio Double Pic
    
    $('.portfolio-double-pic').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, x:-30});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('.portfolio-double-pic').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, x:-30})
            .to(this.element, 0.5, {delay: 0.3, opacity:1, x:0});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('.portfolio-double-pic').waypoint(function(direction) {
    
        if (direction === 'up') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, x:-30});
    
        }
    
    },{
      offset:'100%'
    });




    // Line Link
    
    $('.line-link').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, x:-30});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('.line-link').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, x:-30})
            .to(this.element, 0.5, {delay: 0.3, opacity:1, x:0});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('.line-link').waypoint(function(direction) {
    
        if (direction === 'up') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, x:-30});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    

    // Hill West Logo
    
    $('.hillwest-logo').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, scale:0.9});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('.hillwest-logo').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, scale:0.9})
            .to(this.element, 0.5, {delay: 0.3, opacity:1, scale:1});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('.hillwest-logo').waypoint(function(direction) {
    
        if (direction === 'up') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, scale:0.9});
    
        }
    
    },{
      offset:'100%'
    });




    // About Text P
    
    $('.about-content-wrap .about-text .about-text-inner p').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, x:-30, y:0});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('.about-content-wrap .about-text .about-text-inner p').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, x:-30, y:0})
            .to(this.element, 0.5, {delay: 0.3, opacity:1, x:0, y:0});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('.about-content-wrap .about-text .about-text-inner p').waypoint(function(direction) {
    
        if (direction === 'up') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, x:-30, y:0});
    
        }
    
    },{
      offset:'100%'
    });




    // About Text H2
    
    $('.about-content-wrap.about-content-wrap-normal .about-text .about-text-inner h2').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, x:-30, y:0, scale:1});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('.about-content-wrap.about-content-wrap-normal .about-text .about-text-inner h2').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, x:-30, y:0, scale:1})
            .to(this.element, 0.5, {delay: 0.3, opacity:0.3, x:0, y:0, scale:1});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('.about-content-wrap.about-content-wrap-normal .about-text .about-text-inner h2').waypoint(function(direction) {
    
        if (direction === 'up') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, x:-30, y:0, scale:1});
    
        }
    
    },{
      offset:'100%'
    });




    // Quote Text
    
    $('.quote-text').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, scale:0.9});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('.quote-text').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, scale:0.9})
            .to(this.element, 0.5, {delay: 0.3, opacity:1, scale:1});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('.quote-text').waypoint(function(direction) {
    
        if (direction === 'up') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, scale:0.9});
    
        }
    
    },{
      offset:'100%'
    });
    



    // Quote Authoer
    
    $('.quote-author').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, y:30});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('.quote-author').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, y:30})
            .to(this.element, 0.5, {delay: 0.3, opacity:1, y:0});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('.quote-author').waypoint(function(direction) {
    
        if (direction === 'up') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, y:30});
    
        }
    
    },{
      offset:'100%'
    });
    



    // Home Portfolio Pod
    
    $('.home-portfolio-pod').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, scale:0.9});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('.home-portfolio-pod').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, scale:0.9})
            .to(this.element, 0.5, {delay: 0.3, opacity:1, scale:1});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('.home-portfolio-pod').waypoint(function(direction) {
    
        if (direction === 'up') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, scale:0.9});
    
        }
    
    },{
      offset:'100%'
    });

    

    // Portfolio Pod
        
    $('.portfolio-pod').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, y:30});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('.portfolio-pod').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, y:30})
            .to(this.element, 0.5, {delay: 0.3, opacity:1, y:0});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('.portfolio-pod').waypoint(function(direction) {
    
        if (direction === 'up') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, y:30});
    
        }
    
    },{
      offset:'100%'
    });
            



    // About Page Images
    
    $('.about-images-inner').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('.about-images-inner').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0})
            .to(this.element, 0.5, {delay: 0.3, opacity:1});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('.about-images-inner').waypoint(function(direction) {
    
        if (direction === 'up') {
    
            gsap.timeline().to(this.element, 0, {opacity:0});
    
        }
    
    },{
      offset:'100%'
    });

    


    // Team Position
    
    $('.team-position').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, x:-30});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('.team-position').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, x:-30})
            .to(this.element, 0.5, {delay: 0.3, opacity:1, x:0});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('.team-position').waypoint(function(direction) {
    
        if (direction === 'up') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, x:-30});
    
        }
    
    },{
      offset:'100%'
    });
    


    // Team Pod Image
    
    $('.team-pod-image').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, scale:0.9});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('.team-pod-image').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, scale:0.9})
            .to(this.element, 0.5, {delay: 0.3, opacity:1, scale:1});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('.team-pod-image').waypoint(function(direction) {
    
        if (direction === 'up') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, scale:0.9});
    
        }
    
    },{
      offset:'100%'
    });
    



    // Contact Pod
    
    $('.contact-pod').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, y:30});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('.contact-pod').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, y:30})
            .to(this.element, 0.5, {delay: 0.3, opacity:1, y:0});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('.contact-pod').waypoint(function(direction) {
    
        if (direction === 'up') {
    
            gsap.timeline().to(this.element, 0, {opacity:0, y:30});
    
        }
    
    },{
      offset:'100%'
    });
    



    // Contact Submenu
    
    $('.contact-submenu ul').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            var ulVar = this.element.querySelectorAll("li");
            gsap.timeline().to(ulVar, 0, {opacity:0, x:-30});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('.contact-submenu ul').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            var ulVar = this.element.querySelectorAll("li");
            gsap.timeline().to(ulVar, 0, {opacity:0, x:-30})
            .staggerTo(ulVar, 0.5, {delay: 0.3, opacity:1, x:0}, 0.05);
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('.contact-submenu ul').waypoint(function(direction) {
    
        if (direction === 'up') {
    
            var ulVar = this.element.querySelectorAll("li");
            gsap.timeline().to(ulVar, 0, {opacity:0, x:-30});
    
        }
    
    },{
      offset:'100%'
    });
    



    // ul > li
    
    $('.page-content ul').waypoint(function(direction) {
    
        if (direction === 'down') {
    
        	var ulVar = this.element.querySelectorAll("li");
    		gsap.timeline().to(ulVar, 0, {opacity:0, x:-30});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('.page-content ul').waypoint(function(direction) {
    
        if (direction === 'down') {
    
    		var ulVar = this.element.querySelectorAll("li");
    		gsap.timeline().to(ulVar, 0, {opacity:0, x:-30})
    		.staggerTo(ulVar, 0.5, {delay: 0.3, opacity:1, x:0}, 0.05);
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('.page-content ul').waypoint(function(direction) {
    
        if (direction === 'up') {
    
    		var ulVar = this.element.querySelectorAll("li");
    		gsap.timeline().to(ulVar, 0, {opacity:0, x:-30});
    
        }
    
    },{
      offset:'100%'
    });




    // Footer

	$('.footer-wrap').waypoint(function(direction) {

	    if (direction === 'down') {

			gsap.timeline()
			.to('.footer-logo', 0, {opacity:0, x:-30})
			.to('.footer-contact', 0, {opacity:0, x:30})
			.to('.footer-right', 0, {opacity:0, y:30})
            .to('.footer-name-bottom', 0, {scale: 0.8, transformOrigin:"50% bottom"});

	    }

	},{
	  offset:'110%'
	});

	$('.footer-wrap').waypoint(function(direction) {

	    if (direction === 'down') {

			gsap.timeline()
			.to('.footer-logo', 0, {opacity:0, x:-30})
			.to('.footer-contact', 0, {opacity:0, x:30})
			.to('.footer-right', 0, {opacity:0, y:30})
            .to('.footer-name-bottom', 0, {scale: 0.8, transformOrigin:"50% bottom"});

			gsap.timeline().to('.footer-logo', 0.3, {delay: 0.2, opacity:1, x:0});
			gsap.timeline().to('.footer-contact', 0.3, {delay: 0.2, opacity:1, x:0});
			gsap.timeline().to('.footer-right', 0.3, {delay: 0.2, opacity:1, y:0});
            gsap.timeline().to('.footer-name-bottom', 30, {scale: 1.2, transformOrigin:"50% bottom", ease:Linear.easeNone});

	    }

	},{
	  offset:'100%'
	});

	$('.footer-wrap').waypoint(function(direction) {

	    if (direction === 'up') {

			gsap.timeline()
			.to('.footer-logo', 0, {opacity:0, x:-30})
			.to('.footer-contact', 0, {opacity:0, x:30})
			.to('.footer-right', 0, {opacity:0, y:30})
            .to('.footer-name-bottom', 0, {scale: 0.8, transformOrigin:"50% bottom"});

	    }

	},{
	  offset:'100%'
	});



    // Press Pod
    
    $('.press-pod').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            var ppImage = $(this.element).find(".press-pod-image");
            var ppText = $(this.element).find(".press-pod-text");
            gsap.timeline().to(ppImage, 0, {opacity:0, x:-30});
            gsap.timeline().to(ppText, 0, {opacity:0, x:-30});
    
        }
    
    },{
      offset:'110%'
    });
    
    
    $('.press-pod').waypoint(function(direction) {
    
        if (direction === 'down') {
    
            var ppImage = $(this.element).find(".press-pod-image");
            var ppText = $(this.element).find(".press-pod-text");
            gsap.timeline().to(ppImage, 0, {opacity:0, x:-30})
            .to(ppImage, 0.5, {delay: 0.3, opacity:1, x:0});

            gsap.timeline().to(ppText, 0, {opacity:0, x:-30})
            .to(ppText, 0.5, {delay: 0.4, opacity:1, x:0});
    
        }
    
    },{
      offset:'100%'
    });
    
    
    $('.press-pod').waypoint(function(direction) {
    
        if (direction === 'up') {
    
            var ppImage = $(this.element).find(".press-pod-image");
            var ppText = $(this.element).find(".press-pod-text");
            gsap.timeline().to(ppImage, 0, {opacity:0, x:-30});
            gsap.timeline().to(ppText, 0, {opacity:0, x:-30});
    
        }
    
    },{
      offset:'100%'
    });
    




	// Standard Waypoints


    $('.header-fixer').waypoint(function(direction) {

    if (direction === 'up') {
      $('#header').addClass('hw-top').removeClass('hw-crunch');
      $('.mobile-menu-button').addClass('mmb-down');
    }

    },{
      offset:'-100px'
    });



    $('.header-fixer').waypoint(function(direction) {

    if (direction === 'up') {
      $('#header').addClass('hw-top').removeClass('hw-crunch');
      $('.mobile-menu-button').addClass('mmb-down');
    }

    },{
      offset:'-5px'
    });



    $('.hero-image-wrap').waypoint(function(direction) {

    if (direction === 'up') {
      $('.mobile-menu-button').removeClass('mmb-bg');
    }

    },{
      offset:'-100%'
    });

    $('.hero-image-wrap').waypoint(function(direction) {

    if (direction === 'down') {
      $('.mobile-menu-button').addClass('mmb-bg');
    }

    },{
      offset:'-100%'
    });
	 
	 
	//////////////////////////////////////////////////////////////////////////


	// Skrollr Init

	if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){

	    skrollr.init({
	    	forceHeight: false,
	    	smoothScrolling: true,
	    	smoothScrollingDuration: 1000,
			edgeStrategy: 'ease',
	    	easing: {
		        //This easing will sure drive you crazy
		        wtf: Math.random,
		        outCubic: function(p) {
				  return 0*(p*p*p*p*p) + 0*(p*p*p*p) + 1*(p*p*p) - 3*(p*p) + 3*p;
				}
		    }
	    	});

	}
	
	 
	//////////////////////////////////////////////////////////////////////////


	// Slick
    
    
    /*

    $('.home-area').slick({
	  arrows: false,
	  dots: false,
	  infinite: true,
	  speed: 2000,
	  fade: true,
	  autoplay: true,
	  autoplaySpeed: 5500
	});

	*/
	 
	 
	//////////////////////////////////////////////////////////////////////////
	 
	 

});
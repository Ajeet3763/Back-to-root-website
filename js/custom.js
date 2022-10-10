$('.banner-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        items: 1,
        dots: true,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                dots: true,
                nav: false,
                loop: true
            }
        }
    })


 $('.product-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        items: 4,
        dots: false,
        nav: true,
        autoplay: true,
        responsive: {
            0: {
                items: 2,
                dots: true,
                nav: false
            },
            600: {
                items: 2,
                dots: true,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            }
        }
    })

  $('.client_slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        items: 1,
        dots: false,
        nav: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            600: {
                items: 1,
                dots: true,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    })
    $(document).ready(function(){
	
	$('.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})  

    $("a.iframe").fancybox();
    $('[data-fancybox="customer-speak"]').fancybox({
        thumbs: {
            autoStart: true
        },
        buttons: [
            'zoom',
            'close'
        ]
    });

    $(".coming-soon-area").fancybox().trigger('click');

    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "slideShow",
            "thumbs",
            "zoom",
            "fullScreen",
            "share",
            "close"
        ],
        loop: false,
        protect: true
    });


    //filter

    $(".fillter-icon").click(function() { 
    	
    $(".product-list-category").toggleClass('active'); 
    
  });

	$('.product-acc').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).next().slideUp();
		}
		else {
			$('.product-acc').removeClass('active');
			$('.category_list').slideUp();
			$(this).addClass('active');
			$(this).next().slideDown();
		}
	})

	$(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    });



  /*quantity*/

	$('.add').click(function () {
			if ($(this).prev().val() < 20) {
	    	$(this).prev().val(+$(this).prev().val() + 1);
			}
	});
	$('.sub').click(function () {
			if ($(this).next().val() > 1) {
	    	if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
			}
	});

	/*$(document).ready(function(){
		$(".category-select h4").click(function(){
			$(this).toggleClass('active');
			$('.category_list').slideToggle();
		})
	})*/

	//menu

(() =>{
 
  const openNavMenu = document.querySelector(".open-nav-menu"),
  closeNavMenu = document.querySelector(".close-nav-menu"),
  navMenu = document.querySelector(".nav-menu"),
  menuOverlay = document.querySelector(".menu-overlay"),
  mediaSize = 991;

  openNavMenu.addEventListener("click", toggleNav);
  closeNavMenu.addEventListener("click", toggleNav);
  // close the navMenu by clicking outside
  menuOverlay.addEventListener("click", toggleNav);

  function toggleNav() {
  	navMenu.classList.toggle("open");
  	menuOverlay.classList.toggle("active");
  	document.body.classList.toggle("hidden-scrolling");
  }

  navMenu.addEventListener("click", (event) =>{
      if(event.target.hasAttribute("data-toggle") && 
      	window.innerWidth <= mediaSize){
      	// prevent default anchor click behavior
      	event.preventDefault();
      	const menuItemHasChildren = event.target.parentElement;
        // if menuItemHasChildren is already expanded, collapse it
        if(menuItemHasChildren.classList.contains("active")){
        	collapseSubMenu();
        }
        else{
          // collapse existing expanded menuItemHasChildren
          if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
          }
          // expand new menuItemHasChildren
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
  });
  function collapseSubMenu(){
  	navMenu.querySelector(".menu-item-has-children.active .sub-menu")
  	.removeAttribute("style");
  	navMenu.querySelector(".menu-item-has-children.active")
  	.classList.remove("active");
  }
  function resizeFix(){
  	 // if navMenu is open ,close it
  	 if(navMenu.classList.contains("open")){
  	 	toggleNav();
  	 }
  	 // if menuItemHasChildren is expanded , collapse it
  	 if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
     }
  }

  window.addEventListener("resize", function(){
     if(this.innerWidth > mediaSize){
     	resizeFix();
     }
  });

})();


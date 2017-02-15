$(function() {
	new WOW().init();
	//menu
	function showMenu() {
		$('body').addClass('showMenu');
	}
	function closeMenu() {
		$('body').removeClass('showMenu');
	}

	$('.btn-nav').on('click', function(event) {
		event.preventDefault();
		showMenu();
	});

	$('.gray, .nav li a').click(function() {
		closeMenu();
	})


	//slider 
	$('.slider').slick({
		vertical: true,
		dots: true,
		arrows: false,
		autoplay: true
	});

	$('.slider-say').slick({
		dots: true,
		arrows: false,
		autoplay: true,
		fade: true,
  		cssEase: 'ease-in-out'
	});

	// work
	work();

	function work() {
		$('a.work').on('click', function(event) {
			event.preventDefault();
			
			var $this = $(this),
				nameWork = $this.find('h3').text(),
				nameCate = $this.find('span').text(),
				workSection = $('.works'),
				workTop = workSection.offset().top,
				// workItemTop = $this.offset().top,
				spinner = "<div class='loader'></div>",
				nameFile =$this.attr('id');

			function topWork() {
				$('body').animate({scrollTop: (workTop - $('.header_top').outerHeight())}, '500');
			}

			/* Act on the event */
			$('.works_main').addClass('toogle');
			$('.name-work').text(nameWork);
			$('.cate-work').text(nameCate);
			$('.detail-work .detail-work-main')
				.html(spinner)
				.load('works/' + nameFile + '.html');

			setTimeout(function () { 
				topWork();
			}, 500);

			$('.back').on('click', function(event) {
				event.preventDefault();
				/* Act on the event */
				$('.works_main').removeClass('toogle');	
			});
		});

		// $('a.work').each(function() {
		// 	var $this = $(this),
		// 		nameWork = $this.find('h3').text(),
		// 		nameCate = $this.find('span').text(),
		// 		workSection = $('.works'),
		// 		workTop = workSection.offset().top,
		// 		workItemTop = $this.offset().top,
		// 		spinner = "<div class='loader'></div>",
		// 		nameFile =$this.attr('id');
		// 		console.log(workItemTop);

		// 	function topWork() {
		// 		$('body').animate({scrollTop: (workTop - $('.header_top').outerHeight())}, '500');
		// 	} 

		// 	$this.on('click', function(event) {
		// 		event.preventDefault();
		// 		/* Act on the event */
		// 		$('.works_main').addClass('toogle');
		// 		$('.name-work').text(nameWork);
		// 		$('.cate-work').text(nameCate);
		// 		$('.detail-work .detail-work-main')
		// 	 		.html(spinner)
	    //         	.load('works/' + nameFile + '.html');

	    //         setTimeout(function () { 
		// 		   topWork();
		// 		}, 500);

				
		// 	});

		// 	$('.back').on('click', function(event) {
		// 		// event.preventDefault();
		// 		/* Act on the event */
		// 		$('.works_main').removeClass('toogle');
				
				
		// 		$('body').animate({scrollTop: (workItemTop - $('.header_top').outerHeight())}, '500');
				
		// 	});

		// });
	}


	// mneu
	function menu() {
		var headerH = $('.header_top').outerHeight();

		$('.header_top .nav li').click(function (event) {
			event.preventDefault();
			var $this = $(this),
				$a = $this.children('a'),
				$Attr = $a.attr('href');
			// console.log($Attr);
			// $('.bar-menu .menu a').removeClass('active');
			// $this.addClass('active');

			$this.addClass('active').siblings().removeClass('active');

			$("html, body").animate({
				scrollTop: $($a.attr("href")).offset().top - .99*headerH + 'px' //2*headerH
			}, {
				duration: 1200,
				easing: "easeInOutExpo"
			});
		});

		var aChildren = $(".header_top .nav ul").children(),
			aArray = [];

		for (var i = 0; i < aChildren.length; i++) {
			var aChild = aChildren[i],
				ahref = $(aChild).children('a').attr('href');
			aArray.push(ahref);
		}

		$(window).scroll(function () {
			var window_top = $(window).scrollTop(),
				Height = $('.header').outerHeight() - 100, //80
				div_top = $('.header_top').offset().top;
			if (window_top > 10) {
				$('.header_top').addClass('stick');

			} else {
				$('.header_top').removeClass('stick');
			}
		});

		$(window).scroll(function () {
			var windowPos = $(window).scrollTop(),
				windowHeight = $(window).height(),
				docHeight = $(document).height();

			for (var i = 0; i < aArray.length; i++) {
				var theID = aArray[i],
					divPos = $(theID).offset().top - $('.header_top').outerHeight(),
					divHeight = $(theID).height();
				if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
					$("a[href='" + theID + "']").parent('li').addClass("active");
				} else {
					$("a[href='" + theID + "']").parent('li').removeClass("active");
				}
			}
		});

	}
	menu();

	// load more work
	function loadMore() {
		$('.hideWork > div').each(function(i, el) {
			setTimeout(function() {
				if (i < 3) {
					$(el).addClass('animated fadeInUp')
					var htmlInsert = el;
					$('.showWork').append(htmlInsert);
					console.log($(el));
				}
			}, 300 * i);
		});
		
	}

	$('.loadMore').click(function() {
		if ($('.hideWork > div').length > 0 ) {
			loadMore();
		} else {
			$('.loadMore').addClass('hide');
		}
	});

});
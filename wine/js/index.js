//MVフェード切り替え(PCのみ)
  var mql = window.matchMedia('screen and (min-width: 750px)');
  function checkBreakPoint(mql) {
    if (mql.matches) {
      $('.top__list').not('.slick-initialized').slick({
        autoplay: true,
        arrows: false,
        dots: false,
        infinite: true,
        accessibility: false,
        autoplaySpeed: 3000,
        speed: 3000,
        fade: true
      });
    } else {
      $('.top__list.slick-initialized').slick('unslick');
    }
  }
  mql.addListener(checkBreakPoint);
  checkBreakPoint(mql);
//hamberger menu
$(function () {
	$('.ham,.nav__link').on('click', function() {
		$('body').toggleClass('open');
	});
//段階表示
var scrollAnimationElm = document.querySelectorAll('.move');
var scrollAnimationFunc = function() {
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 200;
    var elm = scrollAnimationElm[i];
    var showPos = 0;
    if(elm.dataset.sa_margin != null) {
      triggerMargin = parseInt(elm.dataset.sa_margin);
    }
    if(elm.dataset.sa_trigger) {
      showPos = document.querySelector(elm.dataset.sa_trigger).getBoundingClientRect().top + triggerMargin;
    } else {
      showPos = elm.getBoundingClientRect().top + triggerMargin;
    }
    if (window.innerHeight > showPos) {
      elm.classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);
//photoGyaraly
$('.list01').slick({
	arrows: false,
	dots: false,
	infinite: true,
	slidesToShow: 4,
	variableWidth: true,
	adaptiveHeight: true,
	autoplay: true,
	cssEase: 'linear',
	speed: 8000,
	centerMode: true,
	autoplaySpeed: 0,
	accessibility: false
});
$('.list02').slick({
	arrows: false,
	dots: false,
	infinite: true,
	variableWidth: true,
	slidesToShow: 4,
	adaptiveHeight: true,
	autoplay: true,
	cssEase: 'linear',
	speed: 8000,
	centerMode: true,
	autoplaySpeed: 0,
	accessibility: false,
	rtl: true
});
//見所PC SP 切り替え
var mql = window.matchMedia('screen and (max-width: 750px)');
function checkBreakPoint(mql) {
	if (mql.matches) {
		$('.highlight__list').not('.slick-initialized').slick({
      autoplay: true, 
			slidesToShow: 1,
			slidesToScroll: 1,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>'
		});
	} else {
		$('.highlight__list.slick-initialized').slick('unslick');
	}
}
  mql.addListener(checkBreakPoint);
  checkBreakPoint(mql);

//hoverで画像切り替え
	$('.highlight__image').hover(function(){
		var $thisImg = $(this).attr('src');
		var $thisAlt = $(this).attr('alt');
		$('.highlight__mainImage').attr({src:$thisImg,alt:$thisAlt});
	});

//申し込み fix
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 650) {
      $(".top__button").fadeIn("fast");
    } else {
      $(".top__button").fadeOut("fast");
    }
  });

//pageTop 上に行く
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 150) {
      $(".pageTop").fadeIn("fast");
    } else {
      $(".pageTop").fadeOut("fast");
    }
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    var footHeight = $("footer").innerHeight() + 50;
 
    if ( scrollHeight - scrollPosition  <= footHeight ) {
      $(".pageTop").css({
        "position":"absolute",
				"margin-bottom":"155px",
      });
    } else {
      $(".pageTop").css({
        "position":"fixed",
				"margin-bottom":"70px",
      });
    }
  });
	$('.pageTop').click(function(){
		$('body,html').animate({
				scrollTop: 0
		}, 500);
		return false;
	});

//アンカーリンク スムーススクロール
   $('a[class*="nav__link"]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });

//header スクロール
  var $win = $(window),
      $nav = $('.head'),
      navPos = $nav.offset().top,
      fixedClass = 'is-fixed';
  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > navPos ) {
      $nav.addClass(fixedClass);
    } else {
      $nav.removeClass(fixedClass);

    }
  });
  
});
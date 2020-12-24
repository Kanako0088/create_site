$(function(){
/*ハンバーガーメニュー*/
	$('.humberger').click(function(){
	$(this).next('.gNav').slideToggle();
		$(this).toggleClass('ac');
	});
/*アコーディオン*/
	$(".adnHead").on("click", function() {
	$(this).next().slideToggle();
	$(this).toggleClass("ac");
	});
/*スムーススクロール*/
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
/*以上*/
});
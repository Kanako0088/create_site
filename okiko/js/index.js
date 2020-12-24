//タブ切り替え
$(function(){
	$('.newsHeading li').click(function(){
		$('.ac').removeClass('ac');
		$(this).addClass('ac');
		$('.show').removeClass('show');
        // クリックしたタブからインデックス番号を取得
		const index = $(this).index();
        // クリックしたタブと同じインデックス番号をもつコンテンツを表示
		$('.newsList').eq(index).addClass('show');
	});
/*ページトップがついてくる*/
	var topBtn = $('.pageTop');
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
//スクロールしてトップ
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
    });
//footer寸前でとまる
$(window).on("scroll", function() {
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("footer").innerHeight();
    if ( scrollHeight - scrollPosition  <= footHeight ) {
        $(".pageTop").css({
            "position":"absolute",
            "bottom": footHeight + 0
        });
    } else {
        $(".pageTop").css({
            "position":"fixed",
            "bottom": "0"
        });
    }
});
	//アコーディオン
	  $('.gNavList dt').on('click',function(){
    $(this).toggleClass('ac');
    $(this).next('.gNavList dd').slideToggle();
  });
});
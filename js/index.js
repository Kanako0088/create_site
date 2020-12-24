/*------------------
マウスオーバー
------------------*/
$(function(){
    $(".mouseover").each(function(){
        var src_off = $(this).attr('src');
        var src_on = src_off.replace('_off','_on');
        $('<img />').attr('src',src_on);
        $(this).hover(function(){
            $(this).attr('src',src_on);
        },function(){
            $(this).attr('src',src_off);
        }); 
    });
	});
/*--------------------
bxSlider
---------------------*/
$(function(){ 
		$("#bxSlider").bxSlider({ 
			pager:false,
			controls:false,
			speed:3000,
			auto:true,
			pause:7000,
		});
	});
/*---------------
アコーディオン
-----------------*/
$(function(){
	$(".adn01 dd,.adn02 dd").hide();
	$('.sectionInner dl dt').click(function(){
	$(this).next('.adn03 dd').slideToggle();
		$(this).toggleClass('ac');
	$(this).next('.adn01 dd,.adn02 dd').slideToggle();
		$(this).toggleClass('');
	});
});
/*-----------
モーダルウィンドウ
-------------*/
$(function() {
  $('.modalBtn').on('click', function() {
    $('.modalBack, .modalWindow').fadeIn();
  });
  
  $('.close').on('click', function() {
    $('.modalBack, .modalWindow').fadeOut();
  });
  
  locateCenter();
  $(window).resize(locateCenter);

  function locateCenter() {
    let w = $(window).width();
    let h = $(window).height();
    
    let cw = $('.modalWindow').outerWidth();
    let ch = $('.modalWindow').outerHeight();
   
    $('.modalWindow').css({
      'left': ((w - cw) / 2) + 'px',
      'top': ((h - ch) / 2) + 'px'
    });
  }
});
















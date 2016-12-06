$(function(){
	
	//////////分页导航//////////////////////
	var wt = $(window).scrollTop()+300;	
	
	$(window).scroll(function(){
		$('.aside').find('div').css('top',wt)
	})
	
	
	
	
	//////////////搜索部分///////////////////////
	$('.search').find('input').eq(0).click(function(){
		$(this).val('')
	})

	///////////////导航部分///////////////////
			$('.lv').find('li').mouseenter(function(){
				$('.tag').css('display','block')
				$('.lv').find('span').eq($(this).index()).css('display','none')
				$('.lv').find('li').attr('class','');
				$('.lv').find('li').eq($(this).index()).attr('class','li_border');
				$('.tag').find('li').css('display','none');
				$('.tag').find('li').eq( $(this).index()).css('display','block');
				
			});	
			$('.tag').mouseenter(function(){
				$(this).show();
			})
			$('.tag').mouseleave(function(){
				$(this).hide();
			})
			
			$('.lv').mouseleave(function(){
				$('.lv').find('li').attr('class','');
				$('.lv').find('span').eq($(this).index()).css('display','block')
				$('.tag').css('display','none')
			})

/////////////////////banner/////////////////////////////
			$(function() {
			$('#slider').vmcSlider({
				width: 760,
				height: 320,
				gridCol: 10,
				gridRow: 5,
				gridVertical: 20,
				gridHorizontal: 10,
				autoPlay: true,
				ascending: true,
				effects: [
					'fade', 'fadeLeft', 'fadeRight', 'fadeTop', 'fadeBottom', 'fadeTopLeft', 'fadeBottomRight',
					'blindsLeft', 'blindsRight', 'blindsTop', 'blindsBottom', 'blindsTopLeft', 'blindsBottomRight',
					'curtainLeft', 'curtainRight', 'interlaceLeft', 'interlaceRight', 'mosaic', 'bomb', 'fumes'
				],
				ie6Tidy: false,
				random: false,
				duration: 2000,
				speed: 1000
			});
		});
	
//////////////////// dayshare 选项卡////////////////////////////////	
	$('#dayshare').find('.last').find('p').eq(1).css('display','none')
	$('#dayshare').find('span').mouseenter(function(){
		$('#dayshare').find('.last').find('p').css('display','none')
		$('#dayshare').find('.last').find('p').eq($(this).index()).css('display','block')
		
	})
	
//////////////////////////dayshare 选项卡////////////////////////
	$('.dayh').find('a').mouseenter(function(){
		$('.dayr').find('ul').css('display','none');
		$('.dayr').find('ul').eq($(this).index()).css('display','block');
	})

//////////////////////sideban//////	
	setInterval(abc,6000)
	function abc(){
	 $('.banjs').animate({marginLeft:-210},1000).delay(2000).animate({marginLeft:0},1000);
	 $('.banjs1').animate({marginLeft:-503},1000).delay(2000).animate({marginLeft:0},1000);
	
	}
	 abc();
	 
	 
//////////////////////////////////////////////////////////	 
	$('#add').find('.left').find('a').mouseenter(function(){
		$('#add').find('.cen').find('img').css('display','none');
		$('#add').find('.cen').find('img').eq($(this).index()).css('display','block');
		
	})
	 
	 
///////////////////////下部选项卡///////////////////////////////	 
	$('.addtop').find('li').mouseenter(function(){
		$('.addtop').find('li').removeClass('active');
		$(this).addClass('active');	
		
		$('.tagb').find('.litag').css('display','none');
		$('.tagb').find('.litag').eq($(this).index()).css('display','block');
	})

	 
	 

  













































});
















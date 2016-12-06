window.onload = function(){
	$('.det3').find('.i1').mousedown(function(e){
		e.stopPropagation();
		$('.det3').find('.img1').animate({height:144})
		$(document).mousedown(function(){
		$('.det3').find('.img1').animate({height:0})	
		})
	})
	$('.det3').find('.i0').mousedown(function(e){
		e.stopPropagation();
		$('.det3').find('.img0').animate({height:144})
		$(document).mousedown(function(){
		$('.det3').find('.img0').animate({height:0})	
		})
	})
	
	$('.det2').find('span').eq(0).mousedown(function(){
		$('.det2').find('span').removeClass();
		$('.det2').find('span').eq(0).addClass('spanhover')
	})
	$('.det2').find('span').eq(1).mousedown(function(){
		$('.det2').find('span').removeClass();
		$('.det2').find('span').eq(1).addClass('spanhover')
	})
	
	var num1 =1;
	var num2 =1;
	$('.low1').mousedown(function(){
		num1--;
		if(num1==0){
			num1=1
		}
		$('.num1').html(num1)
		$('.heji').html($('#shopcart').find('.mou').html()*48)	
	})
	$('.low2').mousedown(function(){
		num2--;
		if(num2==0){
			num2=1
		}
		$('.num2').html(num2)
		$('.heji').html($('#shopcart').find('.mou').html()*48)
	})		
	$('.up1').mousedown(function(){
		num1++;
		$('.num1').html(num1)		
		$('.heji').html($('#shopcart').find('.mou').html()*48)
	})
	$('.up2').mousedown(function(){
		
		num2++;
		$('.num2').html(num2)
		$('.heji').html($('#shopcart').find('.mou').html()*48)
	})	
	
////////////////////////购物车//////////////////////////////////////////	
	var num1 = Number($('#detail').find('.num1').html());
	var num2 = Number($('#detail').find('.num2').html());
	var color1 = $('.color1');
	var color2 = $('.color2');
	
	var col = 1;

	color1.click(function(){
		col=1;	
	});
	color2.click(function(){
		col=2;			
	});
	var cnum1 =0;
	var cnum2 =0;
	$('#detail').find('.car').click(function(){
		cnum1+=num1;
		cnum2+=num2;
		if (col==1) {
			$.cookie('col1L',cnum1,{expires:2,path:"/"});
			$.cookie('col1R',cnum2,{expires:2,path:"/"});
		}else if(col==2){
			$.cookie('col2L',cnum1,{expires:2,path:"/"});
			$.cookie('col2R',cnum2,{expires:2,path:"/"});
		}
	})
	
///////////////////////// cart//////////////////////////////////////////

   var c1L= $.cookie('col1L');
   var c2L= $.cookie('col2L');
   var c1R= $.cookie('col1R');
   var c2R= $.cookie('col2R');
	if (c1L==null&&c1R==null) {
		$('.cartmain').html('<div style="width:100px;height:100px;line-height:100px">购物车为空</div>')
	};
	if (c1L) {
		$('.col1L').show()
	};
	if (c1R) {
		$('.col1R').show()
	};
	if (c2L) {
		$('.col2L').show()
	};
	if (c2R) {
		$('.col2R').show()
	}

	$('.col1L').find('.mou').html(c1L);
	$('.col1R').find('.mou').html(c1R);
	$('.col2L').find('.mou').html(c2L);
	$('.col2R').find('.mou').html(c2R);
	var heji1 =$('.col1L').find('.heji').html();
	///heji
function heji(obj,can){
	$(obj).find('.heji').html(can*48);
	$(obj).find('.shan').click(function(){
		$(obj).hide();
	});
};

heji('.col1L',c1L);	
heji('.col1R',c1R);		
heji('.col2L',c2L);	
heji('.col2R',c2R);	
//////////
function lowup(obj,can){
	$(obj).find('.low').click(function(){
		can--;
		$(obj).find('.mou').html(can);
		$(obj).find('.heji').html(can*48)
		if (can==1) {
			can=2;
		}
	})
	$(obj).find('.up').click(function(){
		can++;
		$(obj).find('.mou').html(can);
		$(obj).find('.heji').html(can*48)
	})		
}
lowup('.col1L',c1L);
lowup('.col1R',c1R);
lowup('.col2L',c2L);
lowup('.col2R',c2R);

	
	


///////////////////////放大镜样式//////////////////////////////////////	
function zoomImg(){
	function getByClass(oParent, sClass){
		var aEle=oParent.getElementsByTagName('*');
		var aTmp=[];
		var i=0;
	
		for(i=0;i<aEle.length;i++){
			if(aEle[i].className==sClass){
			aTmp.push(aEle[i]);
			}
		}
	
	return aTmp;
	}
	var oDiv=document.getElementById('zoomImg');
	oDiv.innerHTML = '<div class="small_pic"><span class="mark"></span><span class="float_layer"></span><img src="images/small1.png"/></div><div class="big_pic"><img src="images/big1.png"/></div>';
	var oMark=getByClass(oDiv, 'mark')[0];
	var oFloat=getByClass(oDiv, 'float_layer')[0];
	var oBig=getByClass(oDiv, 'big_pic')[0];
	var oSmall=getByClass(oDiv, 'small_pic')[0];
	var oImg=oBig.getElementsByTagName('img')[0];
	var oImg1=oDiv.getElementsByTagName('img')[0];
	var smallsrc = oImg.src;
	var bigsrc = oImg1.src;
	var num = 1;
//////////////////////需要多个图片切换在这里写入函数///////////////////////////////////////
	function changeImg(){
////////////////////// var/////////////////////////////////////////////////////////////	
		oImg1.src = 'images/small'+num+'.png';
		oImg.src = 'images/big'+num+'.png';	
	};
///////////////改变图片////////////////////////
	var zoom1= $('.zoom1');
	var zoom2= $('.zoom2');
	
	zoom1.click(function(){
		num = 1;
		changeImg();
	});
	zoom2.click(function(){	
		num = 2;
		changeImg();
	});		
	
//////////////////////需要多个图片切换在这里写入函数///////////////////////////////////////
	oMark.onmouseover=function ()
	{
		oFloat.style.display='block';
		oBig.style.display='block';
	};
	
	oMark.onmouseout=function ()
	{
		oFloat.style.display='none';
		oBig.style.display='none';
	};
	
	oMark.onmousemove=function (ev)
	{
		var oEvent=ev||event;
		var wt = $(window).scrollTop();	
		var l=oEvent.clientX-oDiv.offsetLeft-oSmall.offsetLeft-oFloat.offsetWidth/2;
		var t=wt+oEvent.clientY-oDiv.offsetTop-oSmall.offsetTop-oFloat.offsetHeight/2;
		
		if(l<0)
		{
			l=0;
		}
		else if(l>oMark.offsetWidth-oFloat.offsetWidth)
		{
			l=oMark.offsetWidth-oFloat.offsetWidth;
		}
		
		if(t<0)
		{
			t=0;
		}
		else if(t>oMark.offsetHeight-oFloat.offsetHeight)
		{
			t=oMark.offsetHeight-oFloat.offsetHeight;
		}
		
		oFloat.style.left=l+'px';
		oFloat.style.top=t+'px';
		
		var percentX=l/(oMark.offsetWidth-oFloat.offsetWidth);
		var percentY=t/(oMark.offsetHeight-oFloat.offsetHeight);
		
		oImg.style.left=-percentX*(oImg.offsetWidth-oBig.offsetWidth)+'px';
		oImg.style.top=-percentY*(oImg.offsetHeight-oBig.offsetHeight)+'px';
	};
}	
	
zoomImg();	
	
/////////////////////////////////////////////////////////////	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}

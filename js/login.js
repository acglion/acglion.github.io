$(function(){

	var name =$('#login').find('input').eq(0);
	var pw1 =$('#login').find('input').eq(1);
	var pw2 =$('#login').find('input').eq(2);
	var box =$('#login').find('.box');
	var dar =$('#login').find('.dary');
	var codetext =$('#login').find('.code').html();
	var codetext =$('#login').find('.code1');
	var inp =$('#login').find('.inp');
	var name1 =$('#login').find('.name1');
	var pws1 =$('#login').find('.pws1');
	var pws2 =$('#login').find('.pws2');
	
	name.click(function(){
		name.val('')
	})
	name.blur(function(){
	name1.html('')	
	 var reg=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	 var reg1=/^1[3|4|5|8][0-9]\d{4,8}$/;	 
	 var str = name.val()
		if (!((reg.test(str))||(reg1.test(str)))) {
			name1.html('账号名只能为邮箱/手机号/第一位非数字1的字母数字组合')
		} else{	
			return
		}
	 if (!str) {
	 	name1.html('输入点啥')
	 } 
	})
	
	pw1.blur(function(){
		pws1.html('')	
		 var reg=/^[a-zA-Z\d]{6,16}$/;
		  var str = pw1.val()
		  if (!reg.test(str)) {
			pws1.html('6-16字母数字组合')
		} else{	
			return
		}
	 if (!str) {
	 	pws1.html('输入点啥')
	 } 
	})
		pw2.blur(function(){
		pws2.html('')	
		 var reg=/^[a-zA-Z\d]{6,16}$/;
		  var str = pw1.val()
		  var str1 = pw2.val()
		  if (!reg.test(str)) {
			pws1.html('6-16字母数字组合')
		};
	 if (!str) {
	 	pws2.html('输入点啥')
	 } ;
	 if(str!=str1){
	 	pws2.html('密码不一样')
	 }
	})
	
	///////////////////////////////////////////////////////
	var disX = 0;
	var disY = 0;					
		dar.mousedown(function(ev){
			disX = ev.pageX - $(this).offset().left;			
		
			$(document).mousemove(function(ev){
				var lef =ev.pageX  - disX -260;
				if(lef>190){
					lef=190
					abc();
					dar.off()
					return
				};
				if (lef<0) {
					lef=0
				}
				dar.css('left',lef);
			});				
			$(document).mouseup(function(){
			
			$(document).off();
			
			});				
			function abc(){
				inp.css('display','block');
				$('#login').find('.noa').hide();
			}
				
				
			})
		
		
		
		
		
		
		
///////////////////////loading//////////////////////////////		
		
		$('#landing').find('input').click(function(){
			$(this).val('')
		})
		
		
		
	
})

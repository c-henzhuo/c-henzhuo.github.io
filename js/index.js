$(function(){
	$('#dowebok').fullpage({
		sectionsColor: ['','black', 'black', 'black','black'],
		// continuousVertical: true:实现翻页循环
		// continuousVertical: true,


		// 绑定菜单
		anchors: ['page1', 'page2', 'page3', 'page4','page5'],
		navigation: true,
		navigationTooltips: ['首页', '关于我', '技能掌握', '我的作品', '联系方式'],

		// 实现动画效果
		afterLoad: function(anchorLink, index){
			if(index == 2){
				$('.section2').find('p').delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 3){
				$('.section3').find('p').delay(500).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 4){
				$(".card1").slideDown(2000);
				setTimeout(function () { $(".card2").slideDown(3000);  }, 1500); 
				setTimeout(function () { $(".card3").slideDown(3000);  }, 3000);
				setTimeout(function () { $(".card4").slideDown(3000);  }, 4500);
			}
			if(index == 5){
				$('.section5').find('p').fadeIn(2000);
			}
		},

		// 重置动画之前样式，下次进入重新开始动画
		onLeave: function(index, direction){
			if(index == '2'){
				$('.section2').find('p').delay(500).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '3'){
				$('.section3').find('p').delay(500).animate({
					bottom: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '4'){
				$('.section4').find('p').fadeOut(2000);
				// $(".card").hide();
			}
			if(index == '5'){
				$('.section5').find('p').fadeOut(2000);
			}
		}
	});


	// 音乐播放控件，以及图标状态更换
	$(".music-btn").click(function(){
		// $(".music").get(0).play();
		 if($(".music").get(0).paused){  
                $(".music").get(0).play();
                $(".bg1").get(0).play();
                $(".mu-icon").css("background-image","url(images/暂停.png)");
                $(".music-btn img").addClass("Rotation");  
            }else{  
                $(".music").get(0).pause();
                $(".mu-icon").css("background-image","url(images/播放.png)");
                $(".music-btn img").removeClass("Rotation");  
            }; 
	});
});
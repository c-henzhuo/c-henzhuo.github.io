$(function(){
	console.log($(".jquery"));
	console.log($(".jquery").length);
	console.log($(".js > div"));
	console.log($(".js > div").length);
	var $li = $(".jquery");
	$li.mouseover(function(){
		var idx = $(this).index();
		console.log(idx);
		if(idx==1){
			idx=0;
		}else if(idx==2){
			idx=1;
		}else if(idx==4){
			idx=2;
		}else if(idx=5){
			idx=3;
		}
		$(".js > div").eq(idx).show();
	});

	

	$li.mouseout(function() {
		var idx = $(this).index();
		console.log(idx);
		if(idx==1){
			idx=0;
		}else if(idx==2){
			idx=1;
		}else if(idx==4){
			idx=2;
		}else if(idx=5){
			idx=3;
		}
		$(".js > div").eq(idx).hide();
	});

	$(".js > div").mouseover(function(){
		$(this).show().mouseout(function(){
			$(this).hide();
		});
	});

});
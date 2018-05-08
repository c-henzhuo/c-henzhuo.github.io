
		window.onload=function(){
			var img = document.getElementsByClassName('img');
			var now = document.getElementsByClassName('now');
			var num = 0;
			console.log(img);
			setInterval(function(){
				if (num>img.length-1) {
					num=0;
				}
				for (var i = 0; i < img.length; i++) {
					img[i].style.display = 'none';
					now[i].style.background = 'none';
				}

				img[num].style.display = "block";
				now[num].style.background = 'white';
				num++;
				console.log(num);
				console.log(i);

			},3000)
			
		}

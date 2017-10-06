window.onload = function () {
			var aimg = document.getElementsByClassName('img');
			var num = 0;
			var timer = null;

			// 轮播图
			function autoplay(){
				if (num>aimg.length-1) {
					num=0;
				}
				for (var i = 0; i < aimg.length; i++) {
					aimg[i].style.display='none';
				}
				aimg[num].style.display='block';
				num++;
				// alert(1);
			}

			timer=setInterval(autoplay,1500);

			//当鼠标进去轮播模块时删除定时器，停在当前图片

			for(var i =0;i<aimg.length;i++){
				aimg[i].onmouseenter = function(){
					clearInterval(timer);
				}
			}

			// 当鼠标离开轮图模块时创建定时器进行轮播
			for(var i =0;i<aimg.length;i++){
				aimg[i].onmouseleave = function(){
					timer = setInterval(autoplay,1500);
				}
			}

			//获取昵称输入框对象
			var name = document.getElementById("name");

			// 注册焦点离开时间，当输入框值为零且离开焦点时弹出提示
			name.onblur=function(){
				document.getElementById("name").style.border = "1px #aaa solid";
				var nicheng = document.getElementById("name").value;
				if(nicheng == ""){
					document.getElementById("name").style.border = "1px red solid";
					var block = document.getElementsByClassName("name");
					block[0].style.display = "block";
				}
			};

			//注册焦点获取事件，当前输入框获取焦点后隐藏提示div
			name.onfocus=function(){
					document.getElementById("name").style.border = "1px solid #359EFF";
					var block = document.getElementsByClassName("name");
					block[0].style.display = "none";

			};

			// 获取密码框对象
			var password = document.getElementById("password");

			password.onclick = function(){
				document.getElementById("password").style.border = "1px solid #359EFF";
				var block = document.getElementsByClassName("guize");
				block[0].style.display = "block";
			}

			// 注册焦点离开时间，当输入框值为零且离开焦点时弹出提示
			var password = document.getElementById("password");
			password.onblur=function(){
				document.getElementById("password").style.border = "1px #aaa solid";
				var mima = document.getElementById("password").value;
				if(mima == ""){
					document.getElementById("password").style.border = "1px red solid";
					var block = document.getElementsByClassName("password");
					block[0].style.display = "block";
				}

				var block2 = document.getElementsByClassName("guize");
				block2[0].style.display = "none";
			};

			//注册焦点获取事件，当前输入框获取焦点后隐藏提示div
			password.onfocus=function(){
					var block1 = document.getElementsByClassName("password");
					block1[0].style.display = "none";
			};

			// 获取密码框对象
			var shoujihao = document.getElementById("phone-Number");

			//注册焦点获取事件，当前输入框获取焦点后隐藏提示div
			shoujihao.onfocus=function(){
					document.getElementById("phone-Number").style.border = "1px solid #359EFF";
					var block = document.getElementsByClassName("yanzheng");
					block[0].style.display = "block";
			};

			shoujihao.onblur=function(){
					document.getElementById("phone-Number").style.border = "1px solid #aaa";
			};



			// 获取发送短信验证码按钮
			var yanzheng = document.getElementsByClassName("yanzheng-r");

			yanzheng.onclick = function(){
				var block = document.getElementsByClassName("yanzheng");
				for(var i = 0; i <= block.length; i++){
					console.log(block);
					block[i].style.display = "block";
				}
			}

			var yuyan = document.getElementsByClassName("yuyanqiehuan");
			console.log(yuyan);
			yuyan[0].onmouseenter = function(){
				var up = document.getElementsByClassName("up");
				up[0].style.display = "block";
				var down = document.getElementsByClassName("down");
				down[0].style.display = "none";
				var ul = document.getElementsByClassName("ul");
				ul[0].style.display = "block";
			}

			yuyan[0].onmouseleave = function(){
				var up = document.getElementsByClassName("up");
				up[0].style.display = "none";
				var down = document.getElementsByClassName("down");
				down[0].style.display = "block";
				var ul = document.getElementsByClassName("ul");
				ul[0].style.display = "none";
			}

			var ul = document.getElementsByClassName("ul");
			ul[0].onmouseenter = function () {
				var ul = document.getElementsByClassName("ul");
				ul[0].style.display = "block";
				ul[1].style.display = "block";
			}

			// ul[0].onmouseleave = function () {
			// 	var ul = document.getElementsByClassName("ul");
			// 	ul[0].style.display = "none";
			// }

		}
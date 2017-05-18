window.onload=function(){
	function publish(){
		document.querySelector(".syb_Bbox").style.height=innerHeight +'px';
		window.onresize=function(){
			document.querySelector(".syb_Bbox").style.height=innerHeight +'px';
		};
		var Bbox=document.querySelector(".syb_Bbox");
		var btn=document.querySelector(".syb_publishBtn");
		var Files=document.querySelector(".Mfile");
		var Tit=document.querySelector(".syb_tit");
		var Article=document.querySelector(".syb_article");
		var Abolish=document.querySelector(".syb_abolish");
		var AlertBox=document.querySelector(".syb_alertBox");
		Files.addEventListener("change",function(){
			if(this.files.length){
				var tit=(this.files[0].name).substring (0,(this.files[0].name).indexOf("."));
				Tit.value="关于《"+tit+"》和我的故事";
				Tit.focus();
			}else{
				return false;
			}
		})
		btn.addEventListener("click",function(){			
			if(Files.value!==""&&Tit.value!==""&&Article.value!==""){
				if(Article.value.length<200){
					alertBox("发布文章不能小于200字");
				}else{
					console.log(Files.files.length);
				}
			}else{
				alertBox("发布信息不足");
			}
		
		});
		Abolish.addEventListener("click",function(){
			Bbox.style.display="none";
			Files.value=Tit.value=Article.value="";
		})
		function alertBox(txt){
			AlertBox.style.display="block";
			AlertBox.innerHTML=txt;
			setTimeout(function(){
				AlertBox.style.display="none";
			},1000)
		}
	};
	publish();
}
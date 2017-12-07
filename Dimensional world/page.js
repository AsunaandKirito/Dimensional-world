window.onload=function(){
function roatsingBox(){
		var oBox=document.getElementsByClassName('cubeBoxImg')[0];
		console.log(oBox);
		var x=36;
		var y=-36;
		var ctrl=x*2;
		oBox.onmousedown=function(event)
		{
			var event=event||event;
			var disX=event.clientX-y;
			console.log(disX);
			var disY=event.clientY-x;
			console.log(disY);
			document.onmousemove=function(event)
			{
				var event=event||event;
				x=-(event.clientY-disY);
				console.log(x);
				y=event.clientX-disX+ctrl;
				console.log(y);
				oBox.style.transform='perspective(800px) rotateX('+x+'deg) rotateY('+y+'deg)';
				x=x*(-1);
				ctrl=0;
			};
			document.onmouseup=function()
			{
				document.onmousemove=null;
				document.onmouseup=null;
			};
			
		};

}
roatsingBox();
function touchClick(){
	var oBox=document.getElementsByClassName('cubeBoxImg')[0];
	   oBox.addEventListener("touchstart",touch,false);
       oBox.addEventListener("touchmove",touch,false);
       oBox.addEventListener("touchend",touch,false);
       var x1;
       var y1;
       var x=36;
       var y=-36;
       var ctrl=x*2;
 		function touch(event){
            var event=event||window.event;
            switch(event.type){
                case "touchstart":
                    x1=event.touches[0].clientX-y;
                    y1=event.touches[0].clientY-x;
                   // document.ontouchstart=function{
                   //  	return false;
                   //  };
                    break;
                 case "touchmove":
                    x=-(event.touches[0].clientY-y1);
                    y=event.touches[0].clientX-x1+ctrl;    		
                    oBox.style.transform='perspective(800px) rotateX('+x+'deg) rotateY('+y+'deg)';
                    x=x*(-1);
                    break;
                    case "touchend":
                    ctrl=0;
                    // document.ontouchstart=function{
                    // 	return true;
                    // };
                    break;
            }
        }
}
touchClick();
function roasting(){
	var recommend=document.getElementsByClassName("recommend");
	var pageNumber=document.getElementById("pageNumber");
	var liTag=pageNumber.getElementsByTagName("li");
	var a=0;
	var timer;
	function temp(a){
		/*用于判段状态0 1 2*/
		 switch(a){
				case 0:
					recommend[0].style.display="block";
					recommend[1].style.display="none";
					recommend[2].style.display="none";
					liTag[0].className="the_style";
					liTag[1].className="";
					liTag[2].className="";
					break;
				case 1:
					recommend[0].style.display="none";
					recommend[1].style.display="block";
					recommend[2].style.display="none";
					liTag[0].className="";
					liTag[1].className="the_style";
					liTag[2].className="";
					break;
				case 2:
					recommend[0].style.display="none";
					recommend[1].style.display="none";
					recommend[2].style.display="block";
					liTag[0].className="";
					liTag[1].className="";
					liTag[2].className="the_style";
					break;
				default:
					break;
		}	
	}
	/*循环*/
	function play() {
	    timer = setInterval(function () {
	       a++;
	       if(a>2){
	       	a=0;
	       }
	      temp(a);
	    }, 3000)
	}
	play();

	liTag[0].onclick=function(){
		clearInterval(timer);
		a=0;
		temp(a);
		setTimeout(play(),2000);
	}
	liTag[1].onclick=function(){
		clearInterval(timer);
		a=1;
		temp(a);
		setTimeout(play(),2000);
	}
	liTag[2].onclick=function(){
		clearInterval(timer);	
		a=2;
		temp(a);
		setTimeout(play(),2000);
	}
}
roasting();
}
$(document).ready(function(){
	$(".imagesdiv img").click(function(){
		var cH=(document.documentElement.clientHeight||document.body.clientHeight)+'px';
		$(".imagesdiv").append("<div class='previewImg'></div>");
		$(".imagesdiv .previewImg").append('<img class="previewImgCss" width='+cH+' src='+this.src+'>');
		$(".imagesdiv .previewImg .previewImgCss").click(function(){
				$(".imagesdiv .previewImg").fadeOut(500,function(){
					$(".imagesdiv .previewImg").remove();
				});
		});
	});
	
	$(".logoDiv .logo").click(function(){
		$(this).fadeOut(500).fadeIn(1000);
	})
	/*cubeClick*/
		$(".cubeBoxImg div").dblclick(function(){
			var cH=(document.documentElement.clientHeight||document.body.clientHeight)+'px';
			$(".cubeBox").append("<div class='previewImg'></div>");
			$(".cubeBox .previewImg").append('<img class="previewImgCss" width='+cH+' src='+this.style.backgroundImage.replace("url(","").replace(")","")+'>');
			$(".cubeBox .previewImg .previewImgCss").click(function(){
					$(".cubeBox .previewImg").fadeOut(500,function(){
						$(".cubeBox .previewImg").remove();
					});
			});
	});
});

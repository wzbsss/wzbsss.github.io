
	// 选项卡   
	// btn选项卡按钮及父级   
	// con选项卡内容
	function xxka(btn,con){
		for(var i=0;i<btn.length;i++){
		btn[i].ind=i;
		btn[i].onmouseover=function(){
			
			// con[this.ind].style.transition="height 2s";
			con[this.ind].style.display="block";
		}
		btn[i].onmouseout=function(){
			con[this.ind].style.display="none";
		}
	}
}





// 遮罩 
// a  父级
// b  效果 出现 隐藏的子级
function zhezhu(box1,box2){
	for(let i=0;i<box1.length;i++){
		box1[i].onmouseover=function(){
			box2[i].style.opacity=0.5;
		}
		box1[i].onmouseout=function(){
			box2[i].style.opacity=0;
		}
	}
}



		//轮播图  
			
	//z2           轮播图层级 			z-index之后的升级数字				（数字）     	  2
	//z1           初始图层级 			z-index之后的初始数字				（数字）     	  1
	//tu1           banner图 		 网站中的banner图选择器名称       	 （字符选择器） 	".tu"
	//banner       banner图背景		  网站中的banner背景选择器名称    	 （字符选择器） 	".banner"
	//li           轮播点  			网站中的轮播点选择器名称             （字符选择器）   ".box ul li"   
	//colorarr     背景图颜色 			 在数组中分别填入颜色    			（数组）    ["green","red","blue"]
	//lbcolor     选中轮播点颜色 			 填入颜色            			（数组）		"#fff"
	//lbcolor2    初始轮播点颜色 			 填入颜色            			（数组）		"orange"
	//js             轮播时间  				 填入时间 						（数组）		1000
	//youbtn		右键					网站中右键的名称															".jiantou_you"
	//zuobtn		左键					网站中左键的名称														".jiantou_zuo"



		function Zlunbo(pic,bigbannerBox,lunbodian,colorArr,tuBigZ,liactivebgColor,lunboTime,donghuaTime,tuZ,lisColor,type=1){
if(type==0){
		var flag=true;	
		const tupian=$(pic);
		const banner=$(bigbannerBox)[0];
		const li=$(lunbodian);
		const color=colorArr;
		const leftbtn=$(left)[0];
		const rightbtn=$(right)[0];
		tupian[0].style.zIndex=tuBigZ;
		li[0].style.background=liactivebgColor;
		banner.style.background=color[0];
		var num=0;
		var t=setInterval(move,lunboTime);
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(move,lunboTime);
		}
		
			for(let j=0;j<li.length;j++){
			li[j].onmouseover=function(){
				if(flag){
				flag=false;
			for(let i=0;i<tupian.length;i++){
				tupian[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;
			}
			tupian[j].style.zIndex=tuBigZ;
			li[j].style.background=liactivebgColor;
			// banner.style.background=color[j];
			num=j;
			flag=true;
			}
			}
		}
		leftbtn.onmouseover=function(){
			clearInterval(t);
		}
		leftbtn.onclick=function(){
			if(flag){
			move("l");	
			}
			
		}
		rightbtn.onmouseover=function(){
			clearInterval(t);
		}
		rightbtn.onclick=function(){
			if(flag){
			move("r");	
			}
		}
		function move(type="l"){
			if(flag){

				flag=false;
				if(type=="l"){
			num++;
			if(num>tupian.length-1){
				num=0;
			}
		}if(type=="r"){
			num--;
			if(num<0){
				num=tupian.length-1;
			}
		}
			for(let i=0;i<tupian.length;i++){
				tupian[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;
			}
			tupian[num].style.zIndex=tuBigZ;
			li[num].style.background=liactivebgColor;
			// banner.style.background=color[num];
			flag=true;
			}
		}
		}
		


		else if(type==1){
			const tupian=$(pic);
			const banner=$(bigbannerBox)[0];
			const li=$(lunbodian);
			// const leftbtn=$(left)[0];
			// const rightbtn=$(right)[0];
			const color=colorArr;
			tupian[0].style.opacity=1;
			li[0].style.background=liactivebgColor;
			banner.style.background=color[0];
			var flag=true;
			var num=0;
			var t=setInterval(move,lunboTime);
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t=setInterval(move,lunboTime);
			}

			for(let j=0;j<li.length;j++){
				li[j].onmouseover=function(){
					clearInterval(t);
				if(flag){
				flag=false;
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.zIndex=tuZ;
					tupian[i].style.opacity=0.1;
					li[i].style.background=lisColor;

				}
				tupian[j].style.zIndex=tuBigZ;
				banner.style.background=color[j];
				li[j].style.background=liactivebgColor;
				animate(tupian[j],{opacity:1},donghuaTime,function(){
				flag=true;
				
				num=j;	
				});			
			}
		}
	}

		// 	leftbtn.onmouseover=function(){
		// 	clearInterval(t);
		// }

		// leftbtn.onclick=function(){
		// 	if(flag){
		// 	move("l");	
		// 	}
			
		// }

		// rightbtn.onmouseover=function(){
		// 	clearInterval(t);
		// }

		// rightbtn.onclick=function(){
		// 	if(flag){
		// 	move("r");	
		// 	}
		// }
		window.onblur=function(){
			clearInterval(t);
		}
		window.onfocus=function(){
			t=setInterval(move,1000);
		}
	function move(type="l"){			
			flag=false;
			if(type=="l"){
			num++;
			if(num>tupian.length-1){
				num=0;
			}
			}else 
			if(type=="r"){
			num--;
			if(num<0){
				num=tupian.length-1;
			}
		}
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.zIndex=tuZ;
					tupian[i].style.opacity=0.1;
					li[i].style.background=lisColor;
				}
				tupian[num].style.zIndex=tuBigZ;
				
				li[num].style.background=liactivebgColor;
				banner.style.background=color[num];
				animate(tupian[num],{opacity:1},donghuaTime,function(){
					flag=true;
				});
				
			
			}
		}
	}



	// function lunbo(pic,bigbannerBox,lunbodian,colorArr,tuBigZ,liactivebgColor,lisColor,lunboTime,donghuaTime,tuZ,type=1){
	// 		if(type==0){
	// 	var flag=true;	
	// 	const tupian=$(pic);
	// 	const banner=$(bigbannerBox)[0];
	// 	const li=$(lunbodian);
	// 	const color=colorArr;
		
	// 	// const leftbtn=$(left)[0];
	// 	// const rightbtn=$(right)[0];
	// 	tupian[0].style.zIndex=tuBigZ;
	// 	li[0].style.background=liactivebgColor;
	// 	banner.style.background=color[0];
	// 	var num=0;
	// 	var t=setInterval(move,lunboTime);
	// 	banner.onmouseover=function(){
	// 		clearInterval(t);
	// 	}
	// 	banner.onmouseout=function(){
	// 		t=setInterval(move,lunboTime);
	// 	}
		
	// 		for(let j=0;j<li.length;j++){
	// 		li[j].onmouseover=function(){
	// 			if(flag){
	// 			flag=false;
	// 		for(let i=0;i<tupian.length;i++){
	// 			tupian[i].style.zIndex=tuZ;
	// 			li[i].style.background=lisColor;
	// 		}
	// 		tupian[j].style.zIndex=tuBigZ;
	// 		li[j].style.background=liactivebgColor;

	// 		banner.style.background=color[j];
	// 		num=j;
	// 		flag=true;
	// 		}
	// 		}
	// 	}
	// 	// leftbtn.onmouseover=function(){
	// 	// 	clearInterval(t);
	// 	// }
	// 	// leftbtn.onclick=function(){
	// 	// 	if(flag){
	// 	// 	move("l");	
	// 	// 	}
			
	// 	// }
	// 	// rightbtn.onmouseover=function(){
	// 	// 	clearInterval(t);
	// 	// }
	// 	// rightbtn.onclick=function(){
	// 	// 	if(flag){
	// 	// 	move("r");	
	// 	// 	}
	// 	// }
	// 	function move(type="l"){
	// 		if(flag){

	// 			flag=false;
	// 			if(type=="l"){
	// 		num++;
	// 		if(num>tupian.length-1){
	// 			num=0;
	// 		}
	// 	}if(type=="r"){
	// 		num--;
	// 		if(num<0){
	// 			num=tupian.length-1;
	// 		}
	// 	}
	// 		for(let i=0;i<tupian.length;i++){
	// 			tupian[i].style.zIndex=tuZ;
	// 			li[i].style.background=lisColor;
	// 		}
	// 		tupian[num].style.zIndex=tuBigZ;
	// 		li[num].style.background=liactivebgColor;
	// 		banner.style.background=color[num];
	// 		flag=true;
	// 		}
	// 	}
	// 	}
		


	// 	else if(type==1){
	// 		const tupian=$(pic);
	// 		const banner=$(bigbannerBox)[0];
	// 		const li=$(lunbodian);
	// 		// const leftbtn=$(left)[0];
	// 		// const rightbtn=$(right)[0];
	// 		const color=colorArr;

	// 		tupian[0].style.opacity=1;
	// 		li[0].style.background=liactivebgColor;
	// 		banner.style.background=color[0];
	// 		var flag=true;
	// 		var num=0;
	// 		var t=setInterval(move,lunboTime);
	// 		banner.onmouseover=function(){
	// 			clearInterval(t);
	// 		}
	// 		banner.onmouseout=function(){
	// 			t=setInterval(move,lunboTime);
	// 		}

	// 		for(let j=0;j<li.length;j++){
	// 			li[j].onmouseover=function(){
	// 				clearInterval(t);
	// 			if(flag){
	// 			flag=false;
	// 			for(let i=0;i<tupian.length;i++){
	// 				tupian[i].style.zIndex=tuZ;
	// 				tupian[i].style.opacity=0.1;
	// 				li[i].style.background=lisColor;

	// 			}
	// 			tupian[j].style.zIndex=tuBigZ;
	// 			banner.style.background=color[j];
	// 			li[j].style.background=liactivebgColor;
	// 			animate(tupian[j],{opacity:1},donghuaTime,function(){
	// 			flag=true;
				
	// 			num=j;	
	// 			});			
	// 		}
	// 	}
	// }

	// 	// 	leftbtn.onmouseover=function(){
	// 	// 	clearInterval(t);
	// 	// }

	// 	// leftbtn.onclick=function(){
	// 	// 	if(flag){
	// 	// 	move("l");	
	// 	// 	}
			
	// 	// }

	// 	// rightbtn.onmouseover=function(){
	// 	// 	clearInterval(t);
	// 	// }

	// 	// rightbtn.onclick=function(){
	// 	// 	if(flag){
	// 	// 	move("r");	
	// 	// 	}
	// 	// }
	// 	window.onblur=function(){
	// 		clearInterval(t);
	// 	}
	// 	window.onfocus=function(){
	// 		t=setInterval(move,1000);
	// 	}
	// function move(type="l"){			
	// 		flag=false;
	// 		if(type=="l"){
	// 		num++;
	// 		if(num>tupian.length-1){
	// 			num=0;
	// 		}
	// 		}else 
	// 		if(type=="r"){
	// 		num--;
	// 		if(num<0){
	// 			num=tupian.length-1;
	// 		}
	// 	}
	// 			for(let i=0;i<tupian.length;i++){
	// 				tupian[i].style.zIndex=tuZ;
	// 				tupian[i].style.opacity=0.08;
	// 				li[i].style.background=lisColor;
	// 			}
	// 			tupian[num].style.zIndex=tuBigZ;
				
	// 			li[num].style.background=liactivebgColor;
	// 			banner.style.background=color[num];

	// 			animate(tupian[num],{opacity:1},donghuaTime,function(){
	// 				flag=true;
	// 			});
				
			
	// 		}
	// 	}
	// 	}




		function lunbo3(tu1,banner1,li1,colorarr,z2,lbcolor,lbcolor2,js,z1,youbtn,zuobtn){
			const tu=$(tu1);//banner图
			const banner =$(banner1)[0];//banner背景只有一个
			const li=$(li1);//轮播点 
			const color=colorarr//背景图颜色
			const youfan=$(youbtn)[0];
			const zuofan=$(zuobtn)[0];
			// console.log(zuofan);
			// console.log(youfan);
			tu[0].style.zIndex=z1;//轮播图层级
			li[0].style.background=lbcolor;//选中轮播点颜色
			banner.style.background=colorarr[0];
			var flag=true;
			var num=0;
			var t=setInterval(move,js);//轮播时间
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t=setInterval(move,js);//轮播时间
			}
		function move(type="l"){
			flag=false;
			if(type=="l"){
				num++;
				if(num>=tu.length){
					num=0;
				}
			}else if(type=="r"){
				num--;
				if(num<0){
				num=tu.length-1;
			}
			}
				for(let i=0;i<tu.length;i++){
					tu[i].style.zIndex=z1;//初始图层级
					tu[i].style.opacity=0;
					li[i].style.background=lbcolor2//初始轮播点颜色
				}
				tu[num].style.zIndex=z2;//轮播图层级
				
				banner.style.background=colorarr[num];
				li[num].style.background=lbcolor;//选中轮播点颜色
				animate(tu[num],{opacity:1},800,function(){
					flag=true;
				});
				
			}

		youfan.onmouseover=function(){
			clearInterval(t);
		}
		zuofan.onmouseover=function(){
			clearInterval(t);
		}
		
		youfan.onmousedown=function(){
			// console.log(num);
			clearInterval(t);
			if(flag){
			move("l")}
		}
		youfan.onmouseup=function(){
			t=setInterval(move,js);
		}

		zuofan.onmousedown=function(){
			
			clearInterval(t);
			if(flag){
			move("r")};
		}
		zuofan.onmouseup=function(){
			t=setInterval(move,js);
		}
		for(let j=0;j<li.length;j++){
			li[j].onmouseover=function(){
			clearInterval(t);
				if(flag){
				for (let i=0; i<tu.length; i++) {
					tu[i].style.opacity=0;
					tu[i].style.zIndex=z1;//初始图层级					
					li[i].style.background=lbcolor2//初始轮播点颜色
				}
				tu[j].style.zIndex=z2;//轮播图层级
				animate(tu[num],{opacity:1},800);
				banner.style.background=colorarr[j];
				li[j].style.background=lbcolor;//选中轮播点颜色
				num=j;}
				
			}
		}
		window.onblur=function(){
			clearInterval(t);
		}
		window.onfocus=function(){
			t=setInterval(move,1000);
		}
	}





// 获取轮播图       	  ".tu"       		tu1
//获取轮播图盒子		".img"				hezi
//获取左按钮			".leftBtn"			zuo
//获取右按钮			".rightBtn"			you
//获取轮播点			".box ul li"		li	
//动效时间					500      	    t2	
//自动播放时间				1000			t1
//普通轮播点颜色  		 "orange"			s1
//初始化第一个轮播点颜色   "#fff"			s2


			function sxlunbo(tu1,hezi,t1,t2){
			const tu =$(tu1);//获取轮播图
			const img=$(hezi)[0];//获取轮播图盒子
			// const leftBtn=$(zuo)[0];//获取左按钮
			// const rightBtn=$(you)[0];//获取右按钮
			// const li=$(lis);//获取轮播点 
			const imgw=parseInt(window.getComputedStyle(img,null).height);//获取轮播图宽度

			// 初始化
			var flag=true;//定义开关初始值
			for (let i=0; i<tu.length;i++){
				tu[i].style.top=imgw+"px";
			}//遍历轮播图，并把轮播图放在右边
			tu[0].style.top=0;//第一张轮播图放在中间，显示出来

			// li[0].style.background=s2;//初始化第一个轮播点颜色为白色

			var t=setInterval(move,t1);//自动播放时间//定义自动播放的效果

			var now=0;//当前轮播图初始值--下标
			var next=0;//其他轮播图初始值--下标

			// 轮播效果函数
			function move(type="l"){//默认左按钮入口
				flag=false;//默认开关为关闭状态
				if(type=="l"){//左按钮入口
				next++;//其他轮播图初始值不同于当前轮播图初始值，从右向左
				if(next>tu.length-1){ //移至最后一页
					next=0;//其他轮播图值返回0;
				}	
				tu[next].style.top=imgw+"px";//其他轮播图移出当前画面
				animate(tu[now],{top:-imgw},t2);//动效时间//当前画面用动画播放方式移动	
			}


			else if(type=="r"){  //右按钮入口
				next--;    //其他轮播图初始值不同于当前轮播图初始值，从左向右
				if (next<0){ //移至第一页
					next=tu.length-1;// 其他轮播图值返回最后一页
				}
				tu[next].style.top=-imgw+"px";//其他轮播图移出当前画面
				animate(tu[now],{top:imgw},t2);//当前画面动画播放
			}

				animate(tu[next],{top:0},500,function(){flag=true;//循环播放后开关打开
					// li[next].style.background=s2;//其他轮播点显示白色
					// li[now].style.background=s1;//当前轮播点显示橘色
					now=next;//因为最后一个now后面没有next，把最后一个赋值给now,重新进行下一轮循环 
				});				
}
			img.onmouseover=function(){
				clearInterval(t)
			}
			img.onmouseout=function(){
				t=setInterval(move,t1);
			}
		// 	leftBtn.onmouseover=function(){
		// 		clearInterval(t)
		// 	}
		// 	leftBtn.onclick=function(){
		// 		if(flag){
		// 		move("l");
		// 		}
		// 	}
		// 	rightBtn.onmouseover=function(){
		// 		clearInterval(t)
		// 	}

		// 	rightBtn.onclick=function(){
		// 		if(flag){
		// 			move("r");
		// 		}
		// 	}
		// 	for(let j=0;j<li.length;j++){
		// 	li[j].onmouseover=function(){
		// 		clearInterval(t);
		// 		if(flag){
		// 		for (let i = 0; i <li.length; i++) {					
		// 			tu[i].style.top=imgw+"px";					
		// 			li[i].style.background=s1;
		// 		}
		// 		tu[j].style.top=0;
		// 		// animate(tu[j],{left:0},500);				
		// 		li[j].style.background=s2;
		// 		now=j;
		// 		next=j;

		// 		}
		// 	}			
		// }
		window.onblur=function(){
			clearInterval(t);
		}
		window.onfocus=function(){
			t=setInterval(move,1000);
		}
	}
	//节点左右轮播
	// imgBox:放banner图的盒子，宽度要设长；
	// zuojian:左边按钮；
	// youjian:右边按钮；
	// bigBox:放banner图和按钮的盒子；
	// bannerTu:要轮播的banner图；
	// num:一次要轮播的图片数量；
	// lunboshijian:轮播时间；
	// donghuashijian：动画完成的时间
	function jiedianlunbo(imgBox,bannerTu,num,donghuashijian,zuojian,youjian){
		const box=$(imgBox)[0];
		const leftBtn=$(zuojian)[0];
		const rightBtn=$(youjian)[0];
		// const banner=$(bigBox)[0];
		const img=$(bannerTu);
		const imgw=parseInt(window.getComputedStyle(img[0],null).width);

		var flag=true;
		let n=num;
		// var t=setInterval(move,lunboshijian);
		function move(type="r"){
			flag=false;
			if(type=="r"){
				animate(box,{left:-imgw},donghuashijian,function(){
					for(let i=0;i<n;i++){
						let first=box.firstElementChild;
						box.appendChild(first);
					}
					box.style.left=0;
					flag=true;
				});
			}else if(type=="l"){
				for(let i=0;i<n;i++){
					let last=box.lastElementChild;
					let first=box.firstElementChild;
					box.insertBefore(last,first);
				}
				box.style.left=-imgw+"px";
				animate(box,{left:0},donghuashijian,
				function(){
					flag=true;
				});
			}
			
		}
		// banner.onmouseover=function(){
		// 	clearInterval(t);
		// }
		// banner.onmouseout=function(){
		// 	t=setInterval(move,1000);
		// }
		leftBtn.onclick=function(){
			if(flag){
				move("l");
			}
		}
		rightBtn.onclick=function(){
			if(flag){
				move("r");
			}
		}
		// window.onblur=function(){
		// 	clearInterval(t);
		// }
		// window.onfocus=function(){
		// 	t=setInterval(move,1000);
		// }
	}


//解决scrollTop兼容性 
function scrollobj(){
		// let body=document.body;
		// let html=document.documentElement;
		// body.scrollTop=1;
		// html.scrollTop=1;
		// let obj;
		// if(body.scrollTop==0){
		// 	obj=html;
		// }else{
		// 	obj=body;
		// }
		// return obj;

		// 第二种方法
		document.body.scrollTop=1;
		document.documentElement.scrollTop=1;//赋不上值
		let obj=document.body.scrollTop?document.body:document.documentElement;

			return obj;

}

    // 楼层跳转（里面还有两个参数为定义：高度和颜色）
    // const btnBox = $(".btnBox")[0];
    // const btn = $(".btnBox li ");
    // const floor = $("section");
    // const nav = $("nav")[0];
    // const footer = $("footer")[0];
    function tiaozhuan(btnBox,btn,floor,footers){
        const CH = document.documentElement.clientHeight;
        let sobj = scrollobj();

        // 楼层跳转
        for(let i=0;i<btn.length;i++){
            btn[i].onclick=function(){
                animate(sobj,{scrollTop:floor[i].offsetTop+255},500);
            }
        }

        // 导航
        let flagx = true;   //开关向下走
        let flags = false;   //开关下上走
        window.onscroll=function(){
            for(let i=0;i<floor.length;i++){
                if(sobj.scrollTop+0.5*CH>=floor[i].offsetTop+255){
                    for(let j=0;j<floor.length;j++){
                        // btn[j].style.background="#999";
                        btn[j].classList.remove("fixed_active");
                    }
                    // let colorT =$(".beauty_top i",floor[i])[0].style.backgroundColor;
                    // btn[i].style.background="red";
                    btn[i].classList.add("fixed_active");
                }
                // 按需加载，需要某个楼层的图片再让他出现
                // console.log(floor[i])
                if(sobj.scrollTop+CH>=floor[i].offsetTop){
                	let img = $("img",floor[i]);
                	for(let j=0;j<img.length;j++){
                	
                		img[j].src=img[j].getAttribute("imgu");
                	}
                }
            }
            if(sobj.scrollTop>=750){
                if(flagx){
                    flagx=false;
                    flags=true;

                }
                btnBox.style.display="block";
            }

            else{
                if(flags){
                    flags=false;
                    flagx=true;
                    // animate(nav,{top:-50},500,function(){
                    // 	flags=true;
                    // });
                }
                btnBox.style.display="none";
            }
        }
        // setTimeout(function(){
        // 	animate(nav,{top:-50},function(){
        // 		flags=true;
        // 	});
        // },1000)
    }


function shangxialunbo(box){
			const aa=$(box);
			let t=setInterval(move,4000);
		    function move(){
		    	for(let i=0;i<aa.length;i++){
		    		let first=aa[i].children[0];
			    	let last=aa[i].children[aa[i].children.length-1];
				    animate(first,{marginTop:-40},500,function(){
				    	aa[i].appendChild(first);
				    	animate(first,{marginTop:0},500);
				    });
		    	}
		    	
		    }
	    }
function shangxialunbo2(box){
		const aa=$(box);
		let t=setInterval(move,4000);
	    function move(){
	    	for(let i=0;i<aa.length;i++){
	    		let first=aa[i].children[0];
		    	let last=aa[i].children[aa[i].children.length-1];
			    animate(first,{marginTop:-30},500,function(){
			    	aa[i].appendChild(first);
			    	animate(first,{marginTop:0},500);
			    });
	    	}
	    	
	    }
	}
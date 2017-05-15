$(function () {
    //banner图
    function zlunbo2(pic,bigbannerBox,lunbodian,tuBigZ,lunboTime,donghuaTime,tuZ,left,right){
            const tupian=$(pic);
            const banner=$(bigbannerBox)[0];
            const li=$(lunbodian);
            const leftbtn=$(left)[0];
            const rightbtn=$(right)[0];
            tupian[0].style.opacity=1;
            tupian[0].style.zIndex=tuBigZ;
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
                            tupian[i].style.opacity=0.05;
                            li[i].classList.remove("active");
                        }
                        tupian[j].style.zIndex=tuBigZ;
                        li[j].classList.add("active");
                        animate(tupian[j],{opacity:1},donghuaTime,
                            function(){
                            flag=true;
                            num=j;
                        });
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
            window.onblur=function(){
                clearInterval(t);
            }
            window.onfocus=function(){
                t=setInterval(move,3000);
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
                    tupian[i].style.opacity=0.05;
                    li[i].classList.remove("active");
                }
                tupian[num].style.zIndex=tuBigZ;
                li[num].classList.add("active");
                animate(tupian[num],{opacity:1},donghuaTime,function(){

                    flag=true;
                });
            }
        }
    zlunbo2(".tab_pannel",".pannels",".lbd ul li",9,3000,500,1,".zuo",".you");
//    banner图完



    aa(".brand_content ul li",".prlist","act");
    aa(".tk_nav ul li",".pro_list","acti");
    function aa(tjs,tht,act) {
        const tj=$(tjs);
        const  tjt=$(tht);
        tj[0].classList.add(act);
        tjt[0].style.display="block";
        for(let i=0;i<tj.length;i++){
            tj[i].onmouseover=function(){
                for(let j=0;j<tj.length;j++){
                    tj[j].classList.remove(act);
                    tjt[j].style.display="none";
                }
                tj[i].classList.add(act);
                tjt[i].style.display="block";
            }
        }
    }

//商品的左右轮播
    jiedianlunbo(".s1",".s1 div",1,500,".e1",".n1");
    jiedianlunbo(".s2",".s2 div",1,500,".e2",".n2");
    jiedianlunbo(".s3",".s3 div",1,500,".e3",".n3");
    jiedianlunbo(".s4",".s4 div",1,500,".e4",".n4");
    jiedianlunbo(".s5",".s5 div",1,500,".e5",".n5");
    jiedianlunbo(".s6",".s6 div",1,500,".e6",".n6");
    jiedianlunbo(".s7",".s7 div",1,500,".e7",".n7");
    jiedianlunbo(".s8",".s8 div",1,500,".e8",".n8");
    jiedianlunbo(".s9",".s9 div",1,500,".e9",".n9");



function jiedianlunbo2(imgBox,bannerTu,num,donghuashijian,zuojian,youjian,lunbodian,activeClass){
    const box=$(imgBox)[0];
    const leftBtn=$(zuojian)[0];
    const rightBtn=$(youjian)[0];
    const img=$(bannerTu);
    const li=$(lunbodian);
    const imgw=parseInt(window.getComputedStyle(img[0],null).width);

    var flag=true;
    let n=num;
    function move(type="r"){
        flag=false;
        if(type=="r"){
            animate(box,{left:-imgw},donghuashijian,function(){
                for(let i=0;i<n;i++){
                    let first=box.firstElementChild;
                    box.appendChild(first);
                    for(let j=0;j<li.length;j++){
                    li[j].classList.add(activeClass);
                    }
                    li[i].classList.remove(activeClass);
                }


                box.style.left=0;
                leftBtn.style.pointerEvents="auto";
                rightBtn.style.pointerEvents="none";
                flag=true;
            });
        }else if(type=="l"){
            for(let i=0;i<n;i++){
                let last=box.lastElementChild;
                let first=box.firstElementChild;
                box.insertBefore(last,first);
                for(let j=0;j<li.length;j++){
                    li[j].classList.remove(activeClass);
                }
                li[i].classList.add(activeClass);
            }
            box.style.left=-imgw+"px";
            animate(box,{left:0},donghuashijian,
                function(){
                    leftBtn.style.pointerEvents="none";
                    rightBtn.style.pointerEvents="auto";
                    flag=true;
                });
        }

    }

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
    for(let i=0;i<li.length;i++){
        li[i].onclick=function(){
            for(let j=0;j<li.length;j++){
                li[j].classList.remove(activeClass);
                li[i].classList.add(activeClass);
                if(i>j){
                    if(flag){
                        move("r");
                    }
                }else if(i<j){
                    if(flag){
                        move("l")
                    }
                }

            }
        }
    }
}
    jiedianlunbo2(".eva1",".eva1 a",1,500,".z1",".y1",".fll1 ul li","ac");
    jiedianlunbo2(".eva2",".eva2 a",1,500,".z2",".y2",".fll2 ul li","ac");

// 右部固定
    const btnBox = $(".fixed_right")[0];
    const btn5 = $(".fix_list");
    const floor = $(".yt_floor_item");
    const footer = $(".footers")[0];
    tiaozhuan(btnBox,btn5,floor,footer);
    let sobj = scrollobj();
    footer.onclick=function(){
        animate(sobj,{scrollTop:0},500);
    }

});
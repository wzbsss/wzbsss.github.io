$(function () {
    const drop=$(".middleLeft .dropdown")[0];
    const chux=$(".middleLeft #divdishi li a span")[0];
    const shanxi=$(".dropdown-menu");
    const body=$("body")[0];
    drop.onclick=function (e) {
        e.stopPropagation();
        shanxi[2].style.display="block";
        shanxi[3].style.display="none";
        
    }
    body.onclick=function(){
        shanxi[2].style.display="none";
        shanxi[3].style.display="none";
    }
    chux.onclick=function (e) {
        e.stopPropagation();
        shanxi[3].style.display="block";       
        shanxi[2].style.display="none";
    }
    const down=$(".drop");
    const menu=$(".navbar .dropdown-menu");
    const ins=$(".navbar-nav li ins");
    xxka(down,menu,ins);

//    轮播图
    zylunbo(".item",".bs-example",".carousel-inner",".carousel-indicators li",".lbnext",".lbpre",3000,500,"active")


//轮播下面
jiedianlunbo(".yhcx",".yhgundong",".indexbox",1,4000,500,".yhnext",".yhpre")

//公告部分的轮播
function jiedianlunbo2(imgBox,bannerTu,num,donghuashijian,zuojian,youjian){
    const box=$(imgBox)[0];
    const leftBtn=$(zuojian)[0];
    const rightBtn=$(youjian)[0];
    const img=$(bannerTu);
    const imgw=parseInt(window.getComputedStyle(img[0],null).width);
    var flag=true;
    let n=num;
    // var t=setInterval(move,lunboshijian);
    function move(type="l"){
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
    leftBtn.onclick=function(){
        if(flag){
            // clearInterval(t);
            move("l");
        }
    }
    rightBtn.onclick=function(){
        if(flag){
            // clearInterval(t);
            move("r");
        }
    }
}
jiedianlunbo2(".gonggao ul ol",".gonggao ul li",1,50,".left",".right");

 //title快速显示
function Title(pic){
        const titpics=$(pic);
        const BODY=$("body")[0];
        var titk=document.createElement("div");
        BODY.appendChild(titk);
        var TITLE;
        titk.style.cssText="position:absolute;z-index:999;background:#fff;border-radius:5px;padding:2px;"
       // titk.style.position="absolute";
       // titk.style.zIndex=999;
       // titk.style.background="#fff";
        var x=10;
        var y=20;
        titpics.forEach(function (titpic) {
            titpic.onmouseover=function (e) {
                titk.className="picK";
                TITLE=titpic.title;
                titpic.title="";
                titk.innerHTML=TITLE;
                titk.style.left=e.pageX+x+"px";
                titk.style.top=e.pageY+y+"px";
            };
            titpic.onmousemove=function (e) {
                titk.style.left=e.pageX+x+"px";
                titk.style.top=e.pageY+y+"px";
            };
            titpic.onmouseout=function () {
                titk.className="";
                titpic.title=TITLE;
                titk.innerHTML="";
            };
        });
    }
    Title("img");

//     {
//     let box=document.querySelector(".box");
//     let conta=document.querySelector(".conta");

//     let t=setInterval(move,3000);
//     let num=4;
//     function move(){
//         if(num==4||num==6){
//             box.style.transition="all 1s";
//         }
//         num++;
//         box.style.marginLeft=num*-295+"px";

//     }
//     box.addEventListener("transitionend",function(){
//         if(num==12){
//             box.style.transition="none";
//             num=4;
//             box.style.marginLeft=num*-295+"px";
//         }else if(num==0){
//             box.style.transition="none";
//             num=8;
//             box.style.marginLeft=num*-295+"px";
//         }
//         flag=true;
//     })
//     conta.onmouseover=function(){
//         clearInterval(t);
//     }
//     conta.onmouseout=function(){
//         t=setInterval(move,3000);
//     }
//     let next=document.querySelector(".next");
//     let prev=document.querySelector(".prev");
//     let flag=true;
//     next.onclick=function(){
//         if(flag){
//             flag=false;
//             move();
//         }
//     }
//     prev.onclick=function(){
//         if(flag){
//             flag=false;
//            num-=2;
//            move();
//         }
//     }
//     }
    


});
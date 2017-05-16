 window.onload=function () {
            let canvas=document.querySelector("#lizi");
            let cobj=canvas.getContext("2d");
            let x=500;
            let y=10;
            canvas.onmousemove=function (e) {
                x=e.offsetX
                y=e.offsetY;
            }

            class lizi{
                constructor(canvas,cobj){
                    this.canvas=canvas;
                    this.cobj=cobj;
                    this.r=10*Math.random();
                    this.x=x;
                    this.y=y;
                    this.speedX=6*Math.random()-2;
                    this.speedY=-5;
                    this.g=0.3;
                    this.color=`rgb(${parseInt(255*Math.random())},${parseInt(255*Math.random())},${parseInt(255*Math.random())})`
                }
                draw(){
                    this.cobj.save();
                    this.cobj.beginPath();
                    this.cobj.translate(this.x,this.y);
                    this.cobj.arc(0,0,this.r,0,Math.PI*2); //建路径 // Math.PI*2 == 2π    // 0,Math.PI*2   从0到2π
                    this.cobj.fillStyle=this.color;
                    this.cobj.fill();
                    this.cobj.restore();
                }
                updata(){
                    this.x+=this.speedX;
                    this.speedY+=this.g;
                    this.y+=this.speedY;
                }
            }



            let arr=[];
            let t=setInterval(function () {
                cobj.clearRect(0,0,1400,800);
                let liziobj=new lizi(canvas,cobj);
                arr.push(liziobj);
                for(let i=0;i<arr.length;i++){
                    arr[i].draw();
                    arr[i].updata();
                }
                if(arr.length>=200){
                    arr.shift();
                }
            },50)
        }

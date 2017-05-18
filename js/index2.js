$(function(){
    $("#fullpage").fullpage({
        slidesColor: ['#009999', '#CC6600', '#CCCC00', '#66CC66'],
        anchors:['page1','page2','page3','page4','page5','page6','page7','page8','page9','page10'],
        menu: '#menu',
        afterLoad: function(anchorLink, index){
                $(".text").eq(index-1).css({
                    transform:"scale(2,2)"
                })
                if(index==1){
                    $(".package").css({
                        transform:"rotateY(0deg)"
                    })
                }else{
                    $(".package").css({
                        transform:"rotateY(90deg)"
                    })
                }
                if(index==2){
                    $(".yunbox").css({
                        animation:"yundown 3s ease"
                    })
                }else{
                    $(".yunbox").css({
                        animation:"yunup 3s ease",
                    })
                }
                if(index==3){
                    $(".cole-left").css({
                        left:0,
                        opacity:0.8
                    })
                    $(".cole-right").css({
                        right:0,
                        opacity:0.8
                    })

                }
                if(index==4){
                    $(".pill-left").css({
                          left:0,
                          opacity:0.8
                    })
                    $(".pill-right").css({
                        right:0,
                        opacity:0.8
                    })
                    $(".pill-center").css({
                        bottom:0,
                        opacity:1
                    })
                }
                if(index==5){
                    $(".vern").css({
                        bottom:0,
                    })

                }
            if(index==6){
                $(".word").css({
                    opacity:1
                })
                $(".word-1").css({
                   left:"-162px",
                    top:"-162px"
                })
                $(".word-2").css({
                    right:"-163px",
                    top:"-162px",
                })
                $(".word-3").css({
                    right:"-163px",
                    bottom:"-163px",
                })
                $(".word-4").css({
                    left:"-162px",
                    bottom:"-163px",
                })

            }
        },
        onLeave: function(index, nextIndex, direction){
            $(".text").eq(index-1).css({
                transform:"scale(1,1)"
            })
            if(index==1){
                $(".package").css({
                    transform:"rotateY(90deg)"
                })
            }else{
                $(".package").css({
                    transform:"rotateY(0deg)"
                })
            }
            if(index==2){
                $(".yunbox").css({
                    animation:"yunup 3s ease"
                })
            }else{
                $(".yunbox").css({
                    animation:"yundown 3s ease"
                })
            }
            if(index==3){
                $(".cole-left").css({
                    left:"-2500px",
                    opacity:0.8
                })
                $(".cole-right").css({
                    right:"-2500px",
                    opacity:0.8
                })

            }
            if(index==4){
                $(".pill-left").css({
                    left:"-300px",
                    opacity:"0"
                })
                $(".pill-right").css({
                    right:"-300px",
                    opacity:"0"
                })
                $(".pill-center").css({
                    bottom:"-650px",
                    opacity:0
                })
            }
            if(index==5){
                $(".vern").css({
                    bottom:"-500px"
                })

            }
            if(index==6){
                $(".word").css({
                    opacity:0
                })
                $(".word-1").css({
                    left:"-325px",
                    top:"-325px",
                })
                $(".word-2").css({
                    right:"-325px",
                    top:"-325px",
                })
                $(".word-3").css({
                    right:"-325px",
                    bottom:"-325px",
                })
                $(".word-4").css({
                    left:"-325px",
                    bottom:"-325px",
                })

            }
        }
    })



})
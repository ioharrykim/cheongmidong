(function($){
    $(document).ready(function(){
    console.log("jQuery Load");
    // 준비

    $(document).on("click", ".scroll-btn", function(){
        fullpage_api.moveSectionDown();
    });
    $(document).on("click", ".totop-btn", function(){
        fullpage_api.moveTo(1);
    });
    $(".easter-egg").click(function(){
        $(this).css({"display":"none"});
        $("div").remove(".click-this");
        $("#fp-nav ul li a span").css({"display":"none"});
    });

    // Fullpage js 설정
    $("#fullpage").fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        css3: true,
        scrollingSpeed: 700,
        easing: 'linear',
        easingcss3: 'ease',
        navigation: true,
        verticalCentered: true,
        responsiveWidth: 1025,

        // 페이지를 떠날 때.
        onLeave: function(origin, destination, direction) {
            console.log("onLeave");
            if (origin.index == 1) {
                $(".title-container").fadeOut({queue: false, duration: '1000'});
            }
            if (origin.index == 2) {
                $(".s2-container").fadeOut({queue: false, duration: '1000'});
                setTimeout(function(){
                    $(".artterior-circle-1").animate({
                        opacity: 0
                    }, 3000, "easeInOutQuad");
                }, 0);
                setTimeout(function(){
                    $(".artterior-circle-line").animate({
                        width: "0vw"
                    }, 1000, "easeInOutQuad");
                }, 0);
                setTimeout(function(){
                    $(".artterior-circle-2").animate({
                        opacity: 0
                    }, 3000, "easeInOutQuad");
                }, 0);
                setTimeout(function(){
                    $(".artterior-limit").animate({
                        opacity: 0
                    }, 3000, "easeInOutQuad");
                }, 0);
            }
            if (origin.index == 3) {
                $(".s3-container").fadeOut({queue: false, duration: '1000'});
                setTimeout(function(){
                    $(".sum1").animate({
                        opacity: 0
                    }, 3000, "easeInOutQuad")
                }, 0);
                /* 퍼센트 */
                var perTxt = 0;
                $({ val : 0 }).animate({ val : perTxt }, {
                duration: 100,
                step: function() {
                    var num = numberWithCommas(Math.floor(this.val));
                    $(".per").text(num);
                },
                complete: function() {
                    var num = numberWithCommas(Math.floor(this.val));
                    $(".per").text(num);
                }
                });
                /* 억원 */
                setTimeout(function(){
                    var billTxt = 0;
                $({ val : 0 }).animate({ val : billTxt }, {
                duration: 100,
                step: function() {
                    var num = numberWithCommas(Math.floor(this.val));
                    $(".bill").text(num);
                },
                complete: function() {
                    var num = numberWithCommas(Math.floor(this.val));
                    $(".bill").text(num);
                }
                });
                }, 300);
                
                function numberWithCommas(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
                setTimeout(function(){
                    $(".chart1-1").animate({
                        opacity: 0
                    }, 3000, "easeInOutQuad");
                }, 0);
                setTimeout(function(){
                    $(".chart1-2").animate({
                        opacity: 0
                    }, 3000, "easeInOutQuad");
                }, 0);
                setTimeout(function(){
                    $(".chart2-1").animate({
                        opacity: 0
                    }, 3000, "easeInOutQuad");
                }, 0);
                setTimeout(function(){
                    $(".chart2-2").animate({
                        opacity: 0
                    }, 3000, "easeInOutQuad");
                }, 0);
                setTimeout(function(){
                    $(".sum2").animate({
                        opacity: 0
                    }, 3000, "easeInOutQuad");
                }, 0);
            }
            if (origin.index == 4) {
                $(".s4-container").fadeOut({queue: false, duration: '1000'});
                $(".blueBox").animate({
                    width: "0px"
                }, 2000, "easeOutBack");
            }
            if (origin.index == 5) {
                $(".s5-container").fadeOut({queue: false, duration: '1000'});
            }
            if (origin.index == 6) {
                $(".s6-container").fadeOut({queue: false, duration: '1000'});
                setTimeout(function(){
                    $(".effect-change h2").animate({
                        opacity: 100
                    }, 1000, "easeOutSine");
                    $(".effect-change2 h2").animate({
                        opacity: 0
                    }, 1000, "easeInSine");
                }, 600);
                setTimeout(function(){
                    $(".effect-circle1").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                }, 600);
                setTimeout(function(){
                    $(".effect-circle2").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                }, 600);
            }
            if (origin.index == 7) {
                $(".s7-container").fadeOut({queue: false, duration: '1000'});
                
                setTimeout(function(){
                    $(".design-key").animate({
                        opacity: 0
                    }, 200, "easeInOutQuint");
                    $(".design-color").animate({
                        opacity: 0
                    }, 200, "easeInOutQuint");
                    $(".design-logo").animate({
                        opacity: 0
                    }, 200, "easeInOutQuint");
                    $(".design-type").animate({
                        opacity: 0
                    }, 200, "easeInOutQuint");
                    $(".blue").animate({
                        width: "0%"
                    }, 200, "easeOutBack");
                    $(".yellow").animate({
                        width: "0%"
                    }, 200, "easeInOutQuint");
                    $(".color-title").animate({
                        opacity: 0
                    }, 200, "easeInOutQuint");
                    $(".color-value").animate({
                        opacity: 0
                    }, 200, "easeInOutQuint");
                    $(".type1 h1").animate({
                        opacity: 0
                    }, 200, "easeInOutQuint");
                    $(".type2 h1").animate({
                        opacity: 0
                    }, 200, "easeInOutQuint");
                    $(".type1 h2").animate({
                        opacity: 0
                    }, 200, "easeInOutQuint");
                    $(".type2 h2").animate({
                        opacity: 0
                    }, 200, "easeInOutQuint");
                    $(".type1 h3").animate({
                        opacity: 0
                    }, 200, "easeInOutQuint");
                    $(".type2 h3").animate({
                        opacity: 0
                    }, 200, "easeInOutQuint");
                    $(".type1 h4").animate({
                        opacity: 0
                    }, 200, "easeInOutQuint");
                    $(".type2 h4").animate({
                        opacity: 0
                    }, 200, "easeInOutQuint");
                    $(".key1").animate({
                        opacity: 0
                    }, 200, "easeInOutQuint");
                    $(".key2").animate({
                        opacity: 0
                    }, 200, "easeInOutQuint");
                    $(".key3").animate({
                        opacity: 0
                    }, 200, "easeInOutQuint");
                    $(".logo1 img").animate({
                        opacity: 0
                    }, 200, "easeInOutQuint");
                    $(".logo-line").animate({
                        width: "0vw"
                    }, 200, "easeInOutQuad");
                    $(".logo2 img").animate({
                        opacity: 0
                    }, 200, "easeInOutQuint");
                }, 100);
            }
            if (origin.index == 8) {
                $(".s8-container").fadeOut({queue: false, duration: '1000'});
                setTimeout(function(){
                    $(".blue-line").animate({
                        width: "0%"
                    }, 1000, "easeInOutQuint");
                    $(".proto").animate({
                        opacity: 0
                    }, 100, "easeInOutQuint");
                    $(".app1-i img").animate({
                        opacity: 0
                    }, 100, "easeInOutQuint");
                }, 200);
            }
            if (origin.index == 9) {
                $(".s9-container").fadeOut({queue: false, duration: '1000'});
                setTimeout(function(){
                    $(".blue-line2").animate({
                        width: "0%"
                    }, 1000, "easeInOutQuint");
                    $(".proto2-1").animate({
                        opacity: 0
                    }, 100, "easeInOutQuint");
                    $(".app2-sum1").animate({
                        opacity: 0
                    }, 100, "easeInOutQuint");
                    $(".app2-sum2").animate({
                        opacity: 0
                    }, 100, "easeInOutQuint");
                    $(".proto2-2").animate({
                        opacity: 0
                    }, 100, "easeInOutQuint");
                }, 200);
            }
            if (origin.index == 10) {
                $(".s10-container").fadeOut({queue: false, duration: '1000'});
                setTimeout(function(){
                    $(".if img").animate({
                        opacity: 0
                    }, 100, "easeInOutQuint");
                    $(".ib img").animate({
                        opacity: 0
                    }, 100, "easeInOutQuint");
                    $(".proto3").animate({
                        opacity: 0
                    }, 100, "easeInOutQuint");
                    $(".app3-sum").animate({
                        opacity: 0
                    }, 100, "easeInOutQuint");
                }, 200);
            }
            if (origin.index == 11) {
                $(".s11-container").fadeOut({queue: false, duration: '1000'});
            }
            if (origin.index == 12) {
                $(".s12-container").fadeOut({queue: false, duration: '1000'});
            }
            if (origin.index == 13) {
                $(".s13-container").fadeOut({queue: false, duration: '1000'});
                $(".totop-btn").fadeOut();
                $(".scroll-btn").fadeIn();
            }
        },


        /* 페이지 로드 후 */
        afterLoad: function(origin, destination, direction) {
            if (destination.index == 1) {
                $(".title-container").fadeIn({queue: false, duration: '1000'});
            }
            if (destination.index == 2) {
                $(".s2-container").fadeIn({queue: false, duration: '1000'});
                setTimeout(function(){
                    $(".artterior-circle-1").animate({
                        opacity: 100
                    }, 3000, "easeInOutQuad")
                }, 1000);
                setTimeout(function(){
                    $(".artterior-circle-line").animate({
                        width: "15vw"
                    }, 1000, "easeInOutQuad")
                }, 1000);
                setTimeout(function(){
                    $(".artterior-circle-2").animate({
                        opacity: 100
                    }, 4000, "easeInOutQuad")
                }, 2000);
                setTimeout(function(){
                    $(".artterior-limit").animate({
                        opacity: 100
                    }, 4000, "easeInOutQuad")
                }, 4000);
                
            }
            if (destination.index == 3) {
                $(".s3-container").fadeIn({queue: false, duration: '1000'});
                setTimeout(function(){
                    $(".click-this.b1").css({"display":"block"});
                }, 2200);
                $(".low2").click(function(e){
                    e.preventDefault();
                    $(".click-this.b1").css({"display":"none"});
                });
                setTimeout(function(){
                    $(".sum1").animate({
                        opacity: 100
                    }, 4000, "easeInOutQuad")
                }, 300);
                /* 퍼센트 */
                var perTxt = 67;
                $({ val : 0 }).animate({ val : perTxt }, {
                duration: 2000,
                step: function() {
                    var num = numberWithCommas(Math.floor(this.val));
                    $(".per").text(num);
                },
                complete: function() {
                    var num = numberWithCommas(Math.floor(this.val));
                    $(".per").text(num);
                }
                });
                /* 억원 */
                setTimeout(function(){
                    var billTxt = 244;
                $({ val : 0 }).animate({ val : billTxt }, {
                duration: 2000,
                step: function() {
                    var num = numberWithCommas(Math.floor(this.val));
                    $(".bill").text(num);
                },
                complete: function() {
                    var num = numberWithCommas(Math.floor(this.val));
                    $(".bill").text(num);
                }
                });
                }, 0);
                
                function numberWithCommas(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
                setTimeout(function(){
                    $(".chart1-1").animate({
                        opacity: 100
                    }, 4000, "easeInOutQuad");
                }, 600);
                setTimeout(function(){
                    $(".chart1-2").animate({
                        opacity: 100
                    }, 4000, "easeInOutQuad");
                }, 600);
                $(".low2").click(function(){
                    $(".chart2-1").animate({
                        opacity: 100
                    }, 4000, "easeInOutQuad");
                    $(".chart2-2").animate({
                        opacity: 100
                    }, 4000, "easeInOutQuad");
                    setTimeout(function(){
                        $(".sum2").animate({
                            opacity: 100
                        }, 4000, "easeInOutQuad");
                    }, 1000);
                });
                // setTimeout(function(){
                //     $(".chart2-1").animate({
                //         opacity: 100
                //     }, 4000, "easeInOutQuad");
                // }, 6000);
                // setTimeout(function(){
                //     $(".chart2-2").animate({
                //         opacity: 100
                //     }, 4000, "easeInOutQuad");
                // }, 6000);
                // setTimeout(function(){
                //     $(".sum2").animate({
                //         opacity: 100
                //     }, 4000, "easeInOutQuad");
                // }, 6600);
            }
            if (destination.index == 4) {
                $(".s4-container").fadeIn({queue: false, duration: '1000'});
                $(".blueBox").animate({
                    width: "220px"
                }, 2000, "easeOutBack");
            }
            if (destination.index == 5) {
                $(".s5-container").fadeIn({queue: false, duration: '1000'});
                setTimeout(function(){
                    $(".click-this.b2").css({"display":"block"});
                }, 800);
                setTimeout(function(){
                    $(".func1").animate({opacity:100}, 3000, "easeInOutQuad");
                }, 600);
                $(".func1").click(function(){
                    $(".click-this.b2").css({"display":"none"});
                    $(".click-this.b3").css({"display":"block"});
                    $(".func1").animate({opacity:0}, 4000, "easeInOutQuad");
                    $(".func2").animate({opacity:100}, 4000, "easeInOutQuad");
                    setTimeout(function(){
                        $(".func1").css({
                            "display" : "none"
                        });
                    }, 500);
                });
                $(".func2").click(function(){
                    $(".click-this.b3").css({"display":"none"});
                    $(".click-this.b4").css({"display":"block"});
                    $(".func2").animate({opacity:0}, 4000, "easeInOutQuad");
                    $(".func3").animate({opacity:100}, 4000, "easeInOutQuad");
                    setTimeout(function(){
                        $(".func2").css({
                            "display" : "none"
                        });
                    }, 500);
                });
                $(".click-this.b4").click(function(){
                    $(this).css({"display":"none"});
                })
                $(".const-btn").click(function(){
                    $(".click-this.b4").css({"display":"none"});
                    $(".func").fadeOut(800);
                    $(".const").fadeIn(800);
                    setTimeout(function(){
                        $(".func-chart img").animate({opacity:0}, 600, "easeInOutQuad");
                    }, 100);
                    setTimeout(function(){
                        $(".const-chart img").animate({opacity:100}, 3000, "easeInOutQuad");
                    }, 600);
                    $(".const-btn h3").css({"color":"#FFC000"});
                    $(".func-btn h3").css({"color":"#AAA"});
                    // $(".s5").css({"backgroundColor" : "#1FAFFF"});
                });
                // $(".const-btn").mouseenter(function(){
                //     $(".const-btn h3").css({"color":"#FFC000"});
                // });
                // $(".const-btn").mouseout(function(){
                //     $(".const-btn h3").css({"color":"#AAA"});
                // });
                $(".func-btn").click(function(){
                    $(".const").fadeOut(800);
                    $(".func").fadeIn(800);
                    setTimeout(function(){
                        $(".const-chart img").animate({opacity:0}, 600, "easeInOutQuad");
                    }, 100);
                    setTimeout(function(){
                        $(".func-chart img").animate({opacity:100}, 3000, "easeInOutQuad");
                    }, 600);
                    $(".const-btn h3").css({"color":"#AAA"});
                    $(".func-btn h3").css({"color":"#1FAFFF"});
                    // $(".s5").css({"backgroundColor" : "#fff"});
                });
                // $(".func-btn").mouseenter(function(){
                //     $(".func-btn h3").css({"color":"#1FAFFF"});
                // });
                // $(".func-btn").mouseout(function(){
                //     $(".func-btn h3").css({"color":"#AAA"});
                // });
            }
            if (destination.index == 6) {
                $(".s6-container").fadeIn({queue: false, duration: '1000'});
                // setTimeout(function(){
                //     $(".effect-change h2").animate({
                //         opacity: 0
                //     }, 500, "easeInOutQuint");
                //     $(".effect-change2 h2").animate({
                //         opacity: 100
                //     }, 3000, "easeInOutQuint");
                // }, 1600);
                setTimeout(function(){
                    $(".effect-circle1").animate({
                        opacity: 100
                    }, 2000, "easeInOutQuint");
                }, 600);
                setTimeout(function(){
                    $(".click-this.b5").css({"display":"block"});
                }, 1200);
                $(".effect-circle1").click(function(){
                    $(".effect-circle2").animate({
                        opacity: 100
                    }, 2000, "easeInOutQuint");
                    $(".effect-change h2").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".effect-change2 h2").animate({
                        opacity: 100
                    }, 3000, "easeInOutQuint");
                })
                $(".effect-circle2").click(function(){
                    $(".click-this.b4").css({"display":"none"});
                    $(".effect-circle2").animate({
                        opacity: 100
                    }, 2000, "easeInOutQuint");
                    $(".effect-change h2").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".effect-change2 h2").animate({
                        opacity: 100
                    }, 3000, "easeInOutQuint");
                });
                // setTimeout(function(){
                //     $(".effect-circle2").animate({
                //         opacity: 100
                //     }, 2000, "easeInOutQuint");
                // }, 1600);
            }
            if (destination.index == 7) {
                $(".s7-container").fadeIn({queue: false, duration: '1000'});
                /* 디자인 키워드 */
                setTimeout(function(){
                    $(".design-key").animate({
                        opacity: 100
                    }, 3000, "easeInOutQuint");
                }, 300);
                setTimeout(function(){
                    $(".key1").animate({
                        opacity: 100
                    }, 3000, "easeInOutQuint");
                }, 1000);
                setTimeout(function(){
                    $(".key2").animate({
                        opacity: 100
                    }, 3000, "easeInOutQuint");
                }, 2000);
                setTimeout(function(){
                    $(".key3").animate({
                        opacity: 100
                    }, 3000, "easeInOutQuint");
                }, 3000);
                setTimeout(function(){
                    $(".click-this.b6").css({"display":"block"});
                }, 4000);
                /* 색상 */
                $(".design-color").click(function(){
                    $(".click-this.b6").css({"display":"none"});
                    $(".click-this.b7").css({"display":"block"});
                    $(".design-color").animate({
                        opacity: 100
                    }, 3000, "easeInOutQuint");
                    setTimeout(function(){
                        $(".blue").animate({
                            width: "66.6666%"
                        }, 2000, "easeOutBack");
                    }, 300);
                    setTimeout(function(){
                        $(".yellow").animate({
                            width: "33.3333%"
                        }, 2000, "easeInOutQuint");
                    }, 600);
                    setTimeout(function(){
                        $(".color-title").animate({
                            opacity: 100
                        }, 2000, "easeInOutQuint");
                        $(".color-value").animate({
                            opacity: 100
                        }, 2000, "easeInOutQuint");
                    }, 2000);
                });
                /* 로고 */
                $(".design-logo").click(function(){
                    $(".click-this.b7").css({"display":"none"});
                    $(".click-this.b8").css({"display":"block"});
                    $(".design-logo").animate({
                        opacity: 100
                    }, 3000, "easeInOutQuint");
                    setTimeout(function(){
                        $(".logo1 img").animate({
                            opacity: 100
                        }, 3000, "easeInOutQuint");
                    }, 500);
                    setTimeout(function(){
                        $(".logo-line").animate({
                            width: "2vw"
                        }, 1000, "easeInOutQuad")
                    }, 1000);
                    setTimeout(function(){
                        $(".logo2 img").animate({
                            opacity: 100
                        }, 3000, "easeInOutQuint");
                    }, 2000);
                });
                
                /* 서체 */
                $(".design-type").click(function(){
                    $(".click-this.b8").css({"display":"none"});
                    $(".design-type").animate({
                        opacity: 100
                    }, 3000, "easeInOutQuint");
                    setTimeout(function(){
                        $(".type1 h1").animate({
                            opacity: 100
                        }, 3000, "easeInOutQuint");
                        $(".type2 h1").animate({
                            opacity: 100
                        }, 3000, "easeInOutQuint");
                    }, 300);
                    setTimeout(function(){
                        $(".type1 h2").animate({
                            opacity: 100
                        }, 3000, "easeInOutQuint");
                        $(".type2 h2").animate({
                            opacity: 100
                        }, 3000, "easeInOutQuint");
                    }, 1000);
                    setTimeout(function(){
                        $(".type1 h3").animate({
                            opacity: 100
                        }, 3000, "easeInOutQuint");
                        $(".type2 h3").animate({
                            opacity: 100
                        }, 3000, "easeInOutQuint");
                    }, 1700);
                    setTimeout(function(){
                        $(".type1 h4").animate({
                            opacity: 100
                        }, 3000, "easeInOutQuint");
                        $(".type2 h4").animate({
                            opacity: 100
                        }, 3000, "easeInOutQuint");
                    }, 2400);
                });
                
                
                
            }
            if (destination.index == 8) {
                $(".s8-container").fadeIn({queue: false, duration: '1000'});
                setTimeout(function(){
                    $(".blue-line").animate({
                        width: "100%"
                    }, 1500, "easeInOutQuint");
                }, 0);
                setTimeout(function(){
                    $(".proto").animate({
                        opacity: 100
                    }, 1500, "easeInOutQuint");
                }, 1500);
                setTimeout(function(){
                    $(".app1-i img").animate({
                        opacity: 100
                    }, 2500, "easeInOutQuint");
                }, 2500);
                $(".proto-click.b9").click(function(){
                    $(".proto-click.b9").css({"display":"none"});
                    $(".proto-click.b10").css({"display":"block"});
                    $(".proto-1-1 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-1-2 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-1-1 img").css({
                            "display" : "none"
                        });
                    }, 500);
                    $(".proto-1-2 img").css({
                        "display" : "block"
                    });
                });
                $(".proto-1-1 img").click(function(){
                    $(".proto-click.b9").css({"display":"none"});
                    $(".proto-click.b10").css({"display":"block"});
                    $(".proto-1-1 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-1-2 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-1-1 img").css({
                            "display" : "none"
                        });
                    }, 500);
                    $(".proto-1-2 img").css({
                        "display" : "block"
                    });
                });
                $(".proto-click.b10").click(function(){
                    $(".proto-click.b10").css({"display":"none"});
                    $(".proto-click.b11").css({"display":"block"});
                    $(".proto-1-2 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-1-3 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-1-2 img").css({
                            "display" : "none"
                        });
                    }, 500);
                    $(".proto-1-3 img").css({
                        "display" : "block"
                    });
                });
                $(".proto-1-2 img").click(function(){
                    $(".proto-click.b10").css({"display":"none"});
                    $(".proto-click.b11").css({"display":"block"});
                    $(".proto-1-2 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-1-3 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-1-2 img").css({
                            "display" : "none"
                        });
                    }, 500);
                    $(".proto-1-3 img").css({
                        "display" : "block"
                    });
                });
                $(".proto-click.b11").click(function(){
                    $(".proto-click.b11").css({"display":"none"});
                    $(".proto-click.b12").css({"display":"block"});
                    $(".proto-1-3 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-1-4 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-1-3 img").css({
                            "display" : "none"
                        });
                    }, 500);
                    $(".proto-1-4 img").css({
                        "display" : "block"
                    });
                });
                $(".proto-1-3 img").click(function(){
                    $(".proto-click.b11").css({"display":"none"});
                    $(".proto-click.b12").css({"display":"block"});
                    $(".proto-1-3 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-1-4 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-1-3 img").css({
                            "display" : "none"
                        });
                    }, 500);
                    $(".proto-1-4 img").css({
                        "display" : "block"
                    });
                });
                $(".proto-click.b12").click(function(){
                    $(".proto-click.b12").css({"display":"none"});
                    $(".proto-click.b13").css({"display":"block"});
                    $(".proto-1-4 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-1-5 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-1-4 img").css({
                            "display" : "none"
                        });
                    }, 500);
                    $(".proto-1-5 img").css({
                        "display" : "block"
                    });
                });
                $(".proto-1-4 img").click(function(){
                    $(".proto-click.b12").css({"display":"none"});
                    $(".proto-click.b13").css({"display":"block"});
                    $(".proto-1-4 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-1-5 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-1-4 img").css({
                            "display" : "none"
                        });
                    }, 500);
                    $(".proto-1-5 img").css({
                        "display" : "block"
                    });
                });
                $(".proto-click.b13").click(function(){
                    $(".proto-click.b13").css({"display":"none"});
                    $(".proto-click.b9").css({"display":"block"});
                    $(".proto-1-5 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-1-1 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-1-5 img").css({
                            "display" : "none"
                        });
                    $(".proto-1-2 img").css({
                        "display" : "block"
                    });
                    }, 500);
                    $(".proto-1-1 img").css({
                        "display" : "block"
                    });
                });
                $(".proto-1-5 img").click(function(){
                    $(".proto-click.b13").css({"display":"none"});
                    $(".proto-click.b9").css({"display":"block"});
                    $(".proto-1-5 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-1-1 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-1-5 img").css({
                            "display" : "none"
                        });
                    $(".proto-1-2 img").css({
                        "display" : "block"
                    });
                    }, 500);
                    $(".proto-1-1 img").css({
                        "display" : "block"
                    });
                });
            }
            if (destination.index == 9) {
                $(".s9-container").fadeIn({queue: false, duration: '1000'});
                setTimeout(function(){
                    $(".blue-line2").animate({
                        width: "100%"
                    }, 1500, "easeInOutQuint");
                }, 0);
                setTimeout(function(){
                    $(".proto2-1").animate({
                        opacity: 100
                    }, 1500, "easeInOutQuint");
                }, 800);
                setTimeout(function(){
                    $(".app2-sum1").animate({
                        opacity: 100
                    }, 1500, "easeInOutQuint");
                }, 1300);
                setTimeout(function(){
                    $(".app2-sum2").animate({
                        opacity: 100
                    }, 1500, "easeInOutQuint");
                }, 2000);
                setTimeout(function(){
                    $(".proto2-2").animate({
                        opacity: 100
                    }, 1500, "easeInOutQuint");
                }, 2500);
                /* 펀딩하기 프로토타입 */
                $(".proto-click.b14").click(function(){
                    $(".proto-click.b14").css({"display":"none"});
                    $(".proto-click.b15").css({"display":"block"});
                    $(".proto-2-1 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-2-2 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-2-1 img").css({
                            "display" : "none"
                        });
                    }, 500);
                    $(".proto-2-2 img").css({
                        "display" : "block"
                    });
                });
                $(".proto-2-1 img").click(function(){
                    $(".proto-click.b14").css({"display":"none"});
                    $(".proto-click.b15").css({"display":"block"});
                    $(".proto-2-1 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-2-2 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-2-1 img").css({
                            "display" : "none"
                        });
                    }, 500);
                    $(".proto-2-2 img").css({
                        "display" : "block"
                    });
                });
                $(".proto-click.b15").click(function(){
                    $(".proto-click.b15").css({"display":"none"});
                    $(".proto-click.b16").css({"display":"block"});
                    $(".proto-2-2 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-2-3 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-2-2 img").css({
                            "display" : "none"
                        });
                    }, 500);
                    $(".proto-2-3 img").css({
                        "display" : "block"
                    });
                });
                $(".proto-2-2 img").click(function(){
                    $(".proto-click.b15").css({"display":"none"});
                    $(".proto-click.b16").css({"display":"block"});
                    $(".proto-2-2 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-2-3 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-2-2 img").css({
                            "display" : "none"
                        });
                    }, 500);
                    $(".proto-2-3 img").css({
                        "display" : "block"
                    });
                });
                $(".proto-click.b16").click(function(){
                    $(".proto-click.b16").css({"display":"none"});
                    $(".proto-click.b14").css({"display":"block"});
                    $(".proto-2-3 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-2-1 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-2-3 img").css({
                            "display" : "none"
                        });
                    }, 500);
                    $(".proto-2-1 img").css({
                        "display" : "block"
                    });
                });
                $(".proto-2-3 img").click(function(){
                    $(".proto-click.b16").css({"display":"none"});
                    $(".proto-click.b14").css({"display":"block"});
                    $(".proto-2-3 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-2-1 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-2-3 img").css({
                            "display" : "none"
                        });
                    }, 500);
                    $(".proto-2-1 img").css({
                        "display" : "block"
                    });
                });
                /* 우수 프로젝트 프로토타입 */
                $(".proto-click.b17").click(function(){
                    $(".proto-click.b17").css({"display":"none"});
                    $(".proto-click.b18").css({"display":"block"});
                    $(".proto-2-4 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-2-5 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-2-4 img").css({
                            "display" : "none"
                        });
                    }, 500);
                    $(".proto-2-5 img").css({
                        "display" : "block"
                    });
                });
                $(".proto-2-4 img").click(function(){
                    $(".proto-click.b17").css({"display":"none"});
                    $(".proto-click.b18").css({"display":"block"});
                    $(".proto-2-4 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-2-5 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-2-4 img").css({
                            "display" : "none"
                        });
                    }, 500);
                    $(".proto-2-5 img").css({
                        "display" : "block"
                    });
                });
                $(".proto-click.b18").click(function(){
                    $(".proto-click.b18").css({"display":"none"});
                    $(".proto-click.b17").css({"display":"block"});
                    $(".proto-2-5 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-2-4 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-2-5 img").css({
                            "display" : "none"
                        });
                    }, 500);
                    $(".proto-2-4 img").css({
                        "display" : "block"
                    });
                });
                $(".proto-2-5 img").click(function(){
                    $(".proto-click.b18").css({"display":"none"});
                    $(".proto-click.b17").css({"display":"block"});
                    $(".proto-2-5 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-2-4 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-2-5 img").css({
                            "display" : "none"
                        });
                    }, 500);
                    $(".proto-2-4 img").css({
                        "display" : "block"
                    });
                });
            }
            if (destination.index == 10) {
                $(".s10-container").fadeIn({queue: false, duration: '1000'});
                setTimeout(function(){
                    $(".if img").animate({
                        opacity: 100
                    }, 1500, "easeInOutQuint");
                    $(".ib img").animate({
                        opacity: 100
                    }, 1500, "easeInOutQuint");
                }, 0);
                setTimeout(function(){
                    $(".proto3").animate({
                        opacity: 100
                    }, 1500, "easeInOutQuint");
                }, 800);
                setTimeout(function(){
                    $(".app3-sum").animate({
                        opacity: 100
                    }, 1500, "easeInOutQuint");
                }, 1300);
                $(".if img").mouseenter(function(){
                    $(".if img").animate({
                        opacity: 0
                    }, 1000, "easeInOutQuint");
                    $(".is img").animate({
                        opacity: 100
                    }, 1000, "easeInOutQuint");
                });
                $(".if img").mouseleave(function(){
                    $(".if img").animate({
                        opacity: 100
                    }, 1000, "easeInOutQuint");
                    $(".is img").animate({
                        opacity: 0
                    }, 1000, "easeInOutQuint");
                });
                $(".proto-click.b19").click(function(){
                    $(".proto-click.b19").css({"display":"none"});
                    $(".proto-click.b20").css({"display":"block"});
                    $(".proto-3-1 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-3-2 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-3-1 img").css({
                            "display" : "none"
                        });
                    }, 500);
                    $(".proto-3-2 img").css({
                        "display" : "block"
                    });
                });
                $(".proto-3-1 img").click(function(){
                    $(".proto-click.b19").css({"display":"none"});
                    $(".proto-click.b20").css({"display":"block"});
                    $(".proto-3-1 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-3-2 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-3-1 img").css({
                            "display" : "none"
                        });
                    }, 500);
                    $(".proto-3-2 img").css({
                        "display" : "block"
                    });
                });
                $(".proto-click.b20").click(function(){
                    $(".proto-click.b20").css({"display":"none"});
                    $(".proto-click.b19").css({"display":"block"});
                    $(".proto-3-2 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-3-1 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-3-2 img").css({
                            "display" : "none"
                        });
                    }, 500);
                    $(".proto-3-1 img").css({
                        "display" : "block"
                    });
                });
                $(".proto-3-2 img").click(function(){
                    $(".proto-click.b20").css({"display":"none"});
                    $(".proto-click.b19").css({"display":"block"});
                    $(".proto-3-2 img").animate({
                        opacity: 0
                    }, 500, "easeInOutQuint");
                    $(".proto-3-1 img").animate({
                        opacity: 100
                    }, 500, "easeInOutQuint");
                    setTimeout(function(){
                        $(".proto-3-2 img").css({
                            "display" : "none"
                        });
                    }, 500);
                    $(".proto-3-1 img").css({
                        "display" : "block"
                    });
                });
            }
            if (destination.index == 11) {
                $(".s11-container").fadeIn({queue: false, duration: '1000'});
            }
            if (destination.index == 12) {
                $(".s12-container").fadeIn({queue: false, duration: '1000'});
            }
            if (destination.index == 13) {
                $(".s13-container").fadeIn({queue: false, duration: '1000'});
                $(".totop-btn").fadeIn();
                $(".scroll-btn").fadeOut();
            }
        }
	});

        
    });
})(jQuery);


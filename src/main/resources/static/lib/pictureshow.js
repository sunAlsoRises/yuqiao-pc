 
var left;
var Zleft
var x;//
var len;

    function getparam() {
        left = document.getElementById("imageShowSmall1").offsetLeft;
        Zleft = document.getElementById("imageShowSmallAnchor1").offsetLeft
        x = 0;//
        len = $("#imageShowSmall1>li").length;
        var src = "";     
        var alt = "";
        $("#imageShowSmallPre1").click(function () {
            if (len <= 5) {
                if (x <= 0&&Zleft<=0) {
                    Zleft = (len - 1) * 110                  
                    $("#imageShowSmallAnchor1").animate({ "left": Zleft + "px" });
                    src = $($("#imageShowSmall1>li")[x + Zleft/110]).find("img").attr("src").replace("/middle/", "/mobile/")
                    $(".datu").attr("src", src);
                    alt = $($("#imageShowSmall1>li")[x + Zleft/110]).find("img").attr("alt");
                    $(".datu").attr("alt", alt);
                }
                else if (Zleft>0) {                                  
                    Zleft -= 110;
                    $("#imageShowSmallAnchor1").animate({ "left": Zleft + "px" });
                    src = $($("#imageShowSmall1>li")[x + Zleft / 110]).find("img").attr("src").replace("/middle/", "/mobile/");
                    $(".datu").attr("src", src);
                    alt = $($("#imageShowSmall1>li")[x + Zleft / 110]).find("img").attr("alt");
                    $(".datu").attr("alt", alt);
                }                     
            }
            else {
                if (x <= 0 && Zleft<=0) {
                    left -= 110 * (len - 5);
                    x = len - 5;
                    $("#imageShowSmall1").animate({ "left": left + "px" });
                    Zleft = 440;
                    $("#imageShowSmallAnchor1").animate({ "left": Zleft + "px" });
                    src = $($("#imageShowSmall1>li")[len - 1]).find("img").attr("src").replace("/middle/", "/mobile/");
                    $(".datu").attr("src", src);
                    alt = $($("#imageShowSmall1>li")[len - 1]).find("img").attr("alt");
                    $(".datu").attr("alt", alt);
                }
                else if (Zleft > 0) {
                    Zleft -= 110;
                    $("#imageShowSmallAnchor1").animate({ "left": Zleft + "px" });
                    src = $($("#imageShowSmall1>li")[x + Zleft / 110]).find("img").attr("src").replace("/middle/", "/mobile/");
                    $(".datu").attr("src", src);
                    alt = $($("#imageShowSmall1>li")[x + Zleft / 110]).find("img").attr("alt");
                    $(".datu").attr("alt", alt);
                }
                else if (Zleft <= 0 && x > 0) {
                    left += 110; x--;
                    $("#imageShowSmall1").animate({ "left": left + "px" });
                    src = $($("#imageShowSmall1>li")[x]).find("img").attr("src").replace("/middle/", "/mobile/");
                    $(".datu").attr("src", src);
                    alt = $($("#imageShowSmall1>li")[x]).find("img").attr("alt");           
                    $(".datu").attr("alt", alt);
                }              
            }
        })

        $("#imageShowSmallNext1").click(function () {
            if (len <= 5) {
                if (Zleft == (len - 1) * 110) {
                    x = 0;
                    Zleft = 0;
                    $("#imageShowSmallAnchor1").animate({ "left": Zleft + "px" });
                    src = $($("#imageShowSmall1>li")[x + Zleft / 110]).find("img").attr("src").replace("/middle/", "/mobile/");
                    $(".datu").attr("src", src);
                    alt = $($("#imageShowSmall1>li")[x+Zleft / 110]).find("img").attr("alt");
                    $(".datu").attr("alt", alt);
                }
                else if (Zleft < (len - 1) * 110) {
                    x++;
                    Zleft += 110;
                    $("#imageShowSmallAnchor1").animate({ "left": Zleft + "px" });
                    src = $($("#imageShowSmall1>li")[x]).find("img").attr("src").replace("/middle/", "/mobile/");
                    $(".datu").attr("src", src);
                    alt = $($("#imageShowSmall1>li")[x]).find("img").attr("alt");
                    $(".datu").attr("alt", alt);
                }           
            }
            else {
                if (len - x > 5) {
                    left -= 110; x++;
                    $("#imageShowSmall1").animate({ "left": left + "px" });
                    src = $($("#imageShowSmall1>li")[x + Zleft / 110]).find("img").attr("src").replace("/middle/", "/mobile/")
                    $(".datu").attr("src", src);
                    alt = $($("#imageShowSmall1>li")[x + Zleft / 110]).find("img").attr("alt");
                    $(".datu").attr("alt", alt);
                }
                else if (Zleft < 440) {
                    Zleft += 110;
                    $("#imageShowSmallAnchor1").animate({ "left": Zleft + "px" });
                    src = $($("#imageShowSmall1>li")[x + Zleft / 110]).find("img").attr("src").replace("/middle/", "/mobile/")
                    $(".datu").attr("src", src);
                    alt = $($("#imageShowSmall1>li")[x + Zleft / 110]).find("img").attr("alt");
                    $(".datu").attr("alt", alt);
                }
                else if (Zleft >= 440) {
                    left = 0; x = 0;
                    $("#imageShowSmall1").animate({ "left": left + "px" });
                    Zleft = 0;
                    $("#imageShowSmallAnchor1").animate({ "left": Zleft + "px" });
                    src = $($("#imageShowSmall1>li")[x]).find("img").attr("src").replace("/middle/", "/mobile/");
                    $(".datu").attr("src", src);
                    alt = $($("#imageShowSmall1>li")[x]).find("img").attr("alt");
                    $(".datu").attr("alt", alt);
                }
            }
        });
       
        if (len > 5) {
            $("#imageShowSmall1>li").click(function () {
                src = $(this).find("img").attr("src").replace("/middle/", "/mobile/")
                $(".datu").attr("src", src);
                alt = $(this).find("img").attr("alt");
                $(".datu").attr("alt", alt);
                var p = $(this).index() - x;
                Zleft = p * 110;
                $("#imageShowSmallAnchor1").animate({ "left": Zleft + "px" });
            })
            $("#imageShowSmallAnchor1").click(function () {
                src = $($("#imageShowSmall1>li")[x + Zleft / 110]).find("img").attr("src").replace("/middle/", "/mobile/");
                $(".datu").attr("src", src);
                alt = $($("#imageShowSmall1>li")[x + Zleft / 110]).find("img").attr("alt");
                $(".datu").attr("alt", alt);
            });         
        }
        else {
            $("#imageShowSmall1>li").click(function () {
                src = $(this).find("img").attr("src").replace("/middle/", "/mobile/")
                $(".datu").attr("src", src);
                alt = $(this).find("img").attr("alt");
                $(".datu").attr("alt", alt);
                var p = $(this).index();
                Zleft = p * 110;
                $("#imageShowSmallAnchor1").animate({ "left": Zleft + "px" });
            })
            $("#imageShowSmallAnchor1").click(function () {
                src = $($("#imageShowSmall1>li")[x]).find("img").attr("src").replace("/middle/", "/mobile/")
                $(".datu").attr("src", src);
                alt = $($("#imageShowSmall1>li")[x]).find("img").attr("alt");
                $(".datu").attr("alt", alt);

            });
        }
        $("#imageShowBig>li").click(function () {
            var url = $($("#imageShowBig>li")[0]).find("img").attr("src").replace("mobile", "big");
            var title = $($("#imageShowBig>li")[0]).find("img").attr("alt");
            xq_album(0, url, title, this);
        });
    };

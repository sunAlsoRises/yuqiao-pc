
    function selectTag(showContent, selfObj, pageName) {
        // 操作标签
        // 1切换点击按键
        // 向删除两个节点的class\
        var $lis =  $("#jjr-info-tags").children("li");
        $lis.removeClass("selectTag");
        // 添加当前节点的class
        $(selfObj).parent("li").addClass("selectTag");
        if ($(selfObj))
        // var taglength = $lis.length;
        // for (i = 0; i < taglength; i++) {
        //     $lis[i].className = "";
        // }
        // selfObj.parentNode.className = "selectTagStore";
        // // 操作内容
        // for (i = 0; j = document.getElementById("store-info-con-tagContent" + i) ; i++) {
        //     j.style.display = "none";
        // }
        $(showContent).css("display","block");
        // document.getElementById(showContent).style.display = "block";
    }




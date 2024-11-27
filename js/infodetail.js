(function (win, $) {//区块链显隐
    if ($(".chain-box").attr("data-value") == "") {
        $(".chain").hide();
    }
    else {
        $(".chain").show();
    }
}(this, jQuery));

(function (win, $) {
    var categorynum = $("#cate").html();
    if (categorynum.indexOf("012001005") == 0) {
        $(".ewb-article-l").show();
        $(".ewb-article-r").css("width", "70%");
        $(".news-article-para").find("table").css("width", "100%");
    }

}(this, jQuery));


(function (win, $) {
    // 判断当前环境是否是移动端
    function isMobile() {
        return /(iPhone|iPad|iPod|iOS|Android|Linux armv8l|Linux armv7l|Linux aarch64)/i.test(navigator.platform);
    }

    //$('#ewmImg').qrcode(location.href); //任意字符串
    if (!isMobile()) {
        $('.detailqrcode').show();

        $("#ewmImg").qrcode({
            render: "table", //table方式 
            width: 120, //宽度 
            height: 120, //高度 
            text: location.href //任意内容 
        });
    } else {
        $('.ewb-pnav-items').children('li').last().hide();
        $('.detailqrcode').hide();
    }
}(this, jQuery));
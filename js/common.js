/* 页面交互效果 */
(function(win, $) {

	var test = window.location.href;
	var array = test.split("/");
	if(array[3] == 'xwzh'){
		$(".ewb-pnav-items").find('li').eq(1).find('a').addClass("cur");
	}
	if(array[3] == 'xxgk'){
		$(".ewb-pnav-items").find('li').eq(2).find('a').addClass("cur");
	}
	if(array[3] == 'jydt'){
		$(".ewb-pnav-items").find('li').eq(3).find('a').addClass("cur");
	}
	if(array[3] == 'bszn'){
		$(".ewb-pnav-items").find('li').eq(4).find('a').addClass("cur");
	}
	if(array[3] == 'zcfg'){
		$(".ewb-pnav-items").find('li').eq(5).find('a').addClass("cur");
	}
	if(array[3] == 'hdjl'){
		$(".ewb-pnav-items").find('li').eq(6).find('a').addClass("cur");
	}
	
	var Include = function(cfg) {
         this.cfg = cfg;

         this._init();
     };

     Include.prototype = {
         constructor: Include,

         _init: function() {
             var c = this.cfg;

             if (c.async !== false) c.async = true;

             this.$container = $('#' + c.id);
         },

         fetch: function() {
             var c = this.cfg,
                 self = this;

             return $.ajax({
                 url: c.src,
                 type: 'GET',
                 dataType: 'html',
                 async: c.async,
                 success: function(html) {
                     self.$container.html(html);

                     c.onload && c.onload(html);
                 }
             });
         }
     };

     // 需要引入的代码片段
     var includes = [{
         id: 'header',
         src: '/header.inc.html',
         onload: function() {
             if (!('placeholder' in document.createElement('input'))) {
                $('input[placeholder],textarea[placeholder]').each(function() {
                    var that = $(this),
                        text = that.attr('placeholder');
                    if (that.val() === "") {
                        that.val(text).addClass('placeholder');
                    }
                    that.focus(function() {
                            if (that.val() === text) {
                                that.val("").removeClass('placeholder');
                            }
                        })
                        .blur(function() {
                            if (that.val() === "") {
                                that.val(text).addClass('placeholder');
                            }
                        })
                });
            }
         }
     }, {
         id: 'footer',
         src: '/footer.inc.html',
         onload: function() {
             // console.log('...footer loaded...');
         }
     }];

     $.each(includes, function(i, cfg) {
         if ($('#' + cfg.id).length) {
             new Include(cfg).fetch();
         }
     });
	
	
	
	
}(this, jQuery));
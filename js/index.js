 
 var swiper5;
 var swiper6;
 //字体自适应
 function autoFontSize()
 {
        //全屏字体自适应
        var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
       //获取HTML的Dom元素
       var htmlDom = document.getElementsByTagName('html')[0];
       //设置根元素字体
       htmlDom.style.fontSize= htmlWidth/150 + 'px';
 }
  $(function()
  {
        //二级菜单
        $('.main .nav-box .navs .nav-item').hover(function(){
           $(this).children('.item').stop().slideToggle(600);
        })
        //顶部导航浮动
        $('.nav-box').zlightMenu();
    
        //初始化图片滚动
            var swiper1 = new Swiper(".six-swiper", 
            {
            slidesPerView: "auto",
            loop: !0,
            speed: 2500,
            autoplay: {
                delay: 0,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            slidesOffsetBefore: 0,
            parallax: !0,
            });
        //app 滚动
            var swiper2 = new Swiper(".three-swiper", 
            {
            slidesPerView: "auto",
            loop: !0,
            speed: 1500,
            autoplay: {
                delay: 0,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            slidesOffsetBefore: 0,
            parallax: !0,
            on:{
                transitionEnd: function(){
                         slides = this.slides
                         for(i=0; i< slides.length; i++){
                         slide = slides.eq(i)
                         progress = slides[i].progress
                         slide.css({'opacity': '','background': ''});
                         slide.transform('');//清除样式
                         if(parseInt(progress)==-2)
                         {
                             slide.transform('scale(1.22)');  
                             slide.css({'-webkit-transition': 'all 1s linear',
                                       '-moz-transition': 'all 1s linear',
                                       '-o-transition': 'all 1s linear',
                                       'transition':'all 1s linear',
                                       'box-shadow':'0px 0px 10px #000',
                                       '-webkit-filter':'',
                                       'filter':'' });
                         }else
                          {
                              slide.css({'-webkit-filter':'blur(1px)','filter':'blur(1px)'})
                          }
                            
                          }	
                          
                    }
                }
            });
        //上下滚动
            var swiper3 = new Swiper(".four-swiper", 
            {
            direction: "vertical",
            freeMode: true,
            mousewheel:
            {
                sensitivity : 0.5, //滚轮速度
            },
            slidesPerView: "auto",
            loop: !0,
            slidesOffsetBefore: 0,
            parallax: !0,
            navigation: {
                nextEl: ".glyphicon-chevron-up",
                prevEl: ".glyphicon-chevron-down"
                }
            });
        //文字滚动
            var swiper4 = new Swiper(".text-swiper", 
            {
            loop: !0,
            slidesOffsetBefore: 0,
            parallax: !0,
            navigation: {
                nextEl: ".text-left",
                prevEl: ".text-right"
                }
            });

        //车子左
        swiper5 = new Swiper(".car-left-swiper", 
            {
            loop: !0,
            slidesOffsetBefore: 0,
            parallax: !0
            });
        //车子右 car-right-swiper
        swiper6 = new Swiper(".car-right-swiper", 
            {
            loop: !0,
            slidesOffsetBefore: 0,
            parallax: !0
            });
        //全屏字体自适应
        autoFontSize()
        })

        // 窗口尺寸变化调整字体
        $(window).resize(function() {undefined
            autoFontSize()
         });

         //视差飞入
    $(function() {

        $.fn.visible = function(partial) {
        
            var $t = $(this),
                $w = $(window),
                viewTop = $w.scrollTop(),
                viewBottom = viewTop + $w.height(),
                _top = $t.offset().top,
                _bottom = _top + $t.height(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;
        
            return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
        
        };
        
        var win = $(window);
        
        var allMods = $(".module");
        
        allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("already-visible");
        }
        });
        
        win.scroll(function(event) {
        
        allMods.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("come-in");
            }
        });
        
        });
        
        });
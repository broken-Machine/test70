// config, fsm, e, layout, startScroll



var pcSet = function() {
    if (!isMobile.any) {
        config.windowWidth = config.w / config.h * window.innerHeight;
        config.windowHeight = window.innerHeight;
        $('body').css({
            'padding-left': (window.innerWidth - config.windowWidth) / 2,
            'padding-right': (window.innerWidth - config.windowWidth) / 2
        });
        $('#loading').css({
            width: config.windowWidth
        });
        $('#scroll .step').hide();
        $('#scroll #fishMove.step').show();
        $('#download').appendTo($('#fishMove'));
        $('#download').css({
            'position': 'absolute',
            'z-index': 200,
            'top': '62vh',
            'left': '5rem',
            'opacity': 1
        }).addClass('active');
    }
};
var pcSetStyle = function() { // pc
    $('#loading').hide();
    $('#scroll').show();
    $('#fishMove').show();
    $('#download').css({
        'left': $('#fishMoveFront').width() * .06 + 'px',
        'transform': 'scale(' + $('#fishMoveFront').width() / 492 * 1.3 + ')',
        'transform-origin': '0 0'
    });
}

var setVh = function() {
    var h = config.windowHeight;
    $('#scroll').css('height', h * 13 + 'px');
    $('.bgSticky').css('height', h + 'px');
    $('.step').css('height', h * 11 + 'px');
    $('.step[data-step="why"]').css('height', h + 'px');
    $('.step .panel').each(function(d, i) {
        $(this)[0].style.paddingTop = h * (d + 2) + 'px';
    });

    $('.svg_rect').each(function(d, i) {
        $(this)[0].style.top = h * (d + 2) - h * 0.3 + 'px';
    });
    $('#first_rects').css('height', h + 'px');
    $('#first_rects').css('paddingTop', h + 'px');

    $('#last_rects').css('height', h + 'px');
    $('#last_rects').css('paddingTop', h * 9.5 + 'px');

    $('#firstPage').css('height', h + 'px');
    $('#lastPage').css('height', h + 'px');
    // if (window.controls) {
    //   window.controls.windowHeight = $('#fishMove').height() + 'px'; //window.innerHeight;
    // }
};

var setCanvasSize = function() {
    var scaleX, scaleY, scale, center;
    var canvas = $('#anim')[0];

    //1. Scale the canvas to the correct size
    //Figure out the scale amount on each axis

    scaleX = config.windowWidth / config.w;
    scaleY = config.windowHeight / config.h;

    //Scale the canvas based on whichever value is less: `scaleX` or `scaleY`
    scale = Math.min(scaleX, scaleY);
    var w, h;
    var trans;
    if (scaleX > scaleY) { // 屏幕太宽
        w = Math.ceil(config.h * (config.windowWidth / config.windowHeight));
        h = config.h;
        trans = { x: (w - config.w) / 2, y: 0, w: w, h: h };
    } else { // 屏幕太长
        w = config.w;
        h = Math.ceil(config.w * (config.windowHeight / config.windowWidth));
        trans = { x: 0, y: (h - config.h) / 2, w: w, h: h };
    }
    $(canvas).css({
        width: w + 'px',
        height: h + 'px',
        transform: 'scale(' + scale + ')'
    });

    canvas.width = w;
    canvas.height = h;
    config.trans = trans;

    $('#whoTriangleCanvas').css({
        width: w + 'px',
        height: h + 'px',
        transform: 'scale(' + scale + ')'
    });

    $('#whoTriangleCanvas')[0].width = w;
    $('#whoTriangleCanvas')[0].height = h;

    $('#fishMoveCanvas').css({
        width: w + 'px',
        height: h + 'px',
        transform: 'scale(' + scale + ')',
        'transform-origin': '0 0'
    });

    $('#fishMoveCanvas')[0].width = w;
    $('#fishMoveCanvas')[0].height = h;


    $('.scaleContainer').css({
        width: config.w + 'px',
        height: config.h + 'px'
    });
    $('.scaleContainer').each(function() {
        scaleToWindow(this);
    });

};


if (isMobile.any) { // pc
    pcSet();
    pcSetStyle();
    setVh();
    //setCanvasSize();
    window.addEventListener('resize', function() {
        pcSet();
        pcSetStyle();
        setVh();
        //setCanvasSize();
        // startScroll();
    }, false);
} else { // mobile

    // loading
    init();
    //fsm.trans('loading');


    // https://stackoverflow.com/questions/32963400/android-keyboard-shrinking-the-viewport-and-elements-using-unit-vh-in-css
    // prevent keyboard shrink vh
    setTimeout(function() {
        let viewheight = $(window).height();
        let viewwidth = $(window).width();
        let viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0, maximum-scale=1, user-scalable=no");
        setSizeAndLayout();
    }, 300);

    var setSizeAndLayout = function() {
        config.windowHeight = $(window).height();
        config.windowWidth = $(window).width();
        setVh();
        //setCanvasSize();
        layTriangles();
        window.addEventListener('resize', function() {
            if (navigator.userAgent.indexOf("DingTalk") > -1) { // 移动版钉钉默认高度不变。
                return;
            }
            config.mobileResized = true;
            $('.triangleBarContainer').show();
            $('#question .cover').show();
            $('#anim').addClass('hidden');
            if (window.innerHeight > config.windowHeight) {
                config.windowHeight = window.innerHeight;
                setVh();
                //setCanvasSize();
                //drawWhoCanvas();
                if (fsm.current !== 'fishMove') {
                    stages['fishMove'].enter();
                    stages['fishMove'].update(+new Date());
                }
                $('#scroll .step').each(function() {
                    $(this)[0].style.minHeight = window.innerHeight + 'px';
                });
            }
        });


        // layout(function() {
        //     $('.arrow').show();
        //     $('#loading').fadeOut(2000);
        //     setTimeout(function() {
        //         $('body').addClass('canscroll');

        //         $('#fishMove').hide();
        //         $('#fishMove').fadeIn(2000);
        //         $('#download').addClass('fishMove');

        //         document.body.scrollTop = document.documentElement.scrollTop = 0;
        //         $('#scroll').show();
        //         startScroll();

        //         $('#scroll .step').each(function() {
        //             var $this = $(this);
        //             var step = $this.data('step');
        //             if (step !== 'fishMove') {
        //                 $this.find('.bgSticky').css('background-image', 'url(./img/bg/' + step + '.jpg)');
        //                 // $this.find('.bgSticky').css('background-image', 'url(./img/bg/' + step + '.png)');
        //                 $this.find('.cover').css('background-image', 'url(./img/cover/' + step + 'Cover.svg)');
        //                 // $this.find('.panel').css('background', 'red');
        //                 // console.log($this.find('.panel').css('background-image'));
        //             }
        //         });
        //     }, 1800);
        // });

        startScroll();

    }
}



if (!isMobile.any) {
    // window.addEventListener('resize', function () {
    //     scaleToWindow(document.getElementById('scaleContainer'));
    //   scaleToWindow(document.getElementById('personalWrap'));
    // }, false);
} else {}


// 防止刷新自动滚动
// $(window).on('beforeunload', function() {
//     $(window).scrollTop(0);
// });


$('#download').on('click', function() {
    if ($('#download').hasClass('active')) {
        _hmt.push(['_trackCustomEvent', 'download', 'active2']);
        _hmt.push(['_trackEvent', 'download', 'active']);
        _hmt.push(['_trackEvent', 'downloadCategory', 'download']);
        //_czc.push(["_trackEvent", 'donwload', 'downloadActive']);
        Object.assign(document.createElement('a'), { target: '_blank', href: 'https://business.linkedin.com/zh-cn/marketing-solutions/c/2019/june/go-global-book-data-v' }).click();
    } else {
        _hmt.push(['_trackEvent', 'download', 'inactive']);
    }
    if (isMobile.any) {
        $('#download').toggleClass('active');
    }
});
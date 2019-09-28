var startScroll = function() {
    // var container = document.querySelector('#scroll');
    // var text = container.querySelector('.scroll__text');
    // var steps = text.querySelectorAll('.step'); 
    // initialize the scrollama
    var scroller = scrollama();

    // scrollama event handlers
    function handleStepEnter(response) {
        // $(".bd_weixin_popup").hide();
        // response = { element, direction, index }
        // console.log(response);
        // add to color to current step
        // response.element.classList.add('is-active');


        var stage = $(response.element).data('step');
        // console.log(stage);
        // console.log(stage);
        fsm.trans(stage);
        // _hmt.push(['_trackCustomEvent', stage]);

        _hmt.push(['_trackCustomEvent', stage, 'active']);
        _hmt.push(['_trackEvent', stage, 'active2']);
        //_czc.push(["_trackEvent", 'pageView', stage]);

        //if (stage === 'fishMove') {
        //$(".topBar").addClass('topBarMove');
        // } else {
        //     $("#download").removeClass('fishMove');
        //     if (stage === 'end') {
        //         $("#download").addClass('active');
        //     } else {
        //         $("#download").removeClass('active');
        //     }
        // }
        // if (stage === 'second') {
        //     $(".rhombus").css('position', 'absolute')
        // }
    }

    function handleStepExit(response) {
        // response = { element, direction, index }
        // console.log(response);
        // remove color from current step




        // response.element.classList.remove('is-active');


        // if(response.index==9) {
        // 	if (response.direction==="down"){
        // 	}else{
        // 	}
        // }
    }

    function handleStepProgress(res) {
        $('#mysvg').attr('class', '');
        $('#foreground').attr('class', '');
        var stage = $(res.element).data('step');
        var progress = res.progress;
        // controls.progress = progress;
        var splitRatio = (100) / 2 / 180;
        var getTransProgress = function(p) {
            var t;
            if (p <= splitRatio) {
                t = p / splitRatio * .5 + .5;
            } else if (p > 1 - splitRatio) {
                t = .5 - (1 - p) / splitRatio * .5;
            }
            // https://gist.github.com/gre/1650294
            return t; // linear
            // return t<.5 ? 2*t*t : -1+(4-2*t)*t; // easeInOutQuad
            // return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1;  // easeInOutCubic
            // return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t; // easeInOutQuart
            // return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t; // easeInOutQuint
        };
        // console.log(progress, getTransProgress(progress));
        if (stage === 'keyword') {
            // console.log(window.innerHeight * .2 * progress, progress);
            $('#keyword')[0].scrollTop = window.innerHeight * .2 * progress;
        } else if (stage === 'who') {
            if (config.mobileResized) {
                $('#whoTriangleCanvas').show();
                return;
            }
            if (progress > 1 - splitRatio) {
                $('#anim').show();
                $('#whoTriangleCanvas').hide();
                recentStatus = {
                    state1: 'who',
                    state2: 'userbar',
                    progress: getTransProgress(progress)
                };
            } else {
                $('#anim').hide();
                $('#whoTriangleCanvas').show();
            }
        } else if (stage === 'userbar') {
            if (config.mobileResized) {
                return;
            }
            if (progress < splitRatio) {
                $('#anim').show();
                $('#' + stage + ' .triangleBarContainer').hide();
                recentStatus = {
                    state1: 'who',
                    state2: 'userbar',
                    progress: getTransProgress(progress)
                };
            } else if (progress > 1 - splitRatio) {
                $('#anim').show();
                $('#' + stage + ' .triangleBarContainer').hide();
                recentStatus = {
                    state1: 'userbar',
                    state2: 'userbar2',
                    progress: getTransProgress(progress)
                };
            } else {
                $('#anim').hide();
                $('#' + stage + ' .triangleBarContainer').show();
            }
        } else if (stage === 'userbar2') {
            if (config.mobileResized) {
                return;
            }
            if (progress < splitRatio) {
                $('#anim').show();
                $('#' + stage + ' .triangleBarContainer').hide();
                recentStatus = {
                    state1: 'userbar',
                    state2: 'userbar2',
                    progress: getTransProgress(progress)
                };
            } else if (progress > 1 - splitRatio) {
                $('#anim').show();
                $('#' + stage + ' .triangleBarContainer').hide();
                recentStatus = {
                    state1: 'userbar2',
                    state2: 'question',
                    progress: getTransProgress(progress)
                };
            } else {
                $('#anim').hide();
                $('#' + stage + ' .triangleBarContainer').show();
            }
        } else if (stage === 'question') {
            if (config.mobileResized) {
                return;
            }
            if (progress < splitRatio) {
                $('#anim').show();
                $('#' + stage + ' .cover').hide();
                recentStatus = {
                    state1: 'userbar2',
                    state2: 'question',
                    progress: getTransProgress(progress)
                };
            } else if (progress > 1 - splitRatio) {
                $('#anim').show();
                $('#' + stage + ' .cover').hide();
                recentStatus = {
                    state1: 'question',
                    state2: 'buyerbar',
                    progress: getTransProgress(progress)
                };
                // console.log('buyerbar scroll');
            } else {
                $('#anim').hide();
                $('#' + stage + ' .cover').show();
            }
        } else if (stage === 'buyerbar') {
            if (config.mobileResized) {
                return;
            }
            if (progress < splitRatio) {
                $('#anim').show();
                $('#' + stage + ' .triangleBarContainer').hide();
                recentStatus = {
                    state1: 'question',
                    state2: 'buyerbar',
                    progress: getTransProgress(progress)
                };
            } else if (progress > 1 - splitRatio) {
                $('#anim').show();
                $('#' + stage + ' .triangleBarContainer').hide();
                var p = (progress - (1 - splitRatio)) * .3 + (1 - splitRatio);
                var transP = getTransProgress(p);
                recentStatus = {
                    state1: 'buyerbar',
                    state2: 'wrong',
                    progress: transP,
                    offsetY: -(.25 - Math.abs(transP - .25)) * config.trans.h * 2
                };
                // console.log('transP', transP, p);
            } else {
                $('#anim').hide();
                $('#' + stage + ' .triangleBarContainer').show();
            }
        } else if (stage === 'why') {
            if (config.mobileResized) {
                return;
            }
            $('#anim').show();
            var p = progress < .5 ?
                progress / .5 * splitRatio * .7 + (1 - splitRatio * .7) :
                (progress - .5) / .5 * splitRatio * .7;
            var transP = getTransProgress(p);
            // console.log(transP, 'transP');
            recentStatus = {
                state1: 'buyerbar',
                state2: 'wrong',
                progress: transP,
                offsetY: transP < .5 ?
                    -(.25 - Math.abs(transP - .25)) * config.trans.h * 2 :
                    (.25 - Math.abs(transP - .75)) * config.trans.h * 2
            };
            /*
            if (progress < splitRatio) {
            	$('#anim').show();
            	recentStatus = {
            		state1: 'buyerbar',
            		state2: 'wrong',
            		progress: getTransProgress(progress)
            	};
            } else if (progress > 1 - splitRatio) {
            	$('#anim').show();
            	recentStatus = {
            		state1: 'buyerbar',
            		state2: 'wrong',
            		progress: getTransProgress(progress)
            	};
            	// console.log('buyerbar scroll');
            } else {
            	$('#anim').hide();
            }
            */
        } else if (stage === 'wrong') {
            if (config.mobileResized) {
                return;
            }
            if (progress < splitRatio) {
                var p = splitRatio + (progress - splitRatio) * .3;
                var transP = getTransProgress(p);
                $('#anim').show();
                $('#' + stage + ' .triangleBarContainer').hide();
                recentStatus = {
                    state1: 'buyerbar',
                    state2: 'wrong',
                    progress: transP,
                    offsetY: (.25 - Math.abs(transP - .75)) * config.trans.h * 2
                };
            } else if (progress > 1 - splitRatio) {
                $('#anim').show();
                $('#' + stage + ' .triangleBarContainer').hide();
                recentStatus = {
                    state1: 'wrong',
                    state2: 'media',
                    progress: getTransProgress(progress)
                };
                // console.log('buyerbar scroll');
            } else {
                $('#anim').hide();
                $('#' + stage + ' .triangleBarContainer').show();
            }
        } else if (stage === 'media') {
            if (config.mobileResized) {
                return;
            }
            if (progress < splitRatio) {
                $('#anim').show();
                $('#' + stage + ' .triangleBarContainer').hide();
                recentStatus = {
                    state1: 'wrong',
                    state2: 'media',
                    progress: getTransProgress(progress)
                };
            } else if (progress > 1 - splitRatio) {
                $('#anim').show();
                $('#' + stage + ' .triangleBarContainer').hide();
                recentStatus = {
                    state1: 'media',
                    state2: 'stage',
                    progress: getTransProgress(progress)
                };
                // console.log('buyerbar scroll');
            } else {
                $('#anim').hide();
                $('#' + stage + ' .triangleBarContainer').show();
            }
        } else if (stage === 'stage') {
            if (config.mobileResized) {
                return;
            }
            if (progress < splitRatio) {
                $('#anim').show();
                $('#' + stage + ' .triangleBarContainer').hide();
                recentStatus = {
                    state1: 'media',
                    state2: 'stage',
                    progress: getTransProgress(progress)
                };
            } else {
                $('#anim').hide();
                $('#' + stage + ' .triangleBarContainer').show();
            }
        } else if (stage === 'end') {
            if (config.mobileResized) {
                $('#end .cover').css('opacity', 1);
                return;
            }
            if (progress < splitRatio * 1.2) {
                $('#end .cover').css('opacity', 0);
            } else {
                $('#end .cover').css('opacity', Math.min((progress - splitRatio * 1.2) * 3, 1));
            }
        }

    }

    function init() {
        // set random padding for different step heights (not required)
        $('#scroll .step').each(function() {
            // var v = 100 + Math.floor(Math.random() * window.innerHeight / 4);
            $(this)[0].style.minHeight = window.innerHeight + 'px';
        });
        // $(".tag").show(); 
        // 1. setup the scroller with the bare-bones options
        // this will also initialize trigger observations
        // 3. bind scrollama event handlers (this can be chained like below)
        scroller.setup({
                step: '.scroll__text .step',
                progress: true,
                debug: false,
            })
            .onStepEnter(handleStepEnter)
            .onStepExit(handleStepExit)
            .onStepProgress(handleStepProgress);

        // setup resize event
        if (!isMobile.any) {
            window.addEventListener('resize', scroller.resize);
        }
    }

    // kick things off
    init();

};
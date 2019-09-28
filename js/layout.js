var drawWhoCanvas = function() {
    var triangles = positions.who = [];
    var w = config.trans.w;
    var h = config.trans.h;
    var trans = {
        x: w * 2 / 3,
        y: h / 2
    };
    var column = 30;
    var l = 20;
    var sin60 = 0.86602540378;
    var h = l * sin60;
    var r = h * 2 / 3;
    d3.range(0, column).forEach(function(i) { // row
        d3.range(0, i * 2 + 1).forEach(function(j) { // column
            var paddingRatio = 1.05;
            var center = {
                x: trans.x + (j - i) * l / 2 * paddingRatio,
                y: trans.y + i * h * paddingRatio
            };
            var points;
            if (j % 2 === 0) { // up
                points = [{
                    x: center.x,
                    y: center.y - r,
                }, {
                    x: center.x - l / 2,
                    y: center.y + r / 2
                }, {
                    x: center.x + l / 2,
                    y: center.y + r / 2
                }];
            } else { // down
                center.y = center.y - r / 2;
                points = [{
                    x: center.x,
                    y: center.y + r,
                }, {
                    x: center.x + l / 2,
                    y: center.y - r / 2
                }, {
                    x: center.x - l / 2,
                    y: center.y - r / 2
                }];
            }
            var t = {
                color: 'rgba(255, 255, 255, ' + (1 - i / column) + ')',
                points: points
            };
            t.x = center.x;
            t.y = center.y;
            t.r = r;
            t.rotation = Math.atan2(t.points[0].y - t.y, t.points[0].x - t.x);
            triangles.push(t);
        });
    });

    var canvas = $('#whoTriangleCanvas')[0];
    var c = canvas.getContext('2d');
    c.clearRect(0, 0, canvas.width, canvas.height);

    triangles.forEach(function(d) {
        var x = config.trans.x;
        var y = config.trans.y;
        c.translate(x, y);
        c.beginPath();
        d.points.forEach(function(p, i) {
            if (i === 0) {
                c.moveTo(p.x, p.y);
            } else {
                c.lineTo(p.x, p.y);
            }
        });
        c.closePath();
        // the fill color
        c.fillStyle = d.color || "#88f";
        c.fill();
        c.translate(-x, -y);
    });
};
var layTriangles = function() {
    [
        [33, 26, 18, 12, 6, 3, 1, 1],
        [32, 30, 25, 13],
        [32, 31, 28, 9],
        [54, 23, 12, 6, 2, 2, 1]
    ].forEach(function(d, i) {
        var offsetY = [0, 0, -5, 12];
        var colors = ['rgb(157, 69, 45)', 'rgb(227, 182, 113)', 'rgb(125, 137,61)', 'rgb(71, 119, 180)', 'rgb(222, 183, 167)', 'rgb(180, 202, 224)', 'rgb(109, 126, 145)', 'rgb(225, 230, 232)'];
        var a = new TriangleBar($('#userbar .triangleBarContainer')[0], {
            l: 25.44,
            column: 50,
            trans: { x: 35, y: 356 + i * 250 + offsetY[i] },
            data: d.map(function(v, i) {
                return {
                    value: v,
                    color: colors[i],
                    highlight: i === 0
                }
            })
        });
        positions.userbar = (positions.userbar || []).concat(a.triangles);
    });

    [
        [27, 19, 17, 15, 9, 8, 5]
    ].forEach(function(d, i) {
        var colors = ['rgb(157, 69, 45)', 'rgb(227, 182, 113)', 'rgb(125, 137,61)', 'rgb(71, 119, 180)', 'rgb(222, 183, 167)', 'rgb(180, 202, 224)', 'rgb(109, 126, 145)', 'rgb(225, 230, 232)'];
        var a = new TriangleBar($('#userbar2 .triangleBarContainer')[0], {
            l: 34.5,
            column: 50,
            trans: { x: 336, y: 290 },
            isVertical: true,
            data: d.map(function(v, i) {
                return {
                    value: v,
                    color: colors[i],
                    highlight: i === d.length - 1
                }
            })
        });
        positions.userbar2 = (positions.userbar2 || []).concat(a.triangles);
    });

    [
        [8],
        [8],
        [6],
        [6],
        [6],
        [6],
        [4],
        [4],
        [4],
        [2]
    ].forEach(function(d, i) {
        var colors = ['rgb(157, 69, 45)', 'rgb(227, 182, 113)', 'rgb(125, 137,61)', 'rgb(71, 119, 180)', 'rgb(222, 183, 167)', 'rgb(180, 202, 224)', 'rgb(109, 126, 145)', 'rgb(225, 230, 232)'];
        var a = new TriangleBar($('#buyerbar .triangleBarContainer')[0], {
            l: 25,
            column: d[0],
            trans: { x: 80, y: 350 + i * 98 },
            data: d.map(function(v, i) {
                return {
                    value: v,
                    color: colors[i],
                    highlight: i === 0
                }
            })
        });
        positions.buyerbar = (positions.buyerbar || []).concat(a.triangles);
    });
    [
        [63],
        [49],
        [43],
        [41],
        [35],
        [30],
        [28],
        [24],
        [5]
    ].forEach(function(d, i) {
        var colors = ['rgb(45, 97, 167)'];
        var column = Math.round(d[0] / 4) * 2;
        var l = 25;
        var a = new TriangleBar($('#buyerbar .triangleBarContainer')[0], {
            l: l,
            column: column,
            trans: { x: 625 - l * column / 2, y: 350 + i * 98 },
            data: d.map(function(v, i) {
                return {
                    value: v,
                    color: colors[i],
                    highlight: i === 0
                }
            })
        });
        positions.buyerbar = (positions.buyerbar || []).concat(a.triangles);
    });



    [
        [73],
        [50],
        [45],
        [45],
        [40],
        [32],
        [28],
        [26],
        [26],
        [23]
    ].forEach(function(d, i) {
        var offsetY = [0, 0, 0, 0, 0, 0, 0, -10, -12, -30];
        var colors = ['rgb(157, 69, 45)', 'rgb(227, 182, 113)', 'rgb(125, 137,61)', 'rgb(71, 119, 180)', 'rgb(222, 183, 167)', 'rgb(180, 202, 224)', 'rgb(109, 126, 145)', 'rgb(225, 230, 232)'];
        var column = Math.round(d[0] / 12) * 2;
        var l = 22;
        var a = new TriangleBar($('#wrong .triangleBarContainer')[0], {
            l: l,
            column: column,
            trans: { x: 80, y: 360 + i * 100 + offsetY[i] },
            data: d.map(function(v, i) {
                return {
                    value: v,
                    color: colors[i],
                    highlight: i === 0
                }
            })
        });
        positions.wrong = (positions.wrong || []).concat(a.triangles);
    });

    [
        [60],
        [35],
        [72],
        [48],
        [20],
        [61],
        [28],
        [11],
        [27],
        [30]
    ].forEach(function(d, i) {
        var offsetY = [0, 0, 0, 0, 0, 0, 0, -10, -12, -30];
        var colors = ['rgb(45, 97, 167)'];
        var column = Math.round(d[0] / 4) * 2;
        var l = 22;
        var a = new TriangleBar($('#wrong .triangleBarContainer')[0], {
            l: l,
            column: column,
            trans: { x: 625 - l * column / 2, y: 360 + i * 100 + offsetY[i] },
            data: d.map(function(v, i) {
                return {
                    value: v,
                    color: colors[i],
                    highlight: i === 0
                }
            })
        });
        positions.wrong = (positions.wrong || []).concat(a.triangles);
    });


    [
        [83],
        [59],
        [43],
        [36],
        [17],
        [15],
        [11],
        [9],
        [8],
        [.5]
    ].forEach(function(d, i) {
        // var colors = ['rgb(157, 69, 45)', 'rgb(227, 182, 113)', 'rgb(125, 137,61)', 'rgb(71, 119, 180)', 'rgb(222, 183, 167)', 'rgb(180, 202, 224)', 'rgb(109, 126, 145)', 'rgb(225, 230, 232)'];
        var column = d[0] === .5 ? .5 : Math.max(Math.round(d[0] / 4) * 2, 1);
        var l = 25;
        var a = new TriangleBar($('#media .triangleBarContainer')[0], {
            l: l,
            column: column,
            trans: { x: 100, y: 370 + i * 93.5 },
            data: d.map(function(v, j) {
                return {
                    value: v,
                    color: i === 1 ? 'rgb(71, 119, 180)' : 'rgb(153, 153, 153)', //colors[i],
                    highlight: i === 1
                }
            })
        });
        positions.media = (positions.media || []).concat(a.triangles);
    });

    [
        [0, 76, 9, 0, 4],
        [2, 59, 21, 1, 4],
        [1, 66, 13, 0, 5],
        [3, 48, 16, 1, 8],
        [1, 50, 15, 0, 4],
        [4, 34, 22, 2, 1],
        [5, 22, 21, 2, 3]
    ].forEach(function(d, i) {
        var offsetY = [0, 0, 0, 0, 0, 0, 0, 0];
        var offsetColumn = [50, 50, 48, 42, 38, 34, 30];
        var lRatio = [1, 1, 1, .98, 1, 1.03, 1.04];
        var colors = ['rgb(127, 155, 184)', 'rgb(177, 191, 174)', 'rgb(45, 97, 168)', 'rgb(235, 230, 164)', 'rgb(195, 182, 174)'];
        var a = new TriangleBar($('#stage .triangleBarContainer')[0], {
            l: 27 * lRatio[i],
            column: offsetColumn[i], // Math.ceil((50 * d3.sum(d) / 89) / 2) * 2,
            trans: { x: 25, y: 318 + i * 145.3 + offsetY[i] },
            data: d.map(function(v, j) {
                return {
                    value: v,
                    color: colors[j],
                    highlight: false
                }
            })
        });
        positions.stage = (positions.stage || []).concat(a.triangles);
    });

    // who
    //drawWhoCanvas();
};

var getDomain = function(state) {
    var points = positions[state];
    if (!points.domain) {
        var min = d3.min(points, function(d) { return d.y; });
        var max = d3.max(points, function(d) { return d.y; });
        points.domain = {
            min: min,
            max: max
        };
    }
    return points.domain;
};

var recentStatus = {
    state1: '',
    state2: '',
    progress: 0
};
var lastStatus = {
    state1: '',
    state2: '',
    progress: 0
};
var isStatusChanged = function() {
    return !(recentStatus.state1 === lastStatus.state1 && recentStatus.state2 === lastStatus.state2 && recentStatus.progress === lastStatus.progress);
};
var drawAnim = function(data) {
    var canvas = $('#anim')[0];
    var c = canvas.getContext("2d");

    c.clearRect(0, 0, canvas.width, canvas.height);

    data.forEach(function(d) {
        // var d = item.position;
        // // console.log(item.vRadian * progress);
        // // var image = imagesFish[Math.round(item.index + item.vRadian * progress * 200) % 25];
        // // var image = document.getElementById("loadingFish");
        // drawFishImage(image, d, ctx);


        // config.trans, point progress trans,          scroll vertical trans is 0
        // var x = config.trans.x + d.transX;
        // var y = config.trans.y + d.transY;
        var x = config.trans.x;
        var y = config.trans.y;
        c.translate(x, y);
        // c.rotate(d.rotation);
        // the triangle
        c.beginPath();
        d.points.forEach(function(p, i) {
            if (i === 0) {
                c.moveTo(p.x, p.y);
            } else {
                c.lineTo(p.x, p.y);
            }
        });
        c.closePath();
        // the fill color
        c.fillStyle = d.color || "#88f";
        c.fill();

        // c.drawImage(car, -w / 2, -h / 2, w, h);
        // c.rotate(-d.rotation);
        c.translate(-x, -y);
    });
};
var animTrans = function(recentStatus) {
    var state1 = recentStatus.state1;
    var state2 = recentStatus.state2;
    var progressOrigin = recentStatus.progress;
    var offsetY = recentStatus.offsetY || 0;
    var t1 = positions[state1];
    var t2 = positions[state2];
    var l1 = t1.length;
    var l2 = t2.length;
    var startMax = getDomain(state1).max;
    var endMin = getDomain(state2).min;


    var ts = d3.range(0, Math.max(l1, l2)).map(function(t, i) {
        var index1 = (l1 > l2) ? i : (Math.round(Math.random() * l2) % l1);
        var index2 = (l2 > l1) ? i : (Math.round(Math.random() * l1) % l2);
        var a1 = t1[index1];
        var a2 = t2[index2];
        // var transX = (a2.x - a1.x) * progress;
        // var transY = (a2.y - a1.y) * progress;
        // var rotation = (a1.direction === a2.direction ? 0: Math.PI) * progress;
        // 
        var progress = (function() {
            // var ratio = (config.h - a1.y) / config.h;
            // var ratio2 = a2.y / config.h;
            // var ratio = (startMax - a1.y) / config.h;
            // var ratio2 = (a2.y - endMin) / config.h;
            var ratio = (startMax - a1.y) / (startMax - getDomain(state1).min + 0.01);
            var ratio2 = (a2.y - endMin) / (getDomain(state2).max - endMin + 0.01);
            var s = .5;
            var p;
            if (progressOrigin <= ratio * s) {
                p = 0;
            } else if (progressOrigin >= 1 - ratio2 * s) {
                p = 1;
            } else {
                p = (progressOrigin - ratio * s) / (1 - ratio * s - ratio2 * s);
            }
            return p;
        }());

        var x = (a2.x - a1.x) * progress + a1.x;
        var y = (a2.y - a1.y) * progress + a1.y;
        var r = (a2.r - a1.r) * progress + a1.r;
        var rotation = (a2.rotation - a1.rotation) * progress + a1.rotation;
        return {
            // transX: transX,
            // transY: transY,
            // points: a1.points.map(function(d, i) {
            //   return {
            //     x: (a2.points[i].x - d.x) * progress + d.x,
            //     y: (a2.points[i].y - d.y) * progress + d.y + offsetY
            //   };
            // }),
            points: d3.range(0, 3).map(function(d, i) {
                return {
                    x: x + Math.cos(rotation + i * Math.PI * 2 / 3) * r,
                    y: y + Math.sin(rotation + i * Math.PI * 2 / 3) * r
                }
            }),
            color: d3.scaleLinear().domain([0, 1])
                .interpolate(d3.interpolateHcl)
                .range([d3.rgb(a1.color), d3.rgb(a2.color)])(progress)
                // l: (a2.l - a1.l) * progress + a1.l,
                // rotation: rotation
        };
    });
    // console.log(ts);
    drawAnim(ts);
};



function layout(cb) {
    // var particlesTotal = data.length;
    var images = [
        // svg data
        // './img/w1.svg', './img/w2.svg',


        // image data
        // './img/fish-1.svg', './img/fish-2.svg', './img/fish-3.svg', './img/fish-4.svg', './img/fish-5.svg', './img/fish-6.svg'
    ];
    for (var j = 1; j < 6; j++) {
        for (var i = 0; i < 25; i++) {
            images.push('./img/fish/fish0' + j + '/fish0' + j + '_000' + ((i < 10) ? ('0' + i) : i) + '.png');
        }
    }
    images.push('./img/cover/questionCover.svg');
    // images.push('./img/cover/keywordCover.svg');
    // console.log(images)
    window.imagesFish = [];
    var imagesLoad = [];
    var allLoad = (function() {
        var count = 0;
        return function() {
            var i, object;
            count++;
            if (count >= images.length) {



                cb && cb();

            }
            // set loading percentage;
            (function() {
                var ratio = Math.floor(count / images.length * 100);
                $('#loadingProgress .coverBar').css('width', (100 - ratio) + '%');
                $('#loadingProgress .number').html(ratio + '%');
            }());
        };
    }());
    images.forEach(function(d, i) {
        if (d.indexOf('./img/fish') >= 0) {
            var img = document.createElement('img');
            img.addEventListener('load', allLoad);
            img.src = d;
            imagesFish[i] = img;
            // console.log(imagesFish);
        }
        if (d.indexOf('questionCover.svg') >= 0) {
            $.get(d, function(img) {
                var triangles = [];
                var testCircleDirection = function(p) { // 顺时针, true
                    // http://www.voidcn.com/article/p-fclynshk-ca.html
                    // (x2-x1)*(y3-y1) - (y2-y1)*(x3-x1)
                    // console.log((+p[1].x - +p[0].x) * (+p[2].y - +p[0].y) - (+p[1].y - +p[0].y) * (+p[2].x - +p[0].x));
                    return (p[1].x - p[0].x) * (p[2].y - p[0].y) - (p[1].y - p[0].y) * (p[2].x - p[0].x) < 0;
                };
                $(img).find('polygon').each(function(i) {
                    var points = $(this).attr('points').split(' ').slice(0, 6);
                    var color = $(this).attr('fill');
                    // console.log(testCircleDirection(points));
                    var ps = [{
                        x: +points[0],
                        y: +points[1]
                    }, {
                        x: +points[2],
                        y: +points[3]
                    }, {
                        x: +points[4],
                        y: +points[5]
                    }];
                    var t = {
                        color: color,
                        points: testCircleDirection(ps) ? ps : [ps[0], ps[2], ps[1]]
                    };
                    t.x = (t.points[0].x + t.points[1].x + t.points[2].x) / 3;
                    t.y = (t.points[0].y + t.points[1].y + t.points[2].y) / 3;
                    t.r = Math.sqrt((t.points[0].x - t.x) * (t.points[0].x - t.x) + (t.points[0].y - t.y) * (t.points[0].y - t.y));
                    t.rotation = Math.atan2(t.points[0].y - t.y, t.points[0].x - t.x);
                    triangles.push(t);
                });
                // console.log(triangles);
                allLoad();
                positions.question = triangles;
            })
        }
    });



}
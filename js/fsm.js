// var durationTime = 1000;


// var stages = ['svgWordShake', 'random', 'random1', 'random', 'random1'];
// 
var FishCanvas = function(container, fishConfig) {
    var fishConfig = fishConfig || { fishNumber: 20 };
    this.enter = function() {
        if (this.fishes) {
            return;
        }


        this.isFinished = false;
        this.start = null;
        var canvas = this.canvas = $(container)[0];

        canvas.width = $(canvas).width();
        canvas.height = $(canvas).height();

        // https://dev.to/benjaminblack/using-a-string-of-svg-as-an-image-source-8mo
        var images = this.images = fishStrings.map(function(d) {
            var svg = d;
            var blob = new Blob([svg], { type: 'image/svg+xml' });
            var url = URL.createObjectURL(blob);
            var image = document.createElement('img');
            image.src = url;
            image.addEventListener('load', function() { URL.revokeObjectURL(url) }, { once: true });
            return image;
        });

        // compute v
        var fishNumber = fishConfig.fishNumber;
        this.fishes = d3.range(0, fishNumber).map(function(d, i) {
            var d = {
                index: i,
                image: images[Math.floor(Math.random() * 6)],
                scale: .6 + Math.random() * .8,
                vx: (Math.random() + 0.2) * canvas.width / 100 / 5 * (Math.random() > 0.5 ? 1 : -1),
                position: {
                    x: canvas.width * (0.1 + 0.8 * Math.random()),
                    y: canvas.height * (0.1 + 0.8 * Math.random())
                }
            };
            d.vy = d.vx * (Math.random() - 2) / 5;
            return d;
        });
    };
    this.update = function(timestamp) {
        var canvas = this.canvas;

        if (this.isFinished) {
            return;
        }

        if (!this.start) this.start = timestamp;
        var progress = timestamp - this.start;

        var data = this.fishes;
        var setData = function() {
            // var shakeRange = 2;
            data.forEach(function(d, i) {
                var x = d.position.x + d.vx;
                var y = d.position.y + d.vy * Math.random();
                var margin = 100;
                if (x < -margin) {
                    d.vx *= -1;
                }
                if (x > (canvas.width + margin)) {
                    d.vx *= -1;
                }
                if (y < 0) {
                    d.vy *= -1;
                }
                if (y > canvas.height) {
                    d.vy *= -1;
                }
                d.position = {
                    x: x,
                    y: y,
                    vx: d.vx,
                    vy: d.vy,
                    scale: d.scale,
                    image: d.image
                };
                // console.log(x, y)

            });
        };

        var drawFishImage = function(car, pos, thectx) {
            var c = thectx || ctx;
            // ctx.drawImage(car, trans(pos[0]) - car.width / 2, trans(pos[1]) - car.height / 2);
            var x = pos.x;
            var y = pos.y;
            var width = car.width;
            var height = car.height;
            var w = 50 * pos.scale;
            var h = 50 * pos.scale / width * height;

            c.translate(x, y);
            if (pos.vx < 0) {
                c.rotate(Math.PI);
            }
            c.drawImage(car, -w / 2, -h / 2, w, h);
            if (pos.vx < 0) {
                c.rotate(-Math.PI);
            }
            c.translate(-x, -y);
        };

        var draw = function() {
            var ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            data.forEach(function(item) {
                var d = item.position;
                // console.log(item.vRadian * progress);
                // var image = imagesFish[Math.round(item.index + item.vRadian * progress * 200) % 25];
                // var image = document.getElementById("loadingFish");
                drawFishImage(d.image, d, ctx);

            });
        };

        setData();
        draw();

    };
    this.leave = function(cb) {
        cb && cb();
    };
    this.isFinished = false;
};

var fsm = {
    current: '',
    next: null,
    update: function(timestamp) {},
    trans: function(next) {},
};


function init() {


    // var controls = new function () {
    //     this.progress = 0.01;
    //     this.windowHeight = 1 + 'px';
    // }
    // var gui = new dat.GUI();
    // gui.add(controls, 'progress', 0.0001, 1.00).listen();
    // gui.add(controls, 'windowHeight').listen();

    // var stats = initStats();

    // window.gui = gui;
    // window.controls = controls;
    // window.stats = stats;

    function renderScene(timestamp) {

        // stats.update();
        // if (controls.pause < 0.5) {
        // stats.update();
        // durationTime = controls.duration;
        fsm.update(timestamp);
        // }
        requestAnimationFrame(renderScene);
    }
    renderScene();


    fsm = {
        current: null,
        next: null,
        update: function(timestamp) {
            // console.log(fsm.current);
            if (fsm.next) {
                var change = function() {
                    fsm.current = fsm.next;
                    fsm.next = null;
                    if (stages[fsm.current]) {
                        stages[fsm.current].enter();
                        stages[fsm.current].update(timestamp);
                    }
                };
                if (fsm.current) {
                    stages[fsm.current] && stages[fsm.current].leave(change);
                } else {
                    change();
                }
            } else if (fsm.current) {
                if (stages[fsm.current]) {
                    stages[fsm.current].update(timestamp);
                } else {
                    // alert(fsm.current);
                }
            }
            // console.log('update')
            if (isStatusChanged()) {
                // console.log('status changed');  
                lastStatus = recentStatus;
                animTrans(recentStatus);
            }
        },
        trans: function(next) {
            if (fsm.current !== next) {
                fsm.next = next;
            }
        },
        endTrans: function() {
            var endTrans = stages[fsm.current].endTrans;
            if (endTrans) {
                endTrans();
            }
        }
    };
    var stages = window.stages = {
        'loading': {
            stage: 'loading',
            enter: function() {
                this.isFinished = false;
                this.start = null;
                this.duration = 2000 * 10; //durationTime;
                var stage = this.stage;
                var duration = this.duration;
                var canvas = this.canvas = $('#loadingCanvas')[0];

                canvas.width = $(canvas).width();
                canvas.height = $(canvas).height();
                // console.log(this.canvas.width, this.canvas.height);
                var cycle = 1000;

                // https://dev.to/benjaminblack/using-a-string-of-svg-as-an-image-source-8mo
                var svg = fishSvgString;
                var blob = new Blob([svg], { type: 'image/svg+xml' });
                var url = URL.createObjectURL(blob);
                var image = document.createElement('img');
                image.src = url;
                image.addEventListener('load', function() { URL.revokeObjectURL(url) }, { once: true });
                this.image = image;

                // compute v
                var fishNumber = 4;
                this.fishes = d3.range(0, fishNumber).map(function(d, i) {
                    var d = {
                        index: i,
                        center: {
                            x: canvas.width / 3,
                            y: canvas.height / 3
                        },
                        scale: .8,
                        radius: canvas.width / 4,
                        radian: i / fishNumber * Math.PI * 2,
                        vRadian: Math.PI * 2 / 3 / 1000,
                        position: {
                            x: 0,
                            y: 0,
                            radian: 0
                        }
                    };
                    return d;
                });


                // wave
                (function() {
                    // https://stackoverflow.com/questions/13932704/how-to-draw-sine-waves-with-svg-js
                    var arr = [
                        [0, 0],
                        [36.42, 0],
                        [63.58, 100],
                        [100, 100],
                        [136.42, 100],
                        [163.58, 0],
                        [200, 0],
                        [236.42, 0],
                        [263.58, 100],
                        [300, 100],
                        [336.42, 100],
                        [363.58, 0],
                        [400, 0]
                    ];

                    var height = .7 * canvas.height;
                    var width = canvas.width;
                    var svg = d3.select('#loadingSvg').append('g')
                        .attr('class', 'wave')
                        .attr('width', width * 2)
                        .attr('height', height);
                    var total = 70;
                    d3.range(0, total).forEach(function(i) {
                        var scale = height / total / 100;
                        var transH = height / total;
                        var a = arr.map(function(d) {
                            return [
                                d[0] / 200 * width,
                                d[1] * scale + i * transH + 2
                            ];
                        });
                        var path = 'M' + a[0][0] + ',' + a[0][1] + 'C' + a[1][0] + ',' + a[1][1] + ',' + a[2][0] + ',' + a[2][1] + ',' + a[3][0] + ',' + a[3][1] +
                            'C' + a[4][0] + ',' + a[4][1] + ',' + a[5][0] + ',' + a[5][1] + ',' + a[6][0] + ',' + a[6][1] +
                            'C' + a[7][0] + ',' + a[7][1] + ',' + a[8][0] + ',' + a[8][1] + ',' + a[9][0] + ',' + a[9][1] +
                            'C' + a[10][0] + ',' + a[10][1] + ',' + a[11][0] + ',' + a[11][1] + ',' + a[12][0] + ',' + a[12][1];
                        if (i === 0) {
                            svg.append('path')
                                .attr('class', 'bg')
                                .attr('d', path + 'L' + 2 * width + ',' + height + 'L0,' + height + 'Z');
                        }
                        svg.append('path')
                            .attr('d', path)
                            .style('opacity', 1 - i / total);
                    });

                }());

            },
            update: function(timestamp) {
                var canvas = this.canvas; //$('#loadingCanvas')[0];
                var image = this.image;

                if (this.isFinished) {
                    return;
                }

                if (!this.start) this.start = timestamp;
                var progress = timestamp - this.start;
                var duration = this.duration;

                var data = this.fishes;
                var setData = function() {
                    // var shakeRange = 2;
                    data.forEach(function(d, i) {
                        var radian = ((d.radian - progress * d.vRadian) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
                        var x = d.center.x + -d.radius * Math.cos(radian);
                        var y = d.center.y + d.radius * Math.sin(radian);
                        d.position = {
                            x: x,
                            y: y,
                            radian: radian,
                            scale: d.scale * 2
                        };

                    });
                };

                var drawFishImage = function(car, pos, thectx) {
                    var c = thectx || ctx;
                    // ctx.drawImage(car, trans(pos[0]) - car.width / 2, trans(pos[1]) - car.height / 2);
                    // 
                    if (pos.radian > Math.PI / 4 && pos.radian < Math.PI * .75) { // 太下方的鱼不画出来
                        return;
                    }
                    var x = pos.x;
                    var y = pos.y;
                    var width = car.width;
                    var height = car.height;
                    var w = 50 * pos.scale;
                    var h = 50 * pos.scale / width * height;
                    var angleInRadians = Math.PI / 2 - pos.radian; // Math.PI / 2 - Math.atan2(direction[0], direction[1]) //Math.atan2(direction[0], -direction[1]);

                    c.translate(x, y);
                    c.rotate(angleInRadians + Math.PI);
                    c.drawImage(car, -w / 2, -h / 2, w, h);
                    // console.log(width, height);
                    c.rotate(-(angleInRadians + Math.PI));
                    c.translate(-x, -y);
                };

                var draw = function() {
                    // ctx.clearRect(0, 0, canvas.width, canvas.height);
                    var ctx = canvas.getContext("2d");
                    ctx.fillStyle = "rgb(254, 247, 228)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);

                    ctx.beginPath();
                    ctx.arc(canvas.width / 2, canvas.height / 3, canvas.width / 4, 0, 2 * Math.PI, false);
                    ctx.fillStyle = '#fff';
                    ctx.fill();
                    ctx.closePath();

                    data.forEach(function(item) {
                        var d = item.position;
                        // console.log(item.vRadian * progress);
                        // var image = imagesFish[Math.round(item.index + item.vRadian * progress * 200) % 25];
                        // var image = document.getElementById("loadingFish");
                        drawFishImage(image, d, ctx);

                    });
                };

                setData();
                draw();

            },
            leave: function(cb) {
                cb && cb();
            },
            isFinished: false
        },
        // 'fishMove': {
        //     stage: 'fishMove',
        //     enter: function () {
        //         this.isFinished = false;
        //         this.start = null;
        //         this.duration = 2000 * 20000; //durationTime;
        //         var stage = this.stage;
        //         var duration = this.duration;

        //         var canvas = this.canvas = $('#fishMoveCanvas')[0];
        //         canvas.width = $(canvas).width();
        //         canvas.height = $(canvas).height();

        //         // set Svg 
        //         // (function () {
        //         //     if (this.svg) {
        //         //         return;
        //         //     }
        //         //     this.svg = true;

        //         //     var width = canvas.width;
        //         //     var height = width;
        //         //     var svg = d3.select('#fishMoveSvg').append('g')
        //         //         .attr('class', 'wave')
        //         //         .attr('width', width)
        //         //         .attr('height', height)
        //         //         .attr('transform', 'translate(' + -width / 6 + ',' + (canvas.height / 3 - width / 2) + ')');
        //         //     var total = 40;
        //         //     d3.range(0, total).forEach(function (i) {
        //         //         svg.append('circle')
        //         //             .attr('cx', width / 2)
        //         //             .attr('cy', height / 2)
        //         //             .attr('r', (i + 1) / total * width)
        //         //             .style('opacity', 1 - i / total);
        //         //     });

        //         // }());

        //         var total = 25;
        //         this.waves = d3.range(0, total).map(function (d, i) {
        //           return {
        //             index: d,
        //             originR: (i + 1) / total * canvas.width,
        //             // r: (i + 1) / total * canvas.width,
        //             max: canvas.width,
        //             x: canvas.width /3,
        //             y: canvas.height / 3,
        //             v: canvas.width / 1000 / 10 
        //           };
        //         });

        //         // compute v
        //         this.fishes = d3.range(0, 1000).map(function (d, i) {
        //             var d = {
        //                 index: i,
        //                 fishType: (function () {
        //                   var i = Math.floor(Math.random() * 5);
        //                   // if (Math.random() < .5) { // 多一些黄色的鱼
        //                   //   i = 1;
        //                   // }
        //                   return i;
        //                 }()),
        //                 center: {
        //                     x: canvas.width / 3 * (0.8 + 0.4 * Math.random()),
        //                     y: canvas.height / 3 * (0.8 + 0.4 * Math.random())
        //                 },
        //                 scale: i < 10 ? (1 + 3 * Math.random()) : 1, //* canvas.width / 750
        //                 radius: canvas.width / 3 + Math.pow(Math.random(), .5) * (200 + canvas.width / 2) * 1.4,
        //                 radian: Math.random() * Math.PI * 2,
        //                 vRadian: Math.random() * Math.PI / 1000 / 10 + Math.PI / 10000 / 2,
        //                 position: {
        //                     x: 0,
        //                     y: 0,
        //                     radian: 0
        //                 }
        //             };
        //             if (d.scale === 1 && Math.random() < .5) {// 多一些黄色的小鱼
        //               d.fishType = 1;
        //             }
        //             return d;
        //         });
        //         this.fishes.sort(function (a, b) {
        //             return a.scale - b.scale;
        //         });
        //     },
        //     update: function (timestamp) {
        //         var canvas = this.canvas;
        //         var ctx = canvas.getContext("2d");

        //         if (this.isFinished) {
        //             return;
        //         }

        //         if (!this.start) this.start = timestamp;
        //         var progress = timestamp - this.start;
        //         var duration = this.duration;
        //         // console.log(progress, timestamp, duration, durationTime);
        //         if (progress >= duration) {
        //             this.isFinished = true;
        //         }

        //         var data = this.fishes;
        //         var setData = function () {
        //             // var shakeRange = 2;
        //             data.forEach(function (d, i) {
        //                 var radian = d.radian + progress * d.vRadian * d.scale * canvas.width / 750;
        //                 var x = d.center.x + -d.radius / Math.pow(d.scale, .5) * Math.cos(radian);
        //                 var y = d.center.y + d.radius / Math.pow(d.scale, .5) * Math.sin(radian);
        //                 d.position = {
        //                     x: x,
        //                     y: y,
        //                     radian: radian,
        //                     scale: d.scale * 2 * canvas.width / 750,
        //                     rotation: [Math.PI / 4, Math.PI * 1.1, Math.PI * 1.5, Math.PI * .6, Math.PI * 1.56][d.fishType]
        //                 };

        //             });
        //         };

        //         var drawCarImage = function (car, pos, thectx) {
        //           var c = thectx || ctx;
        //           // ctx.drawImage(car, trans(pos[0]) - car.width / 2, trans(pos[1]) - car.height / 2);
        //           var x = pos.x;
        //           var y = pos.y;
        //           var width = car.width;
        //           var height = car.height;
        //           var w = 50 * pos.scale;
        //           var h = 50 * pos.scale / width * height;
        //           var angleInRadians = Math.PI / 2 - pos.radian;// Math.PI / 2 - Math.atan2(direction[0], direction[1]) //Math.atan2(direction[0], -direction[1]);

        //           // console.log(direction, angleInRadians);
        //           // 
        //           if ( (x + w / 2) < 0 || (x - w / 2) > canvas.width || (y + h / 2) < 0 || (y - h / 2) > canvas.height) {
        //             return;
        //           }

        //           c.translate(x, y);
        //           c.rotate(angleInRadians - pos.rotation);
        //           c.drawImage(car, -w / 2, -h / 2, w, h);
        //           // console.log(width, height);
        //           c.rotate(-(angleInRadians - pos.rotation));
        //           c.translate(-x, -y);
        //         };

        //         var waves = this.waves;
        //         var draw = function () {
        //             // ctx.clearRect(0, 0, canvas.width, canvas.height);
        //             // ctx.fillStyle = "rgb(254, 247, 228)";
        //             // ctx.fillRect(0, 0, canvas.width, canvas.height);
        //             ctx.clearRect(0, 0, canvas.width, canvas.height);

        //             // draw waves
        //             ctx.lineWidth = 3;
        //             waves.forEach(function (d, i) {
        //               d.r = (d.originR + d.v * progress) % d.max;

        //               ctx.beginPath();
        //               // arc(x, y, radius, startAngle, endAngle, anticlockwise)
        //               ctx.strokeStyle = 'rgba(237, 202, 132,' + ( 1 - d.r / d.max) + ')';
        //               ctx.arc(d.x, d.y, d.r, 0, 2 * Math.PI, false);
        //               ctx.stroke();
        //               ctx.closePath();

        //             });

        //             data.forEach(function (item) {
        //               var d = item.position;
        //               // console.log(item.vRadian * progress);
        //               var image = imagesFish[Math.round(item.index + item.vRadian * progress * 200) % 25 + item.fishType * 25];
        //               drawCarImage(image, d, ctx);
        //               // ctx.beginPath();
        //               // // arc(x, y, radius, startAngle, endAngle, anticlockwise)
        //               // ctx.arc(d.x, d.y, d.r, 0, 2 * Math.PI, false);
        //               // ctx.fillStyle = d.color;
        //               // ctx.fill();
        //               // ctx.closePath();
        //             });
        //         };

        //         setData();
        //         draw();

        //     },
        //     leave: function (cb) {
        //         cb && cb();
        //     },
        //     isFinished: false
        // },
        'intro': {
            stage: 'intro',
            enter: function() {
                this.isFinished = false;
                this.start = null;
                this.duration = 2000 * 10; //durationTime;
                var stage = this.stage;
                var duration = this.duration;
                var canvas = this.canvas = $('#introCanvas')[0];

                canvas.width = $(canvas).width();
                canvas.height = $(canvas).height();
                // console.log(this.canvas.width, this.canvas.height);
                var cycle = 1000;

                // https://dev.to/benjaminblack/using-a-string-of-svg-as-an-image-source-8mo
                var svg = fishSvgString;
                var blob = new Blob([svg], { type: 'image/svg+xml' });
                var url = URL.createObjectURL(blob);
                var image = document.createElement('img');
                image.src = url;
                image.addEventListener('load', function() { URL.revokeObjectURL(url) }, { once: true });
                this.image = image;

                // compute v
                var fishNumber = 2;
                this.fishes = d3.range(0, fishNumber).map(function(d, i) {
                    var d = {
                        index: i,
                        center: {
                            x: canvas.width / 2,
                            y: canvas.height / 2.5
                        },
                        scale: .6,
                        radius: canvas.width / 4,
                        radian: i / fishNumber * Math.PI * 2,
                        vRadian: Math.PI * 2 / 3 / 1000,
                        position: {
                            x: 0,
                            y: 0,
                            radian: 0
                        }
                    };
                    return d;
                });



                if (this.svg) {
                    return;
                }
                this.svg = true;
                // wave
                var drawWave = function(containerId, arr) {
                    // https://stackoverflow.com/questions/13932704/how-to-draw-sine-waves-with-svg-js
                    // var arr = [[0, 0], [36.42, 0], [63.58, 100], [100, 100], [136.42, 100], [163.58, 0], [200, 0], [236.42, 0], [263.58, 100], [300, 100], [336.42, 100], [363.58, 0], [400, 0]];

                    var height = .5 * canvas.height;
                    var width = canvas.width;
                    var svg = d3.select('#' + containerId).append('g')
                        .attr('class', 'wave')
                        .attr('width', width * 2)
                        .attr('height', height);
                    var total = 50;
                    d3.range(0, total).forEach(function(i) {
                        var scale = height / total / 100 * 10;
                        var transH = height / total;
                        var a = arr.map(function(d) {
                            return [
                                d[0] / 200 * width,
                                d[1] * scale + i * transH + 2
                            ];
                        });
                        var path = 'M' + a[0][0] + ',' + a[0][1] + 'C' + a[1][0] + ',' + a[1][1] + ',' + a[2][0] + ',' + a[2][1] + ',' + a[3][0] + ',' + a[3][1] +
                            'C' + a[4][0] + ',' + a[4][1] + ',' + a[5][0] + ',' + a[5][1] + ',' + a[6][0] + ',' + a[6][1] +
                            'C' + a[7][0] + ',' + a[7][1] + ',' + a[8][0] + ',' + a[8][1] + ',' + a[9][0] + ',' + a[9][1] +
                            'C' + a[10][0] + ',' + a[10][1] + ',' + a[11][0] + ',' + a[11][1] + ',' + a[12][0] + ',' + a[12][1];
                        if (i === 0) {
                            svg.append('path')
                                .attr('class', 'bg')
                                .attr('d', path + 'L' + 2 * width + ',' + height * .55 + 'L0,' + height * .55 + 'Z');
                        }
                        svg.append('path')
                            .attr('d', path)
                            .style('opacity', 1 - i / total);
                    });

                };
                drawWave('introSvg', [
                    [0, 0],
                    [36.42, 0],
                    [63.58, 100],
                    [100, 100],
                    [136.42, 100],
                    [163.58, 0],
                    [200, 0],
                    [236.42, 0],
                    [263.58, 100],
                    [300, 100],
                    [336.42, 100],
                    [363.58, 0],
                    [400, 0]
                ]);

                var drawWave2 = function(containerId, arr) {
                    // https://stackoverflow.com/questions/13932704/how-to-draw-sine-waves-with-svg-js
                    // var arr = [[0, 0], [36.42, 0], [63.58, 100], [100, 100], [136.42, 100], [163.58, 0], [200, 0], [236.42, 0], [263.58, 100], [300, 100], [336.42, 100], [363.58, 0], [400, 0]];

                    var height = .2 * canvas.height;
                    var width = canvas.width;
                    var svg = d3.select('#' + containerId).append('g')
                        .attr('class', 'wave')
                        .attr('width', width * 2)
                        .attr('height', height);
                    var total = 20;
                    d3.range(0, total).forEach(function(i) {
                        var scale = height / total / 100 * 4;
                        var transH = height / total;
                        var a = arr.map(function(d) {
                            return [
                                d[0] / 200 * width,
                                d[1] * scale + i * transH + 2
                            ];
                        });
                        var path = 'M' + a[0][0] + ',' + a[0][1] + 'C' + a[1][0] + ',' + a[1][1] + ',' + a[2][0] + ',' + a[2][1] + ',' + a[3][0] + ',' + a[3][1] +
                            'C' + a[4][0] + ',' + a[4][1] + ',' + a[5][0] + ',' + a[5][1] + ',' + a[6][0] + ',' + a[6][1] +
                            'C' + a[7][0] + ',' + a[7][1] + ',' + a[8][0] + ',' + a[8][1] + ',' + a[9][0] + ',' + a[9][1] +
                            'C' + a[10][0] + ',' + a[10][1] + ',' + a[11][0] + ',' + a[11][1] + ',' + a[12][0] + ',' + a[12][1];
                        if (i === 0) {
                            svg.append('path')
                                .attr('class', 'bg')
                                .attr('d', path + 'L' + 2 * width + ',' + height + 'L0,' + height + 'Z');
                        }
                        svg.append('path')
                            .attr('d', path)
                            .style('opacity', 1 - i / total);
                    });

                };

                drawWave2('introSvgbg', [
                    [0, 100],
                    [36.42, 100],
                    [63.58, 0],
                    [100, 0],
                    [136.42, 0],
                    [163.58, 100],
                    [200, 100],
                    [236.42, 100],
                    [263.58, 0],
                    [300, 0],
                    [336.42, 0],
                    [363.58, 100],
                    [400, 100]
                ])

            },
            update: function(timestamp) {
                var canvas = this.canvas; //$('#loadingCanvas')[0];
                var image = this.image;

                if (this.isFinished) {
                    return;
                }

                if (!this.start) this.start = timestamp;
                var progress = timestamp - this.start;
                var duration = this.duration;

                var data = this.fishes;
                var setData = function() {
                    // var shakeRange = 2;
                    data.forEach(function(d, i) {
                        var radian = ((d.radian - progress * d.vRadian) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
                        var x = d.center.x + -d.radius * Math.cos(radian);
                        var y = d.center.y + d.radius * Math.sin(radian);
                        d.position = {
                            x: x,
                            y: y,
                            radian: radian,
                            scale: d.scale * 2
                        };

                    });
                };

                var drawFishImage = function(car, pos, thectx) {
                    var c = thectx || ctx;
                    // ctx.drawImage(car, trans(pos[0]) - car.width / 2, trans(pos[1]) - car.height / 2);

                    if (pos.radian > Math.PI / 4 && pos.radian < Math.PI * .75) { // 太下方的鱼不画出来
                        // console.log(pos.radian / Math.PI);
                        return;
                    }
                    var x = pos.x;
                    var y = pos.y;
                    var width = car.width;
                    var height = car.height;
                    var w = 50 * pos.scale;
                    var h = 50 * pos.scale / width * height;
                    var angleInRadians = Math.PI / 2 - pos.radian; // Math.PI / 2 - Math.atan2(direction[0], direction[1]) //Math.atan2(direction[0], -direction[1]);

                    c.translate(x, y);
                    c.rotate(angleInRadians + Math.PI);
                    c.drawImage(car, -w / 2, -h / 2, w, h);
                    // console.log(width, height);
                    c.rotate(-(angleInRadians + Math.PI));
                    c.translate(-x, -y);
                };

                var draw = function() {
                    // ctx.clearRect(0, 0, canvas.width, canvas.height);
                    var ctx = canvas.getContext("2d");
                    // ctx.fillStyle = "rgb(254, 247, 228)";
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    data.forEach(function(item) {
                        var d = item.position;
                        // console.log(item.vRadian * progress);
                        // var image = imagesFish[Math.round(item.index + item.vRadian * progress * 200) % 25];
                        // var image = document.getElementById("loadingFish");
                        drawFishImage(image, d, ctx);

                    });
                };

                setData();
                draw();

            },
            leave: function(cb) {
                cb && cb();
            },
            isFinished: false
        },
        'keyword': {
            stage: 'keyword',
            enter: function() {
                if (this.fishCanvas) {
                    return;
                }
                this.fishCanvas = new FishCanvas($('#keywordCanvas'), { fishNumber: 10 });
                this.fishCanvas.enter();
            },
            update: function(timestamp) {
                this.fishCanvas.update(timestamp);
            },
            leave: function(cb) {
                cb && cb();
            },
            isFinished: false
        },
        'who': {
            stage: 'who',
            enter: function() {
                if (this.fishCanvas) {
                    return;
                }
                this.fishCanvas = new FishCanvas($('#whoCanvas'), { fishNumber: 10 });
                this.fishCanvas.enter();
            },
            update: function(timestamp) {
                this.fishCanvas.update(timestamp);
            },
            leave: function(cb) {
                cb && cb();
            },
            isFinished: false
        },

        /*{
            stage: 'who',
            enter: function () {
                this.isFinished = false;
                this.start = null;
                this.duration = 2000 * 10; //durationTime;
                var stage = this.stage;
                var duration = this.duration;
                var canvas = this.canvas = $('#whoCanvas')[0];

                canvas.width = $(canvas).width();
                canvas.height = $(canvas).height();

                // https://dev.to/benjaminblack/using-a-string-of-svg-as-an-image-source-8mo
                var svg = fishSvgString;
                var blob = new Blob([svg], {type: 'image/svg+xml'});
                var url = URL.createObjectURL(blob);
                var image = document.createElement('img');
                image.src = url;
                image.addEventListener('load', function () { URL.revokeObjectURL(url)}, {once: true});
                this.image = image;

                if (this.fishes) {
                    return;
                }
                // compute v
                var fishNumber = 20;
                this.fishes = d3.range(0, fishNumber).map(function (d, i) {
                    var d = {
                        index: i,
                        scale: .6 + Math.random() * .4,
                        vx: (Math.random() + 0.2) * canvas.width / 100 / 5 * (Math.random() > 0.5 ? 1 : -1),
                        position: {
                            x: canvas.width * (0.1 + 0.8 * Math.random()),
                            y: canvas.height * (0.1 + 0.8 * Math.random())
                        }
                    };
                    d.vy = d.vx * (Math.random() - 2) / 5;
                    return d;
                });
            },
            update: function (timestamp) {
                var canvas = this.canvas; //$('#loadingCanvas')[0];
                var image = this.image;

                if (this.isFinished) {
                    return;
                }

                if (!this.start) this.start = timestamp;
                var progress = timestamp - this.start;
                var duration = this.duration;

                var data = this.fishes;
                var setData = function () {
                    // var shakeRange = 2;
                    data.forEach(function (d, i) {
                        var x = d.position.x + d.vx;
                        var y = d.position.y + d.vy * Math.random();
                        var margin = 100;
                        if (x < -margin) {
                            d.vx *= -1;
                        }
                        if (x > (canvas.width + margin)) {
                            d.vx *= -1;
                        }
                        if (y < 0) {
                            d.vy *= -1;
                        }
                        if (y > canvas.height) {
                            d.vy *= -1;
                        }
                        d.position = {
                            x: x,
                            y: y,
                            vx: d.vx,
                            vy: d.vy,
                            scale: d.scale
                        };
                        // console.log(x, y)

                    });
                };

                var drawFishImage = function (car, pos, thectx) {
                  var c = thectx || ctx;
                  // ctx.drawImage(car, trans(pos[0]) - car.width / 2, trans(pos[1]) - car.height / 2);
                  var x = pos.x;
                  var y = pos.y;
                  var width = car.width;
                  var height = car.height;
                  var w = 50 * pos.scale;
                  var h = 50 * pos.scale / width * height;

                  c.translate(x, y);
                  if (pos.vx < 0) {
                    c.rotate(Math.PI);
                  }
                  c.drawImage(car, -w / 2, -h / 2, w, h);
                  if (pos.vx < 0) {
                    c.rotate(-Math.PI);
                  }
                  c.translate(-x, -y);
                };

                var draw = function () {
                    var ctx = canvas.getContext("2d");
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    data.forEach(function (item) {
                      var d = item.position;
                      // console.log(item.vRadian * progress);
                      // var image = imagesFish[Math.round(item.index + item.vRadian * progress * 200) % 25];
                      // var image = document.getElementById("loadingFish");
                      drawFishImage(image, d, ctx);

                    });
                };

                setData();
                draw();

            },
            leave: function (cb) {
                cb && cb();
            },
            isFinished: false
        },
        */
        'userbar': {
            stage: 'userbar',
            enter: function() {},
            update: function() {},
            leave: function(cb) {
                cb && cb();
            },
            isFinished: false
        },
        'userbar2': {
            stage: 'userbar2',
            enter: function() {},
            update: function() {},
            leave: function(cb) {
                cb && cb();
            },
            isFinished: false
        },
        'question': {
            stage: 'question',
            enter: function() {},
            update: function() {},
            leave: function(cb) {
                cb && cb();
            },
            isFinished: false
        },
        'buyerbar': {
            stage: 'buyerbar',
            enter: function() {},
            update: function() {},
            leave: function(cb) {
                cb && cb();
            },
            isFinished: false
        },
        'why': {
            stage: 'why',
            enter: function() {
                if (this.fishCanvas) {
                    return;
                }
                this.fishCanvas = new FishCanvas($('#whyCanvas'));
                this.fishCanvas.enter();
            },
            update: function(timestamp) {
                this.fishCanvas.update(timestamp);
            },
            leave: function(cb) {
                cb && cb();
            },
            isFinished: false
        },
        'wrong': {
            stage: 'inwrongtro',
            enter: function() {},
            update: function() {},
            leave: function(cb) {
                cb && cb();
            },
            isFinished: false
        },
        'media': {
            stage: 'media',
            enter: function() {},
            update: function() {},
            leave: function(cb) {
                cb && cb();
            },
            isFinished: false
        },
        'stage': {
            stage: 'stage',
            enter: function() {},
            update: function() {},
            leave: function(cb) {
                cb && cb();
            },
            isFinished: false
        },
        'beforeEnd': {
            stage: 'beforeEnd',
            enter: function() {
                if (this.fishCanvas) {
                    return;
                }
                this.fishCanvas = new FishCanvas($('#beforeEndCanvas'));
                this.fishCanvas.enter();
            },
            update: function(timestamp) {
                this.fishCanvas.update(timestamp);
            },
            leave: function(cb) {
                cb && cb();
            },
            isFinished: false
        },
        'end': {
            stage: 'end',
            enter: function() {
                if (this.fishCanvas) {
                    return;
                }
                this.fishCanvas = new FishCanvas($('#endCanvas'));
                this.fishCanvas.enter();
            },
            update: function(timestamp) {
                this.fishCanvas.update(timestamp);
            },
            leave: function(cb) {
                cb && cb();
            },
            isFinished: false
        },
    };
}

function initStats() {
    var stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.getElementById('Stats-output')
        .appendChild(stats.domElement);
    return stats;
}
var TriangleBar = function (container,config) {
  // console.log(config);
  var container = $(container);
  var column = config.column; // 列数
  var l = config.l; // 三角形边长
  var data = config.data || [{
      value: .5,
      color: 'red',
      highlight: true
    },{
      value: .5,
      color: 'blue'
    }];

  var sin60 = 0.86602540378;
  var r = l * sin60 * 2 / 3;
  var margin = {
    left: r / 2,
    right: r / 2,
    top: r / 2,
    bottom: r / 2
  };

  // margin ?
  var w = (column / 2 + 1) * l
          + margin.left + margin.right, // margin left and right
      h = 2 * l * sin60
          + margin.top + margin.bottom; // margin top and bottom
  var svg = d3.select(container[0]).append("svg")
    .attr("width", w)
    .attr("height", h);

  if (config.trans) {
    // console.log('a');
    svg.style('position', 'absolute')
    .style('left', config.trans.x + 'px')
    .style('top', config.trans.y + 'px');
  }
  if (config.isVertical) {
      svg.style('transform-origin', '0 0');
      svg.style('transform', 'matrix(0,1,1, 0, 0, 0)');
  }
  var vis;
  var color = ["#9E0142", "#D53E4F", "#F46D43", "#FDAE61", "#FEE08B", "#E6F598", "#ABDDA4", "#66C2A5", "#3288BD", "#5E4FA2"];

  //prepare data

  // set default color
  // set percentage;
  var sum = data.reduce(function (a, b) {
    return {value: a.value + b.value};
  }, {value: 0}).value;
  var colorMap = [];
  // var colorHash = {};
  data.forEach(function (d, i) {
    d.ratio = d.value / sum;
    d.color = d.color || color[i % color.length];
    colorMap.push({
      ratio: ((colorMap[i - 1] && colorMap[i - 1].ratio) || 0) + d.ratio,
      color: d.color
    });
  });

  // console.log(data);

  var that = this;


  //draw
  var draw = function (rawData) {
    //d3 obj
    // vis = svg.append("g")
    // .attr("width", w)
    // .attr("height", h)
    //.attr("transform", "translate(" + legendWidth + ",0)");
    
    var triangles = that.triangles = TriangleBar.layout(l, column);


    var bgBarContainer = svg.append("g")
    .attr("width", w - margin.left - margin.right)
    .attr("height", h - margin.top - margin.bottom)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    bgBarContainer.selectAll(".bgBar")
      .data(data)
      .enter()
      .append('path')
        .attr('class', 'bgBar')
        .attr('d', function(d, i) {
          var width = l * column / 2 * d.ratio;
          var height = l * 2 * sin60;
          var transx = i === 0 ? 0 : data[i - 1].end;
          d.end = transx + width;
          if (column < 1) { // single
            return 'M ' + (transx + 0) + ' ' + height 
              + ' L ' + (transx + l) +' '+ height 
              + ' L ' + (transx + l / 2) +' '+ (height / 2)
              + ' z';

          } else {
            return 'M ' + (transx + 0) + ' ' + height 
              + ' L ' + (transx + width) +' '+ height 
              + ' L ' + (transx + width + l) +' '+ 0
              + ' L ' + (transx + l) +' '+ 0
              + ' z';  
          }
        })
        .attr('fill', function(d) {
          return d.color;
        });

    // var triangleContainer = svg.append("g")
    // .attr("width", w - margin.left - margin.right)
    // .attr("height", h - margin.top - margin.bottom)
    // .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    // triangleContainer.selectAll(".triangle")
    svg.selectAll(".triangle")
      .data(triangles)
      .enter()
      .append('path')
        .attr('class', 'triangle')
        .attr('d', function(d) {
          return 'M ' + d.points[0].x +' '+ d.points[0].y + ' L ' + d.points[1].x +' '+ d.points[1].y + ' L ' + d.points[2].x +' '+ d.points[2].y + ' z';
        })
        // .attr('fill', 'red');
    
    var highlightBarContainer = svg.append("g")
    .attr("width", w - margin.left - margin.right)
    .attr("height", h - margin.top - margin.bottom)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    highlightBarContainer.selectAll(".highlightBar")
      .data(data)
      .enter()
      .append('path')
        .attr('class', 'highlightBar')
        .attr('d', function(d, i) {
          var width = l * column / 2 * d.ratio;
          var height = l * 2 * sin60;
          var transx = i === 0 ? 0 : data[i - 1].end;
          d.end = transx + width;
          if (!d.highlight) {
            return '';
          }
          return 'M ' + (transx + 0) + ' ' + height 
            + ' L ' + (transx + width) +' '+ height 
            + ' L ' + (transx + width + l) +' '+ 0
            + ' L ' + (transx + l) +' '+ 0
            + ' z';
        });
  };
  
  var clean = function () {
  };

  var render = function () {
    clean();
    draw();
  };
  render();

  if (config.isVertical) {
    this.triangles = TriangleBar.layout(l, column, true);
  }
  if (config.trans) {
    this.triangles = this.triangles.map(function (t) {
      return {
        x: t.x + config.trans.x,
        y: t.y + config.trans.y,
        direction: t.direction,
        r: t.r,
        l: t.l,
        points: [
          {x: t.points[0].x + config.trans.x, y: t.points[0].y + config.trans.y},
          {x: t.points[1].x + config.trans.x, y: t.points[1].y + config.trans.y},
          {x: t.points[2].x + config.trans.x, y: t.points[2].y + config.trans.y}
        ],
        rotation: t.rotation
      }
    });
  }
  // var cs = [];
  that.triangles.forEach(function (t, i) {
    var ratio = (i % column + .5) / column;
    // console.log(ratio);
    colorMap.slice().reverse().forEach(function (d, j) {
      // console.log(ratio, d.ratio);
      if (ratio <= d.ratio) {
         t.color = d.color;
         // cs[i] = d.color;
      }
    });
  });
  // console.log(colorMap, cs);
  // console.log(colorMap);
}

TriangleBar.layout = function (l, columnNumber, isVertical) {
  // l is triangle side length
  var sin60 = 0.86602540378;
  var h = l * sin60;
  var r = h * 2 / 3;
  var triangles = d3.range(0, columnNumber * 2).map(function (i) {
    var col = i % columnNumber;
    var row = 1 - Math.floor(i / columnNumber);
    var direction = i % 2 === 0 ? 'up' : 'down';
    var x = (col + 1) * (l / 2)
                  + (row === 0 ? (l / 2) : 0) // row;
                  + r / 2; // margin;
    var y = (direction === 'up' ? r : (r / 2))
              + (row === 0 ? 0 : h)
              + r / 2; // margin
    var points = [];
    if (direction === 'up') {
      points = [{
        x: x,
        y: y - r
      },{
        x: x - l / 2,
        y: y + r / 2
      },{
        x: x + l / 2,
        y: y + r / 2
      }];
    } else {
      points = [{
        x: x,
        y: y + r
      },{
        x: x + l / 2,
        y: y - r / 2
      },{
        x: x - l / 2,
        y: y - r / 2
      }];
    }
    if (!isVertical) {
      return {
        x: x,
        y: y,
        direction: direction,
        r: r,
        l: l,
        points: points,
        rotation: Math.atan2(points[0].y - y, points[0].x - x)
      };
    } else { // x swap with y
      points = points.map(function (d) {
        return {
          x: d.y,
          y: d.x
        };
      });
      var tempP = points[0]; // 确保3个点顺序是顺时针。
      points[0] = points[1];
      points[1] = tempP; 
      return {
        x: y,
        y: x,
        direction: direction,
        r: r,
        l: l,
        points: points,
        rotation: Math.atan2(points[0].y - x, points[0].x - y)
      };
    }
  });
  return triangles;
};




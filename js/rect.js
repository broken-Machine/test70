// let lastRect = d3.select('#last_rects').append("svg").attr('width', '100%').attr('height', 0).attr('opacity', '1')

// lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '70%').attr('y', '2%').attr('opacity', '0')
// lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '60%').attr('y', '4%').attr('opacity', '0')
// lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '80%').attr('y', '5%').attr('opacity', '0')
// lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '90%').attr('y', window.innerWidth * 0.127 / 2).attr('opacity', '0')
// lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '30%').attr('y', '15%').attr('opacity', '0')
// lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', window.innerWidth * 0.65 / 2).attr('y', '20%').attr('opacity', '0')
// lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '68%').attr('y', '50%').attr('opacity', '0')
// lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '78%').attr('y', '48%').attr('opacity', '0')
// lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '20%').attr('y', '78%').attr('opacity', '0')
// lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '41%').attr('y', '88%').attr('opacity', '0')

// lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '21%').attr('y', '12%').attr('opacity', '0')
// lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '60%').attr('y', '46%').attr('opacity', '0')
// lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '80%').attr('y', '20%').attr('opacity', '0')
// lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', window.innerWidth * 0.65 / 2).attr('y', '34%').attr('opacity', '0')
// lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '25%').attr('y', '50%').attr('opacity', '0')
// lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '50%').attr('y', '60%').attr('opacity', '0')
// lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '60%').attr('y', '70%').attr('opacity', '0')
// lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '7%').attr('y', '92%').attr('opacity', '0')

let firstRect = function() {

    $('#first_rects').append('<div class="rects rects1" style="top:103vh;left:70vw"></div>')
    $('#first_rects').append('<div class="rects rects1" style="top:106vh;left:60vw"></div>')
    $('#first_rects').append('<div class="rects rects1" style="top:118vh;left:20vw"></div>')
    $('#first_rects').append('<div class="rects rects1" style="top:117vh;left:80vw"></div>')
    $('#first_rects').append('<div class="rects rects1" style="top:122vh;left:90vw"></div>')
    $('#first_rects').append('<div class="rects rects1" style="top:133vh;left:30vw"></div>')
    $('#first_rects').append('<div class="rects rects1 burl" style="top:137vh;left:62vw"></div>')
    $('#first_rects').append('<div class="rects rects1 burl" style="top:153vh;left:68vw"></div>')
    $('#first_rects').append('<div class="rects rects1 burl" style="top:148vh;left:28vw"></div>')
    $('#first_rects').append('<div class="rects rects1 burl" style="top:139vh;left:68vw"></div>')
    $('#first_rects').append('<div class="rects rects1" style="top:129vh;left:78vw"></div>')
    $('#first_rects').append('<div class="rects rects1 burl" style="top:141vh;left:20vw"></div>')
    $('#first_rects').append('<div class="rects rects1" style="top:111vh;left:41vw"></div>')

    $('#first_rects').append('<div class="rects rects2" style="top:110vh;left:21vw"></div>')
    $('#first_rects').append('<div class="rects rects2" style="top:102vh;left:60vw"></div>')
    $('#first_rects').append('<div class="rects rects2" style="top:111vh;left:80vw"></div>')
    $('#first_rects').append('<div class="rects rects2" style="top:122vh;left:40vw"></div>')
    $('#first_rects').append('<div class="rects rects2" style="top:131vh;left:25vw"></div>')
    $('#first_rects').append('<div class="rects rects2 burl" style="top:149vh;left:50vw"></div>')
    $('#first_rects').append('<div class="rects rects2" style="top:121vh;left:60vw"></div>')
    $('#first_rects').append('<div class="rects rects2" style="top:112vh;left:7vw"></div>')
}()

let lastRect = function() {

    $('#last_rects').append('<div class="rects rects1" style="top:933vh;left:70vw"></div>')
    $('#last_rects').append('<div class="rects rects1" style="top:936vh;left:60vw"></div>')
    $('#last_rects').append('<div class="rects rects1" style="top:948vh;left:20vw"></div>')
    $('#last_rects').append('<div class="rects rects1" style="top:947vh;left:80vw"></div>')
    $('#last_rects').append('<div class="rects rects1" style="top:962vh;left:90vw"></div>')
    $('#last_rects').append('<div class="rects rects1" style="top:963vh;left:30vw"></div>')
    $('#last_rects').append('<div class="rects rects1 burl" style="top:967vh;left:62vw"></div>')
    $('#last_rects').append('<div class="rects rects1 burl" style="top:983vh;left:68vw"></div>')
    $('#last_rects').append('<div class="rects rects1 burl" style="top:978vh;left:28vw"></div>')
    $('#last_rects').append('<div class="rects rects1 burl" style="top:969vh;left:68vw"></div>')
    $('#last_rects').append('<div class="rects rects1" style="top:959vh;left:78vw"></div>')
    $('#last_rects').append('<div class="rects rects1 burl" style="top:971vh;left:20vw"></div>')
    $('#last_rects').append('<div class="rects rects1" style="top:971vh;left:41vw"></div>')

    $('#last_rects').append('<div class="rects rects1" style="top:971vh;left:820vw"></div>')
    $('#last_rects').append('<div class="rects rects1" style="top:942vh;left:64vw"></div>')
    $('#last_rects').append('<div class="rects rects1" style="top:938vh;left:29vw"></div>')
    $('#last_rects').append('<div class="rects rects1" style="top:927vh;left:88vw"></div>')
    $('#last_rects').append('<div class="rects rects1" style="top:952vh;left:92vw"></div>')
    $('#last_rects').append('<div class="rects rects1" style="top:969vh;left:31vw"></div>')
    $('#last_rects').append('<div class="rects rects1 burl" style="top:960vh;left:67vw"></div>')
    $('#last_rects').append('<div class="rects rects1 burl" style="top:978vh;left:62vw"></div>')
    $('#last_rects').append('<div class="rects rects1 burl" style="top:961vh;left:31vw"></div>')
    $('#last_rects').append('<div class="rects rects1 burl" style="top:962vh;left:64vw"></div>')
    $('#last_rects').append('<div class="rects rects1" style="top:961vh;left:72vw"></div>')
    $('#last_rects').append('<div class="rects rects1 burl" style="top:972vh;left:32vw"></div>')
    $('#last_rects').append('<div class="rects rects1" style="top:951vh;left:46vw"></div>')

    $('#last_rects').append('<div class="rects rects2" style="top:960vh;left:21vw"></div>')
    $('#last_rects').append('<div class="rects rects2" style="top:922vh;left:60vw"></div>')
    $('#last_rects').append('<div class="rects rects2" style="top:931vh;left:80vw"></div>')
    $('#last_rects').append('<div class="rects rects2" style="top:952vh;left:40vw"></div>')
    $('#last_rects').append('<div class="rects rects2" style="top:951vh;left:25vw"></div>')
    $('#last_rects').append('<div class="rects rects2 burl" style="top:969vh;left:50vw"></div>')
    $('#last_rects').append('<div class="rects rects2" style="top:961vh;left:60vw"></div>')
    $('#last_rects').append('<div class="rects rects2" style="top:932vh;left:7vw"></div>')
}()

let firstRectAnimate = function(top) {
    $('#first_rects div').each(function(d, i) {
        $(this)[0].style.top = top + 'px';
    });
}


let p1Rect = d3.select('#rect1').append("svg").attr('width', '100%').attr('height', '100%').attr('position', 'absolute').attr('left', '0').attr('top', '0')
let p2Rect = d3.select('#rect2').append("svg").attr('width', '100%').attr('height', '100%').attr('position', 'absolute').attr('left', '0').attr('top', '0')
let p3Rect = d3.select('#rect3').append("svg").attr('width', '100%').attr('height', '100%').attr('position', 'absolute').attr('left', '0').attr('top', '0')
let p4Rect = d3.select('#rect4').append("svg").attr('width', '100%').attr('height', '100%').attr('position', 'absolute').attr('left', '0').attr('top', '0')
let p5Rect = d3.select('#rect5').append("svg").attr('width', '100%').attr('height', '100%').attr('position', 'absolute').attr('left', '0').attr('top', '0')
let p6Rect = d3.select('#rect6').append("svg").attr('width', '100%').attr('height', '100%').attr('position', 'absolute').attr('left', '0').attr('top', '0')
let p7Rect = d3.select('#rect7').append("svg").attr('width', '100%').attr('height', '100%').attr('position', 'absolute').attr('left', '0').attr('top', '0')
let p8Rect = d3.select('#rect8').append("svg").attr('width', '100%').attr('height', '100%').attr('position', 'absolute').attr('left', '0').attr('top', '0')


p2Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '34%').attr('y', '57%').on('click', function() {
    $('.p2 .history').html('一五、二五国家布局的三大电子信息基地之一')
})
p2Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '22%').attr('y', '75%').on('click', function() {
    $('.p2 .history').html('生产出全国第一只黑白显像管（1959）')
})
p2Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '70%').attr('y', '75%').on('click', function() {
    $('.p2 .history').html('航空发动机研制成功（1959）')
})
p2Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '34%').attr('y', '69%')
p2Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '32%').attr('y', '75%')
p2Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '60%').attr('y', '75%')
p2Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '68%').attr('y', '65%').attr('opacity', '0')
p2Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '78%').attr('y', '80%').attr('opacity', '0')

p3Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '34%').attr('y', '57%').on('click', function() {
    $('.p3 .history').html('“三线”建设国家布局奠定现代工业发展基础')
})
p3Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '22%').attr('y', '75%').on('click', function() {
    $('.p3 .history').html('宁江机床厂、红旗仪表厂等26户企业落户成都（1967）')
})
p3Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '70%').attr('y', '75%').on('click', function() {
    $('.p3 .history').html('中电29所、中电30所、旭光仪器厂成立（1965）')
})
p3Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '60%').attr('y', '59%').on('click', function() {
    $('.p3 .history').html('原子弹部件研发生产（1965）')
})
p3Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '34%').attr('y', '69%')
p3Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '32%').attr('y', '75%')
p3Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '60%').attr('y', '75%')
p3Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '68%').attr('y', '65%').attr('opacity', '0')
p3Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '78%').attr('y', '80%').attr('opacity', '0')


p4Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '34%').attr('y', '57%').on('click', function() {
    $('.p4 .history').html('“改革开放，民营经济加速发展')
})
p4Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '22%').attr('y', '75%').on('click', function() {
    $('.p4 .history').html('中国知名民营企业希望集团成立（1982）')
})
p4Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '70%').attr('y', '75%').on('click', function() {
    $('.p4 .history').html('工业展销信托公司发行新中国第一张股票（1980）')
})
p4Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '80%').attr('y', '75%').on('click', function() {
    $('.p4 .history').html('全国率先进行扩大企业自主权改革试点（1978）')
})
p4Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '70%').attr('y', '59%')

p4Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '34%').attr('y', '69%')
p4Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '32%').attr('y', '75%')
p4Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '60%').attr('y', '75%')
p4Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '68%').attr('y', '65%').attr('opacity', '0')
p4Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '78%').attr('y', '80%').attr('opacity', '0')


p5Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '34%').attr('y', '57%').on('click', function() {
    $('.p5 .history').html('乡镇企业异军突起，完善成都工业体系')
})
p5Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '22%').attr('y', '75%').on('click', function() {
    $('.p5 .history').html('高新区获批国家级高新技术产业开发区（1993）')
})
p5Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '70%').attr('y', '75%').on('click', function() {
    $('.p5 .history').html('深入推进国有企业改革（1990）')
})
p5Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '80%').attr('y', '75%').on('click', function() {
    $('.p5 .history').html('西南交通大学落户成都（1989）')
})
p5Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '25%').attr('y', '65%').on('click', function() {
    $('.p5 .history').html('第一辆“成都造”汽车下线（1988）')
})
p5Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '70%').attr('y', '59%')

p5Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '34%').attr('y', '69%')
p5Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '32%').attr('y', '75%')
p5Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '60%').attr('y', '75%')
p5Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '68%').attr('y', '65%').attr('opacity', '0')
p5Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '78%').attr('y', '80%').attr('opacity', '0')




p6Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '34%').attr('y', '57%').on('click', function() {
    $('.p6 .history').html('新世纪，实施工业空间布局、产业结构调整')
})
p6Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '22%').attr('y', '75%').on('click', function() {
    $('.p6 .history').html('建设国家软件产业基地（2001）')
})
p6Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '70%').attr('y', '75%').on('click', function() {
    $('.p6 .history').html('开始东郊工业区结构调整（2000）')
})
p6Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '80%').attr('y', '75%').on('click', function() {
    $('.p6 .history').html('获“中国最大白酒原酒基地”称号（2000）')
})
p6Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '25%').attr('y', '65%').on('click', function() {
    $('.p6 .history').html('成立成都经济技术开发区（2000）')
})
p6Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '60%').attr('y', '80%').on('click', function() {
    $('.p6 .history').html('一汽丰田落户（1998）')
})
p6Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '70%').attr('y', '59%')

p6Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '34%').attr('y', '69%')
p6Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '32%').attr('y', '75%')
p6Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '60%').attr('y', '75%')
p6Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '68%').attr('y', '65%').attr('opacity', '0')
p6Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '78%').attr('y', '80%').attr('opacity', '0')





p7Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '34%').attr('y', '57%').on('click', function() {
    $('.p7 .history').html('扩大对外开放，积极引入国际知名企业')
})
p7Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '22%').attr('y', '75%').on('click', function() {
    $('.p7 .history').html('沃尔沃汽车成都工厂落成（2013）')
})
p7Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '70%').attr('y', '75%').on('click', function() {
    $('.p7 .history').html('东郊记忆工业遗址主题公园开园（2011）')
})
p7Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '80%').attr('y', '75%').on('click', function() {
    $('.p7 .history').html('富士康、仁宝、纬创落户成都（2010）')
})
p7Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '25%').attr('y', '65%').on('click', function() {
    $('.p7 .history').html('华为成都研究所成立（2007）')
})
p7Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '60%').attr('y', '80%').on('click', function() {
    $('.p7 .history').html('京东方落户成都（2007）')
})
p7Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '15%').attr('y', '80%').on('click', function() {
    $('.p7 .history').html('英特尔、一汽大众落户成都（2004）')
})
p7Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '70%').attr('y', '59%')

p7Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '34%').attr('y', '69%')
p7Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '32%').attr('y', '75%')
p7Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '60%').attr('y', '75%')
p7Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '68%').attr('y', '65%').attr('opacity', '0')
p7Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '78%').attr('y', '80%').attr('opacity', '0')


p8Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '34%').attr('y', '57%').on('click', function() {
    $('.p8 .history').html('进入新时代，先进制造业高质量发展')
})
p8Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '22%').attr('y', '75%').on('click', function() {
    $('.p8 .history').html('华为与成都战略合作，打造鲲鹏生态（2019）')
})
p8Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '70%').attr('y', '75%').on('click', function() {
    $('.p8 .history').html('推出全国首个5G地铁站（2019）')
})
p8Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '80%').attr('y', '75%').on('click', function() {
    $('.p8 .history').html('中电熊猫8.6代金属氧化物液晶面板下线（2018）')
})
p8Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '25%').attr('y', '65%').on('click', function() {
    $('.p8 .history').html('康柏西普眼用注射液获“中国工业大奖”（2018）')
})
p8Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '60%').attr('y', '80%').on('click', function() {
    $('.p8 .history').html('第一个产业社区在电子信息产业功能区设立（2018）')
})
p8Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '15%').attr('y', '80%').on('click', function() {
    $('.p8 .history').html('提出产业生态圈理念，规划建设产业功能区（2017）')
})
p8Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '55%').attr('y', '55%').on('click', function() {
    $('.p8 .history').html('国内第一颗自主可控X86架构芯片诞生（2017）')
})
p8Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '85%').attr('y', '60%').on('click', function() {
    $('.p8 .history').html('“成都造”整车年产量突破100万辆（2016）')
})
p8Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '15%').attr('y', '60%').on('click', function() {
    $('.p8 .history').html('极米科技的激光无屏电视市场份额全球第一（2015）')
})
p8Rect.append('rect').attr('width', '2rem').attr('height', '2rem').attr('fill', '#fff').attr('x', '70%').attr('y', '59%')

p8Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '34%').attr('y', '69%')
p8Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '32%').attr('y', '75%')
p8Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '60%').attr('y', '75%')
p8Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '68%').attr('y', '65%').attr('opacity', '0')
p8Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '78%').attr('y', '80%').attr('opacity', '0')

p1Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '34%').attr('y', '63%').attr('opacity', '0')
p1Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '32%').attr('y', '75%').attr('opacity', '0')
p1Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '60%').attr('y', '80%').attr('opacity', '0')
p1Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '63%').attr('y', '64%').attr('opacity', '0').attr('opacity', '0')
let annimateRect = function(dom, type, time) {
    d3.selectAll(dom).transition().attr('opacity', type).duration(200).delay(function(d, i) {
        return time * i
    })
}

let fmOnece = true
let firstRectMoveDown = function() {
    if (!fmOnece) return
    fmOnece = !fmOnece
    d3.selectAll('#first_rects .rects').transition().duration(function(d, i) {
            return i * Math.random() * 200
        }).delay(function(d, i) {
            return i * Math.random() * 100
        }).style('transform', 'translateY(' + window.innerHeight / 2 + 'px)').ease(d3.easeLinear)
        .transition().style('opacity', '0').duration(500);
    // setTimeout(function() {
    //     d3.select('#first_rects')
    // }, 2000)
}
let firstRectMoveUp = function() {
    if (fmOnece) return
    fmOnece = !fmOnece
    d3.selectAll('#first_rects .rects').transition().duration(function(d, i) {
            return i * Math.random() * 200
        }).delay(function(d, i) {
            return i * Math.random() * 100
        }).style('transform', 'translateY(' + 0 + 'px)').ease(d3.easeLinear)
        .transition().style('opacity', '1').duration(500);
    // setTimeout(function() {
    //     d3.select('#first_rects')
    // }, 2000)
}

let lmOnece = true
let lastRectMoveDown = function() {
    if (!lmOnece) return
    lmOnece = !lmOnece
    d3.selectAll('#last_rects .rects').transition().duration(function(d, i) {
            return i * Math.random() * 200
        }).delay(function(d, i) {
            return i * Math.random() * 100
        }).style('transform', 'translateY(' + window.innerHeight * 0.9 + 'px)').ease(d3.easeLinear)
        .transition().style('opacity', '0').duration(500);
}
let lastRectMoveUp = function() {
    if (lmOnece) return
    lmOnece = !lmOnece
    d3.selectAll('#last_rects .rects').transition().duration(function(d, i) {
            return i * Math.random() * 200
        }).delay(function(d, i) {
            return i * Math.random() * 100
        }).style('transform', 'translateY(' + 0 + 'px)').ease(d3.easeLinear)
        .transition().style('opacity', '1').duration(500);
}

let svg1 = `<svg id="id" data-name="name" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 524 389.84" style="background:#000"><defs><style>.cls-1,.cls-2{fill:none;}.cls-1{stroke:#fff;stroke-miterlimit:10;}.cls-3{fill:#fff;}</style></defs><title>a</title><path class="cls-1 EVoYIwfV_0" d="M141.5,0.5L398.5,0.5"></path>
<path class="cls-1 EVoYIwfV_1" d="M24.5,100.05L24.5,8.5L112.05,8.5"></path>
<path class="cls-1 EVoYIwfV_2" d="M109.82,305.5L24.5,305.5L24.5,239.59"></path>
<path class="cls-1 EVoYIwfV_3" d="M520.5,265.26L520.5,305.5L432.43,305.5"></path>
<path class="cls-1 EVoYIwfV_4" d="M520.5,175.4L520.5,239.59"></path>
<path class="cls-1 EVoYIwfV_5" d="M429.08,8.5L520.5,8.5L520.5,111.77"></path>
<path class="cls-1 EVoYIwfV_6" d="M143,310.5L398.5,308.5"></path>
<path class="cls-1 EVoYIwfV_7" d="M443.5,389.5L520.5,305.5"></path>
<path class="cls-2 EVoYIwfV_8" d="M17.5,295.5L17.5,228.5"></path>
<path class="cls-3 EVoYIwfV_9" d="M26,230.5v3H15v-3H26m1-1H14v5H27v-5Z" transform="translate(0 -55)"></path>

<path class="cls-3 EVoYIwfV_10" width="19.78" height="5" d="M7.22 182.2 L27 182.2 L27 187.2 L7.22 187.2 Z"></path>
<path fill='#000' width="19.78" height="5" d="M7.22 182.2 L27 182.2 L27 187.2 L7.22 187.2 Z" transform="translate(-10 0)">
    <animateTransform attributeName="transform" begin="0s" dur="0.5s"  type="translate" from="-10" to="0" repeatCount="indefinite"/>
</path>
<path class="cls-3 EVoYIwfV_11" width="17.49" height="5" d="M9.51 189.9 L27 189.9 L27 194.9 L9.51 194.9 Z"></path>
<path fill='#000' width="17.49" height="5" d="M9.51 189.9 L27 189.9 L27 194.9 L9.51 194.9 Z" transform="translate(-10 0)">
    <animateTransform attributeName="transform" begin="0.8s" dur="0.5s"  type="translate" from="-15" to="0" repeatCount="indefinite"/>
</path>
<path class="cls-3 EVoYIwfV_12" width="27" height="5" d="M0 197.6 L27 197.6 L27 202.6 L0 202.6 Z"></path>
<path fill='#000' width="27" height="5" d="M0 197.6 L27 197.6 L27 202.6 L0 202.6 Z" transform="translate(-10 0)">
    <animateTransform attributeName="transform" begin="0s" dur="0.5s"  type="translate" from="-20" to="0" repeatCount="indefinite"/>
</path>
<path class="cls-3 EVoYIwfV_13" width="13" height="5" d="M14 205.3 L27 205.3 L27 210.3 L14 210.3 Z"></path>
<path fill='#000' width="13" height="5" d="M14 205.3 L27 205.3 L27 210.3 L14 210.3 Z" transform="translate(-10 0)">
    <animateTransform attributeName="transform" begin="0.4s" dur="0.5s"  type="translate" from="-10" to="0" repeatCount="indefinite"/>
</path>
<path class="cls-3 EVoYIwfV_14" width="17.49" height="5" d="M9.51 213 L27 213 L27 218 L9.51 218 Z"></path>
<path fill='#000' width="17.49" height="5" d="M9.51 213 L27 213 L27 218 L9.51 218 Z" transform="translate(-10 0)">
    <animateTransform attributeName="transform" begin="0.2s" dur="0.5s"  type="translate" from="-20" to="0" repeatCount="indefinite"/>
</path>

<path class="cls-3 EVoYIwfV_15" d="M162,315L144.51,315L140.51,310L158,310L162,315Z"></path>
<path class="cls-3 EVoYIwfV_16" d="M381.51,313L399,313L403,308L385.51,308L381.51,313Z"></path>
<path class="cls-3 EVoYIwfV_17" d="M515,116.25L515,98.75L520,94.75L520,112.25L515,116.25Z"></path>
<path class="cls-3 EVoYIwfV_18" d="M402.25,6L384.75,6L380.75,1L398.25,1L402.25,6Z"></path>
<path class="cls-3 EVoYIwfV_19" d="M137.75,6L155.25,6L159.25,1L141.75,1L137.75,6Z"></path>
<path class="cls-3 EVoYIwfV_20" d="M30,104.25L30,86.75L25,82.75L25,100.25L30,104.25Z"></path>
<path class="cls-3 EVoYIwfV_21" width="6" height="6" d="M 25,6 L 25,6 A 3,3,0,0,1,28,9 L 28,9 A 3,3,0,0,1,25,12 L 25,12 A 3,3,0,0,1,22,9 L 22,9 A 3,3,0,0,1,25,6"></path>
<path class="cls-3 EVoYIwfV_22" width="6" height="6" d="M 521,238 L 521,238 A 3,3,0,0,1,524,241 L 524,241 A 3,3,0,0,1,521,244 L 521,244 A 3,3,0,0,1,518,241 L 518,241 A 3,3,0,0,1,521,238"></path>
<path class="cls-3 EVoYIwfV_23" width="6" height="6" d="M 521,261 L 521,261 A 3,3,0,0,1,524,264 L 524,264 A 3,3,0,0,1,521,267 L 521,267 A 3,3,0,0,1,518,264 L 518,264 A 3,3,0,0,1,521,261"></path>
<path class="cls-3 EVoYIwfV_24" width="6" height="6" d="M 520,303 L 520,303 A 3,3,0,0,1,523,306 L 523,306 A 3,3,0,0,1,520,309 L 520,309 A 3,3,0,0,1,517,306 L 517,306 A 3,3,0,0,1,520,303"></path>
<style data-made-with="vivus-instant">.EVoYIwfV_0{stroke-dasharray:257 259;stroke-dashoffset:258;animation:EVoYIwfV_draw 1333ms ease-in-out 0ms forwards;}.EVoYIwfV_1{stroke-dasharray:180 182;stroke-dashoffset:181;animation:EVoYIwfV_draw 1333ms ease-in-out 27ms forwards;}.EVoYIwfV_2{stroke-dasharray:152 154;stroke-dashoffset:153;animation:EVoYIwfV_draw 1333ms ease-in-out 55ms forwards;}.EVoYIwfV_3{stroke-dasharray:129 131;stroke-dashoffset:130;animation:EVoYIwfV_draw 1333ms ease-in-out 83ms forwards;}.EVoYIwfV_4{stroke-dasharray:65 67;stroke-dashoffset:66;animation:EVoYIwfV_draw 1333ms ease-in-out 111ms forwards;}.EVoYIwfV_5{stroke-dasharray:195 197;stroke-dashoffset:196;animation:EVoYIwfV_draw 1333ms ease-in-out 138ms forwards;}.EVoYIwfV_6{stroke-dasharray:256 258;stroke-dashoffset:257;animation:EVoYIwfV_draw 1333ms ease-in-out 166ms forwards;}.EVoYIwfV_7{stroke-dasharray:114 116;stroke-dashoffset:115;animation:EVoYIwfV_draw 1333ms ease-in-out 194ms forwards;}.EVoYIwfV_8{stroke-dasharray:67 69;stroke-dashoffset:68;animation:EVoYIwfV_draw 1333ms ease-in-out 222ms forwards;}.EVoYIwfV_9{stroke-dasharray:64 66;stroke-dashoffset:65;animation:EVoYIwfV_draw 1333ms ease-in-out 249ms forwards;}.EVoYIwfV_10{stroke-dasharray:50 52;stroke-dashoffset:51;animation:EVoYIwfV_draw 1333ms ease-in-out 277ms forwards;}.EVoYIwfV_11{stroke-dasharray:45 47;stroke-dashoffset:46;animation:EVoYIwfV_draw 1333ms ease-in-out 305ms forwards;}.EVoYIwfV_12{stroke-dasharray:64 66;stroke-dashoffset:65;animation:EVoYIwfV_draw 1333ms ease-in-out 333ms forwards;}.EVoYIwfV_13{stroke-dasharray:36 38;stroke-dashoffset:37;animation:EVoYIwfV_draw 1333ms ease-in-out 361ms forwards;}.EVoYIwfV_14{stroke-dasharray:45 47;stroke-dashoffset:46;animation:EVoYIwfV_draw 1333ms ease-in-out 388ms forwards;}.EVoYIwfV_15{stroke-dasharray:48 50;stroke-dashoffset:49;animation:EVoYIwfV_draw 1333ms ease-in-out 416ms forwards;}.EVoYIwfV_16{stroke-dasharray:48 50;stroke-dashoffset:49;animation:EVoYIwfV_draw 1333ms ease-in-out 444ms forwards;}.EVoYIwfV_17{stroke-dasharray:48 50;stroke-dashoffset:49;animation:EVoYIwfV_draw 1333ms ease-in-out 472ms forwards;}.EVoYIwfV_18{stroke-dasharray:48 50;stroke-dashoffset:49;animation:EVoYIwfV_draw 1333ms ease-in-out 499ms forwards;}.EVoYIwfV_19{stroke-dasharray:48 50;stroke-dashoffset:49;animation:EVoYIwfV_draw 1333ms ease-in-out 527ms forwards;}.EVoYIwfV_20{stroke-dasharray:48 50;stroke-dashoffset:49;animation:EVoYIwfV_draw 1333ms ease-in-out 555ms forwards;}.EVoYIwfV_21{stroke-dasharray:19 21;stroke-dashoffset:20;animation:EVoYIwfV_draw 1333ms ease-in-out 583ms forwards;}.EVoYIwfV_22{stroke-dasharray:19 21;stroke-dashoffset:20;animation:EVoYIwfV_draw 1333ms ease-in-out 611ms forwards;}.EVoYIwfV_23{stroke-dasharray:19 21;stroke-dashoffset:20;animation:EVoYIwfV_draw 1333ms ease-in-out 638ms forwards;}.EVoYIwfV_24{stroke-dasharray:19 21;stroke-dashoffset:20;animation:EVoYIwfV_draw 1333ms ease-in-out 666ms forwards;}@keyframes EVoYIwfV_draw{100%{stroke-dashoffset:0;}}@keyframes EVoYIwfV_fade{0%{stroke-opacity:1;}93.54838709677419%{stroke-opacity:1;}100%{stroke-opacity:0;}}</style>
</svg>`

let svg2 = `<svg id="id" data-name="name" 
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 524 389.84" style="background:#000">
<defs>
    <style>.cls-1,.cls-2{fill:none;}.cls-1{stroke:#fff;stroke-miterlimit:10;}.cls-3{fill:#fff;}</style>
</defs>
<title>a</title>
<path class="cls-1 EVoYIwfV_0" d="M141.5,0.5L398.5,0.5"></path>
<path class="cls-1 EVoYIwfV_1" d="M24.5,100.05L24.5,8.5L112.05,8.5"></path>
<path class="cls-1 EVoYIwfV_2" d="M109.82,305.5L24.5,305.5L24.5,239.59"></path>
<path class="cls-1 EVoYIwfV_3" d="M520.5,265.26L520.5,305.5L432.43,305.5"></path>
<path class="cls-1 EVoYIwfV_4" d="M520.5,175.4L520.5,239.59"></path>
<path class="cls-1 EVoYIwfV_5" d="M429.08,8.5L520.5,8.5L520.5,111.77"></path>
<path class="cls-1 EVoYIwfV_6" d="M143,310.5L398.5,308.5"></path>
<path class="cls-1 EVoYIwfV_7" d="M443.5,389.5L520.5,305.5"></path>
<path class="cls-2 EVoYIwfV_8" d="M17.5,295.5L17.5,228.5"></path>
<path class="cls-3 EVoYIwfV_9" d="M26,230.5v3H15v-3H26m1-1H14v5H27v-5Z" transform="translate(0 -55)"></path>

<path class="cls-3 EVoYIwfV_10" width="19.78" height="5" d="M7.22 182.2 L27 182.2 L27 187.2 L7.22 187.2 Z"></path>
<path fill='#000' width="19.78" height="5" d="M7.22 182.2 L27 182.2 L27 187.2 L7.22 187.2 Z" transform="translate(-10 0)">
    <animateTransform attributeName="transform" begin="0s" dur="0.5s"  type="translate" from="-10" to="0" repeatCount="indefinite"/>
</path>
<path class="cls-3 EVoYIwfV_11" width="17.49" height="5" d="M9.51 189.9 L27 189.9 L27 194.9 L9.51 194.9 Z"></path>
<path fill='#000' width="17.49" height="5" d="M9.51 189.9 L27 189.9 L27 194.9 L9.51 194.9 Z" transform="translate(-10 0)">
    <animateTransform attributeName="transform" begin="0.8s" dur="0.5s"  type="translate" from="-15" to="0" repeatCount="indefinite"/>
</path>
<path class="cls-3 EVoYIwfV_12" width="27" height="5" d="M0 197.6 L27 197.6 L27 202.6 L0 202.6 Z"></path>
<path fill='#000' width="27" height="5" d="M0 197.6 L27 197.6 L27 202.6 L0 202.6 Z" transform="translate(-10 0)">
    <animateTransform attributeName="transform" begin="0s" dur="0.5s"  type="translate" from="-20" to="0" repeatCount="indefinite"/>
</path>
<path class="cls-3 EVoYIwfV_13" width="13" height="5" d="M14 205.3 L27 205.3 L27 210.3 L14 210.3 Z"></path>
<path fill='#000' width="13" height="5" d="M14 205.3 L27 205.3 L27 210.3 L14 210.3 Z" transform="translate(-10 0)">
    <animateTransform attributeName="transform" begin="0.4s" dur="0.5s"  type="translate" from="-10" to="0" repeatCount="indefinite"/>
</path>
<path class="cls-3 EVoYIwfV_14" width="17.49" height="5" d="M9.51 213 L27 213 L27 218 L9.51 218 Z"></path>
<path fill='#000' width="17.49" height="5" d="M9.51 213 L27 213 L27 218 L9.51 218 Z" transform="translate(-10 0)">
    <animateTransform attributeName="transform" begin="0.2s" dur="0.5s"  type="translate" from="-20" to="0" repeatCount="indefinite"/>
</path>
<path class="cls-3 EVoYIwfV_15" d="M162,315L144.51,315L140.51,310L158,310L162,315Z"></path>
<path class="cls-3 EVoYIwfV_16" d="M381.51,313L399,313L403,308L385.51,308L381.51,313Z"></path>
<path class="cls-3 EVoYIwfV_17" d="M515,116.25L515,98.75L520,94.75L520,112.25L515,116.25Z"></path>
<path class="cls-3 EVoYIwfV_18" d="M402.25,6L384.75,6L380.75,1L398.25,1L402.25,6Z"></path>
<path class="cls-3 EVoYIwfV_19" d="M137.75,6L155.25,6L159.25,1L141.75,1L137.75,6Z"></path>
<path class="cls-3 EVoYIwfV_20" d="M30,104.25L30,86.75L25,82.75L25,100.25L30,104.25Z"></path>
<path class="cls-3 EVoYIwfV_21" width="6" height="6" d="M 25,6 L 25,6 A 3,3,0,0,1,28,9 L 28,9 A 3,3,0,0,1,25,12 L 25,12 A 3,3,0,0,1,22,9 L 22,9 A 3,3,0,0,1,25,6"></path>
<path class="cls-3 EVoYIwfV_22" width="6" height="6" d="M 521,238 L 521,238 A 3,3,0,0,1,524,241 L 524,241 A 3,3,0,0,1,521,244 L 521,244 A 3,3,0,0,1,518,241 L 518,241 A 3,3,0,0,1,521,238"></path>
<path class="cls-3 EVoYIwfV_23" width="6" height="6" d="M 521,261 L 521,261 A 3,3,0,0,1,524,264 L 524,264 A 3,3,0,0,1,521,267 L 521,267 A 3,3,0,0,1,518,264 L 518,264 A 3,3,0,0,1,521,261"></path>
<path class="cls-3 EVoYIwfV_24" width="6" height="6" d="M 520,303 L 520,303 A 3,3,0,0,1,523,306 L 523,306 A 3,3,0,0,1,520,309 L 520,309 A 3,3,0,0,1,517,306 L 517,306 A 3,3,0,0,1,520,303"></path>
<style data-made-with="vivus-instant">
.EVoYIwfV_0{stroke-dasharray:257 259;stroke-dashoffset:0;animation:EVoYIwfV_draw1 1333ms ease-in-out 0ms forwards;}
.EVoYIwfV_1{stroke-dasharray:180 182;stroke-dashoffset:0;animation:EVoYIwfV_draw2 1333ms ease-in-out 27ms forwards;}
.EVoYIwfV_2{stroke-dasharray:152 154;stroke-dashoffset:0;animation:EVoYIwfV_draw3 1333ms ease-in-out 55ms forwards;}
.EVoYIwfV_3{stroke-dasharray:129 131;stroke-dashoffset:0;animation:EVoYIwfV_draw4 1333ms ease-in-out 83ms forwards;}
.EVoYIwfV_4{stroke-dasharray:65 67;stroke-dashoffset:0;animation:EVoYIwfV_draw5 1333ms ease-in-out 111ms forwards;}
.EVoYIwfV_5{stroke-dasharray:195 197;stroke-dashoffset:0;animation:EVoYIwfV_draw6 1333ms ease-in-out 138ms forwards;}
.EVoYIwfV_6{stroke-dasharray:256 258;stroke-dashoffset:0;animation:EVoYIwfV_draw7 1333ms ease-in-out 166ms forwards;}
.EVoYIwfV_7{stroke-dasharray:114 116;stroke-dashoffset:0;animation:EVoYIwfV_draw8 1333ms ease-in-out 194ms forwards;}
.EVoYIwfV_8{stroke-dasharray:67 69;stroke-dashoffset:0;animation:EVoYIwfV_draw9 1333ms ease-in-out 222ms forwards;}
.EVoYIwfV_9{stroke-dasharray:64 66;stroke-dashoffset:0;animation:EVoYIwfV_draw10 1333ms ease-in-out 249ms forwards;}
.EVoYIwfV_10{stroke-dasharray:50 52;stroke-dashoffset:0;animation:EVoYIwfV_draw11 1333ms ease-in-out 277ms forwards;}
.EVoYIwfV_11{stroke-dasharray:45 47;stroke-dashoffset:0;animation:EVoYIwfV_draw12 1333ms ease-in-out 305ms forwards;}
.EVoYIwfV_12{stroke-dasharray:64 66;stroke-dashoffset:0;animation:EVoYIwfV_draw13 1333ms ease-in-out 333ms forwards;}
.EVoYIwfV_13{stroke-dasharray:36 38;stroke-dashoffset:0;animation:EVoYIwfV_draw14 1333ms ease-in-out 361ms forwards;}
.EVoYIwfV_14{stroke-dasharray:45 47;stroke-dashoffset:0;animation:EVoYIwfV_draw15 1333ms ease-in-out 388ms forwards;}
.EVoYIwfV_15{stroke-dasharray:48 50;stroke-dashoffset:0;animation:EVoYIwfV_draw16 1333ms ease-in-out 416ms forwards;}
.EVoYIwfV_16{stroke-dasharray:48 50;stroke-dashoffset:0;animation:EVoYIwfV_draw17 1333ms ease-in-out 444ms forwards;}
.EVoYIwfV_17{stroke-dasharray:48 50;stroke-dashoffset:0;animation:EVoYIwfV_draw18 1333ms ease-in-out 472ms forwards;}
.EVoYIwfV_18{stroke-dasharray:48 50;stroke-dashoffset:0;animation:EVoYIwfV_draw19 1333ms ease-in-out 499ms forwards;}
.EVoYIwfV_19{stroke-dasharray:48 50;stroke-dashoffset:0;animation:EVoYIwfV_draw20 1333ms ease-in-out 527ms forwards;}
.EVoYIwfV_20{stroke-dasharray:48 50;stroke-dashoffset:0;animation:EVoYIwfV_draw21 1333ms ease-in-out 555ms forwards;}
.EVoYIwfV_21{stroke-dasharray:19 21;stroke-dashoffset:0;animation:EVoYIwfV_draw22 1333ms ease-in-out 583ms forwards;}
.EVoYIwfV_22{stroke-dasharray:19 21;stroke-dashoffset:0;animation:EVoYIwfV_draw23 1333ms ease-in-out 611ms forwards;}
.EVoYIwfV_23{stroke-dasharray:19 21;stroke-dashoffset:0;animation:EVoYIwfV_draw24 1333ms ease-in-out 638ms forwards;}
.EVoYIwfV_24{stroke-dasharray:19 21;stroke-dashoffset:0;animation:EVoYIwfV_draw25 1333ms ease-in-out 666ms forwards;}
@keyframes EVoYIwfV_draw1{100%{stroke-dashoffset:258;}}
@keyframes EVoYIwfV_draw2{100%{stroke-dashoffset:181;}}
@keyframes EVoYIwfV_draw3{100%{stroke-dashoffset:153;}}
@keyframes EVoYIwfV_draw4{100%{stroke-dashoffset:130;}}
@keyframes EVoYIwfV_draw5{100%{stroke-dashoffset:66;}}
@keyframes EVoYIwfV_draw6{100%{stroke-dashoffset:196;}}
@keyframes EVoYIwfV_draw7{100%{stroke-dashoffset:257;}}
@keyframes EVoYIwfV_draw8{100%{stroke-dashoffset:115;}}
@keyframes EVoYIwfV_draw9{100%{stroke-dashoffset:68;}}
@keyframes EVoYIwfV_dra10{100%{stroke-dashoffset:65;}}
@keyframes EVoYIwfV_draw11{100%{stroke-dashoffset:51;}}
@keyframes EVoYIwfV_draw24{100%{stroke-dashoffset:46;}}
@keyframes EVoYIwfV_draw12{100%{stroke-dashoffset:65;}}
@keyframes EVoYIwfV_draw13{100%{stroke-dashoffset:37;}}
@keyframes EVoYIwfV_draw14{100%{stroke-dashoffset:46;}}
@keyframes EVoYIwfV_draw15{100%{stroke-dashoffset:49;}}
@keyframes EVoYIwfV_draw16{100%{stroke-dashoffset:49;}}
@keyframes EVoYIwfV_draw17{100%{stroke-dashoffset:49;}}
@keyframes EVoYIwfV_draw18{100%{stroke-dashoffset:49;}}
@keyframes EVoYIwfV_draw19{100%{stroke-dashoffset:49;}}
@keyframes EVoYIwfV_draw20{100%{stroke-dashoffset:49;}}
@keyframes EVoYIwfV_draw21{100%{stroke-dashoffset:20;}}
@keyframes EVoYIwfV_draw22{100%{stroke-dashoffset:20;}}
@keyframes EVoYIwfV_draw23{100%{stroke-dashoffset:20;}}
@keyframes EVoYIwfV_draw24{100%{stroke-dashoffset:20;}}

@keyframes EVoYIwfV_fade{0%{stroke-opacity:1;}93.54838709677419%{stroke-opacity:1;}100%{stroke-opacity:0;}}</style>
</svg>`

let p3Onece = true
let addP3Imge = function(time) {
    if (!p3Onece) return
    p3Onece = !p3Onece
    setTimeout(function() {
        p3Rect.append("svg").attr('class', 'p3svg').attr('width', window.innerWidth).attr('height', window.innerWidth / 2).attr('position', 'absolute').attr('left', '0').attr('top', '-20%').attr('viewBox', "0 0 524 389.84").html(svg1)
            .append("image")
            .attr("x", '5.5%')
            .attr("y", '-10%')
            .attr("width", '93%')
            .attr("height", '100%')
            .attr("xlink:href", './img/1969-3.jpg');
        p3Rect.append('rect').attr('class', 'imgRect').attr('width', '64%').attr('height', window.innerWidth * 0.127 / 2).attr('y', window.innerWidth * 0.65 / 2).attr('x', '19.2%').attr('fill', '#808080').attr('opacity', '0.8')
        p3Rect.append('text').attr('class', 'imgText').attr('width', '64%').attr('height', window.innerWidth * 0.127 / 2).attr('y', window.innerWidth * 0.731 / 2).attr('x', '21%').attr('fill', '#fff').attr('font-size', '1.1rem').html('参与“东方红”卫星发射（1970）')
        setTimeout(function() {
            p3Rect.select('.imgRect').attr('height', '0').transition().duration(2000)
            p3Rect.select(' .imgText').html('')
            p3Rect.select('.p3svg').html(svg2)
            setTimeout(function() {
                p3Rect.select('.imgRect').attr('height', window.innerWidth * 0.127 / 2).transition()
                p3Rect.select(' .imgText').html('参与“东方红”卫星发射（1970）')
                p3Rect.select('.p3svg').html(svg1)
                    .append("image")
                    .attr("x", '5.5%')
                    .attr("y", '-10%')
                    .attr("width", '93%')
                    .attr("height", '100%')
                    .attr("xlink:href", './img/1969-2.jpg');
                setTimeout(function() {
                    p3Rect.select('.imgRect').attr('height', '0').transition().duration(2000)
                    p3Rect.select(' .imgText').html('')
                    p3Rect.select('.p3svg').html(svg2)
                    setTimeout(function() {
                        p3Rect.select('.imgRect').attr('height', window.innerWidth * 0.127 / 2).transition()
                        p3Rect.select(' .imgText').html('原子弹部件研发生产（1965）')
                        p3Rect.select('.p3svg').html(svg1)
                            .append("image")
                            .attr("x", '5.5%')
                            .attr("y", '-10%')
                            .attr("width", '93%')
                            .attr("height", '100%')
                            .attr("xlink:href", './img/1969-1.jpg');
                    }, 1000)
                }, 3000)
            }, 1000)
        }, 3000)
    }, time * 9)
}

let p4Onece = true
let addP4Imge = function(time) {
    if (!p4Onece) return
    p4Onece = !p4Onece
    setTimeout(function() {
        p4Rect.append("svg").attr('class', 'p4svg').attr('width', window.innerWidth).attr('height', window.innerWidth / 2).attr('position', 'absolute').attr('left', '0').attr('top', '-20%').attr('viewBox', "0 0 524 389.84").html(svg1)
            .append("image")
            .attr("x", '5.5%')
            .attr("y", '-10%')
            .attr("width", '93%')
            .attr("height", '100%')
            .attr("xlink:href", './img/1979-1.jpg');
        p4Rect.append('rect').attr('class', 'imgRect').attr('width', '64%').attr('height', window.innerWidth * 0.127 / 2).attr('y', window.innerWidth * 0.65 / 2).attr('x', '19.2%').attr('fill', '#808080').attr('opacity', '0.8')
        p4Rect.append('text').attr('class', 'imgText').attr('width', '64%').attr('height', window.innerWidth * 0.127 / 2).attr('y', window.innerWidth * 0.731 / 2).attr('x', '21%').attr('fill', '#fff').attr('font-size', '1.1rem').html('第一台“双燕”牌冰箱下线（1983）')
        setTimeout(function() {
            p4Rect.select('.imgRect').attr('height', '0').transition().duration(2000)
            p4Rect.select(' .imgText').html('')
            p4Rect.select('.p4svg').html(svg2)
            setTimeout(function() {
                p4Rect.select('.imgRect').attr('height', window.innerWidth * 0.127 / 2).transition()
                p4Rect.select(' .imgText').html('第一台黑白电视机')
                p4Rect.select('.p4svg').html(svg1)
                    .append("image")
                    .attr("x", '5.5%')
                    .attr("y", '-10%')
                    .attr("width", '93%')
                    .attr("height", '100%')
                    .attr("xlink:href", './img/1979-2.jpg');
            }, 1000)
        }, 3000)
    }, time * 10)
}

let p5Onece = true
let addP5Imge = function(time) {
    if (!p5Onece) return
    p5Onece = !p5Onece
    setTimeout(function() {
        p5Rect.append("svg").attr('class', 'p5svg').attr('width', window.innerWidth).attr('height', window.innerWidth / 2).attr('position', 'absolute').attr('left', '0').attr('top', '-20%').attr('viewBox', "0 0 524 389.84").html(svg1)
            .append("image")
            .attr("x", '5.5%')
            .attr("y", '-10%')
            .attr("width", '93%')
            .attr("height", '100%')
            .attr("xlink:href", './img/1989-1.jpg');
        p5Rect.append('rect').attr('class', 'imgRect').attr('width', '64%').attr('height', window.innerWidth * 0.127 / 2).attr('y', window.innerWidth * 0.65 / 2).attr('x', '19.2%').attr('fill', '#808080').attr('opacity', '0.8')
        p5Rect.append('text').attr('class', 'imgText').attr('width', '64%').attr('height', window.innerWidth * 0.127 / 2).attr('y', window.innerWidth * 0.731 / 2).attr('x', '21%').attr('fill', '#fff').attr('font-size', '1.1rem').html('地奥心血康获中科院科技进步一等奖（1988）')
    }, time * 11)
}

let p6Onece = true
let addP6Imge = function(time) {
    if (!p6Onece) return
    p6Onece = !p6Onece
    setTimeout(function() {
        p6Rect.append("svg").attr('class', 'p6svg').attr('width', window.innerWidth).attr('height', window.innerWidth / 2).attr('position', 'absolute').attr('left', '0').attr('top', '-20%').attr('viewBox', "0 0 524 389.84").html(svg1)
            .append("image")
            .attr("x", '5.5%')
            .attr("y", '-10%')
            .attr("width", '93%')
            .attr("height", '100%')
            .attr("xlink:href", './img/1999-1.jpg');
        p6Rect.append('rect').attr('class', 'imgRect').attr('width', '64%').attr('height', window.innerWidth * 0.127 / 2).attr('y', window.innerWidth * 0.65 / 2).attr('x', '19.2%').attr('fill', '#808080').attr('opacity', '0.8')
        p6Rect.append('text').attr('class', 'imgText').attr('width', '64%').attr('height', window.innerWidth * 0.127 / 2).attr('y', window.innerWidth * 0.731 / 2).attr('x', '21%').attr('fill', '#fff').attr('font-size', '1.1rem').html('枭龙飞机成功首飞（2003）')
    }, time * 12)
}

let p7Onece = true
let addP7Imge = function(time) {
    if (!p7Onece) return
    p7Onece = !p7Onece
    setTimeout(function() {
        p7Rect.append("svg").attr('class', 'p7svg').attr('width', window.innerWidth).attr('height', window.innerWidth / 2).attr('position', 'absolute').attr('left', '0').attr('top', '-20%').attr('viewBox', "0 0 524 389.84").html(svg1)
            .append("image")
            .attr("x", '5.5%')
            .attr("y", '-10%')
            .attr("width", '93%')
            .attr("height", '100%')
            .attr("xlink:href", './img/2009-1.jpg');
        p7Rect.append('rect').attr('class', 'imgRect').attr('width', '64%').attr('height', window.innerWidth * 0.127 / 2).attr('y', window.innerWidth * 0.65 / 2).attr('x', '19.2%').attr('fill', '#808080').attr('opacity', '0.8')
        p7Rect.append('text').attr('class', 'imgText').attr('width', '64%').attr('height', window.innerWidth * 0.127 / 2).attr('y', window.innerWidth * 0.731 / 2).attr('x', '21%').attr('fill', '#fff').attr('font-size', '1.1rem').html('C919大飞机首架机头下线（2013）')
        setTimeout(function() {
            p7Rect.select('.imgRect').attr('height', '0').transition().duration(2000)
            p7Rect.select(' .imgText').html('')
            p7Rect.select('.p7svg').html(svg2)
            setTimeout(function() {
                p7Rect.select('.imgRect').attr('height', window.innerWidth * 0.127 / 2).transition()
                p7Rect.select(' .imgText').html('有轨电车')
                p7Rect.select('.p7svg').html(svg1)
                    .append("image")
                    .attr("x", '5.5%')
                    .attr("y", '-10%')
                    .attr("width", '93%')
                    .attr("height", '100%')
                    .attr("xlink:href", './img/2009-2.jpg');
            }, 1000)
        }, 3000)
    }, time * 13)
}

let p8Onece = true
let addP8Imge = function(time) {
    if (!p8Onece) return
    p8Onece = !p8Onece
    setTimeout(function() {
        p8Rect.append("svg").attr('class', 'p8svg').attr('width', window.innerWidth).attr('height', window.innerWidth / 2).attr('position', 'absolute').attr('left', '0').attr('top', '-20%').attr('viewBox', "0 0 524 389.84").html(svg1)
            .append("image")
            .attr("x", '5.5%')
            .attr("y", '-10%')
            .attr("width", '93%')
            .attr("height", '100%')
            .attr("xlink:href", './img/2019-1.jpg');
        p8Rect.append('rect').attr('class', 'imgRect').attr('width', '64%').attr('height', window.innerWidth * 0.127 / 2).attr('y', window.innerWidth * 0.65 / 2).attr('x', '19.2%').attr('fill', '#808080').attr('opacity', '0.8')
        p8Rect.append('text').attr('class', 'imgText').attr('width', '64%').attr('height', window.innerWidth * 0.127 / 2).attr('y', window.innerWidth * 0.731 / 2).attr('x', '21%').attr('fill', '#fff').attr('font-size', '1.1rem').html('京东方AMOLED柔性显示屏下线（2018）')
        setTimeout(function() {
            p8Rect.select('.imgRect').attr('height', '0').transition().duration(2000)
            p8Rect.select(' .imgText').html('')
            p8Rect.select('.p8svg').html(svg2)
            setTimeout(function() {
                p8Rect.select('.imgRect').attr('height', window.innerWidth * 0.127 / 2).transition()
                p8Rect.select(' .imgText').html('康博西普眼用注射液')
                p8Rect.select('.p8svg').html(svg1)
                    .append("image")
                    .attr("x", '5.5%')
                    .attr("y", '-10%')
                    .attr("width", '93%')
                    .attr("height", '100%')
                    .attr("xlink:href", './img/2019-2.jpg');
            }, 1000)
        }, 3000)
    }, time * 16)
}

let removeP3Imge = function() {
    if (p3Onece) return
    p3Rect.selectAll('.imgRect').remove()
    p3Rect.selectAll('.imgText').remove()
    p3Rect.select('.p4svg').html(svg2)
    setTimeout(function() {
        p3Rect.select('.p3svg').remove()
        p3Onece = true
    }, 1000)
}

let removeP4Imge = function() {
    if (p4Onece) return
    p4Rect.selectAll('.imgRect').remove()
    p4Rect.selectAll('.imgText').remove()
    p4Rect.select('.p4svg').html(svg2)
    setTimeout(function() {
        p4Rect.select('.p4svg').remove()
        p4Onece = true
    }, 1000)
}

let removeP5Imge = function() {
    if (p5Onece) return
    p5Rect.selectAll('.imgRect').remove()
    p5Rect.selectAll('.imgText').remove()
    p5Rect.select('.p5svg').html(svg2)
    setTimeout(function() {
        p5Rect.select('.p5svg').remove()
        p5Onece = true
    }, 1000)
}

let removeP6Imge = function() {
    if (p6Onece) return
    p6Rect.selectAll('.imgRect').remove()
    p6Rect.selectAll('.imgText').remove()
    p6Rect.select('.p6svg').html(svg2)
    setTimeout(function() {
        p6Rect.select('.p6svg').remove()
        p6Onece = true
    }, 1000)
}

let removeP7Imge = function() {
    if (p7Onece) return
    p7Rect.selectAll('.imgRect').remove()
    p7Rect.selectAll('.imgText').remove()
    p7Rect.select('.p7svg').html(svg2)
    setTimeout(function() {
        p7Rect.select('.p7svg').remove()
        p7Onece = true
    }, 1000)
}

let removeP8Imge = function() {
    if (p8Onece) return
    p8Rect.selectAll('.imgRect').remove()
    p8Rect.selectAll('.imgText').remove()
    p8Rect.select('.p8svg').html(svg2)
    setTimeout(function() {
        p8Rect.select('.p8svg').remove()
        p8Onece = true
    }, 1000)
}
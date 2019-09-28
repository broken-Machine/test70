let firstRect = d3.select('#first_rects').append("svg").attr('width', '100%').attr('height', window.innerHeight / 2)

firstRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '70%').attr('y', '2%').attr('class', 'rect')
firstRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '60%').attr('y', '4%').attr('class', 'rect')
firstRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '80%').attr('y', '5%').attr('class', 'rect')
firstRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '90%').attr('y', '8%').attr('class', 'rect')
firstRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '30%').attr('y', '15%').attr('class', 'rect')
firstRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '40%').attr('y', '20%').attr('class', 'rect')
firstRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '68%').attr('y', '50%').attr('class', 'rect')
firstRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '78%').attr('y', '48%').attr('class', 'rect')
firstRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '20%').attr('y', '78%').attr('class', 'rect')
firstRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '41%').attr('y', '88%').attr('class', 'rect')

firstRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '21%').attr('y', '12%').attr('class', 'rect')
firstRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '60%').attr('y', '46%').attr('class', 'rect')
firstRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '80%').attr('y', '20%').attr('class', 'rect')
firstRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '40%').attr('y', '34%').attr('class', 'rect')
firstRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '25%').attr('y', '50%').attr('class', 'rect')
firstRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '50%').attr('y', '60%').attr('class', 'rect')
firstRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '60%').attr('y', '70%').attr('class', 'rect')
firstRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '7%').attr('y', '92%').attr('class', 'rect')

let lastRect = d3.select('#last_rects').append("svg").attr('width', '100%').attr('height', 0).attr('opacity', '1')

lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '70%').attr('y', '2%').attr('class', 'rect')
lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '60%').attr('y', '4%').attr('class', 'rect')
lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '80%').attr('y', '5%').attr('class', 'rect')
lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '90%').attr('y', '8%').attr('class', 'rect')
lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '30%').attr('y', '15%').attr('class', 'rect')
lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '40%').attr('y', '20%').attr('class', 'rect')
lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '68%').attr('y', '50%').attr('class', 'rect')
lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '78%').attr('y', '48%').attr('class', 'rect')
lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '20%').attr('y', '78%').attr('class', 'rect')
lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '41%').attr('y', '88%').attr('class', 'rect')

lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '21%').attr('y', '12%').attr('class', 'rect')
lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '60%').attr('y', '46%').attr('class', 'rect')
lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '80%').attr('y', '20%').attr('class', 'rect')
lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '40%').attr('y', '34%').attr('class', 'rect')
lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '25%').attr('y', '50%').attr('class', 'rect')
lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '50%').attr('y', '60%').attr('class', 'rect')
lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '60%').attr('y', '70%').attr('class', 'rect')
lastRect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '7%').attr('y', '92%').attr('class', 'rect')




let p1Rect = d3.select('#rect1').append("svg").attr('width', '100%').attr('height', '100%').attr('position', 'absolute').attr('left', '0').attr('top', '0')
let p2Rect = d3.select('#rect2').append("svg").attr('width', '100%').attr('height', '100%').attr('position', 'absolute').attr('left', '0').attr('top', '0')
let p3Rect = d3.select('#rect3').append("svg").attr('width', '100%').attr('height', '100%').attr('position', 'absolute').attr('left', '0').attr('top', '0')
let p4Rect = d3.select('#rect4').append("svg").attr('width', '100%').attr('height', '100%').attr('position', 'absolute').attr('left', '0').attr('top', '0')
let p5Rect = d3.select('#rect5').append("svg").attr('width', '100%').attr('height', '100%').attr('position', 'absolute').attr('left', '0').attr('top', '0')
let p6Rect = d3.select('#rect6').append("svg").attr('width', '100%').attr('height', '100%').attr('position', 'absolute').attr('left', '0').attr('top', '0')
let p7Rect = d3.select('#rect7').append("svg").attr('width', '100%').attr('height', '100%').attr('position', 'absolute').attr('left', '0').attr('top', '0')
let p8Rect = d3.select('#rect8').append("svg").attr('width', '100%').attr('height', '100%').attr('position', 'absolute').attr('left', '0').attr('top', '0')

p1Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '34%').attr('y', '63%')
p1Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '32%').attr('y', '75%')
p1Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('fill', '#fff').attr('x', '60%').attr('y', '80%')
p1Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '63%').attr('y', '64%').attr('class', 'rect')

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
p2Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '68%').attr('y', '65%').attr('class', 'rect')
p2Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '78%').attr('y', '80%').attr('class', 'rect')

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
p3Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '68%').attr('y', '65%').attr('class', 'rect')
p3Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '78%').attr('y', '80%').attr('class', 'rect')


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
p4Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '68%').attr('y', '65%').attr('class', 'rect')
p4Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '78%').attr('y', '80%').attr('class', 'rect')


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
p5Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '68%').attr('y', '65%').attr('class', 'rect')
p5Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '78%').attr('y', '80%').attr('class', 'rect')




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
p6Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '68%').attr('y', '65%').attr('class', 'rect')
p6Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '78%').attr('y', '80%').attr('class', 'rect')





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
p7Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '68%').attr('y', '65%').attr('class', 'rect')
p7Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '78%').attr('y', '80%').attr('class', 'rect')




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
p8Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '68%').attr('y', '65%').attr('class', 'rect')
p8Rect.append('rect').attr('width', '1rem').attr('height', '1rem').attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '78%').attr('y', '80%').attr('class', 'rect')




let mapRect = d3.select('.map').append("svg").attr('width', '100%').attr('height', "100%")
let mapwitdh = '0.5rem'
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '70%').attr('y', '45%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '60%').attr('y', '52%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '40%').attr('y', '43%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '50%').attr('y', '42%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '30%').attr('y', '41%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '40%').attr('y', '40%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '68%').attr('y', '50%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '78%').attr('y', '51%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '20%').attr('y', '52%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '41%').attr('y', '53%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '50%').attr('y', '53%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '41%').attr('y', '50%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '55%').attr('y', '49%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '49%').attr('y', '52%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '53%').attr('y', '50%').attr('class', 'rect')

mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '60%').attr('y', '45%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '50%').attr('y', '52%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '50%').attr('y', '43%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '50%').attr('y', '42%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '30%').attr('y', '44%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '40%').attr('y', '43%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '68%').attr('y', '52%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '58%').attr('y', '51%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '27%').attr('y', '52%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '49%').attr('y', '53%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '46%').attr('y', '53%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '41%').attr('y', '52%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '55%').attr('y', '41%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '49%').attr('y', '62%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '53%').attr('y', '57%').attr('class', 'rect')

mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '20%').attr('y', '55%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '30%').attr('y', '52%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '10%').attr('y', '61%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '40%').attr('y', '29%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '30%').attr('y', '49%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '36%').attr('y', '38%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '45%').attr('y', '47%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '47%').attr('y', '45%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '52%').attr('y', '36%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '17%').attr('y', '46%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '21%').attr('y', '51%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '20%').attr('y', '48%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '23%').attr('y', '56%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '34%').attr('y', '29%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '25%').attr('y', '61%').attr('class', 'rect')

mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '78%').attr('y', '55%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '80%').attr('y', '52%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '81%').attr('y', '61%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '76%').attr('y', '69%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '74%').attr('y', '69%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '70%').attr('y', '68%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '80%').attr('y', '67%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '82%').attr('y', '65%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '77%').attr('y', '66%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '78%').attr('y', '66%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '72%').attr('y', '51%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '79%').attr('y', '48%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '84%').attr('y', '56%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '87%').attr('y', '59%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('fill', '#fff').attr('x', '81%').attr('y', '61%').attr('class', 'rect')

mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '21%').attr('y', '62%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '60%').attr('y', '46%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '80%').attr('y', '70%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '40%').attr('y', '34%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '25%').attr('y', '50%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '50%').attr('y', '60%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '60%').attr('y', '70%').attr('class', 'rect')
mapRect.append('rect').attr('width', mapwitdh).attr('height', mapwitdh).attr('stroke-width', '1').attr('stroke', '#fff').attr('x', '7%').attr('y', '52%').attr('class', 'rect')
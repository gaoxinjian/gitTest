var height = $(window).height();
var num = 0;
var moveDiv = $('.contentDiv');
$('.mainDiv').css('height', height);
$('.content').css('height', height);

//鼠标滚轮翻页
var onMove = 0;
moveDiv.mousewheel(function(event, delta){
    if(num > 0 && delta > 0 && onMove == 0){
        onMove = 1;
        moveUp();
    }
    else if(num < 3 && delta < 0 && onMove == 0){
        onMove = 1;
        moveDown();
    }
});
//浏览器尺寸改变时触发
$(window).resize(function(){
    height = $(window).height();
    $('.mainDiv').css('height', height);
    $('.content').css('height', height);
    $('.contentDiv').css('top', -height * num);
    $('.navDiv').css('right', -$('.navDiv').width());
});
//向下翻页
function moveDown(){
    moveDiv.animate(
        {'top': -(height * (++num))  + 'px'}, 
        'slow', 
        function(){onMove = 0;}
    );
}
//向上翻页
function moveUp(){
    moveDiv.animate(
        {'top': -(height * (--num))  + 'px'}, 
        'slow', 
        function(){onMove = 0;}
    );
}

//右侧导航栏的显示与隐藏
$('.arrow').mouseenter(function(){
    $('.arrow').hide();
    $('.navDiv').animate({'right': '0px'}, 'slow');
});
$('.nav').mouseleave(function(){
    $('.navDiv').animate({'right': -$('.navDiv').width() + 'px'}, 'slow', function(){$('.arrow').show();});
});

//右侧导航栏点击到指定页面
$('.navClick img').click(function(){
    num = parseInt($(this).attr('class').slice(3, $(this).attr('class').length));
    moveUp();
});

//第一页时钟
function clock(){
    //初始化
    var nowDate = new Date();
    var seconds = nowDate.getSeconds();
    var minutes = nowDate.getMinutes();
    var hours = nowDate.getHours();
    $('.seconds').css('transform', 'rotate(' + (seconds * 6) + 'deg)'); 
    $('.minutes').css('transform', 'rotate(' + (minutes * 6 + seconds / 10) + 'deg)'); 
    $('.hours').css('transform', 'rotate(' + (hours * 6 + minutes / 10) + 'deg)'); 
    //每秒重塑一次
    setInterval(function(){
        nowDate = new Date();
        seconds = nowDate.getSeconds();
        minutes = nowDate.getMinutes();
        hours = nowDate.getHours();
        $('.seconds').css('transform', 'rotate(' + (seconds * 6) + 'deg)'); 
        $('.minutes').css('transform', 'rotate(' + (minutes * 6 + seconds / 10) + 'deg)'); 
        $('.hours').css('transform', 'rotate(' + (hours * 6 + minutes / 10) + 'deg)'); 
    }, 1000);    
}
clock();

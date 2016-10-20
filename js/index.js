$(function(){
var topslide = $('.topslide');
var topslidetimer = setInterval(function(){
    topslide.animate({
    opacity: 0,
    },
    1000, function() {
    $(this).animate({opacity: 1}, 1000);
});
},2000);

// 遮罩层
var $mask=$("#mask");
(function showmask(i){
    $mask.css({width:$(document).width()+"px",height:$(document).height()+"px"});
    $mask.fadeIn(1000);
    $mask.on("mousewheel DOMMouseScroll",function(event){
        event.preventDefault();
        event.stopPropagation();
    });
    
})();
//封面进入
var $enterbtn=$('.enter');
$enterbtn.click(function() {
     $mask.fadeOut(1000,sec1InfoShow(2000));
     clearInterval(timer_p);
});
//封面左右动画
(function(){
    $('#maskleft').show(1000);
    $('#maskright').show(1000,function(){
        $('#maskmain hr').animate({
            width: '30%'  
        },
            1000, function() {
              $('#maskmain h1').fadeIn(1000);
        });
    });
})();
//封面文字动画
var $mask_p=$('#maskmain p');
var timer_p = setInterval(changep,400);
function changep(){
    if ($mask_p.html()=='求职中...') 
    {
        $mask_p.html('求职中');
    }
    else
    {
        $mask_p.html($mask_p.html()+'.');
    }
    
}
//头像效果
$(".imgbox").hover(function(){
        $(".imgbanner_box").stop().fadeIn(200);
    },function(){
        $(".imgbanner_box").stop().fadeOut(200);
    });
//第一屏信息展示
function sec1InfoShow(speed){
    $(".sec1_info_1").slideDown(speed);
    $(".sec1_info_2").slideDown(speed);
}



// 技能进度条数据保存进数组
var $probar=$('.skill_list progress');
var i=0;
var barvalue = [];
for(i=0;i<$probar.length;i++){
     barvalue[i]=$probar.eq(i).val();
}
//初始化为零，不然无动画效果。                 
$probar.each(function(index, el) {
     $(this).val(0);
});
//进度条动画
function showbar(){
    $probar.each(function(index, el) {
         $(this).animate({value: barvalue[index]}, 2000); 
        });     
}
//进度条清零
function clearbar(){
    $probar.stop().val(0);
}
//每一页的动画函数
var show={
        sec1:function(){ 
                $('.skill_info').fadeOut(500);
                $('.sec3_pro').fadeOut(500);
                $('.sec4_about').fadeOut(500); 
            },
        sec2:function(){
                showbar();
                $('.skill_info').fadeIn(1000);
                $('.sec3_pro').fadeOut(500);
                $('.sec4_about').fadeOut(500);
            },
        sec3:function(){
                $('.sec3_pro').fadeIn(1000);
                $('.skill_info').fadeOut(500);
                $('.sec4_about').fadeOut(500);
            },
        sec4:function(){
                $('.sec4_about').fadeIn(1000);
                $('.skill_info').fadeOut(500);
                $('.sec3_pro').fadeOut(500);
            }
        };
// fullgpage插件设置
$('#fullpage').fullpage({
    'verticalCentered': false,
    'css3': true,
    'sectionsColor': ['#666666', '#669999', '#666666', '#669999','#333333'],
    'anchors': ['17Jia', 'Skill', 'Project', 'About','Contact'],
    'navigation': true,
    'navigationPosition': 'right',
    'slidesNavigation':true,
    'navigationTooltips': ['17Jia', 'Skill', 'Project', 'About','Contact'],
//每一页的回调函数
    afterLoad: function(anchorLink, index){
        var loadedSection = $(this);
            //using index
        if(index == 1){
            show.sec1();
        }
        if(index == 2){
            show.sec2();
        }
        if(index == 3){
            show.sec3();
        }
        if(index == 4){
            show.sec4();
        }
    },
//离开进度条清零
    onLeave:function(index){
                    if (index==2) {
                        clearbar();
                    }
            }   
});

});
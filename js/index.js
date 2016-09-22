$(function(){
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
    })
//第一屏信息展示
function sec1InfoShow(speed){
    $(".sec1_info_1").slideDown(speed);
    $(".sec1_info_2").slideDown(speed);
}



// end
});















$(function(){

        var show={
            sec1:function(){
                $('.skill_info').fadeOut(500);
                $('.sec3_pro').fadeOut(500);
                $('.sec4_about').fadeOut(500);
            },
            sec2:function(){
                $('.skill_info').fadeIn(1000);
                //其他淡出
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


        }

        $('#fullpage').fullpage({
        	'verticalCentered': false,
        	'css3': true,
        	'sectionsColor': ['#666666', '#669999', '#666666', '#669999','#333333'],
        	anchors: ['17Jia', 'Skill', 'Project', 'About','Contact'],
        	'navigation': true,
        	'navigationPosition': 'right',
        	'slidesNavigation':true,
        	'navigationTooltips': ['17Jia', 'Skill', 'Project', 'About','Contact'],
            afterLoad: function(anchorLink, index){
                    var loadedSection = $(this);
                        //using index
                    if(index == 1){
                        show.sec1()
                     }
                    if(index == 2){
                        show.sec2()
                     }
                    if(index == 3){
                        show.sec3()
                     }
                    if(index == 4){
                        show.sec4()
                     }
                }


   		 })

        
});
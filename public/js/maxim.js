var $bar = $(".navs_mo"); //제이쿼리를 품고 있는 변수라는 의미에서 앞에 $붙여서 직관적이게 쓴다
var $bar2 = $(".nav_close");
var $nav = $(".navs_mo_sub");
var navWid = $nav.width();

/***** 반응형/높이를 위한 resize ******/
$(window).resize(function(){
	navInit();	//모바일 네비게이션 가리기
  banInit();	//배너 Auto height
}).trigger("resize");

/***** 메인 배너 ******/
function banInit() {
	$(".banner_wrap").height($(".banner_wrap > li").height());
}

/***** 모바일 네비게이션 ******/
$bar.click(navToggle);
$bar2.click(navToggle);
function navInit() {
	navWid = $nav.width();
	if($(window).width() > 768) navHide();
	else navToggle();
}
function navHide() {
	$nav.css({"right":-navWid+"px"});
}
function navToggle() {
	if($nav.position().right == 0) $nav.stop().animate({"right": -navWid+"px"}, 500);
	else $nav.stop().animate({"right": 0}, 500);
}

var options = {
	delay: 3000,
	speed: 300,
	dir: -1,
	dirBtnUse: true,
	dirBtn:[$("#bt_prev"), $("#bt_next")],
};
var horiBanner = new SlideHori($("#banner1"), $("#banner1").find(".slide"), options);
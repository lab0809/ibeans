//header要素以上スクロールしたら、#g-navに.scrollをaddする
//1.header高さ習得
var h=$('header').outerHeight();
console.log(h);

//画面の上部からどの位スクロールしてるかCONSOLで確認するもの
$(window).scroll(function(){
var a=($(this).scrollTop());
console.log(a);
// 変数aが変数h以上になったら
if(a > h){
//#g-navに.scrollをadd
$('#g-nav,#s-logo').addClass('scroll');
}else{
$('#g-nav,#s-logo').removeClass('scroll');
}
}
);

$(function(){
//ハンバーガーのクリック
$('#btn').on('click',function(){
    //#g-navをslideToggle 
    $('.g-nav:not(:animated)').slideToggle(200);
    });
    //ナビの表示・非表示
    $(window).on('load resize',function(){
    var w = $(this).outerWidth();
    console.log(w);
    if(w <= 767){
    //wが959以下の時は#g-navをhide
    //spの時
    $('.g-nav').hide();
    }else{
    $('#g-nav2').show();    
    }
});
});
$(function(){
    //菜单1
    var input=$('.nav-begin .top input');
    var newaddress=input.prop('selectionStart')+2;
    input.val(input.val().substring(0,newaddress)+'  '+input.val().substring(newaddress));
  input[0].setSelectionRange(newaddress+2,newaddress+2);
   
    $('.nav-begin .top .input').val()
    $('.nav-begin .top').on('click','#open',function(){
        $(this).hide();
  $(this).siblings('input,#close').show(500);
    });

    $('.nav-begin .top').on('click','#close',function(){
        $(this).hide();
  $(this).siblings('input').hide(500);
  $(this).siblings('#open').show();
    });
    // 菜单2
$(' .nav-end .one ').on('mouseover ','.head',function(){
    $(this).siblings('.tc').css('display','block');
$(this).siblings('.tc,b').addClass('ani');
$(this).parent('.one').addClass('checksth');
});

$('.nav-end .one .tc').on('mouseenter',function(){
$(this).addClass('checksth');
});

$('.nav-end .one').on('mouseleave',function(){
    $(this).removeClass('checksth');
    if(!$('.nav-end .one').hasClass('checksth')&&!$('.nav-end .one .tc').hasClass('checksth')){
        $(this).children('.tc,b').removeClass('ani');
        $(this).siblings('.tc').css('display','none');
        };
});

$('.nav-end .one .tc').on('mouseleave',function(){
    $(this).removeClass('checksth');
    if(!$('.nav-end .one').hasClass('checksth')&&!$('.nav-end .one .tc').hasClass('checksth')){
        $(this).children('.tc,b').removeClass('ani');
        $(this).css('display','none');
        };
});

// 侧面菜单
var side=$('.side');
$(window).scroll(function(){
   if($(this).scrollTop()>=$('.heads').height()/2){
side.attr('id','changes');
}
if($(this).scrollTop()<$('.heads').height()/2){
    side.attr('id','');
    }
})


});
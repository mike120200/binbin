$(function(){
$('.mintop li').on('click','.bi-plus-lg',function(){
$(this).parent('p').siblings('.in').children('li').slideToggle(500);
})
$('.minstart').on('click','.bi-list',function(){
$(this).parent().siblings('.hideminnav').slideToggle(500);
})
})
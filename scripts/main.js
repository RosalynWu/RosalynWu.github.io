/**
 * Created by wuhaiying on 2016/6/17.
 */
$('#contentWrapHeight').height($(document).height()+$(window).scrollTop());
$(window).resize(function(){
    $('#contentWrapHeight').height($(document).height()+$(window).scrollTop());
});
var $key=1;
function themeBg(){
    $key++;
    if($key>4){
        $key=1;
    }
    $("#bg").attr("class","themebg"+$key+""); /*更改类 核心语句*/

}
/*支持换肤*/
function setTheme(name){
    var themeName=name;
    var baseUrl="styles/";
    var themeUrl=baseUrl+themeName+".css";
    var themeLink=$("#theme");
    themeLink.prop("href",$("#theme").attr("href"));
    themeLink.prop("href",themeUrl);
    var themeCookie= $.cookie("themeCookie",themeName);
}
$(".theme-group .options-list").click(function(e){
    var themeName=$(this).attr("data-style");
    setTheme(themeName);
});
if($.cookie("themeCookie")){
    setTheme($.cookie("themeCookie"));
}



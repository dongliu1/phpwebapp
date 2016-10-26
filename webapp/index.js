/**
 * Created by liudong on 2016/10/25.
 */
$(function () {
   init_template();
});
function init_template(){
    var inc_model=["head","left","footer"];
    $.each(inc_model,function(i,idata){
        $("."+idata+"-content").load("webapp/inc-template/inc-"+idata+".html");
    })
}
function changeContent(event,choice){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    let contents = document.getElementsByClassName("content2");
    let buttons = document.getElementsByClassName("font-size-button");
    for(let i=0; i<buttons.length; i++){
        buttons[i].className = "font-style font-size-button";
        contents[i].className = "content2 hidden"; 
    }
    contents[choice].className = "content2";
    buttons[choice].className += " after-click";
}
function fixedHeader(){
    let header = document.getElementById("header");
    let person_info = document.getElementById("person-info");
    let bottom = person_info.getBoundingClientRect().bottom;
    if(bottom <= 0){
        header.style.position = "fixed";
        header.style.width = "80%";
    } else{
        header.style.width = "100%";
        header.style.position = "inherit";
    }
}
function scroll(){
    //console.log("打印log日志");实时看下效果
    fixedHeader();
    console.log("开始滚动！");
   }
   var scrollFunc = function (e) { 
    e = e || window.event; 
    if (e.wheelDelta) { //第一步：先判断浏览器IE，谷歌滑轮事件    
     if (e.wheelDelta > 0) { //当滑轮向上滚动时 
      console.log("滑轮向上滚动"); 
     } 
     if (e.wheelDelta < 0) { //当滑轮向下滚动时 
      console.log("滑轮向下滚动"); 
     } 
    } else if (e.detail) { //Firefox滑轮事件 
     if (e.detail> 0) { //当滑轮向上滚动时 
      console.log("滑轮向上滚动"); 
     } 
     if (e.detail< 0) { //当滑轮向下滚动时 
      console.log("滑轮向下滚动"); 
     } 
    } 
   }
   //给页面绑定滑轮滚动事件 
   if (document.addEventListener) {//firefox 
    document.addEventListener('DOMMouseScroll', scrollFunc, false); 
   } 
   //滚动滑轮触发scrollFunc方法 //ie 谷歌 
   window.onmousewheel = document.onmousewheel = scrollFunc;
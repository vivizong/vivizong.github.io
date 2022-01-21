var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
        //  $('[rel="icon"]').attr('href', "/img/TEP.ico");
         document.title = ' 页面炸啦💥 ~ ';
         clearTimeout(titleTime);
     }
     else {
        //  $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = ' 嘿嘿嘿😋 ~' + OriginTitile;
         titleTime = setTimeout(function () {
             document.title = OriginTitile;
         }, 2000);
     }
 });

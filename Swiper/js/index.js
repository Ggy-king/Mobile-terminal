/*垂直滚动:Demo1*/
// var swiper = new Swiper(".swiper-container", {
//   mode: 'vertical'
// });

/*Progress插件：Demo2*/
/*var swiper = new Swiper(".swiper-container", {
  progress: true,
  onProgressChange: function(swiper){
        for (var i = 0; i < swiper.slides.length; i++){
          var slide = swiper.slides[i];
          var progress = slide.progress;
          var scale, translate, opacity;
          if (progress<=0) {
            opacity = 1 - Math.min(Math.abs(progress),1);
            scale = 1 - Math.min(Math.abs(progress/2),1);
            translate = progress*swiper.width;
          }
          else {
            opacity = 1 - Math.min(Math.abs(progress/2),1);
            scale=1;
            translate=0;
          }
          slide.style.opacity = opacity;
          swiper.setTransform(slide,'translate3d('+(translate)+'px,0,0) scale('+scale+')');
        }
      },
      onTouchStart:function(swiper){
        for (var i = 0; i < swiper.slides.length; i++){
          swiper.setTransition(swiper.slides[i], 0);
        }
      },
      onSetWrapperTransition: function(swiper, speed) {
        for (var i = 0; i < swiper.slides.length; i++){
          swiper.setTransition(swiper.slides[i], speed);
        }
      }
});

// Set Z-Indexes
    for (var i = 0; i < swiper.slides.length; i++){
      swiper.slides[i].style.zIndex = swiper.slides.length - i;
    }*/

/*3D Flow 插件使用：Demo3*/
/*var swiper = new Swiper(".swiper-container", {
  tdFlow: {}
});*/

/*scroll Bar 插件使用： Demo4*/
/*var swiper = new Swiper(".swiper-container", {
    scrollbar: {
        container : '.swiper-scrollbar',
        draggable : true,
        hide: true,
        snapOnRelease: true
    }
});*/

/*Tab 综合示例 :Demo5*/
var swiper = new Swiper(".swiper-container", {
  onSlideChangeStart: function (swiper) {
    var index = swiper.activeIndex;
    $(".tabs a").removeClass("active");
    $(".tabs a").eq(index).addClass("active");
  }
});

$(".tabs a").click(function (e) {
  e.preventDefault();
  var index = $(this).index();
  $(".tabs a").removeClass("active");
  $(this).addClass("active");
  swiper.swipeTo(index);
  return false;
});
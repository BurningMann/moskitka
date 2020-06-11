window.onload = function(){
/* Вывод форм, кнопке формы нужно указывать атрибут "data-to" с названием id формы и класс "common_btn" */
  $(".common_btn, .link_box .more").click(function(EO){
    let target = '#'+$(this).data("to")
    $("body").addClass("hidden")
    $(".modal_bg").fadeIn().css("display","flex");
    $(target).css("display","flex")
    if($(this).data("to") == "zakaz"){
      let name = $(this).closest(".cart").find(".name").text()
      $(target).find(".notification").text(name) 
    }
    $("body").click(function(EO){
        if(EO.target == $(".modal_bg")[0]){
            $(".modal_bg").fadeOut()
            $("body").removeClass("hidden")
            $(target).css("display","none")
        }
    })
    $(".modal_close").click(function(){
      $(this).closest(".modal_bg").fadeOut()
      $("body").removeClass("hidden")
      $(this).closest(".modal_box").css("display", "none")
    })
  })
  $(".modal_box.more .main_slider").slick({
    prevArrow: '<div class="slider_btn prev"><img src="../img/icon/slider_arrow.svg"></div>',
    nextArrow: '<div class="slider_btn next"><img src="../img/icon/slider_arrow.svg"></div>',
    asNavFor: '.modal_box.more .additional_slider'
  })

  $(".modal_box.more .additional_slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.modal_box.more .main_slider'
  })
}
$(".ham").click(function(){
  $(this).toggleClass("active")
  $("header .menu_top .menu ul").slideToggle().css("display","flex")
})
$("header .menu_top .menu ul > li > a").click(function(){
  if($(".ham").hasClass("active")){
    $(this).closest("ul").slideUp()
    $(".ham").removeClass("active")
  }
})

$(document).ready(function(){
  $(".onff").click(function(){
    $("header, footer, .about-btn, .home-btn").toggle();
    $(this).text("off" == $(this).text() ? "on" : "off")
  });

  $(".maker1").click(function(){
    $(".maker-story1").toggle();
  });
});

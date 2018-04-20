$(document).ready(function(){
    let num = $("#top").offset().top; 
    $(window).bind('scroll', function() { 
      if ($(window).scrollTop() > num)
       {  
        $('#top').addClass('fixed'); 
      } 
      else {  
       $('#top').removeClass('fixed');          
      } 
    });
    $("#login").hide();
    $(".register").hide();
    $("#topNav button.sign").click(function(){
        $("#login").show();
        $(".register").show();
    })
    $("#topNav button.login").click(function(){
        $("#login").show();
        $(".signIn").show();
    })
    $("#login").click(function(){
        $("#login").hide();
        $(".register").hide();
        $(".signIn").hide();
    })
    jQuery(document).ready(function ($) {

        var jssor_1_options = {
          $AutoPlay: 1,
          $Idle: 0,
          $SlideDuration: 5000,
          $SlideEasing: $Jease$.$Linear,
          $PauseOnHover: 4,
          $SlideWidth: 180,
          $Align: 0
        };

        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

        /*#region responsive code begin*/

        var MAX_WIDTH = 980;

        function ScaleSlider() {
            var containerElement = jssor_1_slider.$Elmt.parentNode;
            var containerWidth = containerElement.clientWidth;

            if (containerWidth) {

                var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                jssor_1_slider.$ScaleWidth(expectedWidth);
            }
            else {
                window.setTimeout(ScaleSlider, 30);
            }
        }

        ScaleSlider();

        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
        /*#endregion responsive code end*/
    });
    $(function() {
        $('.footer-links-holder h6  ').click(function () {
          $(this).parent().toggleClass('active');
        });
      });
    //////////   Films, Books, Courses Slider//////////
    
    $('.wrapper .btn-left').click(function(){
        var slideWidth=$('#home .wrapper .infoBox').width();
        var lengt=(slideWidth +32)*5;
            $('.wrapper .slowSlider').css({
                marginLeft: -lengt +"px"
            });

    });
    $('.wrapper .btn-right').click(function(){
        var slideWidth=$('#home .wrapper .infoBox').width();
        var lengt=(slideWidth +32)*5;
            $('.wrapper .slowSlider').css({
                marginLeft: 0
            });

    });
  });
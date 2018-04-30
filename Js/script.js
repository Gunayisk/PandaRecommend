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
    //////////////// Book Slider Section is Start /////////////
     $('.books .slider img').click(function(){
        
     });


     ////////// Mobile Pages Scripts /////////
     ///////// Navigation Bars Open//////////
     $('#navMobile ul.list-inline .fa-bars').click(function(){
         $('#navMobile ul.list-inline .clicked i').removeClass('fa-bars');
         //$('#navMobile ul.list-inline .fa-globe').hide();
        $('#navMobile ul.list-inline .fa-search').hide();
        $('#navMobile .list-inline-mobile').css('width', '79%');
        $('#navMobile .list-inline-mobile li').css({'marginRight': '13px'});
        $('#navMobile ul.myList').css('display', 'block');
     });
     ///////// Navigation Bars Close//////////
     $('#navMobile .myList').click(function(){
        $('#navMobile ul.list-inline .clicked i').addClass('fa-bars');
        $('#navMobile ul.myList').css('display', 'none');
        $('#navMobile .list-inline-mobile').css('width', '100%');
        $('#navMobile .list-inline-mobile li').css({'marginRight': '20px'});
        $('#navMobile ul.list-inline .fa-globe').show();
        $('#navMobile ul.list-inline .fa-search').show();
        });

    //////////// Language Icon Click////////////
    $('#navMobile ul.list-inline .fa-globe').click(function(){
        $('#navMobile ul.list-inline .lang-menu').slideToggle('slow');
    })

      //////////// Login Icon Click//////////// 
      $('#navMobile ul.list-inline .fa-user-circle').click(function(){
        $('#navMobile ul.list-inline .user-log').slideToggle();
      }) 
      $('#navMobile ul.list-inline .user-log .in').click(function(){
          $('#login').show();
          $('.signIn').show();
      })
      $('#navMobile ul.list-inline .user-log .up').click(function(){
        $('#login').show();
        $('.register').show();
    })

    /////////////// Search Icon Click //////////////
    $('#navMobile ul.list-inline .fa-search').click(function(){
        $('#search').show();
    })
    ///////////// Focus search input /////////////
    // $('#topNav .side input.searchInput').focus(function(){
    //     $('#search').css('display', 'block');
    // })
    // $('#topNav .side button.btn').click(function(){
    //     $('#search').css('display', 'block');
    // })
  });
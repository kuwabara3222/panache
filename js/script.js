$(function () {


  //スライドショー
  $('body').vegas({
    slides: [
      {
        src: '../img/mv1@2x.jpg'
      },
      {
        src: '../img/mv2@2x.jpg'
      },
      {
        src: '../img/mv3@2x.jpg'
      },
      {
        src: '../img/mv4@2x.jpg'
      },
      {
        src: '../img/mv5@2x.jpg'
      },
      {
        src: '../img/mv6@2x.jpg'
      }
        ],
    timer: false,
  });

  //  メニューボタン
  $("#trigger").click(function () {

    $("#nav").stop().fadeToggle();

    $(this).toggleClass('active');
    return false;
  });

  //スムーススクロール
  $(".header__nav-link").click(function () {
    $this = $(this).attr("href");
    target = $($this).offset().top;
    $("html,body").stop().animate({
      scrollTop: target
    }, 1000);
    return false;
  });
  $("#scroll").click(function () {
    $this = $(this).attr("href");
    target = $($this).offset().top;
    $("html,body").stop().animate({
      scrollTop: target
    }, 1000);
    return false;
  });


  //  ナビゲーションの表示非表示
  var $win = $(window);

  $win.on('load resize', function () {
    var windowWidth = window.innerWidth;

    if (windowWidth > 768) {
      $(".header__nav-link").click(function () {
        $("#nav").show();
        return false;
      });

    } else {
      //  ナビゲーション
      $(".header__nav-link").click(function () {
        $("#nav").stop().fadeToggle();
        $("#trigger").toggleClass('active');
        return false;
      });
    }
  });

  //  インスタフィード
  $(document).ready(function () {
    var feed = new Instafeed({
      target: 'instafeed',
      get: 'user',
      userId: '6886604924',
      accessToken: '6886604924.9f36924.294f670568b44d89a60381d4e59aadf5',
      clientId: '9f369245a1d74d7f9eec66dc9989c852',
      links: true,
      limit: 8,
      resolution: 'thumbnail',
      template: '<a class="insta-link" href="{{link}}"><img src="{{image}}" target="_blank"></a>'
    });
    //    $('#btn-more').click(function () {
    //      feed.next();
    //    });
    feed.run();
  });

})

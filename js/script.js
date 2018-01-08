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
  $(".header__menu-trigger").click(function () {

    $(".header__nav").stop().fadeToggle();

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
  $(".header__scroll").click(function () {
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
        $(".header__nav").show();
        return false;
      });

    } else {
      //  ナビゲーション
      $(".header__nav-link").click(function () {
        $(".header__nav").stop().fadeToggle();
        $(".header__menu-trigger").toggleClass('active');
        return false;
      });
    }
  });

  //  インスタフィード
  $(document).ready(function () {
    var feed = new Instafeed({
      target: 'instafeed',
      get: 'user',
      userId: '6878054582',
      accessToken: '6878054582.d0d7783.d99cde8216004082af420886c16df574',
      clientId: 'd0d77832cd524fb691bec279a52881d2',
      links: true,
      limit: 8,
      resolution: 'thumbnail',
      template: '<a class="insta-link" href="{{link}}"><img src="{{image}}" target="_blank"></a>'
    });
    $('#btn-more').click(function () {
      feed.next();
    });
    feed.run();
  });

})

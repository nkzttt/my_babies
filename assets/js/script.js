// loading scope
(function loading() {
  var isLoaded = false;
  $(window).on('load', function () {
    isLoaded = true;
    // github からの web font 提供は遅すぎるので遅延させる...
    $('head').append('<link rel="stylesheet" href="/my_babies/assets/css/fonts.css">');
  });
  var $loading = $('.loading');
  if ($loading.get().length === 0) return; // for development
  var startAnimation = function () {
    $loading.children().each(function () {
      var $this = $(this);
      $this.hide();
      setTimeout(function () {
        $this.show();
      }, 300);
    });
  };
  // js 評価時に animation が終わっていた場合の対策用フラグ
  var maybeAlreadyEnd = true;
  $loading.children(':last').on('animationend', function () {
    maybeAlreadyEnd = false;
    if (isLoaded) {
      $loading.fadeOut(300);
      return;
    }
    startAnimation();
  });
  setTimeout(function () {
    if (maybeAlreadyEnd) startAnimation();
  }, 2000); // 確実にアニメーションが終わる秒数を指定すること
})();

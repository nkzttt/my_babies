// loading scope
(function loading() {
  var isLoaded = false;
  var $loading = $('.loading');
  $(window).on('load', function () {
    isLoaded = true;
    // github からの web font 提供は遅すぎるので遅延させる...
    $('head').append('<link rel="stylesheet" href="/my_babies/assets/css/fonts.css">');
  });
  $loading.children(':last').on('animationend', function () {
    if (isLoaded) {
      $loading.fadeOut(300);
      return;
    }
    $loading.children().each(function () {
      var $this = $(this);
      $this.hide();
      setTimeout(function () {
        $this.show();
      }, 300);
    });
  });
})();

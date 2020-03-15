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

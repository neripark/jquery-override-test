// クリックされた要素のテキストにメッセージを付与して出力
(function($) {
  $.fn.kicking = function() {
    var txt = this.text();
    console.log(txt + ' was kicked!');
    return this;
  };
})(jQuery);

//
(function($) {
  $.fn.detach = function( selector ) {
    console.log('detach overrided!!!!!!');
    // return remove( this, selector, true );
  };
})(jQuery);


$(function() {

  $('.trigger').on('click', function() {
    $('.tgt').detach();
  });

  $('.trigger2').on('click', function() {
    $('.tgt').kicking();
  });
});

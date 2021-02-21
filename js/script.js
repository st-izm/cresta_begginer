(function($) {
    var $nav   = $('.p-navigation');
    var $btn   = $('.js-toggle_btn');
    var $mask  = $('#mask');
    var open   = 'is-open'; // class
    // menu open close
    $btn.on( 'click', function() {
      if ( ! $nav.hasClass( open ) ) {
        $nav.addClass( open );
      } else {
        $nav.removeClass( open );
      }
    });
    // mask close
    $mask.on('click', function() {
      $nav.removeClass( open );
    });
  } )(jQuery);
var ias = jQuery.ias({
  container:  '.home',
  item:       '.post-list',
  pagination: '.pagination',
  next:       '.pagination-item'
});
ias.extension(new IASSpinnerExtension({
  html:'<div class="spinner"></div>', // optionally
}));

ias.on('rendered', function() {
  jQuery(function($) {

    // init Masonry
    var $grid = $('.gallery').masonry({
      // options...
      percentPosition: true,
      columnWidth: '.gallery-sizer',
      itemSelector: '.gallery-item',
      transitionDuration: 0,
      gutter: 7
        });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress( function() {
      $grid.masonry('layout');
    });

//Photoswipe
    var slideSelector = 'a',
    options     = {bgOpacity: 0.8, closeOnScroll: false, shareEl: false, clickToCloseNonZoomable: false},
    events      = {};

    $('.gallery').photoSwipe(slideSelector, options, events);
    $('.gallery').photoSwipe('update');
  });

})

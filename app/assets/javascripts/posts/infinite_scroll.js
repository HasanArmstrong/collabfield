document.addEventListener('turbolinks:load', function() {
  var isLoading = false;
  if ($('.infinite-scroll', this).size() > 0) {
    $(window).on('scroll', function() {
      console.log('scroll event ran')
      var more_posts_url = $('.pagination a.next_page').attr('href');
      var threshold_passed = $(window).scrollTop() > $(document).height() - $(window).height() - 60;
      if (!isLoading && more_posts_url && threshold_passed) {
        console.log('is loading ran')
        isLoading = true;
        $.getScript(more_posts_url).done(function (data,textStatus,jqxhr) {
          console.log('get script ran')
          isLoading = false;
        }).fail(function() {
          isLoading = false;
        });
      }
    });
  }
});
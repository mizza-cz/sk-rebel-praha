$(document).ready(function () {
  var a = false;
  $('a[data-gallery]').click(function () {
    if (!a) {
      a = true;
      var r = $(this).data('gallery'),
        s = $(this).data('start'),
        t = '/inc/gallery-ajax.php?mode=' + r;

      if (r === 1 || r === 2 || r === 3) {
        t += '&id=' + $(this).data('gallery-id');
      }

      $.getJSON(t, { format: 'json' })
        .done(function (data) {
          $(this).lightGallery({
            hash: false,
            share: false,
            dynamic: true,
            dynamicEl: data,
            index: s,
            download: false,
            backdropDuration: 500,
          });
        })
        .fail(function (jqxhr, status, error) {
          alert('Nastala chyba při načítání galerie. Prosím zkuste to znovu.');
          console.error('getJSON failed, status: ' + status + ', error: ' + error);
          console.error(jqxhr);
        })
        .always(function () {
          a = false;
        });

      return false;
    }
  });
});

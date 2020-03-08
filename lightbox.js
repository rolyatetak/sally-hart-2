$('.photos a').on('click', function() {
  $('.modal').fadeIn(500)
  var img = $(this).html()
  $('.modal-content').html(img)
  return false
})

$('.modal-close, .modal-background').on('click', function() {
  $('.modal').fadeOut(500)

  return false
})

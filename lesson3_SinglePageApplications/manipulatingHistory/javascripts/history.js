$('nav').on('click', 'li', function(e) {
  e.preventDefault();
  let $e = $(e.target);
  let idx = $e.find('a').attr('href');
  switchPage(idx);

  history.pushState({idx: idx}, $e.find('a').text(), `${location.pathname}${idx}`)
});

$(window).on('popstate', function(e) {
  let state = e.originalEvent.state;
  switchPage(state === null ? "#page_1" : state.idx);
});

if (location.hash) {
  switchPage(location.hash);
}
function switchPage(idx) {
  $('.active').removeClass('active');
  $(`nav a[href="${idx}"]`).parent().addClass('active');
  $('article').hide().filter(idx).show();
}

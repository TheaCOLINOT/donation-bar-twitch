document.addEventListener('goalLoad', function(obj) {
    $('#title').html(obj.detail.titel);
    $('#goal-total').text(obj.detail.amount.target);
    $('#goal-end-date').text(obj.detail.to_go.ends_at);
    $('#goal-current').text(obj.detail.amount.current);
    var total = $('#goal-total').html(),
        current = $('#goal-current').html();
       $('#total-bar').css('width', current / total * 100 + '%').css('width', '-=8px');
    $('#goal-total').text(obj.detail.amount.target + ' €');
    $('#goal-current').text(obj.detail.amount.current + ' €');
  });
  
  document.addEventListener('goalEvent', function(obj) {
    $('#goal-total').text(obj.detail.amount.target);
    $('#goal-current').text(obj.detail.amount.current);
    var total = $('#goal-total').html(),
        current = $('#goal-current').html();
      $('#total-bar').css('width', current / total * 100 + '%').css('width', '-=8px');
    $('#goal-total').text(obj.detail.amount.target + ' €');
    $('#goal-current').text(obj.detail.amount.current  + ' €');
  });
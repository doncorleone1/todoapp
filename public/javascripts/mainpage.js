$(document).ready(function () {
  //set focus to the input
  $('#tsk').focus();

  //show new item
  function showNewItem(response) {
    var prepend = $('.style-input');
    prepend.before('\
    <div class="row style-row" id= "' + response._id + '">\
        <span class="material-icons span-unchecked style-check">radio_button_unchecked</span>\
        <input type="text" value = "' + response.task + '" class="form-control style-item" readonly>\
        <span class="glyphicon glyphicon-trash style-delete"></span>\
      </div>');
  }

  //create a new item using ajax
  $('#create-form').on('submit', function (event) {
    event.preventDefault();

    var myTask = $('#tsk');

    $.ajax({
      url: '/items',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ 'task': myTask.val() }),
      success: function (response) {
        showNewItem(response);
        myTask.val('');
      }
    });
  });

  //update an item using ajax
  $('body').delegate('.style-check', 'click', function () {
    
    var id = $(this).parent().attr('id');

    $.ajax({
      url: '/items/' + id,
      method: 'PUT',
      contentType: 'application/json',
      success: function(response) {
          console.log(response);
      }
    });

    if ($(this).html() === 'radio_button_unchecked') {
      $(this).html('&#xe089;'); //change to checkbox checked
    } else {
      $(this).html('radio_button_unchecked'); //change to checkbox unchecked
    }
    $(this).next().toggleClass('text-line-through');
    $(this).toggleClass('material-icons span-unchecked glyphicon green');
  });

  //delete an item using ajax
  $('body').delegate('.style-delete', 'click', function () {
    if (confirm('Are you sure you want to delete?')) {
      var id = $(this).parent().attr('id');
      $.ajax({
        url: '/items/' + id,
        method: 'DELETE',
        contentType: 'application/json',
        success: function (response) {
          console.log(response);
        }
      });
      $(this).parent().remove();
    } else {
      return false;
    }
  });

  //validate input if empty
  $('#insert-btn').on('click', function () {
    if (!$('#tsk').val()) {
      alert('Please type a new task!');
      $('#tsk').focus();
      return false;
    }
  });
});


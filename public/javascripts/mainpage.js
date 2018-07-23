$(document).ready(function () {
  //set focus to the input
  $("#tsk").focus();

  //show new item
  function showNewItem(response) {
    var prepend = $('.specs-input');
    prepend.before('\
    <div class="row specs-row" id= "' + response._id + '">\
        <span class="material-icons span-unchecked specs-check">radio_button_unchecked</span>\
        <input type="text" value = "' + response.task + '" class="form-control specs-item" readonly>\
        <span class="glyphicon glyphicon-trash specs-delete"></span>\
      </div>');
  }

  //create a new item using ajax
  $("#create-form").on("submit", function (event) {
    event.preventDefault();

    var myTask = $("#tsk");

    $.ajax({
      url: '/items',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ "task": myTask.val() }),
      success: function (response) {
        showNewItem(response);
        myTask.val('');
      }
    });
  });

  //update an item using ajax
  $("body").delegate(".specs-check", "click", function () {
    
    var id = $(this).parent().attr('id');
    console.log(id);

    $.ajax({
      url: '/items/' + id,
      method: 'PUT',
      contentType: 'application/json',
      success: function(response) {
          console.log(response);
      }
    });
    
    if ($(this).html() === "radio_button_unchecked") {
      $(this).html("&#xe089;");
      $(this).next().css({ "text-decoration": "line-through" });
    } else {
      $(this).html("radio_button_unchecked");
      $(this).next().css({ "text-decoration": "none" });
    }
    $(this).toggleClass("material-icons span-unchecked glyphicon green");
  });

  //delete an item using ajax
  $("body").delegate(".specs-delete", "click", function () {
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
  $("#insert-btn").on("click", function () {
    if (!$("#tsk").val()) {
      alert("Please type a new task!");
      $("#tsk").focus();
      return false;
    }
  });
});


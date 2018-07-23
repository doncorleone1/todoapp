$(document).ready(function() {
  $("#tsk").focus();

  $(".span-unchecked").on("click", function () {
    if($(this).html() === "radio_button_unchecked") {
      $(this).html("&#xe089;");
      $(this).next().css({"text-decoration" : "line-through"});
    } else {
      $(this).html("radio_button_unchecked");
      $(this).next().css({"text-decoration" : "none"});
    }
    $(this).toggleClass("material-icons span-unchecked glyphicon green");
  });

  $(".specs-delete").click(function() {
      return confirm('Are you sure you want to delete?');
  });

  $("#insert-btn").on("click", function() {
    if ( !$("#tsk").val() ) {
      alert("Please type a new task!");
      $("#tsk").focus();
      return false;
    }
  });

  function showNewItem (response) {    
    var prepend = $('.specs-input');
    // $("body").delegate("span", "click", function() {
      prepend.before('\
      <div class="row specs-row">\
        <span class="material-icons span-unchecked specs-check">radio_button_unchecked</span>\
        <input type="text" value = "' + response.task + '" class="form-control specs-item" readonly>\
        <a href="/delete/' +  response._id + '" class="specs-delete"><span class="glyphicon glyphicon-trash "></span></a>\
      </div>');
    // });
  }

  // function showItems () {
  //   $.ajax({
  //     url: '/items',
  //     method: 'GET',
  //     contentType: 'application/json',
  //     success: function(response) {
        
  //     }
  //   })
  // }

  $("#create-form").on("submit", function (event) {
    event.preventDefault();

    var myTask = $("#tsk");
    
    $.ajax({
      url: '/items',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ "task": myTask.val() }),
      success: function(response) {
        showNewItem(response);
        myTask.val('');
      }
    });
  });
});


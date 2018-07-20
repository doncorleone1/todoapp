$(document).ready(function() {
    $("#insert-btn").click(function () {
      if ( !$(this).val() ) {
        alert("You should type something!");
        $("#tsk").focus();
        return false;
      }
    });

    $(".span-unchecked").click(function () {
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
});
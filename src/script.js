$(document).ready(function () {
  $("p").hide();
  //Use the correct selector to hide all <p> elements.
  $("#test").hide();
  //Use the correct selector to hide an element with id="test".
  $(".test").hide();
  //Use the correct selector to hide all elements with class="test".
  $("*").hide();
  //Use the correct selector to hide all elements in the document.
  $("[href]").hide();
  //Use the correct selector to hide all elements with an href attribute.
  $("tr:odd").hide();
  //Use the correct selector to hide all odd table rows in a table.
  $("p").click(function () {
    $(this).hide();
  });
  //Use the correct event to hide all <p> elements with a "click".
  $("p").dblclick(function () {
    $(this).hide();
  });
  //Use the correct event to hide all <p> elements with a "double-click".
  $("p").mouseenter(function () {
    $(this).hide();
  });
  //When the mouse pointer enters a <p> element, it should be hidden.
  $("input").keypress(function () {
    $(this).hide();
  });
  //f you press a keyboard key inside an <input> element, it should be hidden
  $("p").on("click", function () {
    $(this).hide();
  });
  //Use the on() method to attach a click event handler to all <p> elements.
  $("p").click(function () {
    $(this).hide();
  });
  //Use a jQuery method to hide a <p> element when it is clicked on.
  $("p").click(function () {
    $(this).hide("slow");
  });
  //Use a jQuery method to hide a <p> element when it is clicked on.
  $("button").click(function () {
    $("p").show();
  });
  //Use a jQuery method to show a <p> element.
  $("button").click(function () {
    $("p").toggle();
  });
  //Use a jQuery method to toggle between hiding and showing a <p> element.
  $("div").fadeOut();
  //Use a jQuery method to fade out a <div> element.
  $("div").fadeOut("slow");
  //Use a jQuery method to fade out a <div> element.
  $("div").fadeTo("slow", 0.2);
  //Use a jQuery method to fade a <div> element to an opacity of "0.2".
  $("button").click(function () {
    $("div").fadeToggle(1000);
  });
  //Use a jQuery method to toggle between fading in and out a <div> element, when clicking on a button.
  $("div").slideUp();
  //Use a jQuery method to slide up a <div> element.
  $("div").slideUp("slow");
  //Use a jQuery method to slide up a <div> element.
  $("div").slideDown();
  //Use a jQuery method to slide down a <div> element.
});

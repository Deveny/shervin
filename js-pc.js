$(document).ajaxStart(function() {
  $("#wait").css("display", "block");
});
$(document).ajaxComplete(function() {
  $("#wait").css("display", "none");
});

function modalClose() {
  $(document).click(function(event) {
    if (!$(event.target).closest(".drawing>img").length) {
      $("body")
        .find("#modal")
        .empty()
        .hide();
    }
  });
}
function openAll(a) {
  $(".column").scrollTop(0);
  $("#een, #drie").hide();
  $("#twee")
    .load(a + ".html")
    .css("width", "calc(100% - 6em)")
    .show();
}
function openThree(a) {
  $(".column").scrollTop(0);
  $("#drie")
    .load(a + ".html")
    .css("width", "50%")
    .show();
  $("#een")
    .load("index.html #drawing1")
    .css("width", "20%")
    .show();
  $("#twee")
    .load("index.html #letter")
    .css("width", "20%")
    .show();
}
function openTwo(a) {
  $(".column").scrollTop(0);
  $("#een")
    .load("loadinfo.html #" + a)
    .css("width", "20%")
    .show();
  $("#twee")
    .load("loads.html #" + a)
    .css("width", "20%")
    .show();
}
function openFull(b) {
  $(".column").scrollTop(0);
  $("#twee")
    .load("loads.html #" + b)
    .css("width", "50%")
    .show();
  $("#drie").hide();
  $("#een")
    .load("loadinfo.html #" + b)
    .css("width", "20%")
    .show();
}
function openTiny(b) {
  $(".column").scrollTop(0);
  $("#twee")
    .load("loads.html #" + b)
    .css("width", "20%")
    .show();
  $("#drie").hide();
  $("#een")
    .load("loadinfo.html #" + b)
    .css("width", "20%")
    .show();
}

function openMid(z) {
  $(".column").scrollTop(0);
  $("#twee")
    .load("loads.html #" + z)
    .css("width", "40%")
    .show();
  $("#drie").hide();
  $("#een")
    .css("width", "20%")
    .show();
}

$(document).ready(function() {
  $("h3 > a").click(function() {
    $(this)
      .parent("h3")
      .siblings("p")
      .toggle();
  });

  $(".dropbtn").click(function() {
    $("#arc").hide();
    $(this)
      .siblings(".dropdown-content")
      .toggle();
    $(this)
      .parent()
      .siblings()
      .children(".dropdown-content")
      .hide();
    $(this)
      .parent()
      .siblings()
      .children(".dropdown-content")
      .children("dropdown")
      .hide();
    $(this)
      .children("a")
      .addClass("dropped");
  });
  $(".topnav .dropbtn").click(function() {
    $(".sidenav").hide();
  });

  $(".topnav > a").click(function() {
    $(".side:visible").toggle();
  });
  $(".side > a").click(function() {
    $(this)
      .siblings()
      .children(".dropdown-content")
      .hide();
  });

  $("#naam").hover(
    function() {
      $("#bio").show();
      $("#naam").html("شروین شیخ رضائی");
    },
    function() {
      $("#bio").hide();
      $("#naam").html("SHERVIN SHEIKH REZAEI");
    }
  );

  $("a").click(function() {
    $(this).addClass("dropped");
    $("a")
      .not(this)
      .removeClass("dropped");
  });

  $("#arc").click(function() {
    $("#letter,.drawing").css("opacity", 0.5);
  });

  $(".drawing > img").click(function() {
    $("#modal").show();
    $("#modal").html('<img src="' + $(this).attr("src") + '" width="100%">');
    modalClose();
  });
});

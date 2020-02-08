$(document).ajaxStart(function() {
  $("#wait").css("display", "block");
});
$(document).ajaxComplete(function() {
  $("#wait").css("display", "none");
});

function openAll(a) {
  window.scrollTo(0, 0);
  $("#een, #drie").hide();
  $("#twee")
    .load(a + ".html")
    .show();
}
function openThree(a) {
  window.scrollTo(0, 0);
  $("#een")
    .load(a + ".html")
    .show();
  $("#drie")
    .load("index.html #drawing1")
    .show();
  $("#twee")
    .load("index.html #letter")
    .show();
}
function openTwo(a) {
  window.scrollTo(0, 0);
  $("#een")
    .load("loadinfo.html #" + a)
    .show();
  $("#twee")
    .load("loads.html #" + a)
    .show();
}
function openFull(b) {
  window.scrollTo(0, 0);
  $("#twee")
    .load("m-loads.html #" + b)
    .show();
  $("#drie").hide();
  $("#een")
    .load("loadinfo.html #" + b)
    .show();
}
function openTiny(b) {
  window.scrollTo(0, 0);
  $("#twee")
    .load("loads.html #" + b)
    .show();
  $("#drie").hide();
  $("#een")
    .load("loadinfo.html #" + b)
    .show();
}

function openMid(z) {
  $("#twee")
    .load("m-loads.html #" + z, function() {
      window.scrollTo(0, 400);
    })
    .show();
  $("#drie").hide();
  $("#een").show();
}

$(document).ready(function() {
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

  window.onscroll = function() {
    myScroll();
  };
  function myScroll() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      $(".nest").hide();
    }
  }
});

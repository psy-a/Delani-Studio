$("#design").click(function () {
    $("#deisgn-image").slideToggle(1000);
    $("#design-text").slideToggle(1200);
  });
  $(".click2").click(function () {
    $(".hide2").slideToggle(1000);
    $(".show2").slideToggle(1200);
  });
  $(".click3").click(function () {
    $(".hide3").slideToggle(1000);
    $(".show3").slideToggle(1200);
  });
  
  $(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#overlay1").show();
    }).mouseout(function(){
      $("#overlay").hide();
    });
    $("#work2").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
    $("#work3").mouseover(function(){
      $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
    $("#work4").mouseover(function(){
      $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
    $("#work5").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
    $("#work6").mouseover(function(){
      $("#overlay6").show();
    }).mouseout(function(){
      $("#overlay6").hide();
    });
    $("#work7").mouseover(function(){
      $("#overlay7").show();
    }).mouseout(function(){
      $("#overlay7").hide();
    });
    $("#work8").mouseover(function(){
      $("#overlay8").show();
    }).mouseout(function(){
      $("#overlay8").hide();
    });
  });
  
  $(document).ready(function(){
    $("form#mc-form").submit(function(event){
      // event.preventDefault();
      var name = $("input#NAME").val();
      var email = $("input#EMAIL").val();
      var message = $("textarea#MESSAGE").val();
      if (name && email){
        alert (name + ", we have received your message, thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and Email.");
      }
      
    });
  
  });
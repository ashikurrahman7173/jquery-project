
$(function(){

    $(".btn-danger").click(function(){
      $("body").css("background-color","#dc3545");
    });          

    $(".btn-success").click(function(){
      $("body").css("background-color","#28a745");
    });          

    $(".btn-primary").click(function(){
      $("body").css("background-color","#007bff");
    });          

    $(".btn-warning").click(function(){
      $("body").css("background-color","#ffc107");
    });          

    $(".btn-info").click(function(){
      $("body").css("background-color","#17a2b8");
    });  

});


$(function(){
  $("select").change(function(){

    var a= $("select").val();
    $("body").css("background-color",a);
  });


  $(function(){

    var a="";
    var In=$(".calcu");

    $(".one").click(function(){
      a += 1;
      In.val(a);
    });

    $(".tow").click(function(){
      a += 2;
      In.val(a);
    });

    $(".three").click(function(){
      a += 3;
      In.val(a);
    });

    $(".four").click(function(){
      a += 4;
      In.val(a);
    });

    $(".five").click(function(){
      a += 5;
      In.val(a);
    });

    $(".six").click(function(){
      a += 6;
      In.val(a);
    });

    $(".seven").click(function(){
      a += 7;
      In.val(a);
    });

    $(".eight").click(function(){
      a += 8;
      In.val(a);
    });

    $(".nine").click(function(){
      a += 9;
      In.val(a);
    });

    $(".zero").click(function(){
      a += 0;
      In.val(a);
    });

    $(".add").click(function(){
      a += "+";
      In.val(a);
    });

    $(".sub").click(function(){
      a += "-";
      In.val(a);
    });

    $(".mult").click(function(){
      a += "*";
      In.val(a);
    });

    $(".div").click(function(){
      a += "/";
      In.val(a);
    });

    $(".equal").click(function(){
      a = eval(In.val());
      In.val(a);
    });

  });

  $("p,h1").fadeOut(20000);


});


$(function(){
  $(".click").click(function(){

    var a = $(".result").val();
    if (a>=80){
      ("span").text("A+");

    } else if (a >= 70){
      
      $("span").text("A");

    }

    else if (a >= 50){
      
      $("span").text("B");

    }

    else if (a >= 33){
      
      $("span").text("C");

    }

    else{
      
      $("span").text("Faild");

    }

    


  });
});


$(function(){

  $(".multable").click(function(){

      var a = 10;
      var c = $(".multip").val();
      var b = "";


      for(x = 1; x <= a; x++){

          b += c + " x " + x + " = "+ c*x + " <br> ";


          $("h3").html(b);
        
      }







  });

  

});




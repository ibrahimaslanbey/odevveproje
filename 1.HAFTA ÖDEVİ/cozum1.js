// görev 1

$("#gorev1 > button").on("click", function () {

  for (i = 0; i < 3; i++) {
   
    var birinciliste = document.getElementById("gorev1");
    var li = document.createElement("li");
    var baslik1 = $("h2").eq(i).html();
    li.innerHTML = baslik1;
    birinciliste.appendChild(li);

  }
});
// görev 2

$("#gorev2 > button").on("click", function () {
  var h2adet = $('div h2').length;
  $("#gorev2 > input").val('Toplam (' + h2adet + ') adet  var.');
});


// görev 3
$("#gorev3 > button").on("click", function () {

  var basliklar = $("h1").html();

  $("#gorev3 > input").val(basliklar);
});
// görev 4
$("#gorev4 > button").on("click", function () {
  for (i = 0; i < 15; i++) {

    var ilkpar = $("p").eq(i).html().length;
    $("h2").eq(i).append(" ( Toplam Karakter : ", ilkpar, ")");
  }
});

// görev 5
$("#gorev5 > button").on("click", function () {

  $("h1").css("color", "red");
  $("h2:even").css("color", "blue");
  $("h2:odd").css("color", "orange");
});

// görev 6

$("#gorev6 > button").on("click", function () {

  $("p").eq(0).fadeOut();

});

// görev 7

$("#gorev7 > button").on("click", function () {

  for (i = 0; i < 2; i++) {
    var yedinciliste = document.querySelector("#gorev7 > ul");
    var li = document.createElement("li");
    var baslik1 = $("h2:contains('can')").eq(i).html();
    li.innerHTML = baslik1;
    yedinciliste.appendChild(li);

  }
});

// görev 8

$("#gorev8 > button").on("click", function () {

  $("p").eq(0).fadeIn();
  $("article  >  div   > h2").eq(0).html("Lorem");
  $("article  >  div   > p").eq(0).load("lorem.html");
});

// görev 9

$("h1 , h2").hover(function () {

  var suan = $(this).html();
  $("#gorev9 > input").val(suan);
}, function () {
  $("#gorev9 > input").val(" ");
});





// görev 10
$("#gorev10 > button").on("click", function () {

  var yenikare = document.createElement("div");
  var son = document.querySelector("#gorev10");

  son.appendChild(yenikare);
  $("#gorev10 > div")
    .css("width", "100px")
    .css("height", "100px")
    .css("color", "blue")
    .css("background", "url(check.png)")
    .css("background-size", "100px 100px")
    .css("position", "fixed")
    .css("bottom", "0")
    .css("right", "0");



});


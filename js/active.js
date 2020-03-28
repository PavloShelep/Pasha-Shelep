$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(function() {
    $('#toggle-event').change(function() {
      if (document.getElementById('toggle-event').checked) {
        document.body.style.backgroundColor = "#FFFFFF";
        var elements = document.querySelectorAll(".allText");
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.color = "#1a1a1a";
        }
      }
      else{
        document.body.style.backgroundColor = "#1a1a1a";
        var elements = document.querySelectorAll(".allText");
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.color = "#FFFFFF";
        }
      }
    })
  })

function checkData() {

  var dataArr = document.querySelectorAll(".data");
  var photoArr = document.querySelectorAll(".checkin");

  for (var i = 0; i < dataArr.length; i++) {
    if(dataArr[i].value ==null || dataArr[i].value ==undefined || dataArr[i].value.trim() == "")
      photoArr[i].src = "img/false.png";
    else {
      if (i==3) {
        if(dataArr[i].value.slice(-10)=="@gmail.com" && dataArr[i].value.length >10)
          photoArr[i].src = "img/true.png";
        else
          photoArr[i].src = "img/false.png";
      }
      else if (i==2) {
        if(dataArr[i].value.substring(3,0)=="380" && dataArr[i].value.length==12)
          photoArr[i].src = "img/true.png";
        else
          photoArr[i].src = "img/false.png";
      }
      else
          photoArr[i].src = "img/true.png";
    }
  }
}


document.getElementById("send").addEventListener("click", function(){
  alert("hello");
  var dataArr = document.querySelectorAll(".data");
  for (var i = 0; i < dataArr.length; i++) {
    dataArr[i].value= "";
  }
  checkData();
});

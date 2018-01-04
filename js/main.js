var searchContent = "";
var number = 12;

function  overlay(i) {
  $('#'+i).on('click',  () => {
    $("#" +(number+i)+ ", .overlay-back").fadeIn(500);
  });
  if (i>1) {
  $("#"+(i+number*2)).on("click", () => {
    $(".overlay, .overlay-back").hide();
    $("#" +(i+number-1)+ ", .overlay-back").fadeIn(500);
  });
} else {
  $("#"+(i+number*2)).hide();
}
  if (i<number) {
  $("#"+(i+number*3)).on("click", () => {
    $(".overlay, .overlay-back").hide();
    $("#" +(i+number+1)+ ", .overlay-back").fadeIn(500);
  });
} else {
  $("#"+(i+number*3)).hide();
}
}


function overlayAll() {
for (var i = 1; i <=number; i++) {
  overlay(i);
  }
}

$( document ).ajaxComplete( () => {
  overlayAll();
  $(".close-btn").on("click", () => {
    $(".overlay, .overlay-back").hide();
  })


});

$(".user-search").on("keyup change", () => {
  for (let i = 1; i<=number; i++) {
    var $input = $(".user-search").val().toUpperCase();
    var name =$("#"+(i+number*4)).text().toUpperCase();
    if(name.toUpperCase().indexOf($input) > -1) {
      $("#"+i).show();
    } else {
      $("#"+i).hide();
    }
  }
})





for(let i = 1; i<=number; i++) {
$.ajax({
  url: 'https://randomuser.me/api/?nat=gb',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    $("#user-list").append("<option value=\"" +data.results[0].name.first.toUpperCase() + " " +data.results[0].name.last.toUpperCase()+"\">");
    $(".directory-div").append(`
      <div class= "employee-div" id="${i}">
        <img src="${data.results[0].picture.medium}">
        <div class= "employee-text">
          <h2 class="capitalize" id="${number*4+i}">${data.results[0].name.first} ${data.results[0].name.last}</h2>
          <p>${data.results[0].login.username}</p>
          <p class="capitalize">${data.results[0].location.city} </p>
        </div>
      </div>
      <div class="overlay" id="${number+i}">
        <div class="close-btn">X</div>
        <img src="${data.results[0].picture.medium}">
        <div class= "overlay-text">
          <h2 class="capitalize" >${data.results[0].name.first} ${data.results[0].name.last}</h2>
          <p>${data.results[0].login.username}</p>
          <p>${data.results[0].email}</p>
        </div>
        <div class= "overlay-text-contact">
          <p>${data.results[0].phone}</p>
          <p class="capitalize">${data.results[0].location.street}, ${data.results[0].location.city}, ${data.results[0].location.postcode}</p>
          <p>Birthday: ${data.results[0].dob}</p>
          <button class="previous" id="${number*2+i}">Previous</button>
          <button class="next" id="${number*3+i}">Next</button>
        </div>
      `);
    }
  });
}

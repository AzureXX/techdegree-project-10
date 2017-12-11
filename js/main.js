var searchContent = "";

for(let i = 1; i<=12; i++) {
$.ajax({
  url: 'https://randomuser.me/api/?nat=gb',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    $("#user-list").append("<option value=\"" +data.results[0].name.first + " " +data.results[0].name.last+"\">");
    $(".directory-div").append(`
      <div class= "employee-div" id="${i}">
        <img src="${data.results[0].picture.medium}">
        <div class= "employee-text">
          <h2 class="capitalize">${data.results[0].name.first} ${data.results[0].name.last}</h2>
          <p>${data.results[0].email}</p>
          <p class="capitalize">${data.results[0].location.city} </p>
        <div class="overlay">
          <div class="close-btn">X</div>
          <img src="${data.results[0].picture.medium}">
          <div class= "overlay-text">
            <h2 class="capitalize">${data.results[0].name.first} ${data.results[0].name.last}</h2>
            <p>${data.results[0].email}</p>
            <p class="capitalize">${data.results[0].location.city}</p>
          </div>
          <div class= "overlay-text-contact">
            <p>${data.results[0].phone}</p>
            <p>${data.results[0].location.street}, ${data.results[0].location.state}, ${data.results[0].location.postcode}</p>
            <p>Birthday: ${data.results[0].dob}</p>
          </div>
      </div>
      `);
    }
  });
}

function  overlay(i) {
  $('#'+i).on('click',  () => {
    $("#" +i+ " .overlay, .overlay-back").fadeIn(500);
  });
}

function overlayAll() {
for (var i = 1; i <=12; i++) {
  overlay(i);
  }
}

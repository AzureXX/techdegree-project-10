$('.employee-div').on('click', function () {
    $('.overlay, .overlay-back').fadeIn(500);
});

function getUserInfo(id) {
$.ajax({
  url: 'https://randomuser.me/api/?nat=gb',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    $(".directory-div").append(`
      <div class= "employee-div" id="${id}">
      <img src="4.jpg">
      <div class= "employee-text">
        <h2 class="capitalize">${data.results[0].name.first} ${data.results[0].name.last}</h2>
        <p>${data.results[0].email}</p>
        <p class="capitalize">${data.results[0].location.city} </p>
        <div class="overlay">
          <div class="close-btn">X</div>
          <img src="4.jpg">
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
      `)
  }
});
};



for(let i = 1; i<=12; i++) {
  var id = i;
  getUserInfo(id)
}

$('#1').on('click', function () {
    $('.overlay, .overlay-back').fadeIn(500);
    alert("It do work");
});

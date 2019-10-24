console.log('Array of House Objects');

var houses = [
  {
  name  : 'Karori, 4 bedrooms',
  address : 'Karori, Wellington',
  rent  : 190,
  bedroom : 4,
  bathroom  : 2,
  parking : 'yes',
  furnishing  : 'yes',
  couple  : 'no',
  availability  : '13 Nov 2019',
  photo : 'images/house1.jpg'
  },

  {
  name  : 'Te Aro, 3 bedrooms',
  address : 'Te Aro, Wellington',
  rent  : 240,
  bedroom : 3,
  bathroom  : 1,
  parking : 'yes',
  furnishing  : 'yes',
  couple  : 'yes',
  availability  : '21 Oct 2019',
  photo : 'images/house2.jpg'
  },

  {
  name  : 'Wellington Central, 4 bedrooms',
  address : 'Cuba Street, Wellington Central',
  rent  : 300,
  bedroom : 4,
  bathroom  : 2,
  parking : 'no',
  furnishing  : 'yes',
  couple  : 'yes',
  availability  : '02 Nov 2019',
  photo : 'images/house3.jpg'
  },

  {
  name  : 'Newtown, 3 bedrooms',
  address : 'Newtown, Wellington',
  rent  : 200,
  bedroom : 3,
  bathroom  : 1,
  parking : 'no',
  furnishing  : 'no',
  couple  : 'no',
  availability  : '03 Nov 2019',
  photo : 'images/house4.jpg'
  },

  {
  name  : 'Mount Victoria, 3 bedrooms',
  address : 'Mount Victoria, Wellington',
  rent  : 204,
  bedroom : 3,
  bathroom  : 1,
  parking : 'no',
  furnishing  : 'no',
  couple  : 'no',
  availability  : '19 Nov 2019',
  photo : 'images/house5.jpg'
  },

  {
  name  : 'Newlands, 3 bedrooms',
  address : 'Newlands, Wellington',
  rent  : 180,
  bedroom : 3,
  bathroom  : 1,
  parking : 'no',
  furnishing  : 'no',
  couple  : 'no',
  availability  : '21 Oct 2019',
  photo : 'images/house6.jpg'
  },

  {
  name  : 'Kilbirnie, 3 bedrooms',
  address : 'Kilbirnie, Wellington',
  rent  : 220,
  bedroom : 3,
  bathroom  : 1,
  parking : 'no',
  furnishing  : 'yes',
  couple  : 'no',
  availability  : '03 Nov 2019',
  photo : 'images/house7.jpg'
  },

  {
  name  : 'Newlands, 3 bedrooms',
  address : 'Newlands, Wellington',
  rent  : 180,
  bedroom : 3,
  bathroom  : 1,
  parking : 'no',
  furnishing  : 'no',
  couple  : 'no',
  availability  : '21 Oct 2019',
  photo : 'images/house8.jpg'
  },

  {
  name  : 'Island Bay,  bedroom',
  address : 'Island Bay, Wellington',
  rent  : 330,
  bedroom : 1,
  bathroom  : 1,
  parking : 'yes',
  furnishing  : 'no',
  couple  : 'no',
  availability  : '16 Oct 2019',
  photo : 'images/house9.jpg'
  },

  {
  name  : 'Newlands, 2 bedrooms',
  address : 'Newlands, Wellington',
  rent  : 295,
  bedroom : 2,
  bathroom  : 1,
  parking : 'yes',
  furnishing  : 'no',
  couple  : 'no',
  availability  : '02 Nov 2019',
  photo : 'images/house10.jpg'
  }

];

function allHouses(){
for (var i=0; i<houses.length; i++) {
  document.getElementById('result').innerHTML
   += '<div class="col-4">'
   + '</br><div class="card" style="width: 23rem;">'
   + '<img class="img-thumbnail imgSize" src=" ' + houses[i].photo + ' " alt="House"/>'
   + '<div class="card-body">'
   + '<h3 class="card-title text-danger">' + houses[i].name + '</h3>'
   + '<h5> Address:  ' + houses[i].address + ' </h5>'
   + '<h5> Rent / week : $' + houses[i].rent + ' </h5>'
   + '<h5> Bedrooms :  ' + houses[i].bedroom + ' </h5>'
   + '<h5> Bathrooms :  ' + houses[i].bathroom + ' </h5>'
   + '<h5> Parking :  ' + houses[i].parking + ' </h5>'
   + '<h5> Furnishing :  ' + houses[i].furnishing + ' </h5>'
   + '<h5> Couple :  ' + houses[i].couple + ' </h5>'
   + '<h5> Availability :  ' + houses[i].availability + ' </h5>'
   + '</div>'
   + '</div>'
   + '</div>'
   + '</div>';

 }
}

document.getElementById('showCouple').addEventListener('click', function(){
  document.getElementById('result').innerHTML = '';
  for (var i = 0; i < houses.length; i++) {
    if (houses[i].couple === "yes") {
      document.getElementById('result').innerHTML
      += '<div class="col-4">'
      + '</br><div class="card" style="width: 23rem;">'
      + '<img class="img-thumbnail imgSize" src=" ' + houses[i].photo + ' " alt="House"/>'
      + '<div class="card-body">'
      + '<h3 class="card-title text-danger">' + houses[i].name + '</h3>'
      + '<h5> Address:  ' + houses[i].address + ' </h5>'
      + '<h5> Rent / week : $' + houses[i].rent + ' </h5>'
      + '<h5> Bedrooms :  ' + houses[i].bedroom + ' </h5>'
      + '<h5> Bathrooms :  ' + houses[i].bathroom + ' </h5>'
      + '<h5> Parking :  ' + houses[i].parking + ' </h5>'
      + '<h5> Furnishing :  ' + houses[i].furnishing + ' </h5>'
      + '<h5> Couple :  ' + houses[i].couple + ' </h5>'
      + '<h5> Availability :  ' + houses[i].availability + ' </h5>'
      + '</div>'
      + '</div>'
      + '</div>'
      + '</div>';
    }
  }
});

document.getElementById('showParking').addEventListener('click', function(){
  document.getElementById('result').innerHTML = '';
  for (var i = 0; i < houses.length; i++) {
    if (houses[i].parking === "yes") {
      document.getElementById('result').innerHTML
      += '<div class="col-4">'
      + '</br><div class="card" style="width: 23rem;">'
      + '<img class="img-thumbnail imgSize" src=" ' + houses[i].photo + ' " alt="House"/>'
      + '<div class="card-body">'
      + '<h3 class="card-title text-danger">' + houses[i].name + '</h3>'
      + '<h5> Address:  ' + houses[i].address + ' </h5>'
      + '<h5> Rent / week : $' + houses[i].rent + ' </h5>'
      + '<h5> Bedrooms :  ' + houses[i].bedroom + ' </h5>'
      + '<h5> Bathrooms :  ' + houses[i].bathroom + ' </h5>'
      + '<h5> Parking :  ' + houses[i].parking + ' </h5>'
      + '<h5> Furnishing :  ' + houses[i].furnishing + ' </h5>'
      + '<h5> Couple :  ' + houses[i].couple + ' </h5>'
      + '<h5> Availability :  ' + houses[i].availability + ' </h5>'
      + '</div>'
      + '</div>'
      + '</div>'
      + '</div>';
    }
  }
});


document.getElementById('bedroomSelect').addEventListener('click', function(){
  document.getElementById('result').innerHTML = '';
  var x = document.getElementById('bedroomSelect').value;
  console.log(typeof(x));

  switch (x) {
    case 'one' :
    checkDisplay('1');
    break;

    case 'two' :
    checkDisplay('2');
    break;

    case 'three' :
    checkDisplay('3');
    break;

    case 'four' :
    checkDisplay('4');
    break;

    default:
    break;
  }

console.log(x);
});



function checkDisplay(roomNumber){
  console.log(roomNumber);
  for (var i = 0; i < houses.length; i++){
    if (houses[i].bedroom === roomNumber) {
      displayRoom(i);
    console.log(house[i].bedroom);
    }
  }
}




function displayRoom(j){
  document.getElementById('result').innerHTML
//  += '<div class="row">'
  += '<div class="col-4">'
  + '</br><div class="card" style="width: 23rem;">'
  + '<img class="img-thumbnail imgSize" src=" ' + houses[i].photo + ' " alt="House"/>'
  + '<div class="card-body">'
  + '<h3 class="card-title text-danger">' + houses[i].name + '</h3>'
  + '<h5> Address:  ' + houses[i].address + ' </h5>'
  + '<h5> Rent / week : $' + houses[i].rent + ' </h5>'
  + '<h5> Bedrooms :  ' + houses[i].bedroom + ' </h5>'
  + '<h5> Bathrooms :  ' + houses[i].bathroom + ' </h5>'
  + '<h5> Parking :  ' + houses[i].parking + ' </h5>'
  + '<h5> Furnishing :  ' + houses[i].furnishing + ' </h5>'
  + '<h5> Couple :  ' + houses[i].couple + ' </h5>'
  + '<h5> Availability :  ' + houses[i].availability + ' </h5>'
  + '</div>'
  + '</div>'
  + '</div>'
  + '</div>';
  console.log(house[i].bedroom);
}





document.getElementById('showHouses').addEventListener('click', function(){
  allHouses();
});

console.log('Array of House Objects');

var houses = [
  {
  name  : 'Karori, 4 bedrooms',
  address : 'Karori, Wellington',
  rent  : 190,
  bedroom : 4,
  bathroom  : 2,
  parking : true,
  furnishing  : true,
  couple  : false,
  availability  : '13 Nov 2019',
  photo : 'images/house1.jpg'
  },

  {
  name  : 'Te Aro, 3 bedrooms',
  address : 'Te Aro, Wellington',
  rent  : 240,
  bedroom : 3,
  bathroom  : 1,
  parking : true,
  furnishing  : true,
  couple  : true,
  availability  : '21 Oct 2019',
  photo : 'images/house2.jpg'
  },

  {
  name  : 'Wellington Central, 4 bedrooms',
  address : 'Cuba Street, Wellington Central',
  rent  : 300,
  bedroom : 4,
  bathroom  : 2,
  parking : false,
  furnishing  : true,
  couple  : true,
  availability  : '02 Nov 2019',
  photo : 'images/house3.jpg'
  },

  {
  name  : 'Newtown, 3 bedrooms',
  address : 'Newtown, Wellington',
  rent  : 200,
  bedroom : 3,
  bathroom  : 1,
  parking : false,
  furnishing  : false,
  couple  : false,
  availability  : '03 Nov 2019',
  photo : 'images/house4.jpg'
  }


];

function allHouses(){
for (var i=0; i<houses.length; i++) {
  document.getElementById('houses').innerHTML
   += '</br><div class="card" style="width: 18rem;">'
   + '<img class="img-thumbnail" src=" ' + houses[i].photo + ' " alt="House"/>'
   + '<div class="card-body">'
   + '<h5 class="card-title">' + houses[i].name + '</h5>'
   + '</br> Address: <p> ' + houses[i].address + ' </p>'
   + '</br> Rent / week : <p> ' + houses[i].rent + ' </p>'
   + '</br> Bedrooms : <p> ' + houses[i].bedroom + ' </p>'
   + '</br> Bathrooms : <p> ' + houses[i].bathroom + ' </p>'
   + '</br> Parking : <p> ' + houses[i].parking + ' </p>'
   + '</br> Furnishing : <p> ' + houses[i].furnishing + ' </p>'
   + '</br> Couple : <p> ' + houses[i].couple + ' </p>'
   + '</br> Availability : <p> ' + houses[i].availablity + ' </p>'
   + '</div>'
   + '</div>';
}
}

document.getElementById('showHouses').addEventListener('click', function(){
  allHouses();
});

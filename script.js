let divElement = document.getElementById("map");
const btnElement = document.getElementById("btn");
//var src = document.getElementById("map").src = "https://maps.google.com/maps?q=18.6040504, 73.7830746&output=embed"
const remove = document.getElementById("remove");
btnElement.addEventListener('click',function getLocation(){
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    divElement.innerHTML = "Geolocation is not supported by this browser.";
  }


})

function showPosition(position) {
//   divElement.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude;
localStorage.setItem("lat",position.coords.latitude)
localStorage.setItem("long",position.coords.longitude)
let lat = localStorage.getItem("lat");
let long = localStorage.getItem("long");
// console.log(lat)
// console.log(long)
divElement.innerHTML = 
     `<iframe src="https://maps.google.com/maps?q=${lat}, ${long}&z=15&output=embed" width="700" height="450" frameborder="5" style="border:0"></iframe>`


}
function removeLocation(){
    localStorage.removeItem("lat");
    localStorage.removeItem("long");
}
remove.addEventListener("click",removeLocation)
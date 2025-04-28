//creates map and display user location
function initMap()
{
    //get user current location
    navigator.geolocation.getCurrentPosition(function(position)
    {
        //makes user location varible and gets the coordinates for it
        let userLocation =
        {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }

        //creays tje map
        let map = new google.maps.Map(document.getElementById('map'),
        {
            zoom: 15, //sets zoom
            center: userLocation //sets center to userlocatoin
        })

        //creates marker
        new google.maps.Marker(
            {
                position: userLocation, //sets userlocation for the marker
                map: map,//sets the map to map
                title: "Your Location"
            }
        )
    })
}
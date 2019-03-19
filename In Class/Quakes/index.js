import { getJSON, getLocation, test } from './utilities.js';

const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02';

document.getElementById('button').addEventListener('click', buttonClick);


function buttonClick(){
   
   let location = getLocation();
   location.then(function(response){
      console.log(response.coords.longitude);
   })
}
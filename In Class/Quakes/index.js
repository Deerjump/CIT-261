import { getJSON, getLocation, test } from './utilities.js';

const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02';

document.getElementById('button').addEventListener('click', buttonClick);


async function buttonClick(){
   let location = await getLocation();  
   location.resolve();
   let locationJSON = JSON.stringify(location);
   console.log(locationJSON);
}

let promise = test();

promise.then((message) =>{
   console.log('This is in the then ' + message)
}).catch((messge) => {
   console.log('This is in the catch ' + message)
})


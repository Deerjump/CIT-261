import {getJSON, getLocation} from './utilities.js';

const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02';

let location = getLocation();

document.getElementById('button').addEventListener('click', buttonClick());

export function buttonClick(){
   console.log('why');
}
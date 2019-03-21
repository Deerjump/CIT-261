export default class QuakesView{
   renderQuakeList(quakeList, listElement) {
      //build a list of the quakes.
      //include the title and time of each quake then append the list to listElement. 
      //You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
      console.log(quakeList);
      listElement.innerHTML = "";
      for(let item of quakeList){
         let ul = listElement;
         let li = document.createElement("li");
         let h4 = document.createElement('h2');
         let p = document.createElement('p');
         let myDate = new Date(item.properties.time)
         let att = document.createAttribute('data-id');
         att.value = item.id;

         h4.appendChild(document.createTextNode(item.properties.place));
         p.appendChild(document.createTextNode(myDate.toLocaleString()));
         li.appendChild(h4);
         li.appendChild(p);
         li.setAttributeNode(att);
         ul.appendChild(li);
      }
   }
   renderQuake(quake, element) {
      const quakeProperties = Object.defineProperties(quake.properties);
      // for the provided quake make a list of each of the properties associated with it. Then append the list to the provided element. Notice the first line of this method. Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier! 
   }
}
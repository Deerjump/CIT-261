export function getJSON(url){
   return fetch(url)
      .then(function(response){
         return response.json();
      })
}

export const getLocation = function(options) {
   return new Promise(function(resolve, reject){
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
   });
};


export const test = function() {
   let p = new Promise((resolve, reject) => {
      let a = 1 + 2
      if (a==2) {
         resolve('Success')
      } else {
         reject ('Failed')
      }
   })
   return p;
}
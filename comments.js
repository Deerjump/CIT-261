export default class Comments {
   constructor(type){
      this.type = type;
   }

   getComments(q = null){
      //get comments of same type
      // const array = window.localStorage.getItem(this.type);
      // let results = [];
      // //if q isset, filter comments by q

      const comments = JSON.parse(window.localStorage.getItem(this.type));
      if(q != null){
         return comments.filter(comment => comment.name == q);
      }




      // if(!q == null){
         // for(let i = 0; i < array.length; i++ ){
            // if(array[i].name == q){
               // results.push(res)
            // }
         // }
      //return results
      // }
      return comments;
   }

   addComment(value) {
      const comments = window.localStorage.getItem(this.type);
      if (comments == null){
         comments = [];
      }
      
      comments.push(value);


      window.localStorage.setItem(this.type, JSON.stringify(comments));
   }

   renderComments(parent, comments){

   }
}


let comments = new Comment();
comments.getComments();
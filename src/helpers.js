
//function that ensures we don't send too many http requests
// waits 1 second after the user finishes typing to send one

//first param is a func, EXPLAIN LATER
//second param is wait time
//if force is set to true it will update no mater what
export default function debounce(updateFunc, awaitTime, force){
    var doc,e;

    return function(){
      function h(){
        doc=null;
        force||(e=updateFunc.apply(this,arguments));
      }
      return (clearTimeout(doc),doc=setTimeout(h,awaitTime),force&&!doc&&(e=updateFunc.apply(this,arguments)),e)
    }
  }
  
  //remove the html tags so the string can be displayed
  export function removeHTMLTags (str) {
    return str.replace(/<[^>]*>?/gm, '');
  };
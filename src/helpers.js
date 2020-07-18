
//function that ensures we don't send too many http requests
// waits 1 second after the user finishes typing to send one
export default function debounce(a,b,c){
    var doc,e;

    return function(){
      function h(){
        doc=null;
        c||(e=a.apply(this,arguments));
      }
      return (clearTimeout(doc),doc=setTimeout(h,b),c&&!doc&&(e=a.apply(this,arguments)),e)
    }
  }
  
  //remove the html tags so the string can be displayed
  export function removeHTMLTags (str) {
    return str.replace(/<[^>]*>?/gm, '');
  };
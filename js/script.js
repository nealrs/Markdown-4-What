$( document ).ready(function() {

    var uc = $(".userContent");
    var ci = $(".commentable_item");
    /*marked.setOptions({
        gfm: true,
        tables: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
    });*/

    for (var x=0; x < uc.length; x++){
      i = uc[x].innerHTML.replace(/<br\s*[\/]?>/gi, "\n");
      uc[x].innerHTML = marked(i);
    }

    for (var y=0; y < ci.length; y++){
      j = ci[y].innerHTML.replace(/<br\s*[\/]?>/gi, "\n");
      ci[y].innerHTML = marked(j);
    }
    //\\(\*\*)+([^.*?$]+)+(\*\*) // for later...



});

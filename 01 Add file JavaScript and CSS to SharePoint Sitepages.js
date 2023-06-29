function get_File_JavaScript(url){
    let scriptTag = document.createElement("script");
    scriptTag.src = url;
    
    scriptTag.onload = function () {
        console.log('onLoad url: ' + url);
    };
    
    let headTag = document.getElementsByTagName("head")[0] || document.documentElement;
    headTag.appendChild(scriptTag);
}

function get_File_CSS(url){
    let link = document.createElement("link");
    link.href = url;
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";

    let headTag = document.getElementsByTagName("head")[0] || document.documentElement;
    headTag.appendChild(link);
}

/*
// Bootrap 4.6.2
// JQuery 3.5.1
var js1 = 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js';
var js2 = 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js';

var css1 = 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css';


get_File_JavaScript(js1);
get_File_JavaScript(js2);

get_File_CSS(css1);

// clear "Content"
$('article').html('');
*/

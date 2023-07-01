var SDR_JS_Version = '2023-07-01 0833';

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

function get_File_JavaScript_module(url){
    let scriptTag = document.createElement("script");
    scriptTag.src = url;
    scriptTag.type = 'module';
    
    scriptTag.onload = function () {
        console.log('onLoad url [module]: ' + url);
    };
    
    let headTag = document.getElementsByTagName("head")[0] || document.documentElement;
    headTag.appendChild(scriptTag);
}

/*
// JQuery 3.5.1
var js = 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js';

get_File_JavaScript(js);

// show version of Jquery
$().jquery;

// clear "Content"
$('article').html('');

// AJAX to SharePoint Online
var url = 'https://platform365.sharepoint.com';
var requestHeaders = {
            "accept": "application/json;odata=verbose"
//          , "content-type": "application/json;odata=verbose"
};

var params = {};
var param = JSON.stringify(params);

$.ajax({
    url: url
    , method: "GET"
    , headers: requestHeaders
    , "content-type": "application/json;odata=verbose"
    //, data: param
    , datatype: "json"
    , success: function (result){
        console.log(result);
    }
    , async: false
});

// Bootrap 4.6.2
var js = 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js';
var css = 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css';

get_File_JavaScript(js);
get_File_CSS(css);

var js = 'https://unpkg.com/@fluentui/web-components@2.5.15/dist/web-components.min.js';

get_File_JavaScript_module(js);

*/

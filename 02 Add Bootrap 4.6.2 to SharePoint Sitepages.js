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

var str_Boostrap_NavBar = `
                        <div class="container">
                            <nav class="navbar navbar-light bg-light">
                                <form class="form-inline">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </nav>
                        </div>
                        `;
                        
$('article').append(str_Boostrap_NavBar);

// https://www.w3schools.com/bootstrap4/bootstrap_tables.asp

var str_Boostrap_Table = `
                        <div class="container">
                            <h2>Striped Rows</h2>
                            <p>The .table-striped class adds zebra-stripes to a table:</p>            
                            <table class="table table-hover table-bordered table-striped" id="id_Bootrap_Table">
                            <thead>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>john@example.com</td>
                                </tr>
                                <tr>
                                    <td>Mary</td>
                                    <td>Moe</td>
                                    <td>mary@example.com</td>
                                </tr>
                                <tr>
                                    <td>July</td>
                                    <td>Dooley</td>
                                    <td>july@example.com</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
				`;
                
$('article').append(str_Boostrap_Table);
*/

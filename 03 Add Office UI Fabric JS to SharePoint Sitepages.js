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
// Office UI Fabric 1.4.0
var js1 = 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/1.4.0/js/fabric.min.js';

var css1 = 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/1.4.0/css/fabric.min.css';
var css2 = 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/1.4.0/css/fabric.components.min.css';

get_File_JavaScript(js1);

get_File_CSS(css1);
get_File_CSS(css2);

var jsJQuery = 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js';

get_File_JavaScript(jsJQuery);

// clear "Content"
$('article').html('');

var peoplePicker = `
                    <div class="ms-PeoplePicker">
                      <div class="ms-PeoplePicker-searchBox">
                        <div class="ms-TextField ms-TextField--textFieldUnderlined">
                          <input class="ms-TextField-field" type="text" value="" placeholder="Select or enter an option">
                        </div>
                      </div>
                      <div class="ms-PeoplePicker-results">
                        <div class="ms-PeoplePicker-resultGroup">
                          <div class="ms-PeoplePicker-resultGroupTitle">
                            Contacts
                          </div>
                          <div class="ms-PeoplePicker-result" tabindex="1">
                            <div class="ms-Persona ms-Persona--sm">
                              <div class="ms-Persona-imageArea">
                                <div class="ms-Persona-initials ms-Persona-initials--blue">RM</div>
                              </div>
                              <div class="ms-Persona-presence">
                              </div>
                              <div class="ms-Persona-details">
                                <div class="ms-Persona-primaryText">Russel Miller</div>
                                <div class="ms-Persona-secondaryText">Sales</div>
                              </div>
                            </div>
                            <button class="ms-PeoplePicker-resultAction">
                              <i class="ms-Icon ms-Icon--Clear"></i>
                            </button>
                          </div>
                          <div class="ms-PeoplePicker-result" tabindex="1">
                            <div class="ms-Persona ms-Persona--sm">
                              <div class="ms-Persona-imageArea">
                                <div class="ms-Persona-initials ms-Persona-initials--purple">DF</div>
                              </div>
                              <div class="ms-Persona-presence">
                              </div>
                              <div class="ms-Persona-details">
                                <div class="ms-Persona-primaryText">Douglas Fielder</div>
                                <div class="ms-Persona-secondaryText">Public Relations</div>
                              </div>
                            </div>
                            <button class="ms-PeoplePicker-resultAction">
                              <i class="ms-Icon ms-Icon--Clear"></i>
                            </button>
                          </div>
                          <div class="ms-PeoplePicker-result" tabindex="1">
                            <div class="ms-Persona ms-Persona--sm">
                              <div class="ms-Persona-imageArea">
                                <div class="ms-Persona-initials ms-Persona-initials--black">GS</div>
                              </div>
                              <div class="ms-Persona-presence">
                              </div>
                              <div class="ms-Persona-details">
                                <div class="ms-Persona-primaryText">Grant Steel</div>
                                <div class="ms-Persona-secondaryText">Sales</div>
                              </div>
                            </div>
                            <button class="ms-PeoplePicker-resultAction">
                              <i class="ms-Icon ms-Icon--Clear"></i>
                            </button>
                          </div>
                          <div class="ms-PeoplePicker-result" tabindex="1">
                            <div class="ms-Persona ms-Persona--sm">
                              <div class="ms-Persona-imageArea">
                                <div class="ms-Persona-initials ms-Persona-initials--green">HW</div>
                              </div>
                              <div class="ms-Persona-presence">
                              </div>
                              <div class="ms-Persona-details">
                                <div class="ms-Persona-primaryText">Harvey Wallin</div>
                                <div class="ms-Persona-secondaryText">Public Relations</div>
                              </div>
                            </div>
                            <button class="ms-PeoplePicker-resultAction">
                              <i class="ms-Icon ms-Icon--Clear"></i>
                            </button>
                          </div>
                        </div>
                        <button class="ms-PeoplePicker-searchMore">
                          <div class="ms-PeoplePicker-searchMoreIcon">
                            <i class="ms-Icon ms-Icon--Search"></i>
                          </div>
                          <div class="ms-PeoplePicker-searchMoreText">
                            Search my groups
                          </div>
                        </button>
                      </div>
                    </div>
`;

$('article').append(peoplePicker);

*/

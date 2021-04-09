var langID;
var BaseUrl = "https://codequotient.com/api/";
var writtenCode;
var langSelector, compileButton, codeEditor, outputBox;

function initFunction(){
    langSelector = document.getElementById("langSelector");
    compileButton = document.getElementById("compileButton");
    codeEditor = ace.edit("editor");
    outputBox = document.getElementById("outputBox");

    setLanguageId();
    setCode();
    sendCode();
}
function setLanguageId(){
    var langName = langSelector.value;
    switch (langName) {
        case "Java":
            langID = "8";
            break;
        case "JavaScript":
            langID = "4";
            break;
        case "C":
            langID = "7";
            break;
        case "CPP":
            langID = "77";
            break;
        default:
            langID = "0";
            break;
    }
    //console.log(langID);
}

function setCode(){
    writtenCode = codeEditor.getValue();
    //console.log(writtenCode);
}

function sendCode(){
    var urlToSend = BaseUrl + "executeCode";
    var objectToSend = {code: writtenCode, langId: langID};

    //Ajax
    var request = new XMLHttpRequest();
    request.open("POST", urlToSend);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(objectToSend));

    request.addEventListener("load", function(){
        var response = request.responseText;
        console.log(response);
    })
}
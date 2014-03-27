// JavaScript Document

function getLocalStorage() {
    try {
        if( !! window.localStorage ) return window.localStorage;
        else return undefined;
    } catch(e) {
        return undefined;
    }
}

function getSessionStorage() {
    try {
        if( !! window.sessionStorage ) return window.sessionStorage;
        else return undefined;
    } catch(e) {
        return undefined;
    }
}

var db_user = getLocalStorage() || dispError('Local Storage not supported.');
var db_server = getLocalStorage() || dispError('Local Storage not supported.');
var db_question = getSessionStorage() || dispError('Session Storage not supported.');

var element = function(id) { return document.getElementById(id); }
var errorMessage = undefined;


/* Check if user variables have been entered
if (!db_user.getItem('fullname') || !db_user.getItem('mobilenumber') || !db_user.getItem('email')){
    // variable is undefined so alert and force action
    alert('Please enter your personal details before using this Applications');
} */

function dbGoUser() {
    if(errorMessage) return;
    var f = element('usersettings');
    db_user.setItem('fullname', f.elements['fullname'].value);
    db_user.setItem('mobilenumber', f.elements['mobilenumber'].value);
    db_user.setItem('email', f.elements['email'].value);
    db_user.setItem('location', f.elements['location'].value);
    console.log('Saved!');
    $("#fullname").attr("placeholder", db_user.getItem('fullname'));
    $("#mobilenumber").attr("placeholder", db_user.getItem('mobilenumber'));
    $("#email").attr("placeholder", db_user.getItem('email'));
    $("#location").attr("placeholder", db_user.getItem('location'));
    $( '#usersettings' ).each(function(){
        this.reset();
    });
    alert('Information stored');
    window.location = "index.html";
    locations.reload();

}

function dbGoServer() {
    if(errorMessage) return;
    var f = element('serversettings');
    db_server.setItem('server', f.elements['server'].value);
    console.log('Saved!');
    $("#server").attr("placeholder", db_server.getItem('server'));
    $( '#serversettings' ).each(function(){
        this.reset();
    });
    alert('Server stored');
    window.location = "index.html";
    locations.reload();
}

function dbGoQuestion() {
    if(errorMessage) return;
    var f = element('questionsettings');
    db_question.setItem('questionchoice', f.elements['questionchoice'].value);
    console.log('Questionaire Set');
    window.location = "questionhome.html";
}

/* Check server is set, if not set to default */
if (!db_server.getItem('server')) {
    db_server.setItem('server', 'http://apps.gwtrains.co.uk/rtsurvey');
}
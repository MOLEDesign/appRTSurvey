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

var element = function(id) { return document.getElementById(id); }
var errorMessage = undefined;


/* Check if user variables have been entered */
if (!db_user.getItem('fullname') || !db_user.getItem('mobilenumber') || !db_user.getItem('email')){
    // variable is undefined so alert and force action
    alert('Please enter your personal details before using this Applications');
}

function dbGoUser() {
    if(errorMessage) return;
    var f = element('usersettings');
    db_user.setItem('fullname', f.elements['fullname'].value);
    db_user.setItem('mobilenumber', f.elements['mobilenumber'].value);
    db_user.setItem('email', f.elements['email'].value);
    console.log('Saved!');
    $("#fullname").attr("placeholder", db_user.getItem('fullname'));
    $("#mobilenumber").attr("placeholder", db_user.getItem('mobilenumber'));
    $("#email").attr("placeholder", db_user.getItem('email'));
    $( '#usersettings' ).each(function(){
        this.reset();
    });

}

function dbGoServer() {
    if(errorMessage) return;
    var f = element('serversettings');
    db_server.setItem('server', f.elements['server'].value);
    console.log('Saved!');
    $("#server").attr("placeholder", db_user.getItem('server'));
    $( '#serversettings' ).each(function(){
        this.reset();
    });

}
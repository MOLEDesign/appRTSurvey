// JavaScript Document

var isiPad = navigator.userAgent.indexOf("iPad") != -1;

$(document).ready(function(){	
	
	/* If using an apple device, can prompt to add to home screen */
	checkiPadStandAlone()
	
});

function checkiPadStandAlone(){
	if(window.navigator.standalone == false) {
		$('.page').css('display','none');
		$('body').css('background-color','white').append('<img  src="assets/images/add_to_homescreen_fault.png?v=1"/>');
	}
}

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
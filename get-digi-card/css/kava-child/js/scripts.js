jQuery( document ).ready( function( $ ) {
	$( document ).on( 'click', '.close-popup', function( event ) {
		elementorProFrontend.modules.popup.closePopup( {}, event );
	} );
} );

// jQuery( document ).ready( function( $ ) {
// 	$( document ).on( 'click', '#close-popupid', function( event ) {
// 		elementorProFrontend.modules.popup.closePopup( {}, event );
// 	} );
// } );

var tooltip, // global variables oh my! Refactor when deploying!
	hidetooltiptimer
// console.log(tooltip);
createtooltip();
function createtooltip(){ // call this function ONCE at the end of page to create tool tip object
	tooltip = document.createElement('div');
	tooltip.style.cssText = 
		'position:absolute; background:black; color:white; padding:8px;z-index:10000;'
		+ 'border-radius:2px; font-size:12px;box-shadow:3px 3px 3px rgba(0,0,0,.4);'
		+ 'opacity:0;transition:opacity 0.3s'
	tooltip.innerHTML = 'Copied!'
	document.body.appendChild(tooltip);
  // console.log("Appended");
}
// console.log(tooltip);
function getSelectionText(){
    var selectedText = "";
    if (window.getSelection){ // all modern browsers and IE9+
        selectedText = window.getSelection().toString();
    }
    return selectedText;
}
var data=document.getElementById('clipboard');
document.addEventListener('mouseup', function(){
    var thetext = getSelectionText()
    if (thetext.length > 0){ // check there's some text selected
        data.innerHTML=thetext; // logs whatever textual content the user has selected on the page      
    }
}, false)
function copySelectionText(){
    var copysuccess ;// var to check whether execCommand successfully executed
    try{
        copysuccess = document.execCommand("copy") // run command to copy selected text to clipboard
    } catch(e){
        copysuccess = false
    }
    return copysuccess
}
document.body.addEventListener('mouseup', function(){
    var selected = getSelectionText() // call <a href="#getselectiontext">getSelectionText()</a> to see what was selected
    if (selected.length > 0){ // if selected text length is greater than 0
      console.log(selected);
        var copysuccess = copySelectionText() // copy user selected text to clipboard
        // console.log(copysuccess);
    }
}, false)
function copyfieldvalue(e, id){
    var field = document.getElementById(id)
    field.focus()
    field.setSelectionRange(0, field.value.length)
    var copysuccess = copySelectionText()
    if (copysuccess){
        showtooltip(e)
    }
}
function selectElementText(el){
    var range = document.createRange() // create new range object
    range.selectNodeContents(el) // set range to encompass desired element text
    var selection = window.getSelection() // get Selection object from currently user selected text
    selection.removeAllRanges() // unselect any user selected text (if any)
    selection.addRange(range) // add range to Selection object to select it
}
function showtooltip(e){
	var evt = e || event
	clearTimeout(hidetooltiptimer)
	tooltip.style.left = evt.pageX - 10 + 'px'
	tooltip.style.top = evt.pageY + 15 + 'px'
	tooltip.style.opacity = 1
	hidetooltiptimer = setTimeout(function(){
		tooltip.style.opacity = 0
	}, 500)
}
var motivatebox = document.getElementById('motivatebox');
 
motivatebox.addEventListener('mouseup', function(e){
    var e = e || event // equalize event object between modern and older IE browsers
    var target = e.target || e.srcElement // get target element mouse is over
    if (target.className == 'motivate'){
        selectElementText(target) // select the element's text we wish to read
        var copysuccess = copySelectionText()
        if (copysuccess){
            showtooltip(e)
        }
    }
}, false)
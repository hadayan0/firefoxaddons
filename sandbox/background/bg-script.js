function onDuplicated(tabInfo) {
	console.log( "oD:"+tabInfo.id );
}

function onError( error ) {
	console.log( `Error: ${error}` );
}

function duplicateCurrentTab(tabs) {
	console.log("dCT:"+tabs);
	if ( tabs.length > 0 ) {
		var duplicating =browser.tabs.duplicate( tabs[0].id );
		duplicating.then( onDuplicated, onError );
		console.log("duplicated.");
	}
}

browser.commands.onCommand.addListener( function(command) {
	console.log( "command="+command );
	console.log( "duplicate key pressed" );
	var querying = browser.tabs.query({});
	console.log( "queryed" );
	querying.then(duplicateCurrentTab, onError);
	console.log( "query then dCT" );
});

/*
window.addEventListener("keydown", function(e){
	console.log( "e="+e );
	console.log( "e.keyCode="+e.keyCode );
	if (e.keyCode == 68) {
		console.log( "duplicate key pressed" );
		console.log( browser );
		console.log( chrome );
		console.log( browser.tabs );
		console.log( chrome.tabs );
		var querying = browser.tabs.query({});
		console.log( "queryed" );
		querying.then(duplicateCurrentTab, onError);
		console.log( "query then dCT" );
	}
}, true);
*/

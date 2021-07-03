/**
 * Listen to every XHR request and call the content script on success
 */
chrome.webRequest.onBeforeRequest.addListener(
	function( details ) {
		if ( details.type == "xmlhttprequest" ) {
			chrome.tabs.query( { active : true, currentWindow : true }, function ( tabs ) {
				let tab = tabs[0];

				if ( tab && tab.id ) {
					chrome.tabs.sendMessage( tab.id, { triggerReplace: true } );
				}
			});
		}
	},
	{urls: ["<all_urls>"]}
);

chrome.webRequest.onCompleted.addListener(
	function( details ) {
		if ( details.type == "xmlhttprequest" ) {
			chrome.tabs.query( { active : true, currentWindow : true }, function ( tabs ) {
				let tab = tabs[0];

				if ( tab && tab.id ) {
					chrome.tabs.sendMessage( tab.id, { triggerReplace: true } );
				}
			});
		}
	},
	{urls: ["<all_urls>"]}
);

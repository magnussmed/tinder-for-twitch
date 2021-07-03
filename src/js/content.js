var displayName = 'Classified';

jQuery( document ).ready(function() {
	'use strict';

	triggerReplace();
});

/**
 * Listen to a background script request and calls searchReplace when needed
 */
chrome.runtime.onMessage.addListener( request => {
	if ( request.triggerReplace === true ) {
		removeElements()
		searchReplace()
	}

	return true;
});

/**
 * Trigger replacement of names one very page click
 */
function triggerReplace() {
	jQuery( 'html' ).click( function( e ) {

		setTimeout( function() {
			removeElements();
			searchReplace();
		}, 50)
	});
}

/**
 * Returns an array of elements with names
 */
function getNameElements() {
	let elements = [
		'.matchListItem .Ell',
		'.profileCard__card h1',
		'.messageListItem__name',
		'.chat h3 span',
		'.chat h4 span',
		'span[itemprop=name]'
	];

	return elements;
}

/**
 * Returns an array of elements that needs to be removed
 */
function getRemovalElements() {
	let elements = [
		'.chatNavBar__connectionInfo',
		'.profileCard__card .Row',
		'.profileCard__card .BreakWord',
		'.recsCardboard .BreakWord'
	];

	return elements;
}

/**
 * Search replace names
 */
function searchReplace() {
	jQuery.each( getNameElements(), function( index, el ) {
		jQuery( el ).text( '' ).text( displayName );
	});
}

/**
 * Remove elements
 */
function removeElements() {
	jQuery.each( getRemovalElements(), function( index, el ) {
		if ( jQuery( el ).length ) {
			jQuery( el ).remove();
		}
	});
}

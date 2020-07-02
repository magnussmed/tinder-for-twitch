var lads;

$( document ).ready(function() {
	'use strict';

	var champions = ["Aatrox","Ahri","Akali","Alistar","Amumu","Anivia","Annie","Aphelios","Ashe","Aurelion Sol","Azir","Bard","Blitzcrank","Brand","Braum","Caitlyn","Camille","Cassiopeia","Cho'Gath","Corki","Darius","Diana","Dr. Mundo","Draven","Ekko","Elise","Evelynn","Ezreal","Fiddlesticks","Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Hecarim","Heimerdinger","Illaoi","Irelia","Ivern","Janna","Jarvan IV","Jax","Jayce","Jhin","Jinx","Kai'Sa","Kalista","Karma","Karthus","Kassadin","Katarina","Kayle","Kayn","Kennen","Kha'Zix","Kindred","Kled","Kog'Maw","LeBlanc","Lee Sin","Leona","Lissandra","Lucian","Lulu","Lux","Malphite","Malzahar","Maokai","Master Yi","Miss Fortune","Mordekaiser","Morgana","Nami","Nasus","Nautilus","Neeko","Nidalee","Nocturne","Nunu and Willump","Olaf","Orianna","Ornn","Pantheon","Poppy","Pyke","Qiyana","Quinn","Rakan","Rammus","Rek'Sai","Renekton","Rengar","Riven","Rumble","Ryze","Sejuani","Senna","Sett","Shaco","Shen","Shyvana","Singed","Sion","Sivir","Skarner","Sona","Soraka","Swain","Sylas","Syndra","Tahm Kench","Taliyah","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","Twisted Fate","Twitch","Udyr","Urgot","Varus","Vayne","Veigar","Vel'Koz","Vi","Viktor","Vladimir","Volibear","Warwick","Wukong","Xayah","Xerath","Xin Zhao","Yasuo","Yorick","Yuumi","Zac","Zed","Ziggs","Zilean","Zoe","Zyra"];

	var cl = champions.length;

	// TWITCH USERNAMES START
	chrome.storage.local.get(['lads'], function( result ) {
		var o = jQuery.isEmptyObject( result );
		if ( jQuery.isEmptyObject( result ) == true ) {
			lads = [];
		} else {
			lads = result.lads;
			champions = lads;
			cl = result.lads.length;
		}
	});

	setInterval( function() {
		$( '.chat-line__message' ).each( function( e ) {
			let el = $( this ).find( '.chat-author__display-name' );
			if ( jQuery.inArray( el.html(), lads ) == -1 ) {
				lads.push( el.html() );
			}
		});

		chrome.storage.local.set({ "lads": lads }, function() {
			champions = lads;
			cl = lads.length;
		});
	}, 10000 );
	// TWTICH USERNAMES END

	$( document ).on( 'click', '.matchListItem', function(e) {
		setInterval( function() {
			$( 'h1' ).each(function(e) {
				var champ = champions[Math.floor(Math.random() * cl)];
				var current = $( this ).text();
				if ( jQuery.inArray( current, champions ) == -1 ) {
					$( this ).html( champ );
				}
			});
		}, 1 );
	});

	$( document ).on( 'click', '.messageListItem', function(e) {
		setInterval( function() {
			$( 'h1' ).each(function(e) {
				var champ = champions[Math.floor(Math.random() * cl)];
				var current = $( this ).text();
				if ( jQuery.inArray( current, champions ) == -1 ) {
					$( this ).html( champ );
				}
			});
		}, 1 );
	});

	setInterval( function() {
		$( 'body .matchListItem .Ell' ).each(function(e) {
			var champ = champions[Math.floor(Math.random() * cl)];
			var current = $( this ).text();
			if ( jQuery.inArray( current, champions ) == -1 ) {
				$( this ).html( champ );
			}
		});

		$( 'h1' ).each(function(e) {
			var champ = champions[Math.floor(Math.random() * cl)];
			var current = $( this ).text();
			if ( jQuery.inArray( current, champions ) == -1 ) {
				$( this ).html( champ );
			}
		});

		$( 'body .chat h3 span' ).each(function(e) {
			var champ = champions[Math.floor(Math.random() * cl)];
			var current = $( this ).text();
			if ( jQuery.inArray( current, champions ) == -1 ) {
				$( this ).html( champ );
			}
		});

		$( 'body .chat h4 span' ).each(function(e) {
			var champ = champions[Math.floor(Math.random() * cl)];
			var current = $( this ).text();
			if ( jQuery.inArray( current, champions ) == -1 ) {
				$( this ).html( champ );
			}
		});

		$( 'body .messageListItem .messageListItem__name' ).each(function(e) {
			var champ = champions[Math.floor(Math.random() * cl)];
			var current = $( this ).text();
			if ( jQuery.inArray( current, champions ) == -1 ) {
				$( this ).html( champ );
			}
		});

		$( 'body .profileCard__card .BreakWord' ).each(function(e) {
			var champ = champions[Math.floor(Math.random() * cl)];
			var current = $( this ).text();
			if ( jQuery.inArray( current, champions ) == -1 ) {
				$( this ).html( champ );
			}
		});

		$( 'body .profileCard__card' ).each(function(e) {
			$( this ).children().find( '.Row' ).remove();
		});

		$( 'body .recCard' ).each(function(e) {
			$( this ).find( '.Row' ).remove();
		});

		$( 'body .recCard span' ).each(function(e) {
			var champ = champions[Math.floor(Math.random() * cl)];
			var current = $( this ).text();
			if ( jQuery.inArray( current, champions ) == -1 ) {
				$( this ).html( champ );
			}
		});

		var child = $( 'body .itsAMatch' ).find( 'a.active' ).parent().children().first().next();

		if ( child.hasClass( 'Fz($m) Fz($ms)--s' ) ) {
			child.remove();
		}

		$( 'body .chatNavBar__connectionInfo' ).each(function(e) {
			$( this ).remove();
		});
	}, 100 );
});

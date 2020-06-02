setInterval(function(){
	var el = document.getElementsByClassName("CenterAlign Pos(a) B(0) Maw(100%)");
	if ( el !== null ) {
		for ( a of el ) {
			a.firstElementChild.innerHTML = "Din mor";
		}
	}

	var el = document.getElementsByClassName("Maw(340px)");
	if ( el !== null ) {
		for ( a of el ) {
			a.firstElementChild.innerHTML = "Din mor";
		}
	}

	var el = document.getElementsByClassName("Fz($xl) Fw($bold) Fxs(1) Flw(w) Pend(8px) M(0) D(i)");
	if ( el !== null ) {
		for ( a of el ) {
			a.innerHTML = "Din mor";
		}
	}

	var el = document.getElementsByClassName("chatNavBar__connectionInfo");
	if ( el !== null ) {
		for ( a of el ) {
			a.innerHTML = "Din mor";
		}
	}

	// var x = document.getElementsByClassName("Fz($xl) Fw($bold) Fxs(1) Flw(w) Pend(8px) M(0) D(i)");
	// if ( x !== null ) {
	// 	for ( a of x ) {
	// 		a.innerHTML = "Din mor";
	// 	}
	// }
	//
	// var x = document.getElementsByClassName("h3.Maw(340px)");
	// if ( x !== null ) {
	// 	for ( a of x ) {
	// 		a.innerHTML = "Din mor";
	// 	}
	// }
}, 100);

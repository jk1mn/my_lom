setInterval( ()=> {
	if ( typeof document === 'undefined' ) return
	
	document?.documentElement.setAttribute(
		'my_lom_theme' ,
		new Date().getSeconds() < 30 ? 'light' : 'dark' ,
	)
} , 1_000 )

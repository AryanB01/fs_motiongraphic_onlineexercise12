
$(document).ready(function(){
	
	document.addEventListener('keydown', (event) =>{
		let keyCode = event.code;


	switch(keyCode){
		case 'ArrowUp':
			document.getElementById('ninja').className = "up"
			break;
		case 'ArrowDown':
			document.getElementById('ninja').className = "down"
			break;
	}
	return false;
	})


	document.addEventListener('keyup', () => {
		document.getElementById('ninja').className = 'start';
	})
});

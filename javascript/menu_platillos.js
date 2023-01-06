document.querySelector('.popularesBtn').addEventListener('click', (e) => {
	const btn = document.querySelectorAll('.Btn')
	const div = document.querySelectorAll('.platillos')
	const platillosH1 = document.querySelectorAll('.platillosH1')
	switch (e.target) {
	 	case btn[0]:
	 		return MostrarTodos(div);
	 		break;
	 	case btn[1]:
	 		return MostrarPlato(platillosH1,'ensalada');
	 		break;
	 	case btn[2]:
	 		return MostrarPlato(platillosH1,'pasta');
	 		break;
	 	case btn[3]:
	 		return MostrarPlato(platillosH1,'pizza');
	 		break;
	 	case btn[4]:
	 		return MostrarPlato(platillosH1,'postre');
	 		break;
	 	default:
	 		// statements_def
	 		break;
	 }
})

function MostrarTodos (div) { // FUNCION PARA MOSTRAR TODOS LOS PLATO
	for(let i=0; i<div.length; i++){
		div[i].style.display = 'block'
	}
}

function MostrarPlato(h1,text) { // FUNCION PARA MOSTRAR SOLO PASTA
	for (let i=0; i<h1.length; i++){
		h1[i].innerText.toLowerCase().indexOf(text) !== -1 ? h1[i].parentElement.style.display = 'block' : h1[i].parentElement.style.display = 'none'
	}
}
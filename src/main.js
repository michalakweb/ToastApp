import '../src/style.scss';

let button = document.querySelector('button');

function toastMe() {
	import('../src/toast').then(message => {message.init()});
}

button.addEventListener('click', toastMe);
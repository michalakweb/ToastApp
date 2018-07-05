import Toast from 'universal-toast';

export function init() {
	Toast.show('Here\'s to you!');
	Toast.show('Hip, hip, hooray!');
	Toast.show('And here\'s to me!');
	Toast.show('Hip, hip, hooray!');
	Toast.show('I\'m dynamically importing a module!', 3000);
}
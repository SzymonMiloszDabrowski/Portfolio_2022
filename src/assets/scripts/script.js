import '../styles/style.scss';

const App = {
	handleHamburger: function () {
		const nav = document.querySelector('header nav');
		const list = document.querySelector('header nav ul');
		const hamburger = document.querySelector('.hamburger');

		if (nav.classList.contains('toggled')) {
			list.removeAttribute('style');
			hamburger.setAttribute('aria-expanded', false);
		} else {
			list.style.height = list.scrollHeight + 'px';
			hamburger.setAttribute('aria-expanded', true);
		}
		nav.classList.toggle('toggled');
	},

	listenEvents: function () {
		document.querySelectorAll('.scroll_to_about').forEach((el) => {
			el.addEventListener('click', () => {
				document.querySelector('#about_section').scrollIntoView({ behavior: 'smooth', block: 'start' });
			});
		});

		document.querySelectorAll('.scroll_to_works').forEach((el) => {
			el.addEventListener('click', () => {
				document.querySelector('#works_section').scrollIntoView({ behavior: 'smooth', block: 'start' });
			});
		});

		document.querySelectorAll('.scroll_to_contact').forEach((el) => {
			el.addEventListener('click', () => {
				document.querySelector('#contact_section').scrollIntoView({ behavior: 'smooth', block: 'start' });
			});
		});

		document.querySelector('.hamburger').addEventListener('click', (e) => {
			this.handleHamburger(e);
		});

		document.querySelector('body').addEventListener('click', (e) => {
			const nav = document.querySelector('header nav');
			const list = document.querySelector('header nav ul');
			const hamburger = document.querySelector('.hamburger');

			if (nav.classList.contains('toggled') && !(hamburger == e.target) && !hamburger.contains(e.target) && !(list == e.target) && !list.contains(e.target)) {
				this.handleHamburger(e);
			}
		});
	},

	init: function () {
		this.listenEvents();
	},
};

window.onload = () => {
	App.init();
};

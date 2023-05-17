const body = document.querySelector('body');
const backToTopButton = document.querySelector('.back-to-top');

if (backToTopButton) {
	const handleScroll = () => {
		body.classList.toggle('show-scroll', window.scrollY > 200);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	window.addEventListener('scroll', handleScroll);
	backToTopButton.addEventListener('click', scrollToTop);
}

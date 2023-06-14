const body = document.querySelector('body');

const init = () => {
	setHeadingIds();

	const backToTopButton = document.createElement('button');
	backToTopButton.classList.add('back-to-top');

	backToTopButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.74 511.74"><path d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 C512.734,381.753,512.734,375.247,508.788,371.087z"></path></svg>';
	
	backToTopButton.addEventListener('click', scrollToTop);
	body.appendChild(backToTopButton);
};

const showUpArrow = () => {
	body.classList.toggle('show-scroll', window.scrollY > 200);
};

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
};

// prettier-ignore
const illegalChars = [':','/','?','#','[',']','@','!','$','&',"'",'(',')','*','+',',',';','='];
const setHeadingIds = () => {
	const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');


	headings.forEach((heading) => {
		const id = heading.textContent
			.replace(/\s/g, '-')
			.toLowerCase()
			.split('')
			.filter((char) => !illegalChars.includes(char))
			.join('');

		heading.setAttribute('id', id);
	});
};

window.addEventListener('scroll', showUpArrow);

init();

/* ========================================================== */
/*   Index Page                                               */
/* ========================================================== */
// === Navbar scroll shadow ===
window.addEventListener('scroll', () => {
	document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 10);
});

// === Mobile Menu ===
function toggleMobileMenu() {
	const t = document.getElementById('navToggle');
	const m = document.getElementById('mobileMenu');
	t.classList.toggle('open');
	m.classList.toggle('open');
}
function closeMobileMenu() {
	document.getElementById('navToggle').classList.remove('open');
	document.getElementById('mobileMenu').classList.remove('open');
}

// === Page Navigation ===
function showHomePage() {
	document.getElementById('paoPage').classList.remove('active');
	document.getElementById('boloPage').classList.remove('active');
	document.getElementById('homePage').classList.add('active');
	window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showProductPage(product) {
	document.getElementById('homePage').classList.remove('active');
	document.getElementById('paoPage').classList.remove('active');
	document.getElementById('boloPage').classList.remove('active');
	document.getElementById(product + 'Page').classList.add('active');
	window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showHomeSection(id) {
	showHomePage();
	setTimeout(() => {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: 'smooth' });
	}, 100);
}
function scrollToSection(id) {
	const el = document.getElementById(id);
	if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// === Carousel ===
const carState = {
	pao:  { current: 0, total: 3 },
	bolo: { current: 0, total: 3 }
};
function updateCarouselNew(type) {
	const track = document.getElementById(type + 'Track');
	track.style.transform = `translateX(-${carState[type].current * 100}%)`;
	const dots = document.getElementById(type + 'Dots').querySelectorAll('.c-dot');
	dots.forEach((d, i) => d.classList.toggle('active', i === carState[type].current));
}
function nextSlideNew(type) {
	carState[type].current = (carState[type].current + 1) % carState[type].total;
	updateCarouselNew(type);
}
function prevSlideNew(type) {
	carState[type].current = (carState[type].current - 1 + carState[type].total) % carState[type].total;
	updateCarouselNew(type);
}
function goToSlideNew(type, idx) {
	carState[type].current = idx;
	updateCarouselNew(type);
}

// === WhatsApp ===
function fazerPedido() {
	const msg = "Olá! Gostaria de fazer um pedido de delícias caseiras da Il Mio Bene!";
	window.open("https://wa.me/5511919091023?text=" + encodeURIComponent(msg), '_blank');
}
function pedirProduto(produto) {
	const msg = "Olá! Gostaria de fazer um pedido de " + produto;
	window.open("https://wa.me/5511919091023?text=" + encodeURIComponent(msg), '_blank');
}

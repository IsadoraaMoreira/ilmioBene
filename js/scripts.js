/* ========================================================== */
/*   Index Page                                               */
/* ========================================================== */
var carousels = {
	pao: { currentSlide: 0, totalSlides: 3 },
	bolo: { currentSlide: 0, totalSlides: 3 }
};

// Toggle Menu Hamburger
function toggleMenu() {
	var sidebar = document.querySelector('.sidebar');
	var overlay = document.querySelector('.overlay');
	var hamburger = document.querySelector('.hamburger-menu');
	
	sidebar.classList.toggle('active');
	overlay.classList.toggle('active');
	hamburger.classList.toggle('active');
}

// Navegação entre páginas
function showProductPage(product) {
	document.getElementById('homePage').classList.remove('active');
	document.getElementById('paoPage').classList.remove('active');
	document.getElementById('boloPage').classList.remove('active');
	
	if (product === 'pao') {
		document.getElementById('paoPage').classList.add('active');
	} else if (product === 'bolo') {
		document.getElementById('boloPage').classList.add('active');
	}
	window.scrollTo(0, 0);
}

function showHomePage() {
	document.getElementById('paoPage').classList.remove('active');
	document.getElementById('boloPage').classList.remove('active');
	document.getElementById('homePage').classList.add('active');
	window.scrollTo(0, 0);
}

// Funções do Carrossel
function updateCarousel(type) {
	var carousel = document.getElementById(type + 'Carousel');
	var offset = -carousels[type].currentSlide * 100;
	carousel.style.transform = 'translateX(' + offset + '%)';
	updateIndicators(type);
}

function updateIndicators(type) {
	var page = type === 'pao' ? 'paoPage' : 'boloPage';
	var indicators = document.querySelectorAll('#' + page + ' .indicator');
	indicators.forEach(function(indicator, index) {
		if (index === carousels[type].currentSlide) {
			indicator.classList.add('active');
		} else {
			indicator.classList.remove('active');
		}
	});
}

function nextSlide(type) {
	carousels[type].currentSlide = (carousels[type].currentSlide + 1) % carousels[type].totalSlides;
	updateCarousel(type);
}

function prevSlide(type) {
	carousels[type].currentSlide = (carousels[type].currentSlide - 1 + carousels[type].totalSlides) % carousels[type].totalSlides;
	updateCarousel(type);
}

function goToSlide(type, slideIndex) {
	carousels[type].currentSlide = slideIndex;
	updateCarousel(type);
}

// Função para fazer pedido
function fazerPedido() {
	var mensagem = "Olá! Gostaria de fazer um pedido de delícias caseiras da il mio Bene";
	var numeroWhatsApp = "5511973691023"; 
	var url = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(mensagem);
	window.open(url, '_blank');
}

// Função para pedir produto específico
function pedirProduto(produto) {
	var mensagem = "Olá! Gostaria de fazer um pedido de " + produto;
	var numeroWhatsApp = "5511973691023"; 
	var url = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(mensagem);
	window.open(url, '_blank');
}
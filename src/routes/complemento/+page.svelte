<script>
	import { onDestroy } from 'svelte';

	let ver = false;
	let currentIndex = 0;
	const images = [
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721739/miproyecto/dg597fo7dpsqjopm0tqz.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721713/miproyecto/fbqj6jpem2qqcm9lpd4m.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721687/miproyecto/j9ot6uycxcukys6m0iwe.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721671/miproyecto/tizfliojhmphgsqu1hde.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721597/miproyecto/zpkxtt96ymyqvcq1zwk3.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721584/miproyecto/ykukqyks5ycbv6kym2nx.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721539/miproyecto/dssrpechg2uzfudxysur.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721508/miproyecto/ixphpcpxwi4bgezhup4a.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721497/miproyecto/hyyzx73u39j2fx8u3tsy.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721483/miproyecto/h6jspn3xxkp119bmo6wf.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721443/miproyecto/umptturspkmfowpqqnb2.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721433/miproyecto/p734ertdvrjwsovbtv91.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721411/miproyecto/os3qfgtysxxscpvs4kvs.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721382/miproyecto/jx9q99eh98jpi7tgumnh.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721376/miproyecto/cnyuwqthr8rhakmk0qw3.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721367/miproyecto/reji14jtdun7soggxjhh.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721340/miproyecto/ktulillzaumeeh9adjlb.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721327/miproyecto/ullpwk1n9izaqzhl2s0m.jpg'
	];
	function next() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function prev() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}

	// Avance automático cada 3 segundos
	const interval = setInterval(next, 5000);

	// Limpia el intervalo al desmontar el componente
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="main">
	<section class="pregunta">
		<h1>¿Qué es complemento?</h1>
	</section>
	<section class="container">
		<div class="slider-wrapper">
			<button class="arrow prev" on:click={prev}>❮</button>
			<img src={images[currentIndex]} alt="Carousel image" />
			<button class="arrow next" on:click={next}>❯</button>
		</div>
	</section>

	<div class="cards-container">
		<section class="text-section">
			<p>
				En las anteriores imagenes se puede observar una serie de alimentos preparados que dan la
				invitación a contenedor a profundidad las comidas que van a ingerir y la combinación de
				alimentos emplatados.
			</p>
		</section>

		<section class="benefits-section">
			<h2><b>Ventajas y desventajas:</b></h2>
			<p>
				<b>Ventajas:</b>
				<br />
				Este alimento es más completo y puede ayudar mucho más a llenar a los estudiantes que por algún
				motivo o circunstancia no puedan desayunar en sus casas, además que es esta comida es una ayuda
				mejor para que los estudiantes puedan alimentarse de una forma más segura y completa.
				<br />
				<br />
				<b>Desventajas:</b>
				<br />
				Que estos alimentos pueden ser en diferentes emplatados y diferentes combinaciones de comida
				que puede resultar que algunos alimentos no sean lo suficientemente agradables a los estudiantes,
				y también que estos alimentos pueden resultar fríos y de un gusto "malo" a la comida.
			</p>
		</section>

		<section class="conclusion">
			<h2>Conclusión</h2>
			<p>
				El complemento o también llamado complemento preparado, es un conjunto de alimentos
				preparados y servidos en platos, estos alimentos están hechos en combinaciones de diferentes
				conjuntos. Un ejemplo esto sería arroz con huevo y guineo, con un jugo de tomate.
			</p>
		</section>
	</div>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Helvetica Neue', Arial, sans-serif;
	}

	.main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #f4f4f4;
		position: relative;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.pregunta {
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
		margin-top: 32px;
	}

	.pregunta h1 {
		padding: 1.5rem;
		margin-bottom: 2rem;
		text-align: center;
		text-transform: uppercase;
		font-size: 2.2rem;
		font-weight: bold;
		color: #2a2a2a;
		background-color: #f4f4f4;
		border-radius: 10px;
		letter-spacing: 1.5px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		max-width: 80%;
	}

	.text-section,
	.benefits-section,
	.conclusion {
		text-align: justify;
		font-size: 1.1rem;
		color: #4a4a4a;
		margin-bottom: 2rem;
		padding: 1.8rem;
		background-color: #ffffff;
		border-radius: 12px;
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
		width: 85%;
		max-width: 600px;
		transition: transform 0.3s ease;
	}

	.text-section:hover,
	.benefits-section:hover,
	.conclusion:hover {
		transform: scale(1.02);
	}

	h2 {
		font-size: 1.6rem;
		color: #333;
		margin-bottom: 1rem;
		font-weight: 600;
	}

	p {
		margin-bottom: 1rem;
		line-height: 1.6;
	}

	b {
		color: #2a2a2a;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 2rem;
	}

	.cards-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	/* Estilos para el slider */
	.slider-wrapper {
		position: relative;
		max-width: 48rem;
		margin: 1rem auto;
	}

	.slider-wrapper img {
		width: 100%;
		max-height: 500px;
		object-fit: cover;
		border-radius: 8px;
		transition: opacity 0.3s ease;
	}

	.arrow {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(0, 0, 0, 0.5);
		border: none;
		color: white;
		font-size: 1.5em;
		width: 2.5rem;
		height: 2.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		cursor: pointer;
		z-index: 10;
	}

	.prev {
		left: -50px;
	}

	.next {
		right: -50px;
	}

	.arrow:hover {
		background: rgba(0, 0, 0, 0.8);
	}

	/* Adaptación para pantallas pequeñas */
	@media (max-width: 768px) {
		.pregunta h1 {
			font-size: 1.8rem;
			padding: 1rem;
		}

		.text-section,
		.benefits-section,
		.conclusion {
			width: 90%;
		}

		.arrow {
			width: 2rem;
			height: 2rem;
			font-size: 1.4rem;
		}

		.prev {
			left: -1.5rem;
		}

		.next {
			right: -1.5rem;
		}
	}
</style>

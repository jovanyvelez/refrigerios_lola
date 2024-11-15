<script>
	import { onDestroy } from 'svelte';

	let ver = false;
	let currentIndex = 0;
	const images = [
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721751/miproyecto/ubqfxcpu6c2wetz3jamw.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721727/miproyecto/wbssonvbrggvrsw3gzk9.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721697/miproyecto/zhdua4j8lcwley6dtoyq.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721653/miproyecto/udausemzca968caqnhtd.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721633/miproyecto/ccqpzhjj8jcdjpvdqqrd.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721615/miproyecto/sgyn1mlmj2jxbc2ot9bm.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721568/miproyecto/ykswvqg5cffn1dzzafu8.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721529/miproyecto/srv0b76stqoh06c7h6xo.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721468/miproyecto/uv2jh7baitoz8lvao6qy.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721421/miproyecto/fr5jab4ekgliwahacyla.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721400/miproyecto/abtcp3qpsh1p8ky6ktz7.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721358/miproyecto/gsudfb2rjm5fdqk2lucn.jpg',
		'https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721348/miproyecto/ywqribekmk286n9pccqo.jpg'
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
		<h1>¿Qué es vaso de leche?</h1>
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
				En las imágenes anteriores se puede observar el alimento que completa el vaso de leche,
				siendo muchos ejemplos de diferentes conjuntos de alimentos distintos.
			</p>
		</section>
		<section class="benefits-section">
			<h2>Ventajas y desventajas:</h2>
			<p>
				<b>Ventajas:</b><br /> Es un alimento suave que puede ayudar a los estudiantes a alimentarse
				sin sobrecargar sus cuerpos.
			</p>
			<p>
				<b>Desventajas:</b><br /> Algunas personas pueden tener intolerancias al gluten o a los lácteos,
				limitando su capacidad de consumir ciertos complementos.
			</p>
		</section>
		<section class="conclusion">
			<h2>Conclusión</h2>
			<p>
				El vaso de leche es una comida diversa que incluye lácteos, frutas y harinas como panes,
				ofreciendo combinaciones diferentes cada día.
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

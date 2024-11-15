<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	let ver = false;

	import type { ActionData } from './$types';
	import { Cookie } from 'lucia';

	let { form }: { form: ActionData } = $props();

	if ($page.data.user) {
			ver = true;
		} else {
			ver = false;
		}

		console.log('Estado de sesión:', ver); 
	</script>
  
  <section class="section">
	<div class="container">
	  <h1 class="title is-1 has-text-centered">¡Bienvenidos a Refrigerios Lola!</h1>
	  
	  <div class="content">
		<p class="has-text-weight-bold">
		  Aquí podrás ver qué alimentos entregan en la institución Lola González. Esto es con el fin de
		  que sepas cuál de los dos refrigerios escoger, si complemento o vaso de leche.
		</p>
		<p class="has-text-weight-bold">
		  También, hay un espacio, llamado quejas, en donde puedes decir, soltar, manifestar, 
		  comunicar, expresar, desahogar, opinar, proponer acerca de lo que no estás de acuerdo, 
		  de la inconformidad, problema, dificultad que tienes del alimento.
		</p>
	  </div>
	</div>
  </section>
  
  <section class="section">
	<div class="container">
	  <div class="columns is-centered">
		<div class="column is-half">
		  <div class="box">
			<h2 class="title is-2 has-text-centered">Vaso de leche</h2>
			<div class="columns is-mobile is-centered">
			  <div class="column is-narrow">
				<figure class="image is-128x128">
				  <img src="https://res.cloudinary.com/dapvpqxhz/image/upload/c_scale,w_256/v1724721727/miproyecto/wbssonvbrggvrsw3gzk9.jpg" alt="Vaso de leche 1" class="is-rounded">
				</figure>
			  </div>
			  <div class="column is-narrow">
				<figure class="image is-128x128 is-5by4">
				  <img src="https://res.cloudinary.com/dapvpqxhz/image/upload/c_scale,w_256/v1724721568/miproyecto/ykswvqg5cffn1dzzafu8.jpg" alt="Vaso de leche 2" class="is-rounded">
				</figure>
			  </div>
			</div>
			<p class="has-text-centered">
			  Bienvenidos al vaso de leche, en este lugar lo que buscamos es darle un alimento ligero a los
			  estudiantes con el cual se sientan a gusto. Aquí obtienen bebidas lácteas variadas,
			  también hay frutas, y comidas como panes que ayudan a un balance en el alimento de los
			  estudiantes.
			</p>
			<div class="has-text-centered mt-4">
			  <a href="/vaso_leche" class="button is-primary">¿Qué es?</a>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </section>
  
  <section class="section">
	<div class="container">
	  <div class="columns is-centered">
		<div class="column is-half">
		  <div class="box">
			<h2 class="title is-2 has-text-centered">Complemento</h2>
			<div class="columns is-mobile is-centered">
			  <div class="column is-narrow">
				<figure class="image is-128x128">
				  <img src="https://res.cloudinary.com/dapvpqxhz/image/upload/c_scale,w_256/v1724721327/miproyecto/ullpwk1n9izaqzhl2s0m.jpg" alt="Complemento 1" class="is-rounded">
				</figure>
			  </div>
			  <div class="column is-narrow">
				<figure class="image is-128x128">
				  <img src="https://res.cloudinary.com/dapvpqxhz/image/upload/c_scale,w_256/v1724721443/miproyecto/umptturspkmfowpqqnb2.jpg" alt="Complemento 2" class="is-rounded">
				</figure>
			  </div>
			</div>
			<p class="has-text-centered">
			  En el complemento preparado los estudiantes obtienen comidas balanceadas para el desarrollo de
			  los estudiantes a lo largo de su etapa estudiantil. En este lugar, se les da una comida
			  balanceada en azúcares y calorías, todo para cuidar a los estudiantes.
			</p>
			<div class="has-text-centered mt-4">
			  <a href="/complemento" class="button is-primary">¿Qué es?</a>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </section>
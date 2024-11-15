<script lang="ts">
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<form action="?/login" method="POST">
	<div style="display: flex; justify-content: center; align-items: center; height: 70vh;">
		<section class="section" style="width: 50%;">
			<div class="login-container">
				<h1 class="title has-text-centered">Iniciar Sesión</h1>

				{#if form?.credentials}
					<article class="message is-danger">
						<div class="message-body">Credenciales incorrectas</div>
					</article>
				{/if}

				<div class="box">
					<!-- Campo Correo -->
					<div class="field">
						<label class="label" for="email">Correo</label>
						<div class="control">
							<input
								class="input"
								type="email"
								placeholder="Ingresa tu correo"
								id="email"
								name="email"
							/>
						</div>
					</div>

					<!-- Campo PIN -->
					<div class="field">
						<label class="label" for="password">PIN</label>
						<div class="control">
							<input
								class="input"
								type="password"
								placeholder="Ingresa tu PIN"
								id="pin"
								name="pin"
							/>
						</div>
					</div>

					<!-- Botón de Iniciar Sesión en Verde -->
					<div class="field">
						<div class="control">
							<button class="button is-success is-fullwidth" type="submit"> Iniciar Sesión </button>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</form>

<script lang="ts">
  import { page } from '$app/stores';
  import '../layout_stile.css';
</script>

<div class="encabezado">
  <div class="contenedor_menu">
      <nav class="barras">
          <ul class="menu-horizontal">
              <li><a href="/">Inicio</a></li>
              {#if $page.data.user}
                  <li><a href="/quejas">Quejas</a></li>
                  <li>
                      <form action="/logout" method="POST">
                          <button type="submit">Cerrar sesión</button>
                      </form>
                  </li>
              {:else}
                  <li><a href="/login">Iniciar sesión</a></li>
              {/if}
          </ul>
      </nav>
  </div>
</div>

<main>
  <slot />
</main>
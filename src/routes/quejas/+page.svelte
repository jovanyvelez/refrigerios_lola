
<seccion class="cuerpo">

	<section>
	  <h1>PQR Lola</h1>
	  <form action="?/quejas" method="POST">

		<label for="tipo-solicitud">Tipo de solicitud:</label>
		<select id="tipo-solicitud" name="tipoQueja" required>
		  <option value="">Selecciona el tipo de solicitud</option>
		  <option value="peticion">Petición</option>
		  <option value="queja">Queja</option>
		  <option value="reclamo">Reclamo</option>
		  <option value="sugerencia">Sugerencia</option>
		</select>

    <label for="alimento">Tipo de Alimento:</label>
    <select id="alimento" name="alimento" required>
      <option value="">Selecciona el tipo de aliemnto</option>
      <option value="vaso de leche">Vaso de leche</option>
      <option value="complemento">Complemento</option>
    </select>

		<label for="detalle-solicitud">Escribe tu solicitud aqui:</label>
		<textarea id="detalle-solicitud" name="problema" rows="6" placeholder="Describe tu solicitud" required></textarea>

		<input type="submit" value="Enviar">
	</form>
	</section>
</seccion>
  <style>
    .cuerpo {
      background-color: #f0f8ff;
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    section {
      background-color: #ffffff;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      width: 400px;
      text-align: center;
    }
    h1 {
      color: #333;
      font-size: 24px;
      margin-bottom: 20px;
    }
    label {
      font-size: 18px;
      display: block;
      margin-bottom: 8px;
    }
    select, textarea, input[type="submit"] {
      font-size: 16px;
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      border: 2px solid #ddd;
      border-radius: 5px;
      box-sizing: border-box;
    }
    input[type="submit"] {
      background-color: #4caf50;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 18px;
    }
    input[type="submit"]:hover {
      background-color: #45a049;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  </style>

export function Form() {
	return(
		<>
			<form action="" id="survey-form">
				<label for="name" id="name-label">Nome</label>
				<input type="text" id="name" placeholder="Digite seu nome" />

				<label for="email" id="email-label">E-mail</label>
				<input type="text" id="email" placeholder="Digite seu e-mail" />

				<label for="number" id="number-label">Idade (opcional)</label>
				<input type="number" id="number" min="10" max="100" placeholder="Digite sua idade" />

				<label for="number" id="number-label">Escolha sua principal ocupação</label>
				<select name="ocupacao" id="dropdown">
					<option disabled selected>Selecione uma ocupação</option>
					<option value="estudante">Estudante</option>
					<option value="trabalho">Trabalho em tempo integral</option>
					<option value="aposentado">Aposentado</option>
					<option value="estudante">Outro</option>
				</select>

				<button id="submit">Enviar</button>
			</form>
		</>
	);
}
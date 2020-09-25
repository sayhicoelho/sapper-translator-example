<script context="module">
	async function loadLangs() {
		// simula o carregamento da pasta 'langs' via filesystem
		return new Promise(resolve => setTimeout(() => resolve({
			'pt-BR': {
				hello: 'Olá, mundo!'
			},
			'en-US': {
				hello: 'Hello world!'
			}
		}), 1000))
	}

	async function fetchCurrentUser() {
		// simula a busca pelos dados do usuário autenticado
		return new Promise(resolve => setTimeout(() => resolve({
			id: 1,
			name: 'Renan'
		}), 1000))
	}

	export async function preload(page, session) {
		const { locale } = session
		// usamos Promise.all pra rodar operações paralelas (que não dependem umas das outras)
		// pra diminuir o tempo de carregamento
		const [langs, user] = await Promise.all([
			loadLangs(),
			fetchCurrentUser()
		])

		return {
			user,
			langs,
			locale
		}
	}
</script>

<script>
	import { setContext } from 'svelte';
	import Nav from '../components/Nav.svelte';
	import Translator from '../support/Translator.js'

	export let segment;
	export let user; // a dica é: salve esse objeto no Store do Svelte
									 // porque você vai poder fazer uso dela em qualquer
									 // lugar da sua aplicação e ainda vai manter sua
									 // reatividade
	export let langs;
	export let locale;

	const translator = new Translator(langs, locale)

	setContext('intl', {
		translator,
		t: translator.t.bind(translator)
	})
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

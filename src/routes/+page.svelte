<script lang="ts">
	import { onMount } from 'svelte';
	import type { Pokedex } from '$models/pokedex.ts';

	let pokedex: Pokedex;

	onMount(() => {
		fetch('https://raw.githubusercontent.com/JwowSquared/Radical-Red-Pokedex/master/data.json')
			.then((response) => response.json())
			.then((data) => {
				pokedex = data;
			});
	});
</script>

<header class="container-fluid margin-large">
	<nav>
		<ul>
			<li><strong>Radical Red Companion</strong></li>
		</ul>
		<ul>
			<li><a href="#" class="secondary">Tracker</a></li>
		</ul>
		<ul></ul>
	</nav>
</header>

<article>
	<body>
		<main class="container">
			{#if pokedex === undefined}
				<p aria-busy="true"></p>
			{:else}
				<div class="grid">
					{#each Object.entries(pokedex.species) as specie}
						<p>{specie[0]}</p>
					{/each}
				</div>
			{/if}
		</main>
	</body>
</article>

<footer>
	<div class="container-fluid">
		<p>Teste</p>
	</div>
</footer>

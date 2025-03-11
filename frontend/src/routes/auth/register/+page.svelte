<script lang="ts">
	import { Container } from "@sveltestrap/sveltestrap";
	import RegisterUi from "$lib/components/auth/RegisterUI.svelte";

</script>

<svelte:head>
	<title>Регистрация</title>
</svelte:head>

<Container>
    <h1>Регистрация</h1>
	<RegisterUi/>
</Container>
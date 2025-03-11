<script lang="ts">
	import { Container } from "@sveltestrap/sveltestrap";
	import AuthUi from "$lib/components/auth/AuthUI.svelte";
</script>

<svelte:head>
    <title>Вход</title>
</svelte:head>
<Container>
    <h1>Вход</h1>
    <AuthUi/>
</Container>
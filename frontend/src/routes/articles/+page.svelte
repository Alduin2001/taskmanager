<script lang="ts">
	import Articles from "$lib/components/articles/Articles.svelte";
import { Container } from "@sveltestrap/sveltestrap";


</script>

<svelte:head>
    <title>Посты</title>
</svelte:head>

<Container class="mt-2">
    <h1 class="text-center">Все Посты</h1>
    <Articles />
</Container>


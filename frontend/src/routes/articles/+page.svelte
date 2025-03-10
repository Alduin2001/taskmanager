<script lang="ts">
	import Articles from "$lib/components/articles/Articles.svelte";
import { Container } from "@sveltestrap/sveltestrap";


</script>

<svelte:head>
    <title>Посты</title>
</svelte:head>

<Container>
    Все Посты
    <Articles />
</Container>


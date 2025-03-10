<script lang="ts">
	import SingleArticleItem from "$lib/components/articles/SingleArticleItem.svelte";
import { Container } from "@sveltestrap/sveltestrap";


</script>

<svelte:head>
    <title>Пост</title>
</svelte:head>

<Container class="mt-2">
    <SingleArticleItem/>
</Container>
<script lang="ts">
	import CreateArticleForm from "$lib/components/articles/CreateArticleForm.svelte";
import { Container } from "@sveltestrap/sveltestrap";


</script>

<svelte:head>
    <title>Создать пост</title>
</svelte:head>

<Container>
    <h1>Форма создания постов</h1>
    <CreateArticleForm/>
</Container>
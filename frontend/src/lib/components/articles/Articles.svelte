<script lang="ts">
	import { Alert, Container, Row } from "@sveltestrap/sveltestrap";
    import { articles, getArticles } from "$lib/store/ArticleStore";
	import ArticleItem from "./ArticleItem.svelte";
	import { onMount } from "svelte";

    onMount(async ()=>{
        await getArticles();
    });
</script>

<Container>

    {#if $articles.length>0}
        
    
    <Row>
        {#each $articles as props}
            <ArticleItem data={props}/>
        {/each}            
    </Row>
    {:else}
        <Alert color="danger">Нет постов</Alert>
    {/if}
</Container>
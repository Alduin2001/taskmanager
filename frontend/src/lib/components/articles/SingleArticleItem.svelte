<script lang="ts">
    import { page } from "$app/state";
	import type { SingleArticleItem } from "$lib/interfaces/article";
	import { getArticle } from "$lib/store/ArticleStore";
	import { Alert, Button, Card, CardBody, CardFooter, CardHeader, CardImg, CardText, CardTitle } from "@sveltestrap/sveltestrap";
	import { onMount } from "svelte";
    import { format } from "date-fns";
	import { goto } from "$app/navigation";

const id = parseInt(page.params.id);


let data:SingleArticleItem = {
    id:0,
    header:"",
    image:"",
    body:"",
    author:{
        name:"",
        surname:""
    },
    createdAt:new Date()
}
onMount(async ()=>{
    await getArticle(id)
    .then(res=>{
        data = res.data.article;
    });
    console.log(data);
})
</script>


{#if data}
<Card>
    <CardHeader>
        <CardTitle>{data.header}</CardTitle>
    </CardHeader>
    <CardBody>
        <CardImg src={`http://localhost:3005/uploads/posts/${data.image}`} alt="Изображение"/>
        <CardText>{data.body}</CardText>
    </CardBody>
    <CardFooter>
        <CardText>Автор {data.author.name} {data.author.surname}</CardText>
        <CardText class="text-end">Создано {format(data.createdAt,"dd-MM-yyyy")}</CardText>
        <CardText>
            <Button color="primary" onclick={()=>goto('/articles')}>Вернуться назад</Button>
        </CardText>
    </CardFooter>
</Card>
{:else}
    <Alert color="primary">Загрузка данных...</Alert>
{/if}
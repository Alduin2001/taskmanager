<script lang="ts">
	import { Card, CardBody, CardFooter, CardHeader, CardImg, CardText, CardTitle, Col } from "@sveltestrap/sveltestrap";
    import type { ArticleI } from "$lib/interfaces/articles";

    export let data:ArticleI = {
        id:0,
        header:"",
        body:"",
        createdAt:"",
        image:"",
        author:{
            name:"",
            surname:""
        }
    }
</script>

<Col>
<Card>
    <CardHeader>
        <CardTitle>{data.header}</CardTitle>
    </CardHeader>
    <CardBody>
        <CardImg src={data.image} alt="Изображение поста"/>
        <CardText>{data.body}</CardText>
    </CardBody>
    <CardFooter>
        <CardText>Автор {data.author.name} {data.author.surname}</CardText>
        <CardText class="text-end">Создан {data.createdAt}</CardText>
    </CardFooter>
</Card>
</Col>
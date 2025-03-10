<script lang="ts">
	import { Button, Card, CardBody, CardFooter, CardHeader, CardImg, CardText, CardTitle, Col } from "@sveltestrap/sveltestrap";
    import type { ArticleItem } from "$lib/interfaces/article";
    import { format } from "date-fns";
    export let data:ArticleItem = {
        id:0,
        header:"",
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
        <CardImg src={`http://localhost:3005/uploads/posts/${data.image}`} alt="Изображение поста"/>
        <Button class="mt-2" color="primary">Подробнее</Button>
    </CardBody>
    <CardFooter>
        <CardText>Автор {data.author.name} {data.author.surname}</CardText>
        <CardText class="text-end">Создан {format(data.createdAt,"dd-MM-yyyy")}</CardText>
    </CardFooter>
</Card>
</Col>
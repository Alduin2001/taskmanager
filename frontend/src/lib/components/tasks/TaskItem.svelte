<script lang="ts">
	import type { TaskItem } from "$lib/interfaces/task";
	import { Button, Card, CardBody, CardHeader, CardText, CardTitle, Col, Input, InputGroup, InputGroupText, Row } from "@sveltestrap/sveltestrap";
    export let data:TaskItem = {
        id:0,
        name:"",
        description:"",
        createdAt:""
    };

</script>

<Col>
    <Card>
        <CardHeader>
            <CardTitle>{data.name}</CardTitle>
        </CardHeader>
        <CardBody>
            <CardText>{data.description}</CardText>
            <CardText class="text-end">{data.createdAt}</CardText>
            <Input type="switch" label="Выполнена" class="mb-2" onchange={(ev)=>console.log((ev.target as HTMLInputElement).checked)}/>
            <Row>
                <Col>
                    <Button class="w-100" color="primary">Редактировать</Button>
                </Col>
                <Col>
                    <Button class="w-100" color="danger">Удалить</Button>
                </Col>
            </Row>
        </CardBody>
    </Card>
</Col>
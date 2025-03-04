<script lang="ts">
	import { Button, Card, CardBody, CardHeader, CardText, CardTitle, Col, Input, InputGroup, InputGroupText, Row } from "@sveltestrap/sveltestrap";
    export let header:string = "";
    export let description:string = "";

</script>

<Col>
    <Card>
        <CardHeader>
            <CardTitle>{header}</CardTitle>
        </CardHeader>
        <CardBody>
            <CardText>{description}</CardText>
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
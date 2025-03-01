<script lang="ts">
	import { Button, Col, Container, Form, Row } from "@sveltestrap/sveltestrap";


</script>

<svelte:head>
    <title>Создание задачи</title>
</svelte:head>
<Container>
    <h1>Создание задачи</h1>
    <Row>
        <Col md={3} class="shadow-lg p-2">
            <Form>
                <Row>
                    <Col>
                        <Button color="primary" class="w-100">Ещё</Button>
                    </Col>
                    <Col>
                        <Button color="success" class="w-100">Сохранить</Button>
                    </Col>
                </Row>
                <Row class="mt-2">
                    <Col><Button color="danger" class="w-100">Удалить все</Button></Col>
                </Row>
            </Form>
        </Col>
        <Col>
            <h1>Вывод всех задач</h1>
            
        </Col>
    </Row>
</Container>
<script lang="ts">
	import { createForm } from "svelte-forms-lib";
    import { Button, Col, Form, Input, InputGroup, InputGroupText, Row } from "@sveltestrap/sveltestrap";



</script>

<Form>
    <Row>
        <Col md={12}>
            <Input placeholder="Введите название задачи"/>
        </Col>
    </Row>

    <Row class="mt-2">
        <Col>
            <InputGroup><InputGroupText>С:</InputGroupText><Input type="date"/></InputGroup>
        </Col>
        <Col>
            <InputGroup><InputGroupText>По:</InputGroupText><Input type="date"/></InputGroup>
        </Col>
    </Row>

    <Row class="mt-2">
        <Col>
            <Button class="w-100" color="success">Найти</Button>
        </Col>
        <Col>
            <Button class="w-100" color="danger">Сбросить</Button>
        </Col>
    </Row>
</Form>
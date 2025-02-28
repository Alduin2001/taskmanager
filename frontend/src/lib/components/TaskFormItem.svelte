<script lang="ts">
	import { Button, Col, FormGroup, FormText, Input, Row } from "@sveltestrap/sveltestrap";
    import { Form } from "svelte-forms-lib";
    import { createForm } from "svelte-forms-lib";
    import type { createTaskDto } from "$lib/interfaces/task";

    const {form,handleChange,handleSubmit,errors} = createForm<createTaskDto>({
        initialValues:{
            name:"",
            description:""
        },
        onSubmit:async (data:createTaskDto)=>{
            console.log(data);
        }
    });

</script>

<Form onsubmit={handleSubmit}>
    <FormGroup>
        <FormText>Название задачи</FormText>
        <Input onchange={handleChange} bind:value={$form.name}/>
    </FormGroup>
    <FormGroup>
        <FormText>Описание</FormText>
        <Input type="textarea" onchange={handleChange} bind:value={$form.description}/>
    </FormGroup>
    <Row class="mt-2">
        <Col>
            <Button class="w-100" color="success">Добавить</Button>
        </Col>
        <Col>
            <Button class="w-100" color="danger">Удалить</Button>
        </Col>
    </Row>
</Form>
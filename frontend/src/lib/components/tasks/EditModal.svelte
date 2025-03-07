<script lang="ts">
	import type { createTaskDto } from "$lib/interfaces/task";
	import { isOpenEdit, closeEditModal, updateTask } from "$lib/store/TaskStore";
	import { Button, Col, Form, FormGroup, FormText, Input, InputGroup, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "@sveltestrap/sveltestrap";
	import { onMount } from "svelte";
    import { createForm } from "svelte-forms-lib";
    export let data:createTaskDto = {
        id:0,
        name:"",
        description:""
    }
    onMount(()=>{
        console.log(data);
    });
    const {form,handleChange,handleSubmit,errors} = createForm<createTaskDto>({
        initialValues:{
            id:data.id,
            name:data.name,
            description:data.description
        },
        onSubmit:async (data:createTaskDto)=>{
            await updateTask(data.id,data);
        }
    })

</script>

<Modal isOpen={$isOpenEdit}>
    <ModalHeader>Редактирование задачи</ModalHeader>
    <ModalBody>
    <Form onsubmit={handleSubmit}>
        <FormGroup>
            <FormText>Название задачи</FormText>
            <Input bind:value={$form.name} onchange={handleChange}/>
        </FormGroup>
        <FormGroup>
            <FormText>Описание</FormText>
            <Input type="textarea" bind:value={$form.description} onchange={handleChange}/>
        </FormGroup>
        <Row>
            <Col>
                <Button color="primary" type="submit" class="w-100">Подтвердить</Button>
            </Col>
            <Col>
                <Button color="danger" class="w-100" onclick={closeEditModal}>Отменить</Button>
            </Col>
        </Row>
    </Form>
</ModalBody>
</Modal>
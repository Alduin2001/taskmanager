<script lang="ts">
	import { Variants } from "$lib/interfaces/notification";
	import type { updateTaskDto } from "$lib/interfaces/task";
	import { addNotification } from "$lib/store/NotificationStore";
	import { isOpenEdit,editModal,selectedId, closeEditModal, updateTask } from "$lib/store/TaskStore";
	import { Button, Col, Form, FormGroup, FormText, Input, InputGroup, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "@sveltestrap/sveltestrap";
	import { onMount } from "svelte";
    import { createForm } from "svelte-forms-lib";
	import { get } from "svelte/store";
    onMount(()=>{
        console.log(editModal);
    });
    const {form,handleChange,handleSubmit,errors} = createForm<updateTaskDto>({
        initialValues:{
            name:get(editModal).name,
            description:get(editModal).description
        },
        onSubmit:async (data:updateTaskDto)=>{
            await updateTask(get(selectedId),{name:data.name,description:data.description})
            .then(()=>addNotification({message:"Данные успешно изменены",variant:Variants.success}));
            closeEditModal();
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
                <Button color="danger" type="button" class="w-100" onclick={closeEditModal}>Отменить</Button>
            </Col>
        </Row>
    </Form>
</ModalBody>
</Modal>
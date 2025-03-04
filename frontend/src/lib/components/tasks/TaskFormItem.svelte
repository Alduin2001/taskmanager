<script lang="ts">
	import { Button, Col, FormGroup, FormText, Input, Row, Form } from "@sveltestrap/sveltestrap";
    import { createForm } from "svelte-forms-lib";
    import type { createTaskDto } from "$lib/interfaces/task";
	import { removeFromLocal, updateLocal } from "$lib/store/TaskStore";
	import { addNotification } from "$lib/store/NotificationStore";
	import { Variants } from "$lib/interfaces/notification";
    export let id:number;
    export let name:string;
    export let description:string;
    const {form,handleChange,handleSubmit,errors} = createForm<createTaskDto>({
        initialValues:{
            id:id,
            name:name,
            description:description
        },
        onSubmit:async (data:createTaskDto)=>{
            console.log(data);
            updateLocal(id,data);
            addNotification({message:"Вы подтвердили добавление задачи",variant:Variants.success});
        }
    });

const removeTask = ()=>{
    removeFromLocal(id);
}
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
            <Button class="w-100" color="success">Подтвердить</Button>
        </Col>
        <Col>
            <Button class="w-100" onclick={removeTask} color="danger">Удалить</Button>
        </Col>
    </Row>
</Form>
<script lang="ts">
	import type { TaskItem } from "$lib/interfaces/task";
	import { isOpenEdit, isOpenRemove, openEditModal, openRemoveModal, updateStatusTask } from "$lib/store/TaskStore";
	import { Button, Card, CardBody, CardHeader, CardText, CardTitle, Col, Input, Row } from "@sveltestrap/sveltestrap";
    import {format} from 'date-fns';
    import { onMount } from "svelte";
	import RemoveModal from "./RemoveModal.svelte";
	import EditModal from "./EditModal.svelte";
    export let data:TaskItem = {
        id:0,
        name:"",
        description:"",
        createdAt:"",
        is_completed:false
    };
    
    onMount(()=>{
        console.log(data);
    })
    const updateStatus = async (ev:Event)=>{
        data.is_completed = (ev.target as HTMLInputElement).checked;
        console.log(data.is_completed);
        await updateStatusTask(data.id,data.is_completed);
    }

    const openRemove = ()=>{
        openRemoveModal(data.id);
    }
    const openEdit = ()=>{
        openEditModal(data.id,{name:data.name,description:data.description});
    }
</script>

<Col>
    <Card>
        <CardHeader>
            <CardTitle>{data.name}</CardTitle>
        </CardHeader>
        <CardBody>
            <CardText>{data.description}</CardText>
            <CardText class="text-end">{ format(data.createdAt,"dd-MM-yyyy") }</CardText>
            <Input type="switch" bind:checked={data.is_completed} label="Выполнена" class="mb-2" onchange={updateStatus}/>
            <Row>
                <Col>
                    <Button class="w-100" color="primary" onclick={openEdit}>Редактировать</Button>
                </Col>
                <Col>
                    <Button class="w-100" color="danger" onclick={openRemove}>Удалить</Button>
                </Col>
            </Row>
        </CardBody>
    </Card>
</Col>

{#if $isOpenEdit}
    <EditModal/>
{/if}

{#if $isOpenRemove}
    <RemoveModal/>
{/if}
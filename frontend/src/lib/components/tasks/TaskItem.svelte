<script lang="ts">
	import type { TaskItem } from "$lib/interfaces/task";
	import { isOpenRemove, openRemoveModal, updateStatusTask } from "$lib/store/TaskStore";
	import { Button, Card, CardBody, CardHeader, CardText, CardTitle, Col, Input, InputGroup, InputGroupText, Row } from "@sveltestrap/sveltestrap";
    import {format} from 'date-fns';
    import { onMount } from "svelte";
	import RemoveModal from "./RemoveModal.svelte";
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
                    <Button class="w-100" color="primary">Редактировать</Button>
                </Col>
                <Col>
                    <Button class="w-100" color="danger" onclick={openRemoveModal}>Удалить</Button>
                </Col>
            </Row>
        </CardBody>
    </Card>
</Col>

{#if $isOpenRemove}
    <RemoveModal id={data.id}/>
{/if}
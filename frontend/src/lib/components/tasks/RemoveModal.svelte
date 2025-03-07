<script lang="ts">
	import {selectedId, closeRemoveModal, isOpenRemove, openRemoveModal, removeTask } from "$lib/store/TaskStore";
	import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "@sveltestrap/sveltestrap";
	import { onMount } from "svelte";
    import { get } from "svelte/store";
    
    
    onMount(()=>{
        console.log(get(selectedId));
    });

    const removeAnyTask = async ()=>{
        await removeTask();
    }
</script>

<Modal isOpen={$isOpenRemove} on:close={closeRemoveModal}>
    <ModalHeader>Удаление задачи</ModalHeader>
    <ModalBody>
        <p>Подтвердите для удаления задачи</p>
        <Row>
            <Col>
                <Button color="success" class="w-100" onclick={removeAnyTask}>Подтвердить</Button>
            </Col>
            <Col>
                <Button color="danger" class="w-100" onclick={closeRemoveModal}>Отменить</Button>
            </Col>
        </Row>
    </ModalBody>
</Modal>
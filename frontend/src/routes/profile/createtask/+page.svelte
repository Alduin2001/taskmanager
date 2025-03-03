<script lang="ts">
	import { Button, Col, Container, Form, Row } from "@sveltestrap/sveltestrap";
    import {addToLocal, createTask, createTasks, removeAll} from '$lib/store/TaskStore';
	import TaskFormItem from "$lib/components/TaskFormItem.svelte";

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
                        <Button color="primary" class="w-100" onclick={addToLocal}>Ещё</Button>
                    </Col>
                    <Col>
                        <Button color="success" class="w-100" disabled={$createTasks.length>0 ? false : true} onclick={createTask}>Сохранить</Button>
                    </Col>
                </Row>
                <Row class="mt-2">
                    <Col><Button color="danger" class="w-100" disabled={$createTasks.length>0 ? false : true} onclick={removeAll}>Удалить все</Button></Col>
                </Row>
            </Form>
        </Col>
        <Col>
            <h1>Вывод формы добавления задач</h1>
            {#each $createTasks as prop}
                <TaskFormItem {...prop} />
            {/each}
        </Col>
    </Row>
</Container>
<script lang="ts">
	import { Alert, Container, Row } from "@sveltestrap/sveltestrap";
	import TaskItem from "./TaskItem.svelte";
	import { getMyTasks, tasks } from "$lib/store/TaskStore";
    import { onMount } from "svelte";
	import SearchTaskForm from "./SearchTaskForm.svelte";

    onMount(()=>{
        getMyTasks();
    })

</script>

<Container fluid>
    <SearchTaskForm/>
    <Row class="mt-2">
        {#if $tasks.length>0}
            {#each $tasks as props}
                <TaskItem data={props}/>
            {/each}

        {:else}
            <Alert color="danger">Задач нет</Alert>
        {/if}
    </Row>
</Container>
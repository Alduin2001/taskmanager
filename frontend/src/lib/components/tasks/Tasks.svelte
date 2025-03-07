<script lang="ts">
	import { Alert, Container, Row } from "@sveltestrap/sveltestrap";
	import TaskItem from "./TaskItem.svelte";
	import { getMyTasks, tasks } from "$lib/store/TaskStore";
    import { onMount } from "svelte";

    onMount(()=>{
        getMyTasks();
    })

</script>

<Container fluid>
    
    <Row>
        {#if $tasks.length>0}
            {#each $tasks as props}
                <TaskItem data={props}/>
            {/each}

        {:else}
            <Alert color="danger">Задач нет</Alert>
        {/if}
    </Row>
</Container>
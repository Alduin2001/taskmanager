<script lang="ts">
	import { Container, Row } from "@sveltestrap/sveltestrap";
	import TaskItem from "./TaskItem.svelte";
	import { getMyTasks, tasks } from "$lib/store/TaskStore";
    import { onMount } from "svelte";

    onMount(()=>{
        getMyTasks();
    })

</script>

<Container>
    <Row>
        {#each $tasks as props}
            <TaskItem data={props}/>
        {/each}
    </Row>
</Container>
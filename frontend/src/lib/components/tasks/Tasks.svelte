<script lang="ts">
	import { Container, Row } from "@sveltestrap/sveltestrap";
	import TaskItem from "./TaskItem.svelte";
	import { tasks } from "$lib/store/TaskStore";



</script>

<Container>
    <Row>
        {#each $tasks as props}
            <TaskItem data={props}/>
        {/each}
    </Row>
</Container>
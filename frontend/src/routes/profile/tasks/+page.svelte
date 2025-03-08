<script lang="ts">
	import Tasks from "$lib/components/tasks/Tasks.svelte";
import { Container } from "@sveltestrap/sveltestrap";

    
</script>
<svelte:head>
    <title>Мои задачи   </title>
</svelte:head>
<Container>
    <h1>Вывод списка моих задач</h1>
    <Tasks/>
</Container>
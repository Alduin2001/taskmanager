<script lang="ts">
	import { Container, Row } from "@sveltestrap/sveltestrap";
	import TaskItem from "./TaskItem.svelte";


</script>

<Container>
    <Row>
        <TaskItem header="Header1" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, nesciunt? Voluptate hic exercitationem suscipit, saepe voluptas aliquam quas modi ut. Optio ea blanditiis minima ullam illum, quia corporis ex eos?"/>
        <TaskItem header="Header1" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, nesciunt? Voluptate hic exercitationem suscipit, saepe voluptas aliquam quas modi ut. Optio ea blanditiis minima ullam illum, quia corporis ex eos?"/>
        <TaskItem header="Header1" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, nesciunt? Voluptate hic exercitationem suscipit, saepe voluptas aliquam quas modi ut. Optio ea blanditiis minima ullam illum, quia corporis ex eos?"/>
    </Row>
</Container>
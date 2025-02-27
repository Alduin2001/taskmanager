<script lang="ts">
	import { Container, ListGroup, ListGroupItem } from "@sveltestrap/sveltestrap";
    import { isAuth } from "$lib/store/UserStore";
	import { get } from "svelte/store";

    console.log(get(isAuth));
</script>

<Container>
    <h1>Профиль</h1>
    <ListGroup>
        <ListGroupItem>Имя:</ListGroupItem>
        <ListGroupItem>Фамилия:</ListGroupItem>
        <ListGroupItem>Почта:</ListGroupItem>
    </ListGroup>
</Container>
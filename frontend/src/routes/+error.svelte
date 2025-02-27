<script lang="ts">
    import {page} from '$app/stores';
	import { Alert, Container } from '@sveltestrap/sveltestrap';
    let status = $page.status;

    let message = $page.error?.message;
</script>

<Container fluid>
    <Alert class="alert-danger mt-2">
        <h1>{status}</h1>
        <p>{message}</p>
        <a href="/">Вернуться на главную</a>
    </Alert>
</Container>

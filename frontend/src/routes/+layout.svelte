<script>
	import Notification from '$lib/components/Notification.svelte';
    import Header from '$lib/Header.svelte';
	import { notification } from '$lib/store/NotificationStore';
    import {Container, Styles} from '@sveltestrap/sveltestrap';
    let {children} = $props();
</script>

<Styles/>

<Container>
    <Header/>
    {@render children()}
    {#if $notification.length>0}
        <Notification/>
    {/if}
</Container>

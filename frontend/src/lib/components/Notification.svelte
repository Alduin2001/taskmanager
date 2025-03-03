<script lang="ts">
    import { notification } from "$lib/store/NotificationStore";
	import { Toast } from "@sveltestrap/sveltestrap";
</script>


<div class="flex">
    {#each $notification as el}
    <Toast body header="Уведомление" delay={1500} autohide color={el.variant}>
        {el.message}
    </Toast>
    {/each}
</div>

<style>
    .flex{
        display:flex;
        flex-direction: column;
        gap:10px;
        position: absolute;
        top:10px;
        right:10px;
        z-index:10;
    }
</style>
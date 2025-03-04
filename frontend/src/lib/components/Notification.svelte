<script lang="ts">
	import { notification } from '$lib/store/NotificationStore';
	import { Toast, ToastBody, ToastHeader } from '@sveltestrap/sveltestrap';
</script>

<div class="flex">
	{#each $notification as el}
		<Toast delay={3000} autohide color={el.variant} class={el.variant}>
            <ToastHeader>Уведомление</ToastHeader>
            <ToastBody>
                {el.message}
            </ToastBody>
		</Toast>
	{/each}
</div>

<style>
	.flex {
		display: flex;
		flex-direction: column;
		gap: 10px;
		position: absolute;
		top: 10px;
		right: 10px;
		z-index: 10;
	}
	.success {
		background-color: #28a745; /* Зелёный */
	}

	.danger {
		background-color: #dc3545; /* Красный */
	}

	.warning {
		background-color: #ffc107; /* Жёлтый */
	}
</style>

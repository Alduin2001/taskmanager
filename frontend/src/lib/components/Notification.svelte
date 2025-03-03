<script lang="ts">
    export let message:string = "";
    export let variant:string = "";
</script>


<div class="notification">
    {message}
</div>

<style>
    .notification{
        padding:10px;
        text-align: center;
        outline:1px solid #eee;
        max-width: 200px;
        word-wrap: break-word;
        position: absolute;
        top:10px;
        right:10px;
        z-index:10;
    }
</style>
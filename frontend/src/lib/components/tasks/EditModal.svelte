<script lang="ts">
	import type { createTaskDto } from "$lib/interfaces/task";
	import { isOpenEdit } from "$lib/store/TaskStore";
	import { Form, FormGroup, FormText, Input, InputGroup, InputGroupText, Modal } from "@sveltestrap/sveltestrap";
    import { createForm } from "svelte-forms-lib";
    export let data:createTaskDto = {
        id:0,
        name:"",
        description:""
    }
    const {form,handleChange,handleSubmit,errors} = createForm<createTaskDto>({
        initialValues:{
            id:data.id,
            name:data.name,
            description:data.description
        },
        onSubmit:async (data:createTaskDto)=>{
            
        }
    })

</script>

<Modal isOpen={$isOpenEdit}>
    <Form>
        <FormGroup>
            <FormText>Название задачи</FormText>
            <Input />
        </FormGroup>
    </Form>
</Modal>
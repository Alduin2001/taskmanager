<script lang="ts">
	import { createForm } from "svelte-forms-lib";
    import { Button, Col, Form, Input, InputGroup, InputGroupText, Row } from "@sveltestrap/sveltestrap";
	import type { SearchTaskI } from "$lib/interfaces/task";
	import { getMyTasks, SearchTasks } from "$lib/store/TaskStore";

    const {form,handleChange,handleSubmit,handleReset,errors} = createForm<SearchTaskI>({
        initialValues:{
            name:'',
            startDate:'',
            endDate:''
        },
        onSubmit:async (data:SearchTaskI)=>{
            await SearchTasks({name:data.name,startDate:data.startDate,endDate:data.endDate});
        }
    })

    const resetForm = async ()=>{
        handleReset();
        await getMyTasks();
    }
</script>

<Form on:submit={handleSubmit}>
    <Row>
        <Col md={12}>
            <Input placeholder="Введите название задачи" bind:value={$form.name} on:input={handleChange}/>
        </Col>
    </Row>

    <Row class="mt-2">
        <Col>
            <InputGroup><InputGroupText>С:</InputGroupText><Input type="date" bind:value={$form.startDate} on:input={handleChange}/></InputGroup>
        </Col>
        <Col>
            <InputGroup><InputGroupText>По:</InputGroupText><Input type="date" bind:value={$form.endDate} on:input={handleChange}/></InputGroup>
        </Col>
    </Row>

    <Row class="mt-2">
        <Col>
            <Button class="w-100" type="submit" color="success">Найти</Button>
        </Col>
        <Col>
            <Button class="w-100" type="button" color="danger" on:click={resetForm}>Сбросить</Button>
        </Col>
    </Row>
</Form>
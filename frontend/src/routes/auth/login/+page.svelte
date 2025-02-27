<script lang="ts">
	import { Button, Col, Container, FormGroup, FormText, Input, InputGroup, InputGroupText, Row } from "@sveltestrap/sveltestrap";
    import { goto } from "$app/navigation";
    import { createForm } from "svelte-forms-lib";
	import type { loginUserDto } from "$lib/interfaces/user";
    import { loginUserSchema } from "$lib/validation/user";
    const {form,handleChange,handleSubmit,state,errors} = createForm<loginUserDto>({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:loginUserSchema,
        onSubmit:async (data:loginUserDto)=>{
            console.log(data);
        }
        
    });
</script>

<svelte:head>
    <title>Вход</title>
</svelte:head>
<Container>
    <h1>Вход</h1>
    <form on:submit={handleSubmit}>
        <FormGroup>
            <InputGroup>
                <InputGroupText>@</InputGroupText>
                <Input name="email" bind:value={$form.email} on:change={handleChange}/>
            </InputGroup>
            {#if $errors.email}
                <FormText class="text-danger">*{$errors.email}</FormText>
            {/if}
        </FormGroup>
        <FormGroup>
            <InputGroup>
                <InputGroupText>@</InputGroupText>
                <Input type="password" name="password" bind:value={$form.password} on:change={handleChange}/>
            </InputGroup>
            {#if $errors.password}
                <FormText class="text-danger">*{$errors.password}</FormText>
            {/if}
        </FormGroup>
        <Row class="mt-2">
            <Col>
                <Button color="success" type="submit" class="w-100">Войти</Button>
            </Col>
            <Col>
                <Button color="danger" class="w-100">Очистить</Button>
            </Col>
        </Row>
    </form>
</Container>
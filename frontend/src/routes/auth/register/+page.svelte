<script lang="ts">
	import type { createUserDto } from "$lib/interfaces/user";
	import { goto } from "$app/navigation";
	import { createUserSchema } from "$lib/validation/user";
	import { Button, Col, Container, Form, FormGroup, FormText, Input, InputGroup, InputGroupText, Row } from "@sveltestrap/sveltestrap";
	import {createForm} from 'svelte-forms-lib';
	import { userStore } from "$lib/store/UserStore";

	const {form,handleSubmit,errors,handleChange,state} = createForm<createUserDto>({
		initialValues:{
			name:"",
			surname:"",
			email:"",
			password:""
		},
		validationSchema:createUserSchema,

		onSubmit:async data=>{
			const response = await userStore.createUser(data);
			if(response){
				goto('/auth/login');
			}
		}
	})

</script>

<svelte:head>
	<title>Регистрация</title>
</svelte:head>

<Container>
    <h1>Регистрация</h1>
	<Form on:submit={handleSubmit}>
		<FormGroup>
		<InputGroup>
			<InputGroupText>@</InputGroupText>
			<Input name="name" on:change={handleChange} bind:value={$form.name} placeholder="Имя"/>
		</InputGroup>
		{#if $errors.name}
			<FormText class="text-danger italic">*{$errors.name}</FormText>
		{/if}
		</FormGroup>
		<FormGroup>
		<InputGroup>
			<InputGroupText>@</InputGroupText>
			<Input name="surname" on:change={handleChange} bind:value={$form.surname} placeholder="Фамилия"/>
		</InputGroup>
		{#if $errors.surname}
			<FormText class="text-danger italic">*{$errors.surname}</FormText>
		{/if}
		</FormGroup>
		<FormGroup>
		<InputGroup>
			<InputGroupText>@</InputGroupText>
			<Input name="email" on:change={handleChange} bind:value={$form.email} placeholder="Почта"/>
		</InputGroup>
		{#if $errors.email}
			<FormText class="text-danger">{$errors.email}</FormText>
		{/if}
		</FormGroup>
		<FormGroup>
		<InputGroup>
			<InputGroupText>@</InputGroupText>
			<Input name="password" on:change={handleChange} bind:value={$form.password} placeholder="Пароль" type="password"/>
		</InputGroup>
		{#if $errors.password}
			<FormText class="text-danger">{$errors.password}</FormText>
		{/if}
		</FormGroup>
		<Row>
			<Col>
				<Button type="submit" class="w-100" color="success">Зарегистрироваться</Button>
			</Col>
			<Col>
				<Button class="w-100" color="danger">Очистить</Button>
			</Col>
		</Row>
	</Form>
</Container>
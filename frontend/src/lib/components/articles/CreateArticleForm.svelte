<script lang="ts">
    import { Button, Col, Form, FormGroup, FormText, Input, Row } from "@sveltestrap/sveltestrap";
    import { createArticleValid } from "$lib/validation/article";
    import { createForm } from "svelte-forms-lib";
	import type { createArticleDto } from "$lib/interfaces/article";
	import { addNotification } from "$lib/store/NotificationStore";
	import { Variants } from "$lib/interfaces/notification";
	import { createArticle } from "$lib/store/ArticleStore";

    let fileSelected:File | null = null;
    const {form,errors,handleChange,handleSubmit,handleReset} = createForm<createArticleDto>({
        initialValues:{
            header:"",
            body:""
        },
        validationSchema:createArticleValid,
        onSubmit:async (data:createArticleDto)=>{
            if(fileSelected==null || fileSelected==undefined){
                addNotification({message:"Добавьте изображение",variant:Variants.error});
                return;    
            }
            let formData = new FormData();
            formData.append('image',fileSelected);
            formData.append('header',data.header);
            formData.append('body',data.body);
            console.log(formData);
            await createArticle(formData);   
        }
    });
    const handleUpload = (event:Event)=>{
        const target = event.target as HTMLInputElement;
        if(target.files && target.files?.length>0){
            fileSelected = target.files[0];
        }
    }
</script>

<Form on:submit={handleSubmit} enctype="multipart/form-data">
    <FormGroup>
        <FormText>Название поста</FormText>
        <Input placeholder="Введите заголовок поста" bind:value={$form.header} onchange={handleChange}/>
    </FormGroup>

    <FormGroup>
        <FormText>Содержание поста</FormText>
        <Input type="textarea" rows={5} placeholder="Введите содержание поста" bind:value={$form.body} onchange={handleChange}/>
    </FormGroup>
    <FormGroup>
        <FormText>Загрузите изображение</FormText>
        <Input type="file" onchange={handleUpload}/>
    </FormGroup>

    <Row>
        <Col>
            <Button class="w-100" type="submit" color="success">Добавить</Button>
        </Col>
        <Col>
            <Button class="w-100" type="button" onclick={handleReset} color="danger">Очистить</Button>
        </Col>
    </Row>
</Form>
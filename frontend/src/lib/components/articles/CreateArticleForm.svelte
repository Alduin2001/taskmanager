<script lang="ts">
    import { Form, FormGroup, FormText, Input } from "@sveltestrap/sveltestrap";
</script>

<Form>
    <FormGroup>
        <FormText>Название поста</FormText>
        <Input placeholder="Введите заголовок поста"/>
    </FormGroup>

    <FormGroup>
        <FormText>Содержание поста</FormText>
        <Input type="textarea" placeholder="Введите содержание поста"/>
    </FormGroup>
    <FormGroup>
        <FormText>Загрузите изображение</FormText>
        <Input type="file"/>
    </FormGroup>

</Form>
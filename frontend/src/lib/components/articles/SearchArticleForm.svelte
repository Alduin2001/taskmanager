<script lang="ts">
	import { Button, Col, Form, Input, InputGroup, InputGroupText, Row } from '@sveltestrap/sveltestrap';
</script>

<Form>
	<Row>
		<Col>
			<Input placeholder="Введите заголовок поста"/>
		</Col>
	</Row>

	<Row class="mt-2">
		<Col>
			<InputGroup><InputGroupText>С:</InputGroupText><Input type="date"/></InputGroup>
		</Col>
		<Col>
			<InputGroup><InputGroupText>По:</InputGroupText><Input type="date"/></InputGroup>
		</Col>
	</Row>

	<Row class="mt-2">
		<Col>
			<Button class="w-100" color="success">Найти</Button>
		</Col>
		<Col>
			<Button class="w-100" color="danger">Найти</Button>
		</Col>
	</Row>
</Form>

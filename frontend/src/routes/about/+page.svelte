
<script>
	import { Container,
Row,Col,
Card,CardBody,CardTitle,CardText } from "@sveltestrap/sveltestrap";


</script>

<Container>
	<h1 class="text-center mb-5">О нас</h1>

	<!-- Описание проекта -->
	<Row class="mb-5">
	  <Col>
		<h2 class="text-center mb-4">Что такое наш таск-менеджер?</h2>
		<p class="lead text-center">
		  Наш таск-менеджер — это современное решение для управления задачами, которое помогает вам организовать свою работу, 
		  повысить продуктивность и достигать целей быстрее. Мы создали инструмент, который подходит как для личного использования, 
		  так и для командной работы.
		</p>
	  </Col>
	</Row>
  
	<!-- Преимущества -->
	<Row class="mb-5">
	  <Col>
		<h2 class="text-center mb-4">Почему выбирают нас?</h2>
		<Row>
		  <Col md="4" class="mb-4">
			<Card class="h-100 shadow">
			  <CardBody>
				<CardTitle class="text-center">Простота</CardTitle>
				<CardText>
				  Интуитивно понятный интерфейс позволяет быстро начать работу. Никаких сложных настроек — только ваши задачи.
				</CardText>
			  </CardBody>
			</Card>
		  </Col>
		  <Col md="4" class="mb-4">
			<Card class="h-100 shadow">
			  <CardBody>
				<CardTitle class="text-center">Гибкость</CardTitle>
				<CardText>
				  Настройте таск-менеджер под свои нужды. Создавайте проекты, добавляйте метки, устанавливайте сроки и приоритеты.
				</CardText>
			  </CardBody>
			</Card>
		  </Col>
		  <Col md="4" class="mb-4">
			<Card class="h-100 shadow">
			  <CardBody>
				<CardTitle class="text-center">Доступность</CardTitle>
				<CardText>
				  Работайте с любого устройства. Наш таск-менеджер доступен на компьютере, планшете и смартфоне.
				</CardText>
			  </CardBody>
			</Card>
		  </Col>
		</Row>
	  </Col>
	</Row>
  
	<!-- Команда -->
	<Row class="mb-5">
	  <Col>
		<h2 class="text-center mb-4">Наша команда</h2>
		<Row>
		  <Col md="4" class="mb-4">
			<Card class="h-100 shadow">
			  <CardBody class="text-center">
				<img src="/team1.jpg" alt="Иван Иванов" class="rounded-circle mb-3" width="100" height="100" />
				<CardTitle>Иван Иванов</CardTitle>
				<CardText>Основатель и CEO</CardText>
			  </CardBody>
			</Card>
		  </Col>
		  <Col md="4" class="mb-4">
			<Card class="h-100 shadow">
			  <CardBody class="text-center">
				<img src="/team2.jpg" alt="Мария Петрова" class="rounded-circle mb-3" width="100" height="100" />
				<CardTitle>Мария Петрова</CardTitle>
				<CardText>Главный дизайнер</CardText>
			  </CardBody>
			</Card>
		  </Col>
		  <Col md="4" class="mb-4">
			<Card class="h-100 shadow">
			  <CardBody class="text-center">
				<img src="/team3.jpg" alt="Алексей Сидоров" class="rounded-circle mb-3" width="100" height="100" />
				<CardTitle>Алексей Сидоров</CardTitle>
				<CardText>Ведущий разработчик</CardText>
			  </CardBody>
			</Card>
		  </Col>
		</Row>
	  </Col>
	</Row>
  
	<!-- Миссия -->
	<Row class="mb-5">
	  <Col>
		<h2 class="text-center mb-4">Наша миссия</h2>
		<p class="lead text-center">
		  Мы верим, что каждый заслуживает инструмента, который помогает ему быть организованным и продуктивным. 
		  Наша миссия — сделать управление задачами простым, удобным и доступным для всех.
		</p>
	  </Col>
	</Row>
  
	<!-- Призыв к действию -->
	<Row class="mb-5">
	  <Col class="text-center">
		<h2 class="mb-4">Готовы начать?</h2>
		<a href="/auth/register" class="btn btn-primary btn-lg">Зарегистрироваться</a>
	  </Col>
	</Row>

</Container>
<script>
    import { Container, Button } from "@sveltestrap/sveltestrap";
  </script>
  
  <svelte:head>
    <title>Главная страница</title>
    <meta name="keywords" content="таскменеджер,taskmanager,task manager" />
  </svelte:head>
  
  <Container class="text-center mt-5">
    <h1 class="display-4 text-primary mb-4">Главная</h1>
    <p class="lead text-secondary mb-4">
      Добро пожаловать на наш сайт по taskmanager
    </p>
    <!-- Пример кнопки -->
    <Button color="primary" href="/tasks" class="mt-3">
      Перейти к задачам
    </Button>
  </Container>
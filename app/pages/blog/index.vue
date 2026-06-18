<template>
  <div class="blog-container">
    <h1>Blog</h1>
    <div class="posts-grid">
      <article v-for="post in posts" :key="post.id" class="post-card">
        <h2>{{ post.title }}</h2>
        <p class="date">
          {{ post.date }}
        </p>
        <p class="description">
          {{ post.description }}
        </p>
        <NuxtLink :to="`/blog/${post.id}`" class="read-more">Leer más</NuxtLink>
      </article>
    </div>
  </div>
</template>

<script setup>
const posts = ref([
  {
    id: 1,
    title: 'Introducción a Nuxt 3',
    date: '15 de enero, 2024',
    description:
      'Descubre las nuevas características y mejoras que trae Nuxt 3 para el desarrollo de aplicaciones Vue modernas.'
  },
  {
    id: 2,
    title: 'Mejores prácticas en Vue',
    date: '12 de enero, 2024',
    description:
      'Aprende las mejores prácticas para escribir código limpio y mantenible en tus proyectos Vue.'
  },
  {
    id: 3,
    title: 'Composables: El futuro de Vue',
    date: '8 de enero, 2024',
    description:
      'Explora cómo los Composables están revolucionando la forma en que componemos lógica en Vue 3.'
  },
  {
    id: 4,
    title: 'SSR con Nuxt: Renderizado en servidor',
    date: '5 de enero, 2024',
    description:
      'Entiende cómo funciona el Server-Side Rendering y sus ventajas para el SEO y rendimiento.'
  },
  {
    id: 5,
    title: 'Gestión de estado con Pinia',
    date: '1 de enero, 2024',
    description:
      'Domina Pinia, la nueva librería de gestión de estado recomendada para proyectos Vue.'
  },
  {
    id: 6,
    title: 'Testing en aplicaciones Vue',
    date: '28 de diciembre, 2023',
    description: 'Cómo escribir tests efectivos para tus componentes y funciones en Vue.'
  }
])
</script>

<style scoped>
.blog-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #1a1a1a;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.post-card {
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.post-card h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}

.date {
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.read-more {
  display: inline-block;
  color: #00dc82;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: #00c856;
}
</style>

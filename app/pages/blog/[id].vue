<template>
  <div>
    <div class="header-actions">
      <NuxtLink to="/blog" class="btn-back">← Volver</NuxtLink>
    </div>
    <div class="blog-item">
      <h1>
        {{ title }}
        <span class="id-display"> ({{ $route.params.id }}) </span>
      </h1>

      <div class="content">
        <p>{{ description }}</p>
      </div>
      <div class="meta">
        <span class="date">{{ publishedDate }}</span>
        <span class="author">{{ author }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const blogId = computed(() => route.params.id)

// Generar datos random del blog basado en el ID
const title = computed(() => {
  const titles = [
    'Introducción a Vue 3',
    'Guía Completa de Nuxt',
    'Mejores Prácticas en JavaScript',
    'Desarrollo Fullstack',
    'Performance en Aplicaciones Web'
  ]
  return titles[blogId.value % titles.length]
})

const description = computed(() => {
  const descriptions = [
    'Descubre las nuevas características de Vue 3 y cómo mejorar tus aplicaciones.',
    'Todo lo que necesitas saber sobre Nuxt para desarrollar aplicaciones modernas.',
    'Aplica las mejores prácticas de JavaScript en tus proyectos.',
    'Aprende a construir aplicaciones completas con frontend y backend.',
    'Optimiza el rendimiento de tu aplicación web con estas técnicas.'
  ]
  return descriptions[blogId.value % descriptions.length]
})

const author = computed(() => {
  const authors = [
    'Juan Pérez',
    'María García',
    'Carlos López',
    'Ana Rodríguez',
    'Miguel Fernández'
  ]
  return authors[blogId.value % authors.length]
})

const publishedDate = computed(() => {
  const baseDate = new Date('2024-01-01')
  const randomDays = (blogId.value * 7) % 365
  const date = new Date(baseDate)
  date.setDate(date.getDate() + randomDays)
  return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
})
</script>

<style scoped>
.header-actions {
  margin: 1rem 0 0 1rem;
}
.blog-item {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.id-display {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

h1 {
  color: #333;
  margin-bottom: 1rem;
}

.content {
  color: #555;
  line-height: 1.6;
  margin: 1.5rem 0;
}

.meta {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #ddd;
  color: #888;
  font-size: 0.9rem;
}
</style>

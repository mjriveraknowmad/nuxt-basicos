<template>
  <div>
    <div class="header-actions">
      <NuxtLink to="/blog" class="btn-back">← Volver</NuxtLink>
    </div>
    <div class="blog-item">
      <h1>
        {{ post?.title }}
        <span class="id-display"> ({{ blogId }}) </span>
      </h1>

      <div class="content">
        <p>{{ post?.description }}</p>
      </div>
      <div class="meta">
        <span class="date">{{ post?.date }}</span>
        <span class="author">{{ author }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const blogId = computed(() => parseInt(route.params.id as string))

const { getPost, getAuthor } = useBlog()

// Obtiene el post
const post = await getPost(blogId.value)
const author = post?.userId ? await getAuthor(post.userId) : 'Desconocido'

useSeoMeta({
  title: () => post?.title || 'Post',
  description: () => post?.description?.substring(0, 160) || ''
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

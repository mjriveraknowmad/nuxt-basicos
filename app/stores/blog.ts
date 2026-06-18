import { defineStore } from 'pinia'
import type { BlogPost } from './types'

const API_URL = 'https://jsonplaceholder.typicode.com'

export const useBlogStore = defineStore('blog', () => {
  // State
  const posts = ref<BlogPost[]>([])
  const selectedPost = ref<BlogPost | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Getters
  /**
   * Obtiene todos los posts formateados
   */
  const formattedPosts = computed(() => posts.value)

  /**
   * Obtiene un post por ID
   */
  const getPostById = computed(() => (id: number) => posts.value.find(post => post.id === id))

  /**
   * Verifica si hay posts cargados
   */
  const hasPosts = computed(() => posts.value.length > 0)

  /**
   * Estado de carga
   */
  const isLoading = computed(() => loading.value)

  // Actions
  /**
   * Obtiene múltiples posts
   */
  const fetchPosts = async (limit: number = 6): Promise<void> => {
    loading.value = true
    error.value = null

    try {
      const { data } = await useFetch(`${API_URL}/posts?_limit=${limit}`)

      if (data.value) {
        posts.value = (data.value as any[]).map(post => ({
          id: post.id,
          title: post.title,
          description: post.body,
          userId: post.userId,
          date: new Date().toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        }))
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Error al cargar los posts'
      posts.value = []
    } finally {
      loading.value = false
    }
  }

  /**
   * Obtiene un post específico por ID
   */
  const fetchPostById = async (id: number): Promise<BlogPost | null> => {
    loading.value = true
    error.value = null

    try {
      const { data } = await useFetch(`${API_URL}/posts/${id}`)

      if (data.value) {
        const post = data.value as any
        selectedPost.value = {
          id: post.id,
          title: post.title,
          description: post.body,
          userId: post.userId,
          date: new Date().toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        }
        return selectedPost.value
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Error al cargar el post'
      selectedPost.value = null
    } finally {
      loading.value = false
    }

    return null
  }

  /**
   * Limpia el estado
   */
  const resetState = (): void => {
    posts.value = []
    selectedPost.value = null
    error.value = null
    loading.value = false
  }

  /**
   * Limpia el error
   */
  const clearError = (): void => {
    error.value = null
  }

  // Return
  return {
    // State
    posts,
    selectedPost,
    loading,
    error,

    // Getters
    formattedPosts,
    getPostById,
    hasPosts,
    isLoading,

    // Actions
    fetchPosts,
    fetchPostById,
    resetState,
    clearError
  }
})

import { useBlogStore } from '~/stores/blog'
import type { BlogPost } from '~/stores/types'

/**
 * Composable para acceder a la funcionalidad del blog
 * Centraliza la lógica del store con métodos útiles
 */
export const useBlog = () => {
  const store = useBlogStore()

  /**
   * Obtiene los primeros N posts
   */
  const getPosts = async (limit: number = 6) => {
    if (store.posts.length === 0) {
      await store.fetchPosts(limit)
    }
    return store.posts
  }

  /**
   * Obtiene un post por ID, buscando primero en el store
   */
  const getPost = async (id: number): Promise<BlogPost | null> => {
    // Primero intenta obtener del store actual
    const cached = store.getPostById(id)
    if (cached) return cached

    // Si no está en caché, obtiene del servidor
    return await store.fetchPostById(id)
  }

  /**
   * Obtiene el autor de un post
   */
  const getAuthor = async (userId: number): Promise<string> => {
    try {
      const { data } = await useFetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      return data.value?.name || 'Desconocido'
    } catch {
      return 'Desconocido'
    }
  }

  return {
    // State reactivo
    posts: store.posts,
    selectedPost: store.selectedPost,
    loading: store.loading,
    error: store.error,
    hasPosts: store.hasPosts,

    // Métodos
    getPosts,
    getPost,
    getAuthor,
    resetState: () => store.resetState(),
    clearError: () => store.clearError()
  }
}

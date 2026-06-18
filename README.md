# Nuxt Básicos

[![Nuxt UI](https://img.shields.io/badge/Made%20with-Nuxt%20UI-00DC82?logo=nuxt&labelColor=020420)](https://ui.nuxt.com)

Use this template to get started with [Nuxt UI](https://ui.nuxt.com) quickly.

- [Live demo](https://starter-template.nuxt.dev/)
- [Documentation](https://ui.nuxt.com/docs/getting-started/installation/nuxt)

<a href="https://starter-template.nuxt.dev/" target="_blank">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://ui.nuxt.com/assets/templates/nuxt/starter-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="https://ui.nuxt.com/assets/templates/nuxt/starter-light.png">
    <img alt="Nuxt Starter Template" src="https://ui.nuxt.com/assets/templates/nuxt/starter-light.png" width="830" height="466">
  </picture>
</a>

> The starter template for Vue is on https://github.com/nuxt-ui-templates/starter-vue.

---

## 📚 Conceptos Implementados

Este proyecto es un ejercicio educativo donde se implementaron las **mejores prácticas modernas de Nuxt 4 y Vue 3**. A continuación se describe cada concepto aprendido:

### 🎯 Stack Tecnológico

- **Nuxt 4** - Framework meta para Vue con SSR, SSG y funcionalidades avanzadas
- **Vue 3** - Composition API con `<script setup lang="ts">`
- **TypeScript** - Type safety en todo el proyecto
- **Tailwind CSS v4** - Utility-first CSS framework con soporte para theme personalizado
- **Nuxt UI** - Componentes profesionales pre-diseñados

### 📄 Arquitectura & Estructura

#### Layouts

- **`layouts/default.vue`** - Layout principal que envuelve todas las páginas
- **`layouts/error.vue`** - Layout personalizado para páginas de error con UI profesional

#### Rutas

- **`pages/index.vue`** - Home page
- **`pages/nosotros.vue`** - Página "Acerca de"
- **`pages/blog/index.vue`** - Listado de posts
- **`pages/blog/[id].vue`** - Detalle individual de posts (rutas dinámicas)

#### Componentes

- **`components/TemplateMenu.vue`** - Menú de navegación reutilizable
- **`components/AppLogo.vue`** - Logo de la aplicación

### 🏪 State Management con Pinia

Se implementó un store profesional usando **Pinia Setup Style**:

```typescript
// Estilo moderno (Composition API)
export const useBlogStore = defineStore('blog', () => {
  const posts = ref<BlogPost[]>([])
  const getPostById = computed(() => (id) => posts.value.find(...))
  const fetchPosts = async (limit) => { ... }
  return { posts, getPostById, fetchPosts }
})
```

**Características:**

- State reactivo con `ref()` y `reactive()`
- Getters con `computed()`
- Actions como funciones normales
- Tipado completo con TypeScript
- Separación de types en `stores/types.ts`
- Composable wrapper (`useBlog()`) para acceso simplificado

### 🔄 Data Fetching & SSR

- **`useFetch()`** de Nuxt para obtener datos en servidor (SSR)
- Funcionamiento top-level en `<script setup>` para pre-renderizar
- Transform automático de datos
- Manejo de errores y estados de loading

**Beneficios:**

- HTML pre-renderizado con datos incluidos
- Mejor SEO (datos visibles para buscadores)
- Mejor UX (sin "content flash")
- Hidratación correcta cliente-servidor

### 🎨 Styling & Theming

- **Tailwind CSS v4** importado globalmente
- **Tema personalizado** con colores verdes (verde-50 a verde-950)
- **Letter spacing** aplicado globalmente (`tracking-wide`)
- **Google Fonts** - Fuente "Aladin" cargada con preconnect
- **Dark mode** - Soportado automáticamente por Nuxt UI

### 🔍 SEO & Meta Tags

Implementación de SEO en toda la aplicación:

```typescript
useSeoMeta({
  title: 'Blog',
  description: 'Artículos y noticias del blog',
  ogTitle: 'Blog',
  ogDescription: '...',
  ogImage: 'https://...'
})
```

- Meta tags dinámicos por página
- Open Graph para compartir en redes
- Soporte para SEO en SSR

### 🎯 Convenciones de Nuxt

- **Auto-imports** - Components, composables, utils se importan automáticamente
- **File-based routing** - Rutas generadas por estructura de archivos
- **useHead()** - Gestión de meta tags y favicon
- **useRoute()** - Acceso a parámetros de ruta
- **NuxtLink** - Navegación optimizada cliente-lado

### 🚀 Buenas Prácticas Implementadas

✅ Composition API en todos los componentes
✅ TypeScript strict mode
✅ Componentes pequeños y enfocados (single responsibility)
✅ Props y emits explícitamente tipados
✅ Estructura profesional de carpetas
✅ Separación de concerns (store/composables/pages)
✅ Error handling con layout dedicado
✅ Caching de datos en el store
✅ Manejo de loading states
✅ Code splitting automático

### 📦 Dependencias Principales

```json
{
  "nuxt": "^4.4.8",
  "@nuxt/ui": "^4.8.2",
  "tailwindcss": "^4.3.1",
  "pinia": "^2.x",
  "typescript": "^6.0.3"
}
```

### 🔧 Scripts Útiles

```bash
pnpm install      # Instalar dependencias
pnpm dev          # Dev server con hot reload
pnpm build        # Build optimizado para producción
pnpm preview      # Preview de build de producción
pnpm lint         # ESLint sobre todo el proyecto
pnpm typecheck    # Verificar tipos con vue-tsc
```

---

## 🔥 Migración a Firebase - Pasos de Implementación

Si quisiéramos usar **Firebase Realtime Database o Firestore** en lugar de la API REST actual, aquí están los pasos:

### Paso 1: Instalar dependencias

```bash
pnpm add firebase
```

### Paso 2: Crear archivo de configuración de Firebase

Crear `app/utils/firebase.ts`:

```typescript
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
```

### Paso 3: Crear archivo `.env` con credenciales

```env
NUXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NUXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NUXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Paso 4: Actualizar el Store Pinia para Firebase

Modificar `app/stores/blog.ts`:

```typescript
import { defineStore } from 'pinia'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
import { db } from '~/utils/firebase'
import type { BlogPost } from './types'

export const useBlogStore = defineStore('blog', () => {
  const posts = ref<BlogPost[]>([])
  const selectedPost = ref<BlogPost | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Actions - Adaptadas para Firebase
  const fetchPosts = async (limit: number = 6): Promise<void> => {
    loading.value = true
    error.value = null

    try {
      // Obtener documentos de Firestore
      const postsCollection = collection(db, 'posts')
      const querySnapshot = await getDocs(postsCollection)

      posts.value = querySnapshot.docs.slice(0, limit).map(doc => ({
        id: parseInt(doc.id),
        title: doc.data().title,
        description: doc.data().description,
        userId: doc.data().userId,
        date:
          doc.data().date ||
          new Date().toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
      }))
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Error al cargar los posts'
      posts.value = []
    } finally {
      loading.value = false
    }
  }

  const fetchPostById = async (id: number): Promise<BlogPost | null> => {
    loading.value = true
    error.value = null

    try {
      // Obtener documento específico de Firestore
      const docRef = doc(db, 'posts', id.toString())
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        const data = docSnap.data()
        selectedPost.value = {
          id: parseInt(docSnap.id),
          title: data.title,
          description: data.description,
          userId: data.userId,
          date:
            data.date ||
            new Date().toLocaleDateString('es-ES', {
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

  const resetState = (): void => {
    posts.value = []
    selectedPost.value = null
    error.value = null
    loading.value = false
  }

  const clearError = (): void => {
    error.value = null
  }

  return {
    posts,
    selectedPost,
    loading,
    error,
    fetchPosts,
    fetchPostById,
    resetState,
    clearError
  }
})
```

### Paso 5: Estructura de Firestore

Crear una colección `posts` en Firestore con documentos con esta estructura:

```javascript
{
  id: "1",
  title: "Mi primer post",
  description: "Contenido del post...",
  userId: 1,
  date: "18 de junio de 2026"
}
```

### Paso 6: Cambios en componentes (mínimos)

Los componentes **NO necesitan cambios** gracias a la abstracción del store:

```typescript
// app/pages/blog/index.vue - Sigue igual
const { posts, loading, getPosts } = useBlog()
await getPosts(6)
```

### ✅ Ventajas de usar Firebase

| Aspecto            | Ventaja                                     |
| ------------------ | ------------------------------------------- |
| **Escalabilidad**  | Infraestructura de Google, autoscaling      |
| **Autenticación**  | Auth integrada (Google, GitHub, Email/Pass) |
| **Real-time**      | Escucha cambios en tiempo real              |
| **Almacenamiento** | Storage para archivos                       |
| **Hosting**        | Hosting gratuito para SSR                   |
| **Analytics**      | Analytics integrado                         |
| **Seguridad**      | Reglas de seguridad granulares              |

### ⚠️ Consideraciones para SSR

Para que Firebase funcione correctamente con SSR en Nuxt:

1. **Usar variables de entorno públicas** (`NUXT_PUBLIC_*`)
2. **Inicializar Firebase en composables**, no en el store
3. **Usar `server-only` para operaciones sensibles**

Ejemplo con composable seguro:

```typescript
// app/composables/useFirebaseBlog.ts
export const useFirebaseBlog = () => {
  const store = useBlogStore()

  // Esta lógica se ejecuta solo en servidor
  if (process.server) {
    // Operaciones de servidor
  }

  return {
    posts: store.posts,
    loading: store.loading,
    getPosts: store.fetchPosts
  }
}
```

---

## 🎓 Conclusión

Este proyecto demuestra cómo construir una aplicación **profesional y escalable** con Nuxt 4, siguiendo las mejores prácticas modernas de Vue 3, TypeScript y arquitectura limpia.
La estructura del store permite cambiar el backend (API REST → Firebase) con mínimos cambios en el resto de la aplicación.

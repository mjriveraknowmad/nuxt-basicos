<script setup lang="ts">
const error = useError()

const statusCode = error.value?.statusCode || 500
const statusMessage = error.value?.statusMessage || 'Internal Server Error'

useSeoMeta({
  title: `Error ${statusCode}`,
  description: statusMessage
})

function handleError(): void {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900"
  >
    <div class="text-center px-4 sm:px-6">
      <!-- Error Code -->
      <h1 class="text-9xl font-bold text-primary mb-4">
        {{ statusCode }}
      </h1>

      <!-- Error Message -->
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
        {{ statusMessage }}
      </h2>

      <!-- Error Description -->
      <p class="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        {{ error?.message || 'Algo salió mal. Por favor, intenta de nuevo.' }}
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <UButton size="xl" icon="i-lucide-home" @click="handleError"> Volver al inicio </UButton>
      </div>
    </div>
  </div>
</template>
